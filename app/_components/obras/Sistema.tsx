// EJEMPLO: pantallas ficticias del caso "Sistema de diseño multimarca".

const tokens = [
  ["color.accion.principal", "#6A3DE8", "Botón principal, enlaces", "5,9 : 1"],
  ["color.accion.principal.hover", "#5530C4", "Estado hover de la acción", "7,8 : 1"],
  ["color.texto.base", "#1B1E24", "Texto de lectura", "16,1 : 1"],
  ["color.texto.suave", "#5A6270", "Texto secundario, ayudas", "6,1 : 1"],
  ["color.fondo.base", "#FFFFFF", "Fondo de página", "—"],
  ["color.fondo.elevado", "#F5F6F8", "Paneles, cabeceras de tabla", "—"],
  ["color.borde.base", "#E2E5EA", "Separadores, campos", "—"],
  ["color.estado.error", "#C62F27", "Errores y validación", "5,6 : 1"],
  ["color.estado.exito", "#177A43", "Confirmaciones", "5,4 : 1"],
  ["color.foco", "#2F54EB", "Anillo de foco", "5,2 : 1"],
];

const temas = [
  { nombre: "Marca Norte", marca: "#6A3DE8", radio: "0.45em" },
  { nombre: "Marca Sur", marca: "#0D7A63", radio: "99em" },
  { nombre: "Marca Isla", marca: "#B4380B", radio: "0.12em" },
];

function Temas() {
  return (
    <div className="ui-temas">
      {temas.map((t) => (
        <div
          key={t.nombre}
          className="ui-tema"
          style={{ "--t-marca": t.marca, "--t-radio": t.radio } as React.CSSProperties}
        >
          <b>{t.nombre}</b>
          <span className="ui-tema__campo">Número de póliza</span>
          <span className="ui-tema__boton">Continuar</span>
        </div>
      ))}
    </div>
  );
}

