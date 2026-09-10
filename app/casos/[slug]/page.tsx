import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CampoInicial } from "../../_components/Campo";
import { Fragmento, Pantalla } from "../../_components/Pantalla";
import { Flecha, Pictograma } from "../../_components/Pictograma";
import { fragmento, obras } from "../../_components/obras";
import { casos, getCaso, siguienteCaso } from "../../_data/casos";

export const dynamicParams = false;

export function generateStaticParams() {
  return casos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/casos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const caso = getCaso(slug);
  return caso ? { title: caso.titulo, description: caso.resumen } : {};
}

const marcas = ["No participa", "Participa", "Responsable"];

export default async function CasoPage({ params }: PageProps<"/casos/[slug]">) {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) notFound();

  const obra = obras[caso.slug];
  const sig = siguienteCaso(caso.slug);

  return (
    <main style={{ "--caso": caso.campo } as React.CSSProperties}>
      <CampoInicial color={caso.campo} />

      <header
        className="zona shell caso-cab"
        data-campo={caso.campo}
        style={{ "--seccion": caso.campo } as React.CSSProperties}
      >
        <div className="grid12 caso-cab__rej">
          <div className="caso-cab__titulo">
            <h1 className="t-display">{caso.titulo}</h1>
            <p className="t-lead caso-cab__lead">{caso.resumen}</p>
          </div>
          <div className="caso-cab__lado">
            <Pictograma id={caso.pictograma} className="caso-cab__picto" />
            <dl className="meta t-data caso-cab__meta">
            <dt>Dominio</dt>
            <dd>{caso.dominio}</dd>
            <dt>Rol</dt>
            <dd>{caso.rol}</dd>
            <dt>Equipo</dt>
            <dd>{caso.equipo}</dd>
            <dt>Duración</dt>
            <dd>{caso.duracion}</dd>
            <dt>Plataforma</dt>
            <dd>{caso.plataforma}</dd>
            <dt>Año</dt>
            <dd>{caso.anio}</dd>
          </dl>
          </div>
        </div>
        <p className="aviso-ficticio caso-cab__aviso">Caso de ejemplo: el cliente, los datos y los resultados son ficticios.</p>
        <div className="caso-cab__obra">
          <Pantalla producto={obra.producto} descripcion={obra.descripcion}>
            <obra.Hero />
          </Pantalla>
        </div>
      </header>

      <div
        className="zona shell caso-cuerpo"
        data-campo="var(--paper)"
        style={{ "--seccion": "var(--paper)" } as React.CSSProperties}
      >
        <section className="caso-sec grid12" aria-labelledby="t-problema">
          <h2 id="t-problema" className="t-h2 caso-sec__t">
            El problema
          </h2>
          <div className="caso-sec__c t-body">
            {caso.problema.texto.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <table className="inventario">
              <caption className="sr-only">Inventario de la complejidad de partida</caption>
              <tbody>
                {caso.problema.inventario.map((item) => (
                  <tr key={item.etiqueta}>
                    <th scope="row">{item.etiqueta}</th>
                    <td>{item.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="caso-sec grid12" aria-labelledby="t-sistema">
          <h2 id="t-sistema" className="t-h2 caso-sec__t">
            El sistema
          </h2>
          <div className="caso-sec__c t-body">
            <p>{caso.sistema.texto}</p>
          </div>
          <div className="caso-sec__ancho">
            <div className="matriz__marco">
              <table className="matriz">
                <caption className="sr-only">Quién hace qué: roles por tarea</caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="sr-only">Rol</span>
                    </th>
                    {caso.sistema.tareas.map((t) => (
                      <th key={t} scope="col">
                        {t}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {caso.sistema.roles.map((rol, r) => (
                    <tr key={rol}>
                      <th scope="row">{rol}</th>
                      {caso.sistema.matriz[r].map((v, t) => (
                        <td key={t}>
                          <span className={`marca marca--${v}`} aria-hidden />
                          <span className="sr-only">{marcas[v]}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="matriz__leyenda t-data" aria-hidden>
              <li>
                <span className="marca marca--2" /> Responsable
              </li>
              <li>
                <span className="marca marca--1" /> Participa
              </li>
              <li>
                <span className="marca marca--0" /> No participa
              </li>
            </ul>
          </div>
        </section>

        <section className="caso-sec" aria-labelledby="t-decisiones">
          <div className="grid12">
            <h2 id="t-decisiones" className="t-h2 caso-sec__t">
              Decisiones
            </h2>
          </div>
          {caso.decisiones.map((d) => (
            <article key={d.titulo} className="decision grid12">
              <div className="decision__txt">
                <h3 className="t-h3">{d.titulo}</h3>
                <p className="t-body">{d.texto}</p>
              </div>
              <div className="decision__frags">
                <Fragmento estado="Antes" texto={d.antes}>
                  {fragmento(d.fragmento, "antes")}
                </Fragmento>
                <Fragmento estado="Después" texto={d.despues}>
                  {fragmento(d.fragmento, "despues")}
                </Fragmento>
              </div>
            </article>
          ))}
        </section>

        <section className="caso-sec grid12" aria-labelledby="t-resultado">
          <h2 id="t-resultado" className="t-h2 caso-sec__t">
            Resultado
          </h2>
          <div className="caso-sec__ancho">
            <p className="t-body">{caso.resultado.texto}</p>
            <table className="resultado">
              <thead className="t-data">
                <tr>
                  <th scope="col">Métrica</th>
                  <th scope="col">Antes</th>
                  <th scope="col">Después</th>
                </tr>
              </thead>
              <tbody>
                {caso.resultado.filas.map((f) => (
                  <tr key={f.metrica}>
                    <th scope="row">{f.metrica}</th>
                    <td className="resultado__antes">{f.antes}</td>
                    <td className="resultado__despues">{f.despues}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="aviso-ficticio">Datos de ejemplo: sustituir por los resultados reales del proyecto.</p>
          </div>
        </section>

        <section className="caso-sec grid12" aria-labelledby="t-aprendizaje">
          <h2 id="t-aprendizaje" className="t-h2 caso-sec__t">
            Lo que aprendí
          </h2>
          <p className="caso-sec__c aprendizaje">{caso.aprendizaje}</p>
        </section>
      </div>

      <Link
        href={`/casos/${sig.slug}`}
        className="zona shell siguiente"
        data-campo={sig.campo}
        style={{ "--seccion": sig.campo } as React.CSSProperties}
      >
        <span className="grid12 siguiente__rej">
          <Pictograma id={sig.pictograma} className="siguiente__picto" />
          <span className="siguiente__txt">
            <span className="t-display siguiente__titulo">{sig.titulo}</span>
            <span className="siguiente__accion">
              Siguiente caso <Flecha />
            </span>
          </span>
        </span>
      </Link>
    </main>
  );
}
