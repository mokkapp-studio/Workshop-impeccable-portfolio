import Link from "next/link";

export function Cabecera() {
  return (
    <header className="cab">
      <div className="shell">
        <div className="cab__in">
          <p style={{ margin: 0, display: "flex", alignItems: "baseline" }}>
            <Link href="/" className="cab__marca">
              Xavier Pascual
            </Link>
            <span className="cab__desc">Diseño de producto para sistemas complejos</span>
          </p>
          <nav className="cab__nav" aria-label="Principal">
            <Link href="/#casos">Casos</Link>
            <Link href="/#perfil">Perfil</Link>
            <Link href="/#contacto">Contacto</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
