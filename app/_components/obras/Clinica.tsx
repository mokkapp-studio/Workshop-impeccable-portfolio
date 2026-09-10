// EJEMPLO: pantallas ficticias del caso "Agenda quirúrgica hospitalaria".

type Tipo = "" | "urg" | "limp" | "conf";
type Bloque = { s: number; d: number; t: string; sub?: string; tipo?: Tipo };
type Sala = { id: string; esp: string; bloques: Bloque[] };

// s y d en medias horas desde las 8:00.
const salas: Sala[] = [
  {
    id: "Q1",
    esp: "General",
    bloques: [
      { s: 0, d: 5, t: "Colecistectomía", sub: "P-4821 · Dr. Sanz" },
      { s: 5, d: 1, t: "Limpieza", tipo: "limp" },
      { s: 6, d: 6, t: "Hernia inguinal", sub: "P-5102 · Dr. Sanz" },
      { s: 13, d: 4, t: "Reservado urgencias", tipo: "urg" },
      { s: 17, d: 5, t: "Apendicectomía", sub: "P-5230 · Dra. Gil" },
    ],
  },
  {
    id: "Q2",
    esp: "Traumatología",
    bloques: [
      { s: 1, d: 7, t: "Prótesis de rodilla", sub: "P-3908 · Dr. Vidal" },
      { s: 8, d: 1, t: "Limpieza", tipo: "limp" },
      { s: 9, d: 5, t: "Artroscopia de hombro", sub: "P-4417 · Dr. Vidal" },
      { s: 15, d: 4, t: "Reservado urgencias", tipo: "urg" },
    ],
  },
  {
    id: "Q3",
    esp: "Urología",
    bloques: [
      { s: 0, d: 3, t: "Cistoscopia", sub: "P-5011 · Dra. Pardo" },
      { s: 4, d: 4, t: "Nefrectomía parcial", sub: "P-2986 · Anest. Dra. Ruiz" },
      { s: 8, d: 1, t: "Limpieza", tipo: "limp" },
      { s: 10, d: 6, t: "Prostatectomía", sub: "P-4390 · Dra. Pardo" },
    ],
  },
  {
    id: "Q4",
    esp: "Cardiaca",
    bloques: [
      { s: 0, d: 4, t: "Marcapasos", sub: "P-5188 · Dr. Ortega" },
      { s: 5, d: 5, t: "Bypass coronario", sub: "Conflicto de anestesia", tipo: "conf" },
      { s: 11, d: 1, t: "Limpieza", tipo: "limp" },
      { s: 12, d: 8, t: "Recambio valvular", sub: "P-3021 · Dr. Ortega" },
    ],
  },
  {
    id: "Q5",
    esp: "Ginecología",
    bloques: [
      { s: 2, d: 4, t: "Histerectomía", sub: "P-4675 · Dra. León" },
      { s: 6, d: 1, t: "Limpieza", tipo: "limp" },
      { s: 7, d: 3, t: "Legrado", sub: "P-5299 · Dra. León" },
      { s: 12, d: 4, t: "Reservado urgencias", tipo: "urg" },
    ],
  },
  {
    id: "Q6",
    esp: "Oftalmología",
    bloques: [
      { s: 0, d: 2, t: "Cataratas", sub: "P-5301" },
      { s: 2, d: 2, t: "Cataratas", sub: "P-5302" },
      { s: 4, d: 2, t: "Cataratas", sub: "P-5307" },
      { s: 7, d: 3, t: "Vitrectomía", sub: "P-4120 · Dr. Rey" },
    ],
  },
];

const horas = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];

function Gantt({ filas, ahora, soloUrgFuera }: { filas: Sala[]; ahora?: number; soloUrgFuera?: boolean }) {
  return (
    <div className="ui-gantt" style={{ gridTemplateRows: `2.4em repeat(${filas.length}, 3.1em)` }}>
      {horas.map((h, i) => (
        <span key={h} className="ui-gantt__hora" style={{ gridColumn: `${2 + i * 2} / span 2` }}>
          {h}:00
        </span>
      ))}
      {filas.map((sala, r) => (
        <div key={sala.id} style={{ display: "contents" }}>
          <div className="ui-gantt__sala" style={{ gridRow: r + 2 }}>
            {sala.id}
            <small>{sala.esp}</small>
          </div>
          <div className="ui-gantt__carril" style={{ gridRow: r + 2 }} />
          {sala.bloques
            .filter((b) => !(soloUrgFuera && b.tipo === "urg"))
            .map((b, i) => (
              <div
                key={i}
                className={`ui-bloque ${b.tipo ?? ""}`}
                style={{ gridRow: r + 2, gridColumn: `${2 + b.s} / span ${b.d}` }}
              >
                {b.t}
                {b.sub && <small>{b.sub}</small>}
              </div>
            ))}
        </div>
      ))}
      {ahora !== undefined && (
        <span className="ui-ahora" style={{ left: `calc(6.5em + (100% - 6.5em) * ${ahora / 24})` }} />
      )}
    </div>
  );
}

