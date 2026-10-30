import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function GlitchText({
  text,
  className = "",
  delay = 0,
  speed = 40,
}: TypewriterTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [charCount, setCharCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStarted(true);
      setCharCount(text.length);
      setDone(true);
      return;
    }

    let interval: ReturnType<typeof setInterval> | undefined;
    let startTimer: ReturnType<typeof setTimeout> | undefined;
    let doneTimer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          startTimer = setTimeout(() => {
            setStarted(true);
            let i = 0;
            interval = setInterval(() => {
              i++;
              setCharCount(i);
              if (i >= text.length) {
                clearInterval(interval);
                doneTimer = setTimeout(() => setDone(true), 800);
              }
            }, speed);
          }, delay);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
      if (startTimer) clearTimeout(startTimer);
      if (doneTimer) clearTimeout(doneTimer);
    };
  }, [text, speed, delay]);

  const characters = Array.from(text);

  return (
    <span ref={ref} className={`relative inline ${className}`} aria-label={text}>
      {characters.map((char, index) => {
        const isVisible = started && index < charCount;
        const isCurrent =
          started && !done && (index === charCount - 1 || (charCount === 0 && index === 0));

        if (char === "\n") {
          return <br key={index} />;
        }

        return (
          <span key={index} className="relative inline">
            <span
              style={{
                visibility: isVisible ? "visible" : "hidden",
              }}
            >
              {char}
            </span>
            {isCurrent && (
              <span
                style={{
                  position: "absolute",
                  left: "100%",
                  top: "10%",
                  bottom: "10%",
                  width: "0.06em",
                  backgroundColor: "currentColor",
                  marginLeft: "1px",
                  animation: "tw-blink 0.7s step-end infinite",
                }}
              />
            )}
          </span>
        );
      })}
    </span>
  );
}
