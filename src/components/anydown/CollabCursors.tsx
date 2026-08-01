const CURSORS = [
  {
    name: "boom",
    color: "#FFD600",
    textColor: "#0A0A0A",
    animName: "cursor-alex",
    duration: "18s",
  },
  {
    name: "claude",
    color: "#FF6B35",
    textColor: "#FFFFFF",
    animName: "cursor-sara",
    duration: "22s",
  },
  {
    name: "dominicburtt",
    color: "#4ADE80",
    textColor: "#0A0A0A",
    animName: "cursor-jin",
    duration: "26s",
  },
  {
    name: "gemini",
    color: "#60A5FA",
    textColor: "#0A0A0A",
    animName: "cursor-mila",
    duration: "30s",
  },
];

export default function CollabCursors() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden"
      style={{ zIndex: 10 }}
      aria-hidden="true"
    >
      {CURSORS.map((cursor) => (
        <div
          key={cursor.name}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            animation: `${cursor.animName} ${cursor.duration} cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            willChange: "transform",
          }}
        >
          <svg
            width="16"
            height="18"
            viewBox="0 0 20 22"
            fill="none"
            style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.7))" }}
          >
            <path
              d="M2 2L18 10L10 12L6 20L2 2Z"
              fill={cursor.color}
              stroke="#0A0A0A"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>

          <div
            style={{
              position: "absolute",
              left: "14px",
              top: "14px",
              backgroundColor: cursor.color,
              padding: "2px 8px",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              fontWeight: 700,
              color: cursor.textColor,
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            {cursor.name}
          </div>
        </div>
      ))}
    </div>
  );
}