export function HeroClinica() {
  return (
    <div className="ui ui--clinica">
      <div className="ui-app">
        <aside className="ui-side">
          <div className="ui-logo">
            <i />
            Bloque Q
          </div>
          <div className="ui-nav on">Hoy</div>
          <div className="ui-nav">Semana</div>
          <div className="ui-nav">
            Conflictos <em>1</em>
          </div>
          <div className="ui-nav">Equipos</div>
          <div className="ui-nav">Salas</div>
          <div className="ui-nav">Lista de espera</div>
        </aside>
        <div className="ui-main">
          <div className="ui-head">
            <div>
              <p className="ui-h1">Martes, 14 de octubre</p>
              <span className="ui-sub">Bloque quirúrgico · 12 salas · 31 intervenciones</span>
            </div>
            <div className="ui-row">
              <span className="ui-btn sec">Día anterior</span>
              <span className="ui-btn">Programar</span>
            </div>
          </div>
          <div className="ui-tools">
            <span className="ui-chip on">Planta 2 · Q1–Q6</span>
            <span className="ui-chip">Planta 1</span>
            <span className="ui-chip">Planta 3</span>
            <span className="ui-spacer" />
            <span className="ui-badge err">1 conflicto</span>
            <span className="ui-badge">3 tramos de urgencias libres</span>
          </div>
          <div className="ui-body" style={{ gridTemplateColumns: "minmax(0,1fr) 19em" }}>
            <Gantt filas={salas} ahora={6.5} />
            <aside className="ui-panel">
              <div>
                <p className="ui-h2">Q4 · Bypass coronario</p>
                <span className="ui-sub">P-3377 · 10:30 a 13:00</span>
              </div>
              <div className="ui-alerta">
                <b>Anestesia en dos salas a la vez</b>
                <span>La Dra. Ruiz ya está en Q3 de 10:00 a 12:00.</span>
              </div>
              <dl className="ui-kv">
                <dt>Cirugía</dt>
                <dd>Dr. Ortega</dd>
                <dt>Anestesia</dt>
                <dd>Dra. Ruiz</dd>
                <dt>Enfermería</dt>
                <dd>Equipo B</dd>
                <dt>Sala</dt>
                <dd>Lista a las 10:15</dd>
              </dl>
              <div>
                <span className="ui-sub">Alternativa disponible</span>
                <p className="ui-h2" style={{ marginTop: ".25em" }}>
                  Dr. Martín · libre de 10:00 a 14:00
                </p>
              </div>
              <div className="ui-row">
                <span className="ui-btn">Asignar al Dr. Martín</span>
                <span className="ui-btn sec">Mover</span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

const pacientes = [
  ["08:00", "P-4821", "Colecistectomía", "Q1", "Dr. Sanz"],
  ["08:00", "P-5011", "Cistoscopia", "Q3", "Dra. Pardo"],
  ["08:00", "P-5188", "Marcapasos", "Q4", "Dr. Ortega"],
  ["08:30", "P-3908", "Prótesis de rodilla", "Q2", "Dr. Vidal"],
  ["09:00", "P-4675", "Histerectomía", "Q5", "Dra. León"],
  ["10:00", "P-2986", "Nefrectomía parcial", "Q3", "Dra. Pardo"],
  ["10:30", "P-3377", "Bypass coronario", "Q4", "Dr. Ortega"],
  ["11:00", "P-5102", "Hernia inguinal", "Q1", "Dr. Sanz"],
  ["11:30", "P-5299", "Legrado", "Q5", "Dra. León"],
];

export const fragmentosClinica: Record<string, (estado: "antes" | "despues") => React.ReactNode> = {
  "cli-linea": (estado) =>
    estado === "antes" ? (
      <div className="ui ui--clinica">
        <table className="ui-table">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Paciente</th>
              <th>Procedimiento</th>
              <th>Sala</th>
              <th>Cirugía</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((p) => (
              <tr key={p[1]}>
                {p.map((c, i) => (
                  <td key={i} className={i === 1 ? "ui-id" : undefined}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="ui ui--clinica" style={{ width: "64em", fontSize: "clamp(4px, calc(100cqi / 64), 9px)", height: "40em" }}>
        <Gantt filas={salas} ahora={6.5} />
      </div>
    ),
  "cli-conflicto": (estado) =>
    estado === "antes" ? (
      <div className="ui ui--clinica" style={{ padding: "1.4em", display: "flex", flexDirection: "column", gap: "1em" }}>
        <div className="ui-alerta">
          <b>Error al guardar</b>
          <span>No se pudo guardar la programación (código 409).</span>
        </div>
        <dl className="ui-kv">
          <dt>Sala</dt>
          <dd>Q4</dd>
          <dt>Hora</dt>
          <dd>10:30 a 13:00</dd>
          <dt>Procedimiento</dt>
          <dd>Bypass coronario</dd>
          <dt>Anestesia</dt>
          <dd>Dra. Ruiz</dd>
        </dl>
        <div className="ui-row">
          <span className="ui-btn">Guardar</span>
          <span className="ui-btn sec">Cancelar</span>
        </div>
      </div>
    ) : (
      <div className="ui ui--clinica" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 15em", height: "25em" }}>
        <div style={{ width: "46em", fontSize: ".72em" }}>
          <Gantt filas={salas.slice(2, 5)} />
        </div>
        <aside className="ui-panel">
          <div className="ui-alerta">
            <b>Anestesia en dos salas</b>
            <span>La Dra. Ruiz ya está en Q3 de 10:00 a 12:00.</span>
          </div>
          <span className="ui-sub">Libre: Dr. Martín</span>
          <span className="ui-btn">Asignar al Dr. Martín</span>
        </aside>
      </div>
    ),
  "cli-urgencia": (estado) => {
    const llenas: Sala[] = salas.slice(0, 4).map((s) => ({
      ...s,
      bloques: s.bloques.map((b) => (b.tipo === "urg" ? { ...b, t: "Hernia umbilical", sub: "Programada", tipo: "" as Tipo } : b)),
    }));
    return (
      <div className="ui ui--clinica" style={{ width: "58em", fontSize: "clamp(4px, calc(100cqi / 58), 10px)", height: "36em" }}>
        <Gantt filas={estado === "antes" ? llenas : salas.slice(0, 4)} />
      </div>
    );
  },
};
