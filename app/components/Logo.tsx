type LogoProps = {
  /** show the "novax" wordmark next to the mark */
  withText?: boolean;
  className?: string;
};

/**
 * Starburst "eye" brand mark, rebuilt as SVG so it stays crisp at any size.
 * Rays radiate from the centre and are stretched horizontally to read as an eye.
 * Replace with your exported logo any time by dropping it in /public.
 */
export default function Logo({ withText = false, className = "" }: LogoProps) {
  const rays = Array.from({ length: 40 }, (_, i) => {
    const angle = (i / 40) * Math.PI * 2;
    // stretch horizontally -> almond / eye silhouette
    const outer = 26 * Math.abs(Math.cos(angle)) + 9;
    const x1 = 32 + Math.cos(angle) * 5;
    const y1 = 32 + Math.sin(angle) * 5;
    const x2 = 32 + Math.cos(angle) * outer;
    const y2 = 32 + Math.sin(angle) * outer;
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
  });

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9"
        role="img"
        aria-label="Novax"
      >
        <g stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round">
          {rays}
        </g>
        <circle cx="32" cy="32" r="4.5" fill="#ffffff" />
      </svg>
      {withText && (
        <span className="font-display text-xl font-extrabold tracking-tight">
          novax
        </span>
      )}
    </span>
  );
}