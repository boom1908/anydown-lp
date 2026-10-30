import SectionHeader from "./SectionHeader";

interface UpdateItem {
  version: string;
  date: string;
  title: string;
  changes: string[];
}

const updates: UpdateItem[] = [
  {
    version: "v3.0.0",
    date: "OCT 2026",
    title: "THE UTILITY & SPOTIFY UPGRADE",
    changes: [
      "SPOTIFY TRACK RESOLUTION: PASTE ANY SPOTIFY TRACK LINK TO AUTOMATICALLY RESOLVE METADATA AND DOWNLOAD HIGH-FIDELITY AUDIO.",
      "ENHANCED BACKGROUND SERVICE: INTEGRATED SYSTEM WAKE-LOCKS SO DOWNLOADS CONTINUE UNINTERRUPTED WHEN YOUR SCREEN IS LOCKED.",
      "IN-APP MP3 CONVERTER: DEDICATED ON-DEVICE TOOL TO CONVERT DOWNLOADED VIDEOS TO MP3 IN BATCHES.",
      "CUSTOM STORAGE (SAF): FULL STORAGE ACCESS FRAMEWORK SUPPORT TO SAVE MEDIA TO ANY INTERNAL FOLDER OR SD CARD.",
      "IN-APP AUTO-UPDATER: AUTOMATICALLY CHECKS GITHUB RELEASES ON LAUNCH FOR 1-TAP APK UPDATES.",
    ],
  },
  {
    version: "v2.0",
    date: "AUG 2026",
    title: "THE BRUTALIST REBUILD",
    changes: [
      "COMPLETE JETPACK COMPOSE UI REWRITE WITH INDUSTRIAL BRUTALIST AESTHETIC.",
      "ADDED FLAWLESS INSTAGRAM REELS SUPPORT.",
      "RE-ENGINEERED FOOTER NAVIGATION WITH FLOATING DEVELOPER AND UPDATE CONTROLS.",
      "SQUASHED UI COLLISION BUGS FOR A ROCK-SOLID MOBILE EXPERIENCE.",
    ],
  },
  {
    version: "v1.5",
    date: "JUN 2026",
    title: "FRICTIONLESS PIPELINE",
    changes: [
      "INTRODUCED SMART CLIPBOARD AUTO-DETECT FOR INSTANT LINK CAPTURE.",
      "ADDED DYNAMIC COLOR ACCENTS BASED ON FORMAT SELECTION (VIDEO VS. AUDIO).",
      "IMPLEMENTED NATIVE M4A AUDIO EXTRACTION WITHOUT HEAVY RE-ENCODING.",
    ],
  },
  {
    version: "v1.2",
    date: "APR 2026",
    title: "THE FORGE UPGRADE",
    changes: [
      "INTEGRATED LOCAL FFMPEG BINARIES FOR ON-DEVICE AUDIO/VIDEO MERGING.",
      "UPGRADED YT-DLP CORE ENGINE TO BYPASS PLATFORM THROTTLING.",
      "ENHANCED ERROR HANDLING AND METADATA PARSING FOR YOUTUBE SHORTS.",
    ],
  },
  {
    version: "v1.0",
    date: "FEB 2026",
    title: "INITIAL RELEASE",
    changes: [
      "FIRST PUBLIC APK DEPLOYMENT.",
      "RAW YOUTUBE AND YOUTUBE SHORTS EXTRACTION.",
      "BUILT ON NATIVE PYTHON RUNTIME VIA CHAQUOPY.",
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
                        className="font-ibm-mono text-[13px] md:text-[13px] tracking-[1px] leading-[1.65]"
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