function TablaTokens({ filas }: { filas: string[][] }) {
  return (
    <table className="ui-table ui-tokens">
      <thead>
        <tr>
          <th>Token</th>
          <th>Marca Norte</th>
          <th>Uso</th>
          <th>Contraste</th>
        </tr>
      </thead>
      <tbody>
        {filas.map(([t, v, uso, c]) => (
          <tr key={t}>
            <td>{t}</td>
            <td>
              <span className="ui-row">
                <span className="ui-muestra" style={{ background: v }} />
                <span className="ui-id">{v}</span>
              </span>
            </td>
            <td>{uso}</td>
            <td>{c === "—" ? <span className="ui-muted">No aplica</span> : <span className="ui-badge ok">{c}</span>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function HeroSistema() {
  return (
    <div className="ui ui--sistema">
      <div className="ui-app">
        <aside className="ui-side">
          <div className="ui-logo">
            <i />
            Atlas
          </div>
          <span className="ui-muted" style={{ margin: ".4em .6em .2em" }}>
            Fundamentos
          </span>
          <div className="ui-nav on">Color</div>
          <div className="ui-nav">Tipografía</div>
          <div className="ui-nav">Espaciado</div>
          <span className="ui-muted" style={{ margin: "1em .6em .2em" }}>
            Componentes
          </span>
          <div className="ui-nav">
            Botón <em>v3</em>
          </div>
          <div className="ui-nav">Campo de texto</div>
          <div className="ui-nav">Tabla</div>
          <div className="ui-nav">
            Temas <em>6</em>
          </div>
        </aside>
        <div className="ui-main">
          <div className="ui-head">
            <div>
              <p className="ui-h1">Color · Tokens semánticos</p>
              <span className="ui-sub">48 tokens · versión 3.2 · usados en 1.204 pantallas</span>
            </div>
            <div className="ui-row">
              <span className="ui-btn sec">Ver en Figma</span>
              <span className="ui-btn">Copiar como CSS</span>
            </div>
          </div>
          <div className="ui-tools">
            <span className="ui-chip on">Marca Norte</span>
            <span className="ui-chip">Marca Sur</span>
            <span className="ui-chip">Marca Isla</span>
            <span className="ui-chip">Marca Vega</span>
            <span className="ui-chip">Marca Alta</span>
            <span className="ui-chip">Marca Litoral</span>
          </div>
          <div className="ui-body" style={{ gridTemplateColumns: "minmax(0,1fr) 22em" }}>
            <TablaTokens filas={tokens} />
            <aside className="ui-panel">
              <div>
                <p className="ui-h2">Vista previa en tres marcas</p>
                <span className="ui-sub">El mismo componente, un tema distinto</span>
              </div>
              <Temas />
              <dl className="ui-kv">
                <dt>Componentes</dt>
                <dd>32 publicados</dd>
                <dt>Adopción</dt>
                <dd>84 % de las pantallas</dd>
                <dt>Accesibilidad</dt>
                <dd>WCAG 2.2 AA</dd>
              </dl>
              <ul className="ui-eventos">
                <li className="ok">
                  <span className="ui-muted">v3.2</span>
                  <i />
                  <span>Nuevo token color.foco</span>
                </li>
                <li>
                  <span className="ui-muted">v3.1</span>
                  <i />
                  <span>Tema Marca Litoral</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

const botonesViejos: React.CSSProperties[] = [
  { background: "#6a3ee9", borderRadius: "0.2em" },
  { background: "#6b3de6", borderRadius: "1em", padding: "0.6em 1.4em" },
  { background: "#5b35cf", borderRadius: "0", textTransform: "uppercase", fontSize: "0.75em" },
  { background: "#fff", color: "#6a3de8", boxShadow: "inset 0 0 0 2px #6a3de8", borderRadius: "0.5em" },
  { background: "#7c55f0", borderRadius: "0.3em", fontWeight: 400 },
  { background: "#6a3de8", borderRadius: "99em", padding: "0.3em 0.8em" },
  { background: "#4a2aa8", borderRadius: "0.4em", padding: "0.8em 1em" },
];

export const fragmentosSistema: Record<string, (estado: "antes" | "despues") => React.ReactNode> = {
  "sis-tokens": (estado) =>
    estado === "antes" ? (
      <div className="ui ui--sistema" style={{ padding: "1.2em", background: "#1b1e24", color: "#d6dae1" }}>
        <pre className="ui-id" style={{ margin: 0, color: "#d6dae1", lineHeight: 1.7, fontSize: ".95em" }}>
          {`.btn-primary   { background: #6a3ee9; }
.btn-primario  { background: #6b3de6; }
.link          { color: #6A3DE8; }
.header a      { color: #5b35cf; }
.card--active  { border-color: #7c55f0; }
.tag           { background: #efe9fd; }
.badge-new     { background: #6a3de8; }
.form .submit  { background: #4a2aa8; }
/* 404 colores más… */`}
        </pre>
      </div>
    ) : (
      <div className="ui ui--sistema">
        <TablaTokens filas={tokens.slice(0, 7)} />
      </div>
    ),
  "sis-boton": (estado) =>
    estado === "antes" ? (
      <div className="ui ui--sistema" style={{ padding: "1.4em", display: "flex", flexWrap: "wrap", gap: "1em", alignContent: "center" }}>
        {botonesViejos.map((s, i) => (
          <span key={i} className="ui-btn" style={s}>
            {["Continuar", "Siguiente", "Enviar", "Aceptar", "Continuar", "Ok", "Guardar"][i]}
          </span>
        ))}
      </div>
    ) : (
      <div className="ui ui--sistema">
        <table className="ui-table">
          <thead>
            <tr>
              <th>Variante</th>
              <th>Normal</th>
              <th>Hover</th>
              <th>Desactivado</th>
              <th>Cargando</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Principal", ""],
              ["Secundario", "sec"],
              ["Discreto", "ghost"],
            ].map(([nombre, cls]) => (
              <tr key={nombre}>
                <td>{nombre}</td>
                <td>
                  <span className={`ui-btn ${cls}`}>Continuar</span>
                </td>
                <td>
                  <span className={`ui-btn ${cls}`} style={cls ? { background: "#f0ebfd" } : { background: "#5530c4" }}>
                    Continuar
                  </span>
                </td>
                <td>
                  <span className={`ui-btn ${cls}`} style={{ opacity: 0.4 }}>
                    Continuar
                  </span>
                </td>
                <td>
                  <span className={`ui-btn ${cls}`}>Enviando…</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  "sis-temas": (estado) =>
    estado === "antes" ? (
      <div className="ui ui--sistema">
        <table className="ui-table">
          <thead>
            <tr>
              <th>Archivo</th>
              <th>Reglas de marca</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["norte/buttons.css", "38"],
              ["norte/forms.css", "61"],
              ["norte/overrides.css", "112"],
              ["sur/buttons-v2.css", "44"],
              ["sur/forms.css", "57"],
              ["isla/theme-old.scss", "203"],
              ["isla/hotfix-oct.css", "19"],
              ["shared/brand-utils.js", "76"],
            ].map(([f, n]) => (
              <tr key={f}>
                <td className="ui-id">{f}</td>
                <td>{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="ui ui--sistema" style={{ padding: "1.2em", display: "flex", flexDirection: "column", gap: "1em" }}>
        <Temas />
        <pre className="ui-id" style={{ margin: 0, padding: "0.8em 1em", background: "#f5f6f8", borderRadius: ".5em", lineHeight: 1.6 }}>
          {`tema-isla.json
{ "color.accion.principal": "#B4380B",
  "radio.control": "0.12em",
  "tipografia.familia": "Marca Isla Sans" }`}
        </pre>
      </div>
    ),
};
