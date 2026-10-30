import SectionHeader from "./SectionHeader";

const platforms = [
  "YOUTUBE",
  "SPOTIFY",
  "INSTAGRAM",
  "TIKTOK",
  "X / TWITTER",
  "REDDIT",
  "TWITCH",
  "+1,000 SITES",
];

const formats = [
  { label: "4K & 1080P UHD", desc: "FFmpeg on-device merge", color: "#FFD600" },
  { label: "720P FAST", desc: "Quick storage-saver", color: "#888888" },
  { label: "NATIVE M4A", desc: "Lossless audio stream", color: "#FF6B35" },
  { label: "MP3 CONVERTER", desc: "Built-in batch tool", color: "#4ADE80" },
];

export default function Features() {
  return (
    <section
      id="features"
      className="flex flex-col w-full bg-[#0A0A0A] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]"
    >
      <SectionHeader
        label="[01] // FEATURES"
        title={"BUILT TO EXTRACT\nANYTHING."}
        subtitle="YOUTUBE, SPOTIFY, INSTAGRAM, AND 1,000+ SITES. FROM 4K STREAMS TO FULL PLAYLISTS."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
        {/* Module 1: The Platform Matrix */}
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 bg-[#111111] border border-[#2D2D2D] hover:border-[#FFD600] transition-colors">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-ibm-mono text-[10px] md:text-[11px] font-bold text-[#FFD600] tracking-[2px]">
                [01 // UNIVERSAL ENGINE]
              </span>
              <div className="w-[8px] h-[8px] bg-[#FFD600]" />
            </div>

            <h3 className="font-grotesk text-[22px] md:text-[26px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2]">
              1,000+ SITES & SPOTIFY.
            </h3>

            <p className="font-ibm-mono text-[13px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.65]">
              DIRECT ON-DEVICE EXTRACTION FOR YOUTUBE VIDEOS & SHORTS, INSTAGRAM REELS, SPOTIFY
              TRACKS, TIKTOK (NO WATERMARKS), X/TWITTER, AND 1,000+ PLATFORMS. ZERO REMOTE PROXIES,
              100% PRIVATE.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-t-[#1D1D1D]">
            {platforms.map((p) => (
              <span
                key={p}
                className="font-ibm-mono text-[10px] tracking-[1.5px] px-[10px] py-[4px] bg-[#0A0A0A] border border-[#2D2D2D] text-[#CCCCCC]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Module 2: Format Freedom */}
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 bg-[#111111] border border-[#2D2D2D] hover:border-[#FF6B35] transition-colors">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-ibm-mono text-[10px] md:text-[11px] font-bold text-[#FF6B35] tracking-[2px]">
                [02 // RESOLUTION & AUDIO]
              </span>
              <div className="w-[8px] h-[8px] bg-[#FF6B35]" />
            </div>

            <h3 className="font-grotesk text-[22px] md:text-[26px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2]">
              4K, 1080P, M4A & MP3.
            </h3>

            <p className="font-ibm-mono text-[13px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.65]">
              NATIVE 64-BIT FFMPEG MERGES SEPARATE VIDEO AND AUDIO STREAMS LOCALLY INTO FLAWLESS
              4K/1080P MP4S. GRAB FAST 720P CLIPS, EXTRACT PURE M4A AUDIO, OR CONVERT TO MP3
              DIRECTLY IN-APP.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-t-[#1D1D1D]">
            {formats.map((fmt) => (
              <div
                key={fmt.label}
                className="flex flex-col p-2.5 bg-[#0A0A0A] border border-[#2D2D2D]"
              >
                <span
                  className="font-ibm-mono text-[11px] font-bold tracking-[1px]"
                  style={{ color: fmt.color }}
                >
                  {fmt.label}
                </span>
                <span className="font-ibm-mono text-[9px] text-[#666666] tracking-[0.5px]">
                  {fmt.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Module 3: Playlist & Batch Power */}
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 bg-[#111111] border border-[#2D2D2D] hover:border-[#4ADE80] transition-colors">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-ibm-mono text-[10px] md:text-[11px] font-bold text-[#4ADE80] tracking-[2px]">
                [03 // BATCH PIPELINE]
              </span>
              <div className="w-[8px] h-[8px] bg-[#4ADE80]" />
            </div>

            <h3 className="font-grotesk text-[22px] md:text-[26px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2]">
              PLAYLIST & ALBUM RIPPER.
            </h3>

            <p className="font-ibm-mono text-[13px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.65]">
              PASTE A FULL YOUTUBE PLAYLIST OR SPOTIFY ALBUM LINK. ANYDOWN AUTOMATICALLY PARSES
              TRACK METADATA AND DOWNLOADS THE ENTIRE QUEUE SEQUENTIALLY TO YOUR STORAGE WITHOUT
              HANGING OR TIMING OUT.
            </p>
          </div>

          <div className="flex items-center justify-between px-3 py-2 bg-[#0A0A0A] border border-[#2D2D2D] font-ibm-mono text-[10px] text-[#888888] tracking-[1px]">
            <span className="text-[#4ADE80] font-bold">// STATUS: READY</span>
            <span>QUEUE AUTO-SEQUENCING</span>
          </div>
        </div>

        {/* Module 4: Background Engine */}
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 bg-[#111111] border border-[#2D2D2D] hover:border-[#60A5FA] transition-colors">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-ibm-mono text-[10px] md:text-[11px] font-bold text-[#60A5FA] tracking-[2px]">
                [04 // WAKE-LOCK ENGINE]
              </span>
              <div className="w-[8px] h-[8px] bg-[#60A5FA]" />
            </div>

            <h3 className="font-grotesk text-[22px] md:text-[26px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2]">
              BACKGROUND & LOCK-SCREEN SAFE.
            </h3>

            <p className="font-ibm-mono text-[13px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.65]">
              HARDWARE FOREGROUND WORKERS AND ANDROID WAKE-LOCKS PREVENT THE OS FROM KILLING HEAVY
              DOWNLOADS. LIVE TELEMETRY (MB/S), REMAINING BYTES, AND DUAL-STREAM MERGING PROGRESS
              DISPLAY LIVE IN YOUR NOTIFICATION SHADE.
            </p>
          </div>

          <div className="flex items-center justify-between px-3 py-2 bg-[#0A0A0A] border border-[#2D2D2D] font-ibm-mono text-[10px] text-[#888888] tracking-[1px]">
            <span className="text-[#60A5FA] font-bold">// NOTIFICATION SHADE</span>
            <span>SCREEN-OFF SAFE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
