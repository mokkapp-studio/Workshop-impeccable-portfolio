// Frames a product specimen: ink title bar, flat white screen, square edges.
// The depicted UI is exposed to assistive tech as one described image.

export function Pantalla({
  producto,
  descripcion,
  children,
  className,
}: {
  producto: string;
  descripcion: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={`obra ${className ?? ""}`}>
      <div className="obra__pantalla">
        <div className="obra__barra" aria-hidden>
          <span>{producto}</span>
          <span className="obra__ficticio">Caso de ejemplo · contenido ficticio</span>
        </div>
        <div role="img" aria-label={`${descripcion} (Caso de ejemplo con contenido ficticio.)`}>
          {children}
        </div>
      </div>
    </figure>
  );
}

export function Fragmento({
  estado,
  texto,
  children,
}: {
  estado: "Antes" | "Después";
  texto: string;
  children: React.ReactNode;
}) {
  return (
    <figure className={`frag frag--${estado === "Antes" ? "antes" : "despues"}`}>
      <div className="frag__pantalla" role="img" aria-label={`${estado}: ${texto}`}>
        {children}
      </div>
      <figcaption className="frag__pie" aria-hidden>
        <strong>{estado}</strong>
        <span>{texto}</span>
      </figcaption>
    </figure>
  );
}
