import SectionHeader from "./SectionHeader";
import { Instagram } from "lucide-react";

interface SquadItem {
  name: string;
  role: string;
  description: string;
  url: string;
  roleColor: string;
  instagram?: string;
}

const squad: SquadItem[] = [
  {
    name: "BOOM",
    role: "CORE ARCHITECT",
    description:
      "THE VISIONARY. ORCHESTRATED THE ENTIRE VIBECODING WORKFLOW AND WIRED THE RAW PYTHON EXTRACTION BACKEND DIRECTLY INTO THE NATIVE KOTLIN FRONTEND.",
    url: "#hero",
    roleColor: "#FFD600",
  },
  {
    name: "DOMINICBURTT",
    role: "LEAD DESIGNER",
    description:
      "THE VISUAL FORGE. CRAFTED THE INDUSTRIAL DESIGN LANGUAGE, CONSTRUCTED THE NATIVE APP INTERFACE, AND BUILT THE BRUTALIST UI FOR THIS EXACT WEBSITE.",
    url: "https://www.instagram.com/dominicburtt",
    instagram: "https://www.instagram.com/dominicburtt?igsh=ZjA1dG40cnM0NXRv",
    roleColor: "#4ADE80",
  },
  {
    name: "CLAUDE",
    role: "FRONTEND FORGE",
    description:
      "THE HEAVY LIFTER. TRANSLATED RAW VIBES INTO FLAWLESS REACT/TAILWIND COMPONENTS, SQUASHED VIEWPORT BUGS, AND OPTIMIZED THE MOBILE WEB EXPERIENCE.",
    url: "https://claude.ai",
    roleColor: "#FF6B35",
  },
  {
    name: "GEMINI",
    role: "SYSTEM GUIDE",
    description:
      "THE FORCE MULTIPLIER. NAVIGATED THE ARCHITECTURE, WROTE THE BASH SCRIPTS, CRAFTED THE MANIFESTO COPY, AND KEPT THE DEVELOPMENT WORKFLOW LETHAL.",
    url: "https://gemini.google.com",
    roleColor: "#60A5FA",
  },
  {
    name: "LOVABLE",
    role: "WEB BACKEND ARCHITECT",
    description:
      "THE DEPLOY LAYER. SHIPPED THE FULL-STACK WEB ARCHITECTURE, SERVER FUNCTIONS, AND THE LIVE FEEDBACK PIPELINE BEHIND THIS SITE.",
    url: "https://lovable.dev",
    roleColor: "#FF6289",
  },
];

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
    description: "THE BARE-METAL DOWNLOAD ENGINE THAT POWERS EVERY LINK ANYDOWN HANDLES.",
    url: "https://github.com/yt-dlp/yt-dlp",
    tag: "CORE",
    tagColor: "#FFD600",
  },
  {
    name: "FFMPEG",
    description:
      "THE MEDIA POWERHOUSE RESPONSIBLE FOR MERGING, REMUXING, AND EXTRACTING PURE M4A AUDIO LOCALLY ON YOUR DEVICE.",
    url: "https://ffmpeg.org",
    tag: "FORGE",
    tagColor: "#FF6B35",
  },
  {
    name: "CHAQUOPY",
    description:
      "THE BRIDGE. ALLOWS THE YT-DLP PIPELINE TO EXECUTE AS NATIVE PYTHON DIRECTLY ON ANDROID HARDWARE.",
    url: "https://chaquo.com/chaquopy",
    tag: "RUNTIME",
    tagColor: "#60A5FA",
  },
  {
    name: "JETPACK COMPOSE",
    description:
      "ANDROID'S MODERN NATIVE TOOLKIT. USED TO RENDER EVERY SHADOW, BORDER, AND BUTTON OF ANYDOWN'S BRUTALIST INTERFACE.",
    url: "https://developer.android.com/compose",
    tag: "UI",
    tagColor: "#F5F5F0",
  },
  {
    name: "COIL",
    description:
      "THE LIGHTWEIGHT, ASYNCHRONOUS IMAGE LOADER PULLING IN HIGH-RES VIDEO THUMBNAILS ON THE FLY.",
    url: "https://coil-kt.github.io/coil/",
    tag: "MEDIA",
    tagColor: "#888888",
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
        title={"THE\nSQUAD."}
        subtitle="THE MINDS AND MACHINES BEHIND THE SYSTEM."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-[2px] border border-[#2D2D2D] bg-[#2D2D2D]">
        {squad.map((member) => (
          <div
            key={member.name}
            className="flex flex-col gap-5 p-7 sm:p-8 md:p-[32px] bg-[#111111] hover:bg-[#1A1A1A] transition-colors group"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="font-grotesk text-[18px] font-bold text-[#F5F5F0] tracking-[1px] group-hover:text-[#FFD600] transition-colors">
                  {member.name}
                </span>
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Instagram`}
                    className="flex items-center justify-center w-[30px] h-[30px] border border-[#2D2D2D] text-[#888888] hover:text-[#0A0A0A] hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-colors"
                  >
                    <Instagram size={15} strokeWidth={2} />
                  </a>
                )}
              </div>
              <span
                className="font-ibm-mono text-[10px] tracking-[2px] px-[10px] py-[4px] border"
                style={{ color: member.roleColor, borderColor: member.roleColor }}
              >
                {member.role}
              </span>
            </div>
            <p className="font-ibm-mono text-[12px] text-[#666666] tracking-[1px] leading-[1.6]">
              {member.description}
            </p>
            {member.url.startsWith("http") && (
              <a
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-ibm-mono text-[11px] text-[#444444] tracking-[1px] hover:text-[#FFD600] transition-colors"
              >
                VISIT PROFILE &gt;
              </a>
            )}
          </div>
        ))}
      </div>

      <SectionHeader
        label="[07.B] // STACK"
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
