import SectionHeader from "./SectionHeader";

interface UpdateItem {
  version: string;
  date: string;
  title: string;
  changes: string[];
}

const updates: UpdateItem[] = [
  {
    version: "v2.0",
    date: "AUG 2026",
    title: "THE REBUILD",
    changes: [
      "COMPLETE UI REWRITE WITH INDUSTRIAL ANYDOWN AESTHETIC.",
      "NATIVE M4A AUDIO EXTRACTION WITHOUT RE-ENCODING.",
      "CLIPBOARD AUTO-DETECT FOR INSTANT LINK CAPTURE.",
      "BATCH QUEUE FOR MULTIPLE DOWNLOADS.",
    ],
  },
  {
    version: "v1.3",
    date: "JUN 2026",
    title: "SPEED & STABILITY",
    changes: [
      "FFMPEG MERGE ENGINE UPGRADED FOR LARGER FILES.",
      "FIXED YOUTUBE SHORTS METADATA PARSING.",
      "REDUCED STARTUP TIME BY 40%.",
    ],
  },
  {
    version: "v1.2",
    date: "APR 2026",
    title: "INSTAGRAM & TIKTOK",
    changes: [
      "ADDED INSTAGRAM REELS AND TIKTOK VIDEO SUPPORT.",
      "NEW 720P FAST DOWNLOAD PRESET.",
      "IMPROVED ERROR MESSAGES WHEN SITES CHANGE.",
    ],
  },
  {
    version: "v1.0",
    date: "FEB 2026",
    title: "INITIAL RELEASE",
    changes: [
      "FIRST PUBLIC APK WITH YOUTUBE AND YOUTUBE SHORTS SUPPORT.",
      "BUILT ON YT-DLP + CHAQUOPY + FFMPEG.",
      "ZERO ADS. ZERO TRACKING. ZERO LIMITS.",
    ],
  },
];

export default function Updates() {
  return (
    <section
      id="updates"
      className="flex flex-col w-full bg-[#080808] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]"
    >
      <SectionHeader
        label="[06] // UPDATES"
        title={"WHAT'S\nNEW."}
        subtitle="RELEASE HISTORY AND MAJOR CHANGES FOR ANYDOWN."
      />

      <div className="flex flex-col w-full gap-0">
        {updates.map((update, i) => {
          const isLatest = i === 0;
          return (
            <div
              key={update.version}
              className={`flex flex-col md:flex-row gap-6 md:gap-[48px] py-8 md:py-[40px] border-t ${isLatest ? "border-t-[#FFD600]" : "border-t-[#1D1D1D]"}`}
            >
              <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2 md:w-[120px] shrink-0">
                <span
                  className="font-grotesk text-[14px] md:text-[16px] font-bold tracking-[2px]"
                  style={{ color: isLatest ? "#FFD600" : "#555555" }}
                >
                  {update.version}
                </span>
                <span className="font-ibm-mono text-[11px] text-[#444444] tracking-[1px]">
                  {update.date}
                </span>
              </div>

              <div className="flex flex-col gap-4 md:gap-5 flex-1">
                <h3
                  className="font-grotesk text-[20px] md:text-[24px] font-bold tracking-[1px] leading-[1.2]"
                  style={{ color: isLatest ? "#F5F5F0" : "#888888" }}
                >
                  {update.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {update.changes.map((change) => (
                    <li key={change} className="flex items-start gap-3">
                      <span
                        className="font-ibm-mono text-[12px] tracking-[1px] mt-[2px]"
                        style={{ color: isLatest ? "#FFD600" : "#3D3D3D" }}
                      >
                        //
                      </span>
                      <span
                        className="font-ibm-mono text-[12px] md:text-[13px] tracking-[1px] leading-[1.5]"
                        style={{ color: isLatest ? "#AAAAAA" : "#555555" }}
                      >
                        {change}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
        <div className="border-t border-t-[#1D1D1D]" />
      </div>
    </section>
  );
}
