import { useState, useEffect } from "react";

const links = [
  { label: "FEATURES", section: "features" },
  { label: "COMPARE", section: "comparison" },
  { label: "UPDATES", section: "updates" },
  { label: "CREDITS", section: "credits" },
  { label: "FEEDBACK", section: "feedback" },
  { label: "FAQ", section: "faq" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs: IntersectionObserver[] = [];

    links.forEach(({ section }) => {
      const el = document.getElementById(section);
      if (!el) return;
      const o = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActive(section);
        },
        { rootMargin: "-35% 0px -60% 0px" },
      );
      o.observe(el);
      obs.push(o);
    });

    return () => obs.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid #1E1E1E" : "1px solid transparent",
      }}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 h-[60px] px-5 sm:px-6 md:px-[48px] max-w-[1400px] mx-auto">
        <a href="#" className="flex min-w-0 items-center gap-[10px] group">
          <span className="w-[10px] h-[10px] shrink-0 bg-[#FFD600] group-hover:scale-110 transition-transform" />
          <span className="font-grotesk text-[13px] font-bold text-[#F5F5F0] tracking-[2.5px]">
            ANYDOWN
          </span>
        </a>

        <div className="flex items-center gap-[20px] sm:gap-[28px] md:gap-[36px]">
          <nav className="hidden sm:flex items-center gap-[20px] md:gap-[36px]">
            {links.map(({ label, section }) => {
              const isActive = active === section;
              return (
                <button
                  key={label}
                  onClick={() => scrollTo(section)}
                  className="relative font-ibm-mono text-[10px] tracking-[1.5px] transition-colors duration-150 bg-transparent border-none cursor-pointer"
                  style={{ color: isActive ? "#FFD600" : "#555" }}
                >
                  {label}
                  <span
                    className="absolute left-0 -bottom-[3px] h-[1.5px] bg-[#FFD600] transition-all duration-300"
                    style={{ width: isActive ? "100%" : "0%" }}
                  />
                </button>
              );
            })}
          </nav>

          <a
            href="#"
            className="hidden xs:inline-flex font-grotesk text-[10px] md:text-[11px] font-bold text-[#0A0A0A] bg-[#FFD600] tracking-[1.5px] px-[14px] md:px-[18px] py-[9px] hover:bg-[#F5F5F0] transition-colors whitespace-nowrap"
          >
            SUPPORT US
          </a>

          <button
            className="sm:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-[20px] h-[1.5px] bg-[#F5F5F0] transition-transform duration-200 origin-center"
              style={{ transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }}
            />
            <span
              className="block w-[20px] h-[1.5px] bg-[#F5F5F0] transition-opacity duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-[20px] h-[1.5px] bg-[#F5F5F0] transition-transform duration-200 origin-center"
              style={{ transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </div>

      <div
        className="sm:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0px",
          background: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: menuOpen ? "1px solid #1E1E1E" : "none",
        }}
      >
        <nav className="flex flex-col px-5 py-5 gap-0">
          {links.map(({ label, section }) => {
            const isActive = active === section;
            return (
              <button
                key={label}
                onClick={() => {
                  scrollTo(section);
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full font-ibm-mono text-[12px] tracking-[2px] py-[14px] border-b border-[#141414] transition-colors bg-transparent border-x-0 border-t-0 cursor-pointer"
                style={{ color: isActive ? "#FFD600" : "#666" }}
              >
                <span
                  className="w-[4px] h-[4px] rounded-full shrink-0 transition-colors"
                  style={{ background: isActive ? "#FFD600" : "#2D2D2D" }}
                />
                {label}
              </button>
            );
          })}
          <a
            href="#"
            className="mt-5 font-grotesk text-[11px] font-bold text-[#0A0A0A] bg-[#FFD600] tracking-[1.5px] px-[18px] py-[11px] text-center hover:bg-[#F5F5F0] transition-colors"
          >
            SUPPORT US
          </a>
        </nav>
      </div>
    </header>
  );
}