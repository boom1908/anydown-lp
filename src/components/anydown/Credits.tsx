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
      "PROJECT LEAD & DEVELOPER. WIRED THE PYTHON YT-DLP PIPELINE INTO ANDROID KOTLIN AND LEADS APPLICATION DEVELOPMENT.",
    url: "#hero",
    roleColor: "#FFD600",
  },
  {
    name: "DOMINICBURTT",
    role: "LEAD DESIGNER",
    description:
      "VISUAL & UI DESIGN. DESIGNED THE NEO-BRUTALIST SYSTEM, APP LAYOUTS, AND THIS WEBSITE'S INTERFACE.",
    url: "https://www.instagram.com/dominicburtt",
    instagram: "https://www.instagram.com/dominicburtt?igsh=ZjA1dG40cnM0NXRv",
    roleColor: "#4ADE80",
  },
  {
    name: "CLAUDE",
    role: "FRONTEND ASSIST",
    description: "COMPONENT ENGINEERING, MOBILE LAYOUT REFINEMENTS, AND REACT/TAILWIND STYLING.",
    url: "https://claude.ai",
    roleColor: "#FF6B35",
  },
  {
    name: "GEMINI",
    role: "SYSTEM ASSIST",
    description: "TECHNICAL DOCUMENTATION, BUILD SCRIPTING, AND ARCHITECTURE REVIEW.",
    url: "https://gemini.google.com",
    roleColor: "#60A5FA",
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
      "THE MEDIA ENGINE RESPONSIBLE FOR MERGING, REMUXING, AND EXTRACTING PURE M4A AUDIO LOCALLY ON YOUR DEVICE.",
    url: "https://ffmpeg.org",
    tag: "FORGE",
    tagColor: "#FF6B35",
  },
  {
    name: "CHAQUOPY",
    description: "THE PYTHON BRIDGE. ENABLES THE YT-DLP PIPELINE TO RUN ON ANDROID HARDWARE.",
    url: "https://chaquo.com/chaquopy",
    tag: "RUNTIME",
    tagColor: "#60A5FA",
  },
  {
    name: "JETPACK COMPOSE",
    description: "ANDROID'S MODERN TOOLKIT FOR BUILDING NATIVE DECLARATIVE USER INTERFACES.",
    url: "https://developer.android.com/compose",
    tag: "UI",
    tagColor: "#F5F5F0",
  },
  {
    name: "COIL",
    description: "LIGHTWEIGHT, ASYNCHRONOUS IMAGE LOADING FOR VIDEO THUMBNAILS.",
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
        subtitle="THE TEAM AND TOOLS BEHIND THE SYSTEM."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 sm:gap-[2px] border-0 sm:border border-[#2D2D2D] bg-transparent sm:bg-[#2D2D2D]">
        {squad.map((member, i) => (
          <div
            key={member.name}
            className={`flex flex-col gap-5 p-7 sm:p-8 md:p-[32px] bg-[#111111] hover:bg-[#1A1A1A] border border-[#2D2D2D] sm:border-0 transition-colors group ${
              i === squad.length - 1 && squad.length % 2 === 1 ? "sm:col-span-2" : ""
            }`}
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
            <p className="font-ibm-mono text-[13px] sm:text-[12px] text-[#666666] tracking-[1px] leading-[1.65]">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 sm:gap-[2px] border-0 sm:border border-[#2D2D2D] bg-transparent sm:bg-[#2D2D2D]">
        {credits.map((credit, i) => (
          <a
            key={credit.name}
            href={credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col gap-5 p-7 sm:p-8 md:p-[32px] bg-[#111111] hover:bg-[#1A1A1A] border border-[#2D2D2D] sm:border-0 transition-colors group ${
              i === credits.length - 1
                ? "sm:col-span-2 lg:col-span-1"
                : i === credits.length - 2
                  ? "lg:col-span-2"
                  : ""
            }`}
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
            <p className="font-ibm-mono text-[13px] sm:text-[12px] text-[#666666] tracking-[1px] leading-[1.65]">
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
