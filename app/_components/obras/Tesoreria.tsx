// EJEMPLO: pantallas ficticias del caso "Conciliación bancaria para pymes".

type Par = {
  fecha: string;
  concepto: string;
  importe: string;
  factura: string;
  cliente: string;
  total: string;
  confianza: number;
  motivos: [string, "si" | "no"][];
};

const pares: Par[] = [
  {
    fecha: "03 oct",
    concepto: "TRANSF. RECAMBIOS DEL EBRO SL",
    importe: "1.284,60 €",
    factura: "F-2024-0918",
    cliente: "Recambios del Ebro",
    total: "1.284,60 €",
    confianza: 64,
    motivos: [
      ["Importe exacto", "si"],
      ["Fecha +9 días", "no"],
      ["Referencia distinta", "no"],
    ],
  },
  {
    fecha: "03 oct",
    concepto: "RECIBO SUMINISTRO ELECTRICO",
    importe: "−412,18 €",
    factura: "Proveedor 0331",
    cliente: "Suministro eléctrico",
    total: "412,18 €",
    confianza: 71,
    motivos: [
      ["Importe exacto", "si"],
      ["Proveedor habitual", "si"],
      ["Sin número de factura", "no"],
    ],
  },
  {
    fecha: "04 oct",
    concepto: "INGRESO TPV 00482",
    importe: "2.905,00 €",
    factura: "Ventas TPV",
    cliente: "Cierre de caja 03/10",
    total: "2.911,40 €",
    confianza: 58,
    motivos: [
      ["Diferencia de 6,40 €", "no"],
      ["Fecha coincide", "si"],
    ],
  },
  {
    fecha: "04 oct",
    concepto: "TRANSF. CONSTRUCCIONES GALLEGO",
    importe: "8.470,00 €",
    factura: "F-2024-0931",
    cliente: "Construcciones Gallego",
    total: "8.470,00 €",
    confianza: 69,
    motivos: [
      ["Importe exacto", "si"],
      ["Pagador distinto", "no"],
    ],
  },
  {
    fecha: "05 oct",
    concepto: "CARGO SEGURO FLOTA",
    importe: "−960,32 €",
    factura: "Póliza 22-118",
    cliente: "Seguro de flota",
    total: "960,32 €",
    confianza: 74,
    motivos: [
      ["Importe exacto", "si"],
      ["Periodicidad mensual", "si"],
      ["Póliza sin vincular", "no"],
    ],
  },
];

