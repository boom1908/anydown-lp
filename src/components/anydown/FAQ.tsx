import { useState } from "react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    question: "IS ANYDOWN REALLY FREE TO USE?",
    answer:
      "YES. ANYDOWN IS 100% FREE AND OPEN SOURCE. NO CREDIT CARD REQUIRED. NO ADS, NO TRACKING, NO PREMIUM TIERS. DOWNLOAD UNLIMITED VIDEOS, AUDIO, AND MORE.",
  },
  {
    question: "DO I NEED TO INSTALL ANYTHING?",
    answer:
      "JUST DOWNLOAD THE APK OR BUILD FROM SOURCE. ONCE INSTALLED, EVERYTHING RUNS LOCALLY ON YOUR PHONE. NO SERVERS, NO ACCOUNT, NO PERMISSIONS BEYOND STORAGE.",
  },
  {
    question: "WHAT SITES ARE SUPPORTED?",
    answer:
      "YOUTUBE, INSTAGRAM, TIKTOK, TWITTER, TWITCH, AND MOST OTHER VIDEO PLATFORMS. IF YT-DLP SUPPORTS IT, ANYDOWN DOES TOO.",
  },
  {
    question: "WHAT PLATFORMS ARE SUPPORTED?",
    answer:
      "ANDROID 7+ IS FULLY SUPPORTED WITH NATIVE PYTHON EXECUTION VIA CHAQUOPY. IOS SUPPORT IS COMING SOON.",
  },
  {
    question: "DOES IT WORK OFFLINE?",
    answer:
      "YES. AFTER INSTALLATION, ANYDOWN RUNS ENTIRELY OFFLINE. NO INTERNET CONNECTION NEEDED EXCEPT TO DOWNLOAD VIDEOS. ALL PROCESSING HAPPENS ON YOUR DEVICE.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="flex flex-col w-full bg-[#060606] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] scroll-mt-[60px]"
    >
      <div className="w-full max-w-[480px]">
        <SectionHeader
          label="[05] // FAQ"
          title={"GOT\nQUESTIONS?"}
          subtitle="EVERYTHING YOU NEED TO KNOW BEFORE FETCHING YOUR FIRST VIDEO."
          titleWidth="w-full"
          subtitleWidth="w-full"
        />
      </div>

      <div className="h-10 md:h-[64px]" />

      <div className="flex flex-col w-full">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.question} className="flex flex-col w-full border-t border-t-[#1D1D1D]">
              <button
                className="flex items-center justify-between w-full py-5 md:h-[72px] text-left gap-4"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="font-grotesk text-[14px] md:text-[16px] font-bold text-[#F5F5F0] tracking-[1px]">
                  {faq.question}
                </span>
                <div
                  className="flex items-center justify-center w-[32px] h-[32px] shrink-0 transition-colors"
                  style={{
                    backgroundColor: isOpen ? "#FFD600" : "#1A1A1A",
                    border: isOpen ? "none" : "1px solid #3D3D3D",
                  }}
                >
                  <span
                    className="font-ibm-mono text-[14px] font-bold"
                    style={{ color: isOpen ? "#0A0A0A" : "#888888" }}
                  >
                    {isOpen ? "—" : "+"}
                  </span>
                </div>
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <p className="font-ibm-mono text-[12px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.6] pb-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="border-t border-t-[#1D1D1D]" />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-[16px] pt-10 md:pt-[48px]">
        <span className="font-ibm-mono text-[13px] text-[#555555] tracking-[1px]">
          STILL HAVE QUESTIONS?
        </span>
        <a
          href="#"
          className="font-ibm-mono text-[13px] font-bold text-[#FFD600] tracking-[1px] hover:underline"
        >
          TALK TO A DEVELOPER &gt;
        </a>
      </div>
    </section>
  );
}