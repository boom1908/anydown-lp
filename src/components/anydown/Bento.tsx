import SectionHeader from "./SectionHeader";

interface DirectiveItem {
  number: string;
  tag: string;
  accentColor: string;
  title: string;
  body: string;
}

const directives: DirectiveItem[] = [
  {
    number: "01",
    tag: "CLEAN",
    accentColor: "#FFD600",
    title: "ZERO ADS & CLEAN DESIGN",
    body: "NO POPUPS, NO MISLEADING BUTTONS, AND NO REDIRECTS. THE INTERFACE STAYS FAST, CLEAN, AND COMPLETELY DISTRACTION-FREE.",
  },
  {
    number: "02",
    tag: "DIRECT",
    accentColor: "#FF6B35",
    title: "100% ON-DEVICE PROCESSING",
    body: "YOUR LINKS AND MEDIA NEVER PASS THROUGH THIRD-PARTY CLOUD SERVERS. DOWNLOADS AND AUDIO EXTRACTION RUN LOCALLY ON YOUR PHONE.",
  },
  {
    number: "03",
    tag: "SPEED",
    accentColor: "#60A5FA",
    title: "FULL HARDWARE SPEED",
    body: "NO ARTIFICIAL SPEED LIMITS OR PREMIUM TIERS. ANYDOWN USES YOUR FULL INTERNET BANDWIDTH FOR FAST, UNRESTRICTED TRANSFERS.",
  },
  {
    number: "04",
    tag: "FREE",
    accentColor: "#4ADE80",
    title: "ALWAYS FREE & OPEN SOURCE",
    body: "COMPLETELY FREE WITH NO SUBSCRIPTIONS, NO TRIAL PERIODS, AND NO UPSELLS. BUILT AS A TRANSPARENT, OPEN-SOURCE UTILITY.",
  },
  {
    number: "05",
    tag: "UNLIMITED",
    accentColor: "#F5F5F0",
    title: "NO DOWNLOAD QUOTAS",
    body: "NO DAILY LIMITS, NO RESOLUTION LOCKS, AND NO FILE SIZE RESTRICTIONS. DOWNLOAD AS MUCH HIGH-QUALITY MEDIA AS YOUR STORAGE PERMITS.",
  },
];

export default function Bento() {
  return (
    <section className="flex flex-col w-full bg-[#0A0A0A] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-10 md:gap-[48px]">
      <SectionHeader
        label="[03] // THE MANIFESTO"
        title={"NO CLUTTER.\nJUST EXTRACTION."}
        titleWidth="w-full max-w-[800px]"
      />

      <div className="flex flex-col lg:flex-row w-full gap-6 md:gap-8 items-stretch">
        {/* Left: The Command Monolith */}
        <div className="flex flex-col justify-between p-6 sm:p-8 md:p-9 bg-[#111111] border border-[#2D2D2D] hover:border-[#FFD600] transition-colors lg:w-[380px] lg:shrink-0 relative">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-b-[#1D1D1D] pb-4">
              <span className="font-ibm-mono text-[10px] font-bold text-[#FFD600] tracking-[2px]">
                [CORE PHILOSOPHY]
              </span>
              <span className="font-ibm-mono text-[9px] text-[#555555] tracking-[1.5px]">
                // PRINCIPLES
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-grotesk text-[24px] sm:text-[28px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.1]">
                BUILT FOR PRIVACY & SPEED.
              </h3>
              <p className="font-ibm-mono text-[13px] sm:text-[12px] text-[#888888] tracking-[1px] leading-[1.7]">
                ANYDOWN WAS CREATED AS AN HONEST ALTERNATIVE TO AD-CLUTTERED DOWNLOAD SITES. ALL
                PROCESSING RUNS DIRECTLY ON YOUR PHONE—NO TRACKING, NO REMOTE SERVERS, AND NO HIDDEN
                FEES.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 pt-6 mt-6 border-t border-t-[#1D1D1D]">
            {[
              "ZERO ADS OR POPUPS",
              "ZERO REMOTE PROXIES",
              "ZERO PAID SUBSCRIPTIONS",
              "100% PRIVATE & ON-DEVICE",
            ].map((rule) => (
              <div key={rule} className="flex items-center gap-2.5">
                <span className="font-ibm-mono text-[11px] text-[#FFD600] font-bold">✓</span>
                <span className="font-ibm-mono text-[10px] sm:text-[11px] text-[#AAAAAA] tracking-[1px]">
                  {rule}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: The 5 Directive Ledger Strips */}
        <div className="flex flex-col gap-4 flex-1">
          {directives.map((item) => (
            <div
              key={item.number}
              className="group flex flex-col justify-between p-5 sm:p-6 bg-[#0E0E0E] border border-[#2D2D2D] hover:border-[#444444] transition-all relative overflow-hidden"
            >
              {/* Subtle hover accent line on the left */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: item.accentColor }}
              />

              <div className="flex flex-col gap-2.5 pl-2 sm:pl-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-ibm-mono text-[11px] font-bold tracking-[1.5px] text-[#555555] group-hover:text-[#AAAAAA] transition-colors">
                      RULE // {item.number}
                    </span>
                    <span
                      className="font-ibm-mono text-[9px] font-bold tracking-[2px] px-[8px] py-[2px] bg-[#161616] border"
                      style={{ color: item.accentColor, borderColor: `${item.accentColor}40` }}
                    >
                      [{item.tag}]
                    </span>
                  </div>
                  <div
                    className="w-[6px] h-[6px] rounded-full shrink-0"
                    style={{ backgroundColor: item.accentColor }}
                  />
                </div>

                <h4 className="font-grotesk text-[18px] sm:text-[20px] font-bold text-[#F5F5F0] tracking-[0.5px] group-hover:text-[#FFFFFF] transition-colors">
                  {item.title}
                </h4>

                <p className="font-ibm-mono text-[12px] sm:text-[12px] text-[#777777] tracking-[0.8px] leading-[1.65]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
