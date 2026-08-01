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
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStarted(true);
      setDisplayed(text);
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
              setDisplayed(text.slice(0, i));
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

  return (
    <span
      ref={ref}
      className={className}
      style={{ position: "relative", display: "inline-block" }}
    >
      <span aria-hidden="true" style={{ visibility: "hidden", whiteSpace: "pre-wrap" }}>
        {text}
      </span>

      <span
        aria-live="polite"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          whiteSpace: "pre-wrap",
        }}
      >
        {started ? displayed : ""}
        {started && !done && (
          <span
            style={{
              display: "inline-block",
              width: "0.06em",
              height: "0.85em",
              backgroundColor: "currentColor",
              marginLeft: "2px",
              verticalAlign: "middle",
              animation: "tw-blink 0.7s step-end infinite",
            }}
          />
        )}
      </span>
    </span>
  );
}