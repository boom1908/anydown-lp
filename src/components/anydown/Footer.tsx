const columns = [
  {
    heading: "APP",
    links: [
      { label: "LATEST APK", href: "#" },
      { label: "SOURCE CODE", href: "#" },
      { label: "CHANGELOG", href: "#updates" },
      { label: "MANIFESTO", href: "#credits" },
    ],
  },
  {
    heading: "DEVELOPER",
    links: [
      { label: "PORTFOLIO", href: "#" },
      { label: "GITHUB", href: "#" },
      { label: "REPORT A BUG", href: "#feedback" },
    ],
  },
  {
    heading: "TECH & LEGAL",
    links: [
      { label: "YT-DLP CORE", href: "https://github.com/yt-dlp/yt-dlp" },
      { label: "PRIVACY POLICY", href: "#" },
      { label: "LICENSE", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col w-full bg-[#050505]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-[80px] px-5 sm:px-6 md:px-[120px] py-12 md:py-[64px]">
        <div className="flex flex-col gap-6 md:w-[280px] md:shrink-0">
          <div className="flex items-center gap-[12px]">
            <div className="w-[32px] h-[32px] bg-[#FFD600] shrink-0" />
            <span className="font-grotesk text-[16px] font-bold text-[#FFD600] tracking-[3px]">
              ANYDOWN
            </span>
          </div>
          <p className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px] leading-[1.6] max-w-[260px]">
            THE BARE-METAL MEDIA EXTRACTOR. BUILT FOR UTILITY, PRIVACY, AND ZERO COMPROMISES.
          </p>
          <div className="flex gap-[12px]">
            {["GH", "X", "DEV"].map((label) => (
              <a
                key={label}
                href="#"
                className="flex items-center justify-center w-[36px] h-[36px] bg-[#111111] border border-[#2D2D2D] hover:border-[#888888] transition-colors"
              >
                <span className="font-grotesk text-[10px] font-bold text-[#AAAAAA]">{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-1 gap-8 md:gap-[80px]">
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4 md:gap-[20px]">
              <span className="font-grotesk text-[11px] font-bold text-[#F5F5F0] tracking-[2px]">
                {col.heading}
              </span>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-ibm-mono text-[12px] text-[#888888] tracking-[1px] hover:text-[#CCCCCC] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center w-full px-5 sm:px-6 md:px-[120px] py-4 md:h-[56px] border-t border-t-[#1D1D1D]">
        <span className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px]">
          © 2026 ANYDOWN SYSTEMS. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}