function FilaPar({ p, sel, explicada = true }: { p: Par; sel?: boolean; explicada?: boolean }) {
  return (
    <div className={`ui-par${sel ? " sel" : ""}`}>
      <div className="ui-par__lado">
        <span className="ui-muted">{p.fecha} · Banco</span>
        <b>{p.concepto}</b>
        <span className="ui-par__importe">{p.importe}</span>
      </div>
      <div className={`ui-enlace ${explicada ? "duda" : ""}`} />
      <div className="ui-par__lado">
        <span className="ui-muted">{p.factura}</span>
        <b>{p.cliente}</b>
        <span className="ui-par__importe">{p.total}</span>
      </div>
      {explicada ? (
        <div className="ui-confianza">
          <span className="ui-muted">Confianza {p.confianza} %</span>
          <div className="ui-medidor duda">
            <i style={{ width: `${p.confianza}%` }} />
          </div>
          <div className="ui-motivos">
            {p.motivos.map(([m, t]) => (
              <span key={m} className={t}>
                {m}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <span className="ui-badge ac">Sugerido</span>
      )}
    </div>
  );
}

export function HeroTesoreria() {
  return (
    <div className="ui ui--tesoreria">
      <div className="ui-app">
        <aside className="ui-side">
          <div className="ui-logo">
            <i />
            Cuadra
          </div>
          <div className="ui-nav on">
            Bandeja <em>23</em>
          </div>
          <div className="ui-nav">Movimientos</div>
          <div className="ui-nav">Facturas</div>
          <div className="ui-nav">
            Reglas <em>41</em>
          </div>
          <div className="ui-nav">Cierre del mes</div>
          <div className="ui-nav">Clientes</div>
        </aside>
        <div className="ui-main">
          <div className="ui-head">
            <div>
              <p className="ui-h1">Bandeja de octubre</p>
              <span className="ui-sub">Talleres Moncayo S.L. · 2.014 movimientos importados</span>
            </div>
            <div className="ui-row">
              <span className="ui-btn sec">Importar extracto</span>
              <span className="ui-btn">Aceptar 1.742 seguras</span>
            </div>
          </div>
          <div className="ui-tools">
            <span className="ui-chip">
              Seguras <b>1.742</b>
            </span>
            <span className="ui-chip on">
              Dudosas <b>23</b>
            </span>
            <span className="ui-chip">
              Sin pareja <b>9</b>
            </span>
            <span className="ui-chip">
              Conciliadas <b>240</b>
            </span>
          </div>
          <div className="ui-body">
            <div>
              {pares.map((p, i) => (
                <FilaPar key={p.concepto} p={p} sel={i === 1} />
              ))}
              <div className="ui-toast">
                <span>
                  Has emparejado dos veces «RECIBO SUMINISTRO ELECTRICO» con el mismo proveedor. ¿Lo conviertes en regla?
                </span>
                <span className="ui-btn">Crear regla</span>
              </div>
            </div>
            <aside className="ui-panel">
              <div>
                <p className="ui-h2">Por qué esta sugerencia</p>
                <span className="ui-sub">Recibo del 3 de octubre · 412,18 €</span>
              </div>
              <dl className="ui-kv">
                <dt>Importe</dt>
                <dd>Coincide al céntimo</dd>
                <dt>Proveedor</dt>
                <dd>11 pagos previos</dd>
                <dt>Periodicidad</dt>
                <dd>Mensual, días 2 a 4</dd>
                <dt>Falta</dt>
                <dd>Número de factura</dd>
              </dl>
              <div className="ui-alerta" style={{ background: "#fff8e6", boxShadow: "inset 0 0 0 1px #f0d48a" }}>
                <b style={{ color: "#9a6200" }}>Revisa antes de aceptar</b>
                <span>La factura de septiembre llegó por 398,40 €. Puede ser una regularización.</span>
              </div>
              <div className="ui-row">
                <span className="ui-btn">Aceptar pareja</span>
                <span className="ui-btn sec">Buscar otra</span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

const extracto = [
  ["01 oct", "TRANSF. TALLERES JALON", "640,00 €"],
  ["01 oct", "CARGO COMISION MANT.", "−12,00 €"],
  ["02 oct", "INGRESO TPV 00479", "1.118,20 €"],
  ["02 oct", "RECIBO TELEFONIA", "−89,90 €"],
  ["02 oct", "TRANSF. AGRO CINCA", "2.340,00 €"],
  ["03 oct", "TRANSF. RECAMBIOS DEL EBRO SL", "1.284,60 €"],
  ["03 oct", "RECIBO SUMINISTRO ELECTRICO", "−412,18 €"],
  ["03 oct", "INGRESO TPV 00480", "978,45 €"],
  ["03 oct", "CARGO NOMINA 09", "−14.210,00 €"],
  ["04 oct", "INGRESO TPV 00482", "2.905,00 €"],
  ["04 oct", "TRANSF. CONSTRUCCIONES GALLEGO", "8.470,00 €"],
];

export const fragmentosTesoreria: Record<string, (estado: "antes" | "despues") => React.ReactNode> = {
  "tes-sugerencia": (estado) => (
    <div className="ui ui--tesoreria" style={{ width: "52em", fontSize: "clamp(5px, calc(100cqi / 52), 11px)", height: "32.5em" }}>
      {pares.slice(0, 4).map((p) => (
        <FilaPar key={p.concepto} p={p} explicada={estado === "despues"} />
      ))}
    </div>
  ),
  "tes-bandeja": (estado) =>
    estado === "antes" ? (
      <div className="ui ui--tesoreria">
        <table className="ui-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Concepto</th>
              <th>Importe</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {extracto.map(([f, c, i]) => (
              <tr key={c + f}>
                <td>{f}</td>
                <td>{c}</td>
                <td>{i}</td>
                <td>
                  <span className="ui-badge">Pendiente</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="ui ui--tesoreria" style={{ width: "52em", fontSize: "clamp(5px, calc(100cqi / 52), 11px)", height: "32.5em" }}>
        <div className="ui-tools">
          <span className="ui-chip on">
            Dudosas <b>23</b>
          </span>
          <span className="ui-chip">
            Sin pareja <b>9</b>
          </span>
          <span className="ui-spacer" />
          <span className="ui-badge ok">1.742 seguras aceptadas</span>
        </div>
        {pares.slice(0, 3).map((p) => (
          <FilaPar key={p.concepto} p={p} />
        ))}
      </div>
    ),
  "tes-regla": (estado) =>
    estado === "antes" ? (
      <div className="ui ui--tesoreria" style={{ padding: "1.4em", display: "flex", flexDirection: "column", gap: "1em" }}>
        <p className="ui-h2">Configuración › Reglas › Nueva regla</p>
        <dl className="ui-kv" style={{ gridTemplateColumns: "10em 1fr" }}>
          <dt>Si el concepto contiene</dt>
          <dd>
            <span className="ui-search" style={{ display: "block" }}>
              Escribe un texto
            </span>
          </dd>
          <dt>Y el importe está entre</dt>
          <dd>
            <span className="ui-search" style={{ display: "block" }}>
              Mínimo y máximo
            </span>
          </dd>
          <dt>Entonces asignar a</dt>
          <dd>
            <span className="ui-search" style={{ display: "block" }}>
              Selecciona una cuenta
            </span>
          </dd>
        </dl>
        <div className="ui-row">
          <span className="ui-btn">Guardar regla</span>
        </div>
      </div>
    ) : (
      <div className="ui ui--tesoreria" style={{ width: "52em", fontSize: "clamp(5px, calc(100cqi / 52), 11px)", height: "32.5em" }}>
        {pares.slice(0, 2).map((p, i) => (
          <FilaPar key={p.concepto} p={p} sel={i === 1} />
        ))}
        <div className="ui-toast">
          <span>Has emparejado dos veces este recibo con el mismo proveedor. ¿Lo conviertes en regla?</span>
          <span className="ui-btn">Crear regla</span>
        </div>
      </div>
    ),
};
