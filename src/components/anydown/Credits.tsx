import SectionHeader from "./SectionHeader";

interface CreditItem {
  name: string;
  description: string;
  url: string;
  tag: string;
  tagColor?: string;
}

const credits: CreditItem[] = [
  {
    name: "YT-DLP",
    description: "THE DOWNLOAD ENGINE THAT POWERS EVERY LINK ANYDOWN HANDLES.",
    url: "https://github.com/yt-dlp/yt-dlp",
    tag: "CORE",
    tagColor: "#FFD600",
  },
  {
    name: "FFMPEG",
    description: "RESPONSIBLE FOR MERGING, REMUXING, AND EXTRACTING PURE M4A AUDIO.",
    url: "https://ffmpeg.org",
    tag: "FORGE",
    tagColor: "#FF6B35",
  },
  {
    name: "CHAQUOPY",
    description: "LETS YT-DLP RUN AS NATIVE PYTHON DIRECTLY ON ANDROID HARDWARE.",
    url: "https://chaquo.com/chaquopy",
    tag: "RUNTIME",
    tagColor: "#60A5FA",
  },
  {
    name: "TANSTACK START",
    description: "THE FULL-STACK REACT FRAMEWORK BEHIND THIS LANDING PAGE.",
    url: "https://tanstack.com/start",
    tag: "WEB",
    tagColor: "#F5F5F0",
  },
  {
    name: "TAILWIND CSS",
    description: "THE UTILITY-FIRST STYLESYSTEM USED FOR EVERY COMPONENT HERE.",
    url: "https://tailwindcss.com",
    tag: "STYLE",
    tagColor: "#888888",
  },
  {
    name: "SPACE GROTESK & IBM PLEX MONO",
    description: "THE TYPE FACES THAT GIVE ANYDOWN ITS INDUSTRIAL VOICE.",
    url: "https://fonts.google.com",
    tag: "TYPE",
    tagColor: "#FFD600",
  },
];

export default function Credits() {
  return (
    <section
      id="credits"
      className="flex flex-col w-full bg-[#0A0A0A] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]"
    >
      <SectionHeader
        label="[07] // CREDITS"
        title={"BUILT ON\nGIANTS."}
        subtitle="ANYDOWN IS POSSIBLE BECAUSE OF THESE OPEN PROJECTS AND TOOLS."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-[2px] border border-[#2D2D2D] bg-[#2D2D2D]">
        {credits.map((credit) => (
          <a
            key={credit.name}
            href={credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-5 p-7 sm:p-8 md:p-[32px] bg-[#111111] hover:bg-[#1A1A1A] transition-colors group"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-grotesk text-[18px] font-bold text-[#F5F5F0] tracking-[1px] group-hover:text-[#FFD600] transition-colors">
                {credit.name}
              </span>
              <span
                className="font-ibm-mono text-[10px] tracking-[2px] px-[10px] py-[4px] border"
                style={{ color: credit.tagColor, borderColor: credit.tagColor }}
              >
                {credit.tag}
              </span>
            </div>
            <p className="font-ibm-mono text-[12px] text-[#666666] tracking-[1px] leading-[1.6]">
              {credit.description}
            </p>
            <span className="font-ibm-mono text-[11px] text-[#444444] tracking-[1px] group-hover:text-[#888888] transition-colors">
              VISIT SOURCE &gt;
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
