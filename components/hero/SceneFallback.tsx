type SceneFallbackProps = {
  closing?: boolean;
};

export function SceneFallback({ closing = false }: SceneFallbackProps) {
  return (
    <div
      className={`scene-fallback ${closing ? "scene-fallback--closing" : ""}`}
      aria-hidden="true"
    >
      <div className="scene-stars" />
      <div className="scene-planet scene-planet--large" />
      <div className="scene-planet scene-planet--small" />
      <svg
        viewBox="0 0 1200 760"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="terrain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#202750" />
            <stop offset="0.5" stopColor="#10152e" />
            <stop offset="1" stopColor="#060814" />
          </linearGradient>
          <linearGradient id="path" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e7c98d" stopOpacity=".16" />
            <stop offset="1" stopColor="#e7c98d" stopOpacity=".72" />
          </linearGradient>
          <filter id="pathGlow">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        <path
          d="M0 500 C150 455 235 480 350 444 C480 400 540 445 650 422 C790 393 870 415 1200 365 L1200 760 L0 760Z"
          fill="url(#terrain)"
        />
        <path
          d="M705 760 C720 655 748 575 835 492 C875 454 920 424 958 399"
          fill="none"
          stroke="url(#path)"
          strokeWidth="9"
          strokeLinecap="round"
          filter="url(#pathGlow)"
        />
        <path
          d="M705 760 C720 655 748 575 835 492 C875 454 920 424 958 399"
          fill="none"
          stroke="#e7c98d"
          strokeOpacity=".5"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <g transform="translate(715 505)" fill="#050710" stroke="#6f78ac">
          <circle cx="-62" cy="127" r="66" strokeWidth="9" fill="none" />
          <circle cx="75" cy="139" r="29" strokeWidth="7" fill="none" />
          <path d="M-56 60 L-25 129 L70 139" fill="none" strokeWidth="10" />
          <path d="M-25 129 L35 44 L58 121" fill="none" strokeWidth="9" />
          <path d="M-63 62 L30 62 L22 88 L-47 89Z" stroke="none" />
          <path d="M-58 64 L-82 -34 L-22 -46 L11 56Z" stroke="none" />
          <path
            d="M-35 -44 C-26 -88 -11 -119 15 -140 C31 -151 48 -143 50 -124 C53 -104 38 -92 21 -96 C5 -100 -8 -77 -5 -42Z"
            stroke="none"
          />
          <path d="M-20 -8 L43 34 L33 49 L-34 15Z" stroke="none" />
          <path
            d="M-1 82 L47 126"
            fill="none"
            stroke="#050710"
            strokeWidth="20"
          />
        </g>
      </svg>
      <div className="scene-vignette" />
    </div>
  );
}
