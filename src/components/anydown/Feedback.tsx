import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";

import SectionHeader from "./SectionHeader";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzbY6MPBcrMJjaSd0_jMJFhcb-FM9RkoZCQTbTVhYaJmkLkP58zykqKnKtAvgILoL4q/exec";

const categories = [
  "Feedback",
  "Feature",
  "Bug",
  "Suggestion",
  "Question",
  "Other",
] as const;

type CategoryType = (typeof categories)[number];

const formSchema = z.object({
  name: z.string().trim().max(60, "Name is too long"),
  category: z.enum(categories),
  message: z.string().trim().min(5, "Message is too short").max(1000, "Message is too long"),
});

type FormData = z.infer<typeof formSchema>;

interface FeedbackItem {
  timestamp: string;
  name: string;
  category: CategoryType | string;
  message: string;
}

const initialFeedback: FeedbackItem[] = [
  {
    timestamp: "2026-08-04T09:07:18.417Z",
    name: "Rayan djima",
    category: "Feedback",
    message: "Du bist gut genung",
  },
  {
    timestamp: "2026-08-10T15:20:14.767Z",
    name: "Anonymous",
    category: "Question",
    message: "Is it safe?",
  },
  {
    timestamp: "2026-08-10T15:20:45.974Z",
    name: "Anonymous",
    category: "Bug",
    message: "Blank screen showing",
  },
  {
    timestamp: "2026-08-10T15:21:20.398Z",
    name: "Mahendu suresh",
    category: "Feedback",
    message: "Need more planning",
  },
  {
    timestamp: "2026-08-21T08:41:01.864Z",
    name: "Anonymous",
    category: "Feedback",
    message: "working",
  },
];

async function getClientIp(): Promise<string> {
  const timeoutMs = 3500;

  // 1. Try ipify.org (standard IPv4/IPv6 JSON)
  try {
    const controller = new AbortController();
    const timerId = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch("https://api.ipify.org?format=json", {
      signal: controller.signal,
    });
    clearTimeout(timerId);
    if (res.ok) {
      const data = await res.json();
      if (data?.ip) return String(data.ip).trim();
    }
  } catch {
    // fallback
  }

  // 2. Fallback to Cloudflare trace
  try {
    const controller = new AbortController();
    const timerId = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch("https://cloudflare.com/cdn-cgi/trace", {
      signal: controller.signal,
    });
    clearTimeout(timerId);
    if (res.ok) {
      const text = await res.text();
      const match = text.match(/ip=(.+)/);
      if (match && match[1]) return match[1].trim();
    }
  } catch {
    // fallback
  }

  // 3. Fallback to api64.ipify.org
  try {
    const controller = new AbortController();
    const timerId = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch("https://api64.ipify.org?format=json", {
      signal: controller.signal,
    });
    clearTimeout(timerId);
    if (res.ok) {
      const data = await res.json();
      if (data?.ip) return String(data.ip).trim();
    }
  } catch {
    // fallback
  }

  return "Unknown";
}

function getCategoryColor(category: string): string {
  switch (category) {
    case "Bug":
      return "#FF6B35";
    case "Feature":
      return "#FFD600";
    case "Feedback":
      return "#00FF66";
    case "Suggestion":
      return "#60A5FA";
    case "Question":
      return "#C084FC";
    default:
      return "#888888";
  }
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
  const [cachedIp, setCachedIp] = useState<string>("Unknown");

  // Pre-fetch IP on mount so it's already resolved when the user submits
  useEffect(() => {
    getClientIp().then((ip) => {
      if (ip && ip !== "Unknown") {
        setCachedIp(ip);
      }
    });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", category: "Feedback", message: "" },
  });

  const { data: items = initialFeedback, isLoading } = useQuery({
    queryKey: ["feedback"],
    queryFn: async (): Promise<FeedbackItem[]> => {
      try {
        const res = await fetch(APPS_SCRIPT_URL);
        if (!res.ok) throw new Error("Failed to fetch feedback");
        const json = await res.json();
        return json.items && json.items.length > 0 ? json.items : initialFeedback;
      } catch (err) {
        console.warn("Using fallback feedback:", err);
        return initialFeedback;
      }
    },
    staleTime: 1000 * 60,
  });

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      // Use pre-fetched IP or perform a fresh quick lookup
      const resolvedIp = cachedIp !== "Unknown" ? cachedIp : await getClientIp();

      const payload = {
        name: formData.name,
        category: formData.category,
        message: formData.message,
        ip: resolvedIp,
        timestamp: new Date().toISOString(),
      };

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      toast.success("Feedback submitted. Thank you for shaping Anydown.");
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
        subtitle="SUBMIT BUGS, FEATURE REQUESTS, OR SUGGESTIONS. HELP SHAPE THE NEXT RELEASE."
      />

      <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-[48px]">
        {/* Form */}
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
              <span className="font-ibm-mono text-[11px] text-[#FF6B35]">
                {errors.name.message}
              </span>
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
              <span className="font-ibm-mono text-[11px] text-[#FF6B35]">
                {errors.category.message}
              </span>
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
              <span className="font-ibm-mono text-[11px] text-[#FF6B35]">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center w-full h-[56px] bg-[#FFD600] hover:bg-[#e6c200] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <span className="font-grotesk text-[12px] font-bold text-[#0A0A0A] tracking-[2px]">
              {isSubmitting ? "TRANSMITTING..." : "SUBMIT FEEDBACK"}
            </span>
          </button>
        </form>

        {/* Recent Submissions List */}
        <div className="flex flex-col w-full gap-[2px] border border-[#2D2D2D] bg-[#2D2D2D]">
          <div className="flex items-center justify-between h-[56px] px-5 md:px-[24px] bg-[#111111] border-b border-b-[#2D2D2D]">
            <span className="font-grotesk text-[12px] font-bold text-[#888888] tracking-[2px]">
              RECENT SUBMISSIONS ({items.length})
            </span>
            <span className="font-ibm-mono text-[10px] text-[#555555]">COMMUNITY FEED</span>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-[200px] bg-[#0A0A0A]">
              <span className="font-ibm-mono text-[12px] text-[#555555] tracking-[1px]">
                LOADING SUBMISSIONS...
              </span>
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
                <div
                  key={`${item.timestamp}-${i}`}
                  className="flex gap-4 p-5 md:p-[24px] border-b border-b-[#1D1D1D] last:border-b-0"
                >
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
                          color: getCategoryColor(item.category),
                          borderColor: getCategoryColor(item.category),
                        }}
                      >
                        {item.category.toUpperCase()}
                      </span>
                      <span className="font-ibm-mono text-[11px] text-[#444444] tracking-[1px]">
                        {formatDate(item.timestamp)}
                      </span>
                    </div>
                    <p className="font-ibm-mono text-[13px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.65] break-words">
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
