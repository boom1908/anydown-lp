import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";

import SectionHeader from "./SectionHeader";

// Your own Google Apps Script Web App URL (from Deploy > New deployment)
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzbY6MPBcrMJjaSd0_jMJFhcb-FM9RkoZCQTbTVhYaJmkLkP58zykqKnKtAvgILoL4q/exec";

const categories = ["Bug", "Feature", "Suggestion", "Other"] as const;

const formSchema = z.object({
  name: z.string().trim().max(60, "Name is too long"),
  category: z.enum(["Bug", "Feature", "Suggestion", "Other"]),
  message: z.string().trim().min(5, "Message is too short").max(1000, "Message is too long"),
});

type FormData = z.infer<typeof formSchema>;

interface FeedbackItem {
  timestamp: string;
  name: string;
  category: string;
  message: string;
}

function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return iso;
  }
}

function getInitial(name: string) {
  return (name || "A").charAt(0).toUpperCase();
}

export default function Feedback() {
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", category: "Suggestion", message: "" },
  });

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["feedback"],
    queryFn: async (): Promise<FeedbackItem[]> => {
      const res = await fetch(APPS_SCRIPT_URL);
      if (!res.ok) throw new Error("Failed to load feedback");
      const json = await res.json();
      return json.items ?? [];
    },
    staleTime: 1000 * 60 * 2,
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // text/plain avoids a CORS preflight that Apps Script doesn't handle —
      // the script still reads it as JSON via JSON.parse(e.postData.contents)
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);

      toast.success("Feedback submitted. Thanks for helping improve anydown.");
      reset();
      queryClient.invalidateQueries({ queryKey: ["feedback"] });
    } catch (error) {
      toast.error("Failed to submit feedback. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="feedback"
      className="flex flex-col w-full bg-[#050505] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]"
    >
      <SectionHeader
        label="[08] // FEEDBACK"
        title={"SHAPE\nANYDOWN."}
        subtitle="SUBMIT BUGS, FEATURE REQUESTS, OR SUGGESTIONS. RECENT SUBMISSIONS APPEAR BELOW."
      />

      <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-[48px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full lg:w-[420px] lg:shrink-0 p-6 md:p-[32px] bg-[#111111] border border-[#2D2D2D]"
        >
          <div className="flex flex-col gap-2">
            <label className="font-ibm-mono text-[11px] font-bold text-[#888888] tracking-[2px]">
              NAME (OPTIONAL)
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="ANONYMOUS"
              className="w-full h-[48px] px-4 bg-[#0A0A0A] border border-[#2D2D2D] font-ibm-mono text-[13px] text-[#F5F5F0] tracking-[1px] placeholder:text-[#444444] focus:border-[#FFD600] focus:outline-none transition-colors"
            />
            {errors.name && (
              <span className="font-ibm-mono text-[11px] text-[#FF6B35]">{errors.name.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-ibm-mono text-[11px] font-bold text-[#888888] tracking-[2px]">
              CATEGORY
            </label>
            <select
              {...register("category")}
              className="w-full h-[48px] px-4 bg-[#0A0A0A] border border-[#2D2D2D] font-ibm-mono text-[13px] text-[#F5F5F0] tracking-[1px] focus:border-[#FFD600] focus:outline-none transition-colors appearance-none"
              style={{ backgroundImage: "none" }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.toUpperCase()}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="font-ibm-mono text-[11px] text-[#FF6B35]">{errors.category.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-ibm-mono text-[11px] font-bold text-[#888888] tracking-[2px]">
              MESSAGE
            </label>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="TELL US WHAT YOU THINK..."
              className="w-full p-4 bg-[#0A0A0A] border border-[#2D2D2D] font-ibm-mono text-[13px] text-[#F5F5F0] tracking-[1px] placeholder:text-[#444444] focus:border-[#FFD600] focus:outline-none transition-colors resize-none"
            />
            {errors.message && (
              <span className="font-ibm-mono text-[11px] text-[#FF6B35]">{errors.message.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center w-full h-[56px] bg-[#FFD600] hover:bg-[#e6c200] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span className="font-grotesk text-[12px] font-bold text-[#0A0A0A] tracking-[2px]">
              {isSubmitting ? "SENDING..." : "SUBMIT FEEDBACK"}
            </span>
          </button>
        </form>

        <div className="flex flex-col w-full gap-[2px] border border-[#2D2D2D] bg-[#2D2D2D]">
          <div className="flex items-center h-[56px] px-5 md:px-[24px] bg-[#111111] border-b border-b-[#2D2D2D]">
            <span className="font-grotesk text-[12px] font-bold text-[#888888] tracking-[2px]">
              RECENT SUBMISSIONS
            </span>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-[200px] bg-[#0A0A0A]">
              <span className="font-ibm-mono text-[12px] text-[#555555] tracking-[1px]">LOADING...</span>
            </div>
          ) : items.length === 0 ? (
            <div className="flex items-center justify-center h-[200px] bg-[#0A0A0A]">
              <span className="font-ibm-mono text-[12px] text-[#555555] tracking-[1px]">
                NO SUBMISSIONS YET. BE THE FIRST.
              </span>
            </div>
          ) : (
            <div className="flex flex-col max-h-[560px] overflow-y-auto bg-[#0A0A0A]">
              {items.map((item, i) => (
                <div key={i} className="flex gap-4 p-5 md:p-[24px] border-b border-b-[#1D1D1D] last:border-b-0">
                  <div className="flex items-center justify-center w-[40px] h-[40px] shrink-0 bg-[#FFD600]">
                    <span className="font-grotesk text-[14px] font-bold text-[#0A0A0A]">
                      {getInitial(item.name)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                      <span className="font-grotesk text-[14px] font-bold text-[#F5F5F0] tracking-[1px]">
                        {item.name || "Anonymous"}
                      </span>
                      <span
                        className="font-ibm-mono text-[10px] tracking-[1.5px] px-[8px] py-[2px] border"
                        style={{
                          color:
                            item.category === "Bug" ? "#FF6B35" : item.category === "Feature" ? "#FFD600" : item.category === "Suggestion" ? "#60A5FA" : "#888888",
                          borderColor:
                            item.category === "Bug" ? "#FF6B35" : item.category === "Feature" ? "#FFD600" : item.category === "Suggestion" ? "#60A5FA" : "#888888",
                        }}
                      >
                        {item.category.toUpperCase()}
                      </span>
                      <span className="font-ibm-mono text-[11px] text-[#444444] tracking-[1px]">
                        {formatDate(item.timestamp)}
                      </span>
                    </div>
                    <p className="font-ibm-mono text-[12px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.6] break-words">
                      {item.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
