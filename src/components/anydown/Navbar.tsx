import { useState, useEffect, useRef, useCallback } from "react";
import SupportModal from "./SupportModal";

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
  const [supportOpen, setSupportOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [indicator, setIndicator] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const isClickScrolling = useRef(false);
  const targetSection = useRef<string | null>(null);
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateIndicator = useCallback(() => {
    if (!active || !buttonRefs.current[active] || !navRef.current) {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const btn = buttonRefs.current[active];
    const nav = navRef.current;
    if (btn && nav) {
      const btnRect = btn.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setIndicator({
        left: btnRect.left - navRect.left,
        width: btnRect.width,
        opacity: 1,
      });
    }
  }, [active]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  const handleNavClick = (section: string) => {
    setActive(section);
    targetSection.current = section;
    isClickScrolling.current = true;
    if (clickTimeout.current) clearTimeout(clickTimeout.current);

    scrollTo(section);

    // Failsafe timeout to unlock scroll spy after smooth scroll finishes
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
      targetSection.current = null;
    }, 1600);
  };

  useEffect(() => {
    const handleScrollEnd = () => {
      isClickScrolling.current = false;
      targetSection.current = null;
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
    };

    window.addEventListener("scrollend", handleScrollEnd);
    return () => {
      window.removeEventListener("scrollend", handleScrollEnd);
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Keep active locked to clicked section during smooth-scroll animation
      if (isClickScrolling.current && targetSection.current) {
        const targetEl = document.getElementById(targetSection.current);
        if (targetEl) {
          const rect = targetEl.getBoundingClientRect();
          // Target arrived near the top sticky offset
          if (Math.abs(rect.top - 80) < 60) {
            isClickScrolling.current = false;
            targetSection.current = null;
          }
        }
        return;
      }

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // In Hero / top area
      if (scrollY < 250) {
        setActive("");
        return;
      }

      // Reached near bottom of page
      if (scrollY + viewportHeight >= documentHeight - 80) {
        setActive(links[links.length - 1].section);
        return;
      }

      // Check sections from bottom to top
      const headerOffset = 140;
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            setActive(links[i].section);
            return;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          <img
            src="/logo.png"
            alt="anydown logo"
            width={24}
            height={24}
            className="w-[24px] h-[24px] shrink-0 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="font-grotesk text-[13px] font-bold text-[#F5F5F0] tracking-[2.5px]">
            ANYDOWN
          </span>
        </a>

        <div className="flex items-center gap-[20px] sm:gap-[28px] md:gap-[36px]">
          <nav
            ref={navRef}
            className="relative hidden sm:flex items-center gap-[20px] md:gap-[36px] py-1"
          >
            {links.map(({ label, section }) => {
              const isActive = active === section;
              return (
                <button
                  key={label}
                  ref={(el) => {
                    buttonRefs.current[section] = el;
                  }}
                  onClick={() => handleNavClick(section)}
                  className="relative font-ibm-mono text-[10px] tracking-[1.5px] transition-colors duration-200 bg-transparent border-none cursor-pointer py-1"
                  style={{ color: isActive ? "#FFD600" : "#666666" }}
                >
                  {label}
                </button>
              );
            })}

            {/* True sliding yellow indicator with neon glow */}
            <span
              className="absolute -bottom-[2px] h-[2px] bg-[#FFD600] pointer-events-none transition-all duration-300 ease-out shadow-[0_0_10px_rgba(255,214,0,0.8)]"
              style={{
                left: `${indicator.left}px`,
                width: `${indicator.width}px`,
                opacity: indicator.opacity,
              }}
            />
          </nav>

          <button
            type="button"
            onClick={() => setSupportOpen(true)}
            className="hidden xs:inline-flex font-grotesk text-[10px] md:text-[11px] font-bold text-[#0A0A0A] bg-[#FFD600] tracking-[1.5px] px-[14px] md:px-[18px] py-[9px] hover:bg-[#F5F5F0] transition-colors whitespace-nowrap cursor-pointer"
          >
            SUPPORT US
          </button>

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
                  handleNavClick(section);
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
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setSupportOpen(true);
            }}
            className="mt-5 font-grotesk text-[11px] font-bold text-[#0A0A0A] bg-[#FFD600] tracking-[1.5px] px-[18px] py-[11px] text-center hover:bg-[#F5F5F0] transition-colors cursor-pointer w-full"
          >
            SUPPORT US
          </button>
        </nav>
      </div>

      <SupportModal
        open={supportOpen}
        onOpenChange={setSupportOpen}
      />
    </header>
  );
}
