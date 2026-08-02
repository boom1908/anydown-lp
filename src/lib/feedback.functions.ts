import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets";
const SPREADSHEET_ID = "19BNcXOkxqD2TJ0P744-wyDg7_X2OqaXlt_UY-TnXZPU";
const SHEET_NAME = "Feedback";

const feedbackSchema = z.object({
  name: z.string().trim().max(60, "Name is too long").default("Anonymous"),
  category: z.enum(["Bug", "Feature", "Suggestion", "Other"]),
  message: z.string().trim().min(5, "Message is too short").max(1000, "Message is too long"),
});

export type FeedbackInput = z.infer<typeof feedbackSchema>;

export interface FeedbackItem {
  timestamp: string;
  name: string;
  category: string;
  message: string;
}

export const submitFeedback = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => feedbackSchema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const connectionKey = process.env["GOOGLE_SHEETS_API_KEY"];

    if (!lovableKey || !connectionKey) {
      throw new Error("Feedback backend is not configured");
    }

    const timestamp = new Date().toISOString();
    const range = `${SHEET_NAME}!A:D`;
    const url = `${GATEWAY_URL}/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}:append?valueInputOption=USER_ENTERED`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connectionKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[timestamp, data.name || "Anonymous", data.category, data.message]],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Feedback append failed [${response.status}]: ${errorBody}`);
      throw new Error(`Failed to submit feedback [${response.status}]`);
    }

    return { success: true };
  });

export const listFeedback = createServerFn({ method: "GET" }).handler(async () => {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connectionKey = process.env["GOOGLE_SHEETS_API_KEY"];

  if (!lovableKey || !connectionKey) {
    throw new Error("Feedback backend is not configured");
  }

  const range = `${SHEET_NAME}!A2:D1000`;
  const url = `${GATEWAY_URL}/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": connectionKey,
    },
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Feedback read failed [${response.status}]: ${errorBody}`);
    throw new Error(`Failed to load feedback [${response.status}]`);
  }

  const payload = (await response.json()) as {
    range?: string;
    values?: string[][];
  };

  const rows = payload.values ?? [];
  const items: FeedbackItem[] = rows
    .filter((row) => row.length >= 4 && row[3]?.trim())
    .map((row) => ({
      timestamp: row[0] ?? "",
      name: row[1] ?? "Anonymous",
      category: row[2] ?? "Other",
      message: row[3] ?? "",
    }))
    .reverse()
    .slice(0, 20);

  return items;
});
