import GlitchText from "./GlitchText";
import CollabCursors from "./CollabCursors";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center w-full bg-[#0A0A0A] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] md:pb-0 overflow-hidden">
      <div className="relative z-30 flex flex-col items-center w-full">
        {/* App Logo */}
        <div className="relative mb-5 md:mb-6 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Anydown App Logo"
            width={80}
            height={80}
            className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] object-contain"
          />
        </div>

        {/* Badge */}
        <button
          onClick={() => {
            const el = document.getElementById("updates");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="flex items-center justify-center gap-[8px] h-[32px] px-[12px] md:px-[16px] bg-[#1A1A1A] border-2 border-[#FFD600] hover:bg-[#FFD600] group transition-all cursor-pointer"
        >
          <div className="w-[8px] h-[8px] bg-[#FFD600] group-hover:bg-[#0A0A0A] shrink-0 transition-colors" />
          <span className="font-ibm-mono text-[9px] md:text-[11px] font-bold text-[#FFD600] group-hover:text-[#0A0A0A] tracking-[1px] md:tracking-[2px] whitespace-nowrap transition-colors">
            [NEW] // VERSION 3.0.0 NOW LIVE
          </span>
        </button>

        <div className="h-8 md:h-[32px]" />

        {/* Headline */}
        <h1 className="font-grotesk text-[clamp(30px,10vw,96px)] font-bold text-[#F5F5F0] tracking-[-1px] leading-none text-center w-full max-w-[1100px]">
          <span className="block">
            <GlitchText text="DOWNLOAD" speed={40} delay={100} />
          </span>
          <span className="block mt-1 md:mt-2">
            <GlitchText text="WITHOUT" speed={40} delay={450} />
          </span>
          <span className="block mt-1 md:mt-2">
            <GlitchText text="LIMITS." speed={40} delay={760} />
          </span>
        </h1>
        <span className="block font-grotesk text-[clamp(30px,10vw,96px)] font-bold text-[#FFD600] tracking-[-1px] leading-none text-center w-full max-w-[1100px] mt-1 md:mt-2">
          <GlitchText text="ANYDOWN." speed={40} delay={1080} />
        </span>

        <div className="h-6 md:h-[24px]" />

        <p className="font-ibm-mono text-[12px] sm:text-[13px] md:text-[15px] text-[#888888] tracking-[1px] leading-[1.6] text-center w-full max-w-[840px]">
          THE OPEN-SOURCE, NEO-BRUTALIST ANDROID DOWNLOADER FOR YOUTUBE, SPOTIFY, INSTAGRAM, AND
          1,000+ SITES. NO SERVERS, NO ADS, 100% ON-DEVICE.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-[700px] mt-4">
          {["v3.0.0 RELEASED", "ANDROID 7.0+", "OPEN SOURCE (MIT)", "0 ADS"].map((badge) => (
            <span
              key={badge}
              className="font-ibm-mono text-[9px] md:text-[10px] text-[#AAAAAA] tracking-[1.5px] px-[8px] py-[3px] bg-[#141414] border border-[#2A2A2A]"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="h-8 md:h-[40px]" />

        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[16px] w-full sm:w-auto">
          <a
            href="https://github.com/boom1908/anydown-native/releases/latest/download/anydown.apk"
            className="flex items-center justify-center w-full sm:w-[240px] h-[56px] bg-[#FFD600] hover:bg-[#e6c200] active:bg-[#e6c200] transition-colors"
          >
            <span className="font-grotesk text-[12px] font-bold text-[#0A0A0A] tracking-[2px]">
              DOWNLOAD APK (v3.0.0)
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
