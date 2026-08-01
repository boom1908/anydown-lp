import SectionHeader from "./SectionHeader";

interface BentoCardProps {
  tag?: string;
  tagColor?: string;
  tagBg?: string;
  tagText?: string;
  title: string;
  body: string;
  className: string;
  titleColor: string;
  bodyColor: string;
}

function BentoCard({
  tag,
  tagColor = "#FFD600",
  tagBg = "#1A1A1A",
  tagText,
  title,
  body,
  className,
  titleColor,
  bodyColor,
}: BentoCardProps) {
  return (
    <div className={`flex flex-col gap-5 p-7 sm:p-8 md:p-[40px] w-full md:flex-1 ${className}`}>
      {tag && (
        <div
          className="flex items-center justify-center h-[28px] px-[12px] w-fit"
          style={{ backgroundColor: tagBg, border: `1px solid ${tagColor}` }}
        >
          <span
            className="font-ibm-mono text-[10px] font-bold tracking-[2px]"
            style={{ color: tagText ?? tagColor }}
          >
            {tag}
          </span>
        </div>
      )}
      <h3
        className="font-grotesk text-[24px] md:text-[28px] font-bold tracking-[-1px] leading-[1.1]"
        style={{ color: titleColor }}
      >
        {title}
      </h3>
      <p
        className="font-ibm-mono text-[12px] tracking-[1px] leading-[1.6]"
        style={{ color: bodyColor }}
      >
        {body}
      </p>
    </div>
  );
}

export default function Bento() {
  return (
    <section className="flex flex-col w-full bg-[#0A0A0A] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-10 md:gap-[48px]">
      <SectionHeader
        label="[03] // THE MANIFESTO"
        title={"NO CLUTTER.\nJUST EXTRACTION."}
        titleWidth="w-full max-w-[800px]"
      />

      <div className="flex flex-col w-full gap-[2px]">
        <div className="flex flex-col md:flex-row w-full gap-[2px]">
          <BentoCard
            tag="[CLEAN]"
            tagBg="#0A0A0A"
            tagColor="#0A0A0A"
            tagText="#FFD600"
            title="ZERO ADS"
            body="NO POPUPS. NO FAKE DOWNLOAD BUTTONS. NO MALICIOUS REDIRECTS. THE UI REMAINS CLEAN, FAST, AND HOSTILE TO ADVERTISERS."
            className="bg-[#FFD600] md:h-[280px]"
            titleColor="#0A0A0A"
            bodyColor="#1A1A1A"
          />
          <BentoCard
            tag="[FAST]"
            title="UNCAPPED SPEED"
            body="NO THROTTLING. NO PREMIUM SPEED TIERS. ANYDOWN UTILIZES YOUR DEVICE'S FULL NETWORK BANDWIDTH TO RIP MEDIA INSTANTLY."
            className="bg-[#111111] border border-[#2D2D2D] md:h-[280px]"
            titleColor="#F5F5F0"
            bodyColor="#666666"
          />
          <BentoCard
            tag="[DIRECT]"
            tagColor="#FF6B35"
            title="NO MIDDLEMEN"
            body="WE DON'T ROUTE YOUR LINKS THROUGH SLOW, SKETCHY CLOUD SERVERS. EXTRACTION HAPPENS LOCALLY, RIGHT ON YOUR HARDWARE."
            className="bg-[#0A0A0A] border border-[#2D2D2D] md:h-[280px]"
            titleColor="#F5F5F0"
            bodyColor="#666666"
          />
        </div>

        <div className="flex flex-col md:flex-row w-full gap-[2px]">
          <BentoCard
            tag="[FREE]"
            title="NO SUBSCRIPTIONS"
            body="COMPLETELY FREE, FOREVER. NO TRIAL PERIODS, NO PRO PLANS, NO PAYWALLS. BUILT STRICTLY FOR UTILITY, NOT PROFIT."
            className="bg-[#111111] border border-[#2D2D2D] md:h-[240px]"
            titleColor="#F5F5F0"
            bodyColor="#666666"
          />
          <BentoCard
            tag="[UNCAPPED]"
            tagColor="#FF6B35"
            title="NO LIMITS"
            body="NO DAILY QUOTAS, NO FILE SIZE CAPS, NO RESOLUTION LOCKS. RIP AS MUCH MEDIA AS YOUR STORAGE CAN HOLD."
            className="bg-[#0F0F0F] border-2 border-[#FF6B35] md:h-[240px]"
            titleColor="#F5F5F0"
            bodyColor="#666666"
          />
        </div>
      </div>
    </section>
  );
}