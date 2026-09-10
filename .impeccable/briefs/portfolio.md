# Surface brief: portfolio (home `/` + case template `/casos/[slug]`)

Written by hand: the impeccable launcher was blocked by the harness permission check, so `surface-brief write` and `concept-seed` could not run.

## Scope and mode

- Surfaces: home (`app/page.tsx`) and the reusable case-study template (`app/casos/[slug]/page.tsx`).
- Mode: **Experience**. The work leads from the first viewport.
- Audience: hiring managers and prospective clients, weighted equally (see PRODUCT.md).
- Action: open a case, then get in touch.
- Content: 4 **synthetic** example case studies, labeled as fictional on the page. Every one must be replaced with Xavier's real case studies.
- Build path: code-led (no image generation available).

## Direction contract

THESIS: The portfolio as a rigorous identity program, in the tradition of Aicher's Munich '72 and Trias's Barcelona '92. Order is the proof that complexity has been tamed. It refuses the category default: a friendly intro hero, then a grid of rounded mockup cards on pastel.

OWN-WORLD: Each case owns one flat saturated field and one solid geometric pictogram (built on a 48-unit grid, only 0/45/90° angles). Fields: sky blue #3FA9F5 (logistics), green #2BC48A (clinic), orange #FF7A1A (design system), yellow #FFD230 (treasury), plus white, silver #D9DCDF, and ink #121316. One family, Archivo, used as a numbered width×weight system: extended heavy for display, normal for reading, condensed with tabular numerals for data. Square corners, no shadows or gradients, a strict 12-column grid. Coded UI specimens stand in for the work.

STORY: The visitor sees real-looking product work immediately. Moving through the cases shows breadth across domains inside one discipline. The visitor believes Xavier makes dense B2B systems legible, opens a case, reads its reasoning, and writes.

FIRST VIEWPORT: Full-bleed logistics blue field. Top bar: wordmark left; Casos / Perfil / Contacto right. Columns 1–4: pictogram (96px), extended heavy title, one-line summary, meta, and an ink rectangular "Ver el caso" button. Columns 5–12: the logistics console specimen at large scale, bleeding right and down, with a "Caso de ejemplo" label. Bottom band: a legend of the four cases (pictogram + name).

Adaptations, from build evidence:
- Info spans columns 1–5 and the specimen 6–12. At 1280–1440 the longest title words in extended heavy overflowed four columns (page scrollWidth measured at 1516 on a 1440 viewport).
- Below 62rem the order is pictogram, title, specimen, then summary, meta, button. The specimen is a near-1:1 crop the visitor can pan.
- The ink field carries the profile section, with ink swapped to white.
- Case headers show the pictogram at poster scale.

FORM: Identity program (Munich '72 / Barcelona '92). It was third on my ordered list of three presented directions plus the canon. User-chosen from a hand-derived round. concept-seed was blocked by the harness permission check, so there was no dice roll and there is no seed key.

The unseeded round was disclosed inside the question itself. It read: "Elige la dirección visual del portfolio. Son mis direcciones razonadas; el sorteo de impeccable no pudo ejecutarse." The user answered with that disclosure in front of them, selecting "Programa de identidad".

If the launcher is later permitted, running concept-seed against this brief is offered as an option. Signature interaction: the whole page field recolors to the case in view, on scroll and when hovering the legend. It continues across pages, because the next-case block pulls in the next field.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Real case studies, display name, contact channel, and domains (see PRODUCT.md open decisions).
