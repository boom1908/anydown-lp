import SectionHeader from "./SectionHeader";

const columns = ["WEB SCRAPERS", "TELEGRAM BOTS", "PLAY STORE APPS"];

const rows = [
  { feature: "NO ADS OR POPUPS", anydown: "[✓]", others: ["[✗]", "[✗]", "[✗]"] },
  { feature: "NATIVE ON-DEVICE PIPELINE", anydown: "[✓]", others: ["[✓]", "[✗]", "[✗]"] },
  { feature: "DIRECT NATIVE M4A AUDIO", anydown: "[✓]", others: ["[✗]", "[—]", "[—]"] },
  { feature: "CLIPBOARD AUTO-GRAB", anydown: "[✓]", others: ["[✗]", "[✗]", "[✓]"] },
  { feature: "NO FILE/SPEED LIMITS", anydown: "[✓]", others: ["[✓]", "[✗]", "[—]"] },
  { feature: "100% FREE & OPEN SOURCE", anydown: "[✓]", others: ["[✓]", "[✗]", "[✗]"] },
];

function cellClass(val: string) {
  if (val === "[✓]") return "text-[#888888] font-bold text-[13px]";
  return "text-[#3D3D3D] text-[12px]";
}

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="flex flex-col w-full bg-[#050505] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]"
    >
      <SectionHeader
        label="[04] // VS. THE REST"
        title={"WHY ANYDOWN\nWINS."}
        subtitle="SEE HOW WE STACK UP AGAINST WEB CONVERTERS. NO SPIN. JUST PERFORMANCE."
      />

      {/* Same full table on every screen — horizontally scrollable on phones */}
      <div className="-mx-5 sm:-mx-6 md:mx-0 overflow-x-auto">
        <div className="min-w-[840px] px-5 sm:px-6 md:px-0">
          <div className="flex flex-col w-full border border-[#2D2D2D]">
            <div className="flex w-full h-[56px] bg-[#111111] border-b-2 border-b-[#FFD600]">
              <div className="flex items-center w-[300px] md:w-[400px] shrink-0 px-[20px] md:px-[32px] border-r border-r-[#2D2D2D]">
                <span className="font-grotesk text-[11px] font-bold text-[#888888] tracking-[2px]">
                  FEATURE
                </span>
              </div>
              <div className="flex items-center flex-1 px-[20px] md:px-[32px] bg-[#1A1A1A] border-r border-r-[#2D2D2D]">
                <span className="font-grotesk text-[11px] font-bold text-[#FFD600] tracking-[2px]">
                  ANYDOWN
                </span>
              </div>
              {columns.map((tool, i) => (
                <div
                  key={tool}
                  className={`flex items-center flex-1 px-[20px] md:px-[32px] ${i < columns.length - 1 ? "border-r border-r-[#2D2D2D]" : ""}`}
                >
                  <span className="font-grotesk text-[11px] font-bold text-[#555555] tracking-[2px]">
                    {tool}
                  </span>
                </div>
              ))}
            </div>

            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={`flex w-full h-[56px] ${i < rows.length - 1 ? "border-b border-b-[#1D1D1D]" : ""}`}
              >
                <div className="flex items-center w-[300px] md:w-[400px] shrink-0 px-[20px] md:px-[32px] border-r border-r-[#2D2D2D]">
                  <span className="font-ibm-mono text-[12px] text-[#CCCCCC] tracking-[1px]">
                    {row.feature}
                  </span>
                </div>
                <div className="flex items-center flex-1 px-[20px] md:px-[32px] bg-[#0D0D0D] border-r border-r-[#2D2D2D]">
                  <span className="font-ibm-mono tracking-[1px] text-[#FFD600] font-bold text-[14px]">
                    {row.anydown}
                  </span>
                </div>
                {row.others.map((val, j) => (
                  <div
                    key={j}
                    className={`flex items-center flex-1 px-[20px] md:px-[32px] ${j < row.others.length - 1 ? "border-r border-r-[#2D2D2D]" : ""}`}
                  >
                    <span className={`font-ibm-mono tracking-[1px] ${cellClass(val)}`}>{val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="md:hidden font-ibm-mono text-[10px] text-[#444444] tracking-[2px] -mt-8">
        &lt;&lt; SWIPE TABLE &gt;&gt;
      </span>
    </section>
  );
}