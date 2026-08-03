import GlitchText from "./GlitchText";
import CollabCursors from "./CollabCursors";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center w-full bg-[#0A0A0A] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] md:pb-0 overflow-hidden">
      <div className="relative z-30 flex flex-col items-center w-full">
        {/* Badge */}
        <div className="flex items-center justify-center gap-[8px] h-[32px] px-[12px] md:px-[16px] bg-[#1A1A1A] border-2 border-[#FFD600]">
          <div className="w-[8px] h-[8px] bg-[#FFD600] shrink-0" />
          <span className="font-ibm-mono text-[9px] md:text-[11px] font-bold text-[#FFD600] tracking-[1px] md:tracking-[2px] whitespace-nowrap">
            [NEW] // VERSION 2.0 NOW LIVE
          </span>
        </div>

        <div className="h-8 md:h-[32px]" />

        {/* Headline */}
        <h1 className="font-grotesk text-[clamp(30px,10vw,96px)] font-bold text-[#F5F5F0] tracking-[-1px] leading-none text-center w-full max-w-[1100px]">
          <GlitchText text="DOWNLOAD WITHOUT" speed={45} delay={100} />
          <br />
          <GlitchText text="LIMITS." speed={45} delay={400} />
        </h1>
        <span className="block font-grotesk text-[clamp(30px,10vw,96px)] font-bold text-[#FFD600] tracking-[-1px] leading-none text-center w-full max-w-[1100px]">
          <GlitchText text="ANYDOWN." speed={45} delay={700} />
        </span>

        <div className="h-8 md:h-[32px]" />

        <p className="font-ibm-mono text-[12px] sm:text-[13px] md:text-[15px] text-[#888888] tracking-[1px] leading-[1.6] text-center w-full max-w-[800px]">
          DOWNLOAD YOUTUBE VIDEOS, SHORTS, AND INSTAGRAM REELS AS HIGH-QUALITY MP4S, FAST 720P
          CLIPS, OR NATIVE M4A AUDIO—ZERO ADS, ZERO TRACKING.
        </p>

        <div className="h-10 md:h-[48px]" />

        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[16px] w-full sm:w-auto">
          <a
            href="https://github.com/boom1908/anydown-native/releases/download/v2.0.0/anydown.v2.0.0.apk"
            className="flex items-center justify-center w-full sm:w-[220px] h-[56px] bg-[#FFD600] hover:bg-[#e6c200] active:bg-[#e6c200] transition-colors"
          >
            <span className="font-grotesk text-[12px] font-bold text-[#0A0A0A] tracking-[2px]">
              DOWNLOAD NOW
            </span>
          </a>
          <a
            href="https://github.com/boom1908/anydown-native"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full sm:w-[200px] h-[56px] bg-[#0A0A0A] border-2 border-[#3D3D3D] hover:border-[#888888] transition-colors"
          >
            <span className="font-ibm-mono text-[12px] text-[#888888] tracking-[2px]">
              GITHUB REPO
            </span>
          </a>
        </div>

        <div className="h-6 md:h-[24px]" />

        <div className="w-full max-w-[420px] h-[1px] bg-[#1D1D1D]" />
      </div>

      <CollabCursors />
    </section>
  );
}