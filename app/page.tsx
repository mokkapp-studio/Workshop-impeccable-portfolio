import Link from "next/link";
import { CampoInicial } from "./_components/Campo";
import { Pantalla } from "./_components/Pantalla";
import { Flecha, Pictograma } from "./_components/Pictograma";
import { obras } from "./_components/obras";
import { casos, getCaso } from "./_data/casos";

const campo = (color: string) => ({ "--seccion": color }) as React.CSSProperties;

// EJEMPLO: descripciones de ejemplo; los casos enlazados son los ficticios.
const areas = [
  {
    titulo: "Flujos densos",
    texto: "Operaciones, agendas y bandejas de trabajo donde cada minuto y cada clic cuentan.",
    casos: ["consola-logistica", "agenda-quirurgica"],
  },
  {
    titulo: "Herramientas B2B",
    texto: "Productos para equipos profesionales, con permisos, roles y datos que no caben en una pantalla.",
    casos: ["conciliacion-pymes", "consola-logistica"],
  },
  {
    titulo: "Sistemas de diseño a escala",
    texto: "Tokens, componentes y temas que permiten a varios equipos y marcas construir con coherencia.",
    casos: ["sistema-multimarca"],
  },
];

export default function Home() {
  return (
    <main>
      <CampoInicial color={casos[0].campo} />
      <h1 className="sr-only">Xavier Pascual, diseño de producto para sistemas complejos</h1>

      <div id="casos">
        {casos.map((caso, i) => {
          const obra = obras[caso.slug];
          return (
            <section
              key={caso.slug}
              id={caso.slug}
              className={`zona placa shell${i % 2 ? " placa--par" : ""}`}
              data-campo={caso.campo}
              style={campo(caso.campo)}
              aria-labelledby={`t-${caso.slug}`}
            >
              <div className="grid12 placa__cuerpo">
                <div className="placa__info">
                  <Pictograma id={caso.pictograma} className="placa__picto" />
                  <h2 id={`t-${caso.slug}`} className="t-display">
                    {caso.titulo}
                  </h2>
                  <p className="t-lead placa__resumen">{caso.resumen}</p>
                  <dl className="meta t-data">
                    <dt>Dominio</dt>
                    <dd>{caso.dominio}</dd>
                    <dt>Rol</dt>
                    <dd>{caso.rol}</dd>
                    <dt>Año</dt>
                    <dd>{caso.anio}</dd>
                  </dl>
                  <p className="aviso-ficticio">Caso de ejemplo: contenido ficticio.</p>
                  <div className="placa__accion">
                    <Link className="btn" href={`/casos/${caso.slug}`}>
                      Ver el caso <Flecha />
                    </Link>
                  </div>
                </div>
                <div className="placa__obra">
                  <Pantalla producto={obra.producto} descripcion={obra.descripcion}>
                    <obra.Hero />
                  </Pantalla>
                </div>
              </div>
              {i === 0 && (
                <nav aria-label="Leyenda de casos">
                  <ul className="leyenda">
                    {casos.map((c) => (
                      <li key={c.slug}>
                        <a href={`#${c.slug}`} data-campo-previa={c.campo}>
                          <Pictograma id={c.pictograma} />
                          <span>
                            {c.titulo}
                            <small>{c.dominio}</small>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </section>
          );
        })}
      </div>

      <section
        id="indice"
        className="zona shell indice"
        data-campo="var(--paper)"
        style={campo("var(--paper)")}
        aria-labelledby="t-indice"
      >
        <div className="grid12">
          <h2 id="t-indice" className="t-h2 indice__t">
            Índice de casos
          </h2>
          <ul className="indice__lista">
            <li className="indice__cab t-data" aria-hidden>
              <span />
              <span>Caso</span>
              <span>Dominio</span>
              <span>Año</span>
              <span />
            </li>
            {casos.map((c) => (
              <li key={c.slug}>
                <Link href={`/casos/${c.slug}`} data-campo-previa={c.campo}>
                  <Pictograma id={c.pictograma} className="indice__picto" />
                  <span className="indice__titulo">{c.titulo}</span>
                  <span className="indice__dato t-data">{c.dominio}</span>
                  <span className="indice__dato t-data">{c.anio}</span>
                  <Flecha className="indice__flecha" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="perfil"
        className="zona shell perfil"
        data-campo="var(--negro)"
        data-tinta="var(--blanco)"
        style={campo("var(--negro)")}
        aria-labelledby="t-perfil"
      >
        <div className="grid12">
          <h2 id="t-perfil" className="t-h2 perfil__t">
            Diseño productos complejos para que se entiendan.
          </h2>
          <div className="perfil__c t-body">
            <p className="t-lead">
              Soy Xavier Pascual, product designer. Trabajo donde el producto es denso: muchos datos, muchos roles y
              decisiones que cuestan dinero si se toman mal.
            </p>
            <p>
              Mi trabajo empieza antes de las pantallas, entendiendo quién hace qué y qué necesita ver para decidir. Después
              convierto ese mapa en interfaces que ordenan la información por lo que importa, no por cómo está guardada.
            </p>
            <p className="aviso-ficticio">Texto de ejemplo: sustituir por la biografía real.</p>
          </div>
          <ul className="areas">
            {areas.map((a) => (
              <li key={a.titulo} className="areas__fila">
                <h3 className="t-h3">{a.titulo}</h3>
                <p>{a.texto}</p>
                <ul className="areas__casos" aria-label={`Casos de ${a.titulo.toLowerCase()}`}>
                  {a.casos.map((slug) => {
                    const c = getCaso(slug)!;
                    return (
                      <li key={slug}>
                        <Link href={`/casos/${slug}`} data-campo-previa={c.campo}>
                          <Pictograma id={c.pictograma} />
                          <span>{c.titulo}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="contacto"
        className="zona shell contacto"
        data-campo="var(--silver)"
        style={campo("var(--silver)")}
        aria-labelledby="t-contacto"
      >
        <div className="grid12">
          <h2 id="t-contacto" className="t-display contacto__t">
            ¿Un producto complejo que ordenar?
          </h2>
          <p className="t-lead contacto__lead">
            Estoy abierto a puestos de diseño de producto y a proyectos con equipos que construyen herramientas
            complejas. Escríbeme y te respondo en persona.
          </p>
          <div className="contacto__acciones">
            <a className="btn" href="mailto:hola@ejemplo.com">
              hola@ejemplo.com <Flecha />
            </a>
            <a className="btn btn--linea" href="https://www.linkedin.com/" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <p className="aviso-ficticio contacto__aviso">Datos de contacto de ejemplo: pendientes de confirmar.</p>
        </div>
        <footer className="pie t-data">
          <span>© {new Date().getFullYear()} Xavier Pascual</span>
          <span>Los casos publicados son ejemplos con contenido ficticio.</span>
        </footer>
      </section>
    </main>
  );
}
