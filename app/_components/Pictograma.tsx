// Solid pictograms on a 48-unit grid, only 0/45/90° edges plus circles.

export type PictogramaId = "logistica" | "clinica" | "sistema" | "tesoreria";

const formas: Record<PictogramaId, React.ReactNode> = {
  logistica: (
    <>
      <path d="M4 10h26v22H4z" />
      <path d="M32 16h6l6 6v10H32z" />
      <circle cx="12" cy="38.5" r="4.5" />
      <circle cx="37" cy="38.5" r="4.5" />
    </>
  ),
  clinica: <path d="M18 5h12v13h13v12H30v13H18V30H5V18h13z" />,
  sistema: (
    <>
      <path d="M5 5h17v17H5z" />
      <path d="M26 5h17v17H26z" />
      <path d="M5 26h17v17H5z" />
      <path d="M34.5 25.5 43 34l-8.5 8.5L26 34z" />
    </>
  ),
  tesoreria: (
    <>
      <path d="M5 10h27V4l10 10-10 10v-6H5z" />
      <path d="M43 30H16v-6L6 34l10 10v-6h27z" />
    </>
  ),
};

export function Pictograma({
  id,
  className,
  title,
}: {
  id: PictogramaId;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="4 4 40 40"
      fill="currentColor"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {formas[id]}
    </svg>
  );
}

export function Flecha({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M3 10.75h13.2l-4.6-4.6L13.4 4.4 21 12l-7.6 7.6-1.8-1.75 4.6-4.6H3z" />
    </svg>
  );
}
