export function FloralDecoration({
  position = "top-left",
}: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const positionClasses = {
    "top-left": "top-12 left-12",
    "top-right": "top-12 right-12 scale-x-[-1]",
    "bottom-left": "bottom-12 left-12 scale-y-[-1]",
    "bottom-right": "bottom-12 right-12 scale-x-[-1] scale-y-[-1]",
  }

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none z-20`}>
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90 drop-shadow-lg"
      >
        {/* Large main flower */}
        <g transform="translate(90, 90)">
          {/* Flower center */}
          <circle cx="0" cy="0" r="8" fill="#fbbf24" opacity="0.9" />
          <circle cx="0" cy="0" r="5" fill="#f59e0b" opacity="0.8" />

          {/* Petals */}
          <ellipse cx="-15" cy="-10" rx="8" ry="18" fill="#ec4899" opacity="0.85" transform="rotate(-30)" />
          <ellipse cx="0" cy="-18" rx="8" ry="18" fill="#f472b6" opacity="0.85" />
          <ellipse cx="15" cy="-10" rx="8" ry="18" fill="#ec4899" opacity="0.85" transform="rotate(30)" />
          <ellipse cx="15" cy="10" rx="8" ry="18" fill="#f472b6" opacity="0.85" transform="rotate(150)" />
          <ellipse cx="0" cy="18" rx="8" ry="18" fill="#ec4899" opacity="0.85" transform="rotate(180)" />
          <ellipse cx="-15" cy="10" rx="8" ry="18" fill="#f472b6" opacity="0.85" transform="rotate(-150)" />
        </g>

        {/* Medium flower */}
        <g transform="translate(40, 50)">
          <circle cx="0" cy="0" r="5" fill="#f59e0b" opacity="0.8" />
          <ellipse cx="-8" cy="-6" rx="5" ry="12" fill="#fb7185" opacity="0.75" transform="rotate(-45)" />
          <ellipse cx="8" cy="-6" rx="5" ry="12" fill="#f472b6" opacity="0.75" transform="rotate(45)" />
          <ellipse cx="8" cy="6" rx="5" ry="12" fill="#fb7185" opacity="0.75" transform="rotate(135)" />
          <ellipse cx="-8" cy="6" rx="5" ry="12" fill="#f472b6" opacity="0.75" transform="rotate(-135)" />
        </g>

        {/* Small flower */}
        <g transform="translate(130, 60)">
          <circle cx="0" cy="0" r="4" fill="#fbbf24" opacity="0.7" />
          <ellipse cx="-6" cy="-4" rx="3" ry="8" fill="#ec4899" opacity="0.7" transform="rotate(-45)" />
          <ellipse cx="6" cy="-4" rx="3" ry="8" fill="#f472b6" opacity="0.7" transform="rotate(45)" />
          <ellipse cx="6" cy="4" rx="3" ry="8" fill="#ec4899" opacity="0.7" transform="rotate(135)" />
          <ellipse cx="-6" cy="4" rx="3" ry="8" fill="#f472b6" opacity="0.7" transform="rotate(-135)" />
        </g>

        {/* Leaves and stems */}
        <path d="M30 120 Q40 100 50 120 Q40 140 30 120" fill="#22c55e" opacity="0.7" />
        <path d="M120 130 Q130 110 140 130 Q130 150 120 130" fill="#16a34a" opacity="0.6" />
        <path d="M60 140 Q70 120 80 140 Q70 160 60 140" fill="#22c55e" opacity="0.6" />

        {/* Decorative swirls */}
        <path d="M20 30 Q30 20 40 30 Q50 40 60 30" stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M120 20 Q130 10 140 20 Q150 30 160 20" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.5" />

        {/* Golden accent dots */}
        <circle cx="60" cy="60" r="2" fill="#fbbf24" opacity="0.8" />
        <circle cx="110" cy="110" r="1.5" fill="#f59e0b" opacity="0.7" />
        <circle cx="25" cy="80" r="1" fill="#fbbf24" opacity="0.6" />
      </svg>
    </div>
  )
}
