// EJEMPLO: pantallas ficticias del caso "Consola de operaciones logísticas".

type Tono = "err" | "warn" | "ok" | "ac" | "";
type Envio = { id: string; cliente: string; destino: string; tono: Tono; estado: string; eta: string };

const atencion: Envio[] = [
  { id: "ZN-48213", cliente: "Ferretería Albar", destino: "Huesca", tono: "err", estado: "Avería del vehículo", eta: "13:40 → 15:50" },
  { id: "ZN-48190", cliente: "Distribuciones Moncayo", destino: "Tudela", tono: "err", estado: "Dirección incompleta", eta: "12:15" },
  { id: "ZN-47988", cliente: "Farmacia Ribera", destino: "Calatayud", tono: "warn", estado: "Retraso de 40 min", eta: "11:30 → 12:10" },
  { id: "ZN-47951", cliente: "Talleres Jalón", destino: "Ejea", tono: "warn", estado: "Cliente ausente", eta: "10:50" },
];

const enRuta: Envio[] = [
  { id: "ZN-48302", cliente: "Muebles Cierzo", destino: "Zaragoza", tono: "ok", estado: "En ruta", eta: "11:05" },
  { id: "ZN-48297", cliente: "Óptica Delicias", destino: "Zaragoza", tono: "ok", estado: "En ruta", eta: "11:20" },
  { id: "ZN-48288", cliente: "Agro Cinca", destino: "Monzón", tono: "ok", estado: "En ruta", eta: "12:40" },
  { id: "ZN-48275", cliente: "Bodegas Borja", destino: "Borja", tono: "ac", estado: "Cargando", eta: "13:10" },
  { id: "ZN-48261", cliente: "Electro Arrabal", destino: "Utebo", tono: "ok", estado: "En ruta", eta: "11:45" },
  { id: "ZN-48254", cliente: "Papelería Tenerías", destino: "Zaragoza", tono: "ok", estado: "En ruta", eta: "12:00" },
];

function Estado({ tono, children }: { tono: Tono; children: React.ReactNode }) {
  return <span className={`ui-badge ${tono}`}>{children}</span>;
}

function Filas({ filas, sel, check }: { filas: Envio[]; sel?: string[]; check?: boolean }) {
  return (
    <>
      {filas.map((f) => {
        const on = sel?.includes(f.id);
        return (
          <tr key={f.id} className={on ? "sel" : undefined}>
            {check && (
              <td>
                <span className={`ui-check${on ? " on" : ""}`} />
              </td>
            )}
            <td className="ui-id">{f.id}</td>
            <td>{f.cliente}</td>
            <td>{f.destino}</td>
            <td>
              <Estado tono={f.tono}>{f.estado}</Estado>
            </td>
            <td>{f.eta}</td>
          </tr>
        );
      })}
    </>
  );
}

function Ruta() {
  return (
    <div className="ui-ruta">
      <svg viewBox="0 0 280 110" fill="none" aria-hidden>
        <path d="M20 86 L78 62 L132 70 L188 34 L256 24" stroke="#2f54eb" strokeWidth="3" strokeLinejoin="round" />
        <path d="M132 70 L188 34" stroke="#c62f27" strokeWidth="3" strokeDasharray="6 5" />
        <circle cx="20" cy="86" r="6" fill="#2f54eb" />
        <circle cx="78" cy="62" r="5" fill="#fff" stroke="#2f54eb" strokeWidth="3" />
        <circle cx="132" cy="70" r="7" fill="#c62f27" />
        <circle cx="256" cy="24" r="6" fill="#fff" stroke="#1b1e24" strokeWidth="3" />
        <text x="26" y="104" fontSize="11" fill="#5a6270">Zaragoza</text>
        <text x="142" y="88" fontSize="11" fill="#c62f27">Parado · A-23 km 312</text>
        <text x="206" y="16" fontSize="11" fill="#5a6270">Huesca</text>
      </svg>
    </div>
  );
}

