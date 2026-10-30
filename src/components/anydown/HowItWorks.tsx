import SectionHeader from "./SectionHeader";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  bgColor?: string;
  borderColor?: string;
}

function StepCard({
  number,
  title,
  description,
  bgColor = "#0A0A0A",
  borderColor = "#2D2D2D",
}: StepCardProps) {
  return (
    <div
      className="flex flex-col gap-4 p-7 sm:p-8 md:p-[40px] border w-full md:flex-1 md:h-[260px]"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <span className="font-grotesk text-[48px] font-bold text-[#FFD600] tracking-[-2px] leading-none">
        {number}
      </span>
      <h3 className="font-grotesk text-[20px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2] whitespace-pre-line">
        {title}
      </h3>
      <p className="font-ibm-mono text-[12px] md:text-[11px] text-[#555555] tracking-[1px] leading-[1.6]">
        {description}
      </p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="flex flex-col w-full bg-[#0D0D0D] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px]">
      <SectionHeader label="[02] // HOW IT WORKS" title={"THREE TAPS.\nDONE DEAL."} />

      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-[2px]">
        <StepCard
          number="01"
          title="PASTE LINK"
          description="DROP ANY LINK OR LET CLIPBOARD AUTO-DETECT HANDLE IT INSTANTLY."
        />
        <StepCard
          number="02"
          title="SELECT FORMAT"
          description="CHOOSE BEST QUALITY MP4, FAST 720P, OR PURE NATIVE M4A AUDIO."
          bgColor="#111111"
          borderColor="#FFD600"
        />
        <StepCard
          number="03"
          title="NATIVE SAVE"
          description="DOWNLOADS DIRECTLY TO YOUR MEDIASTORE. NO AD REDIRECTS, NO JUNK."
        />
      </div>
    </section>
  );
}