export function HeroLogistica() {
  return (
    <div className="ui">
      <div className="ui-app">
        <aside className="ui-side">
          <div className="ui-logo">
            <i />
            Tráfico
          </div>
          <div className="ui-nav">
            Envíos <em>3.084</em>
          </div>
          <div className="ui-nav on">
            Incidencias <em>17</em>
          </div>
          <div className="ui-nav">Rutas</div>
          <div className="ui-nav">Flota</div>
          <div className="ui-nav">Clientes</div>
          <div className="ui-nav">Informes</div>
        </aside>
        <div className="ui-main">
          <div className="ui-head">
            <div>
              <p className="ui-h1">Envíos de hoy</p>
              <span className="ui-sub">Centro Norte · Turno de mañana · 3.084 envíos</span>
            </div>
            <div className="ui-row">
              <span className="ui-btn sec">Exportar</span>
              <span className="ui-btn">Nuevo envío</span>
            </div>
          </div>
          <div className="ui-tools">
            <span className="ui-search">Buscar envío, cliente o matrícula</span>
            <span className="ui-chip on">
              Necesitan atención <b>17</b>
            </span>
            <span className="ui-chip">
              En ruta <b>1.920</b>
            </span>
            <span className="ui-chip">
              Pendientes <b>412</b>
            </span>
            <span className="ui-chip">
              Entregados <b>735</b>
            </span>
          </div>
          <div className="ui-body">
            <table className="ui-table">
              <thead>
                <tr>
                  <th>Envío</th>
                  <th>Cliente</th>
                  <th>Destino</th>
                  <th>Estado</th>
                  <th>Compromiso</th>
                </tr>
              </thead>
              <tbody>
                <tr className="grupo">
                  <td colSpan={5}>Necesitan atención · 17</td>
                </tr>
                <Filas filas={atencion} sel={["ZN-48213"]} />
                <tr className="grupo">
                  <td colSpan={5}>En ruta · 1.920</td>
                </tr>
                <Filas filas={enRuta} />
              </tbody>
            </table>
            <aside className="ui-panel">
              <div>
                <p className="ui-h2">ZN-48213 · Ferretería Albar</p>
                <span className="ui-sub">12 bultos · 480 kg · Vehículo 4312</span>
              </div>
              <div className="ui-alerta">
                <b>Retraso previsto de 2 h 10 min</b>
                <span>Avería en la A-23. El compromiso de entrega de las 13:40 no se cumplirá.</span>
              </div>
              <Ruta />
              <dl className="ui-kv">
                <dt>Conductor</dt>
                <dd>Javier L.</dd>
                <dt>Vehículo libre</dt>
                <dd>4288 · a 18 min</dd>
                <dt>Contacto</dt>
                <dd>Almacén, 8:00 a 14:00</dd>
              </dl>
              <ul className="ui-eventos">
                <li className="err">
                  <span className="ui-muted">10:52</span>
                  <i />
                  <span>Vehículo parado, aviso del conductor</span>
                </li>
                <li className="ok">
                  <span className="ui-muted">08:14</span>
                  <i />
                  <span>Salida del centro</span>
                </li>
                <li className="ok">
                  <span className="ui-muted">07:40</span>
                  <i />
                  <span>Carga completada</span>
                </li>
              </ul>
              <div className="ui-row">
                <span className="ui-btn">Reasignar a 4288</span>
                <span className="ui-btn sec">Avisar al cliente</span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

const todos = [...atencion, ...enRuta];
const desordenados = [enRuta[0], atencion[2], enRuta[1], enRuta[2], atencion[0], enRuta[3], atencion[3], enRuta[4], atencion[1]];

function Cabeza5({ check }: { check?: boolean }) {
  return (
    <thead>
      <tr>
        {check && <th />}
        <th>Envío</th>
        <th>Cliente</th>
        <th>Destino</th>
        <th>Estado</th>
        <th>Compromiso</th>
      </tr>
    </thead>
  );
}

export const fragmentosLogistica: Record<string, (estado: "antes" | "despues") => React.ReactNode> = {
  "log-tabla": (estado) =>
    estado === "antes" ? (
      <div className="ui">
        <table className="ui-table densa">
          <thead>
            <tr>
              {["ID", "Cliente", "Orig.", "Dest.", "Kg", "Bul.", "Veh.", "Cond.", "Sal.", "ETA", "Estado", "Prio.", "Zona", "Obs."].map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {todos.slice(0, 10).map((f, i) => (
              <tr key={f.id}>
                <td className="ui-id">{f.id.slice(3)}</td>
                <td>{f.cliente.split(" ")[0]}</td>
                <td>ZGZ</td>
                <td>{f.destino.slice(0, 4)}.</td>
                <td>{120 + i * 37}</td>
                <td>{3 + (i % 5)}</td>
                <td>{4300 - i * 3}</td>
                <td>{["JL", "MR", "AP", "SG", "TC"][i % 5]}</td>
                <td>07:{10 + i * 4}</td>
                <td>{f.eta.slice(0, 5)}</td>
                <td>{f.estado.split(" ")[0]}</td>
                <td>{["A", "B", "B", "C"][i % 4]}</td>
                <td>N{(i % 3) + 1}</td>
                <td>{i % 3 === 0 ? "Ver" : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="ui" style={{ width: "56em", fontSize: "clamp(5px, calc(100cqi / 56), 10px)", height: "35em" }}>
        <div className="ui-body" style={{ gridTemplateColumns: "minmax(0,1fr) 13em", height: "35em" }}>
          <table className="ui-table">
            <Cabeza5 />
            <tbody>
              <Filas filas={todos.slice(0, 9)} sel={["ZN-48213"]} />
            </tbody>
          </table>
          <aside className="ui-panel">
            <p className="ui-h2">ZN-48213</p>
            <dl className="ui-kv" style={{ gridTemplateColumns: "5em 1fr" }}>
              <dt>Bultos</dt>
              <dd>12</dd>
              <dt>Peso</dt>
              <dd>480 kg</dd>
              <dt>Vehículo</dt>
              <dd>4312</dd>
              <dt>Salida</dt>
              <dd>08:14</dd>
              <dt>Zona</dt>
              <dd>Norte 2</dd>
            </dl>
          </aside>
        </div>
      </div>
    ),
  "log-incidencias": (estado) => (
    <div className="ui">
      <table className="ui-table">
        <Cabeza5 />
        <tbody>
          {estado === "antes" ? (
            <Filas filas={[...desordenados].sort((a, b) => a.id.localeCompare(b.id))} />
          ) : (
            <>
              <tr className="grupo">
                <td colSpan={5}>Necesitan atención · 4</td>
              </tr>
              <Filas filas={atencion} />
              <tr className="grupo">
                <td colSpan={5}>En ruta · 1.920</td>
              </tr>
              <Filas filas={enRuta.slice(0, 3)} />
            </>
          )}
        </tbody>
      </table>
    </div>
  ),
  "log-bloque": (estado) =>
    estado === "antes" ? (
      <div className="ui">
        <table className="ui-table">
          <thead>
            <tr>
              <th>Envío</th>
              <th>Destino</th>
              <th>Estado</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {enRuta.concat(atencion.slice(2)).map((f) => (
              <tr key={f.id}>
                <td className="ui-id">{f.id}</td>
                <td>{f.destino}</td>
                <td>
                  <Estado tono="warn">Carretera cortada</Estado>
                </td>
                <td>
                  <span className="ui-btn sec">Reprogramar</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="ui" style={{ display: "flex", flexDirection: "column" }}>
        <div className="ui-bulk">
          <b>8 seleccionados</b>
          <span className="ui-spacer" />
          <span className="ui-btn">Reprogramar a mañana</span>
          <span className="ui-btn ghost">Avisar a clientes</span>
        </div>
        <table className="ui-table">
          <Cabeza5 check />
          <tbody>
            <Filas filas={enRuta.concat(atencion.slice(2))} sel={enRuta.concat(atencion.slice(2)).map((f) => f.id)} check />
          </tbody>
        </table>
      </div>
    ),
};
