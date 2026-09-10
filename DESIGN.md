---
name: Xavier Pascual Portfolio
description: Product design portfolio for complex systems, built as a Munich '72 / Barcelona '92 style identity program.
colors:
  ink: "#121316"
  paper: "#ffffff"
  silver: "#d9dcdf"
  field-logistica: "#3fa9f5"
  field-clinica: "#2bc48a"
  field-sistema: "#ff7a1a"
  field-tesoreria: "#ffd230"
  ink-2: "color-mix(in oklab, #121316 78%, #ffffff)"
  rule: "color-mix(in oklab, #121316 88%, #ffffff)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 1.1rem + 4.1vw, 5.6rem)"
    fontWeight: 820
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.1rem + 2.4vw, 3.6rem)"
    fontWeight: 780
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 122"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.3rem, 1.1rem + 0.6vw, 1.6rem)"
    fontWeight: 720
    lineHeight: 1.12
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 112"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1rem + 0.45vw, 1.42rem)"
    fontWeight: 440
    lineHeight: 1.38
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
    fontVariation: "'wdth' 100"
  data:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 560
    lineHeight: 1.3
    letterSpacing: "0.01em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 75"
  note:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    fontVariation: "'wdth' 82"
  action:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 720
    lineHeight: 1
    fontVariation: "'wdth' 112"
  nav:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.975rem"
    fontWeight: 620
    fontVariation: "'wdth' 88"
  wordmark:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 830
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
rounded:
  none: "0"
  circle: "50%"
spacing:
  gutter: "clamp(1rem, 3.2vw, 2.75rem)"
  col-gap: "clamp(0.75rem, 1.8vw, 1.5rem)"
  bar: "4.25rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.3rem 0.95rem 1.4rem"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.3rem 0.95rem 1.4rem"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
  top-bar:
    height: "{spacing.bar}"
    typography: "{typography.nav}"
  nav-link:
    typography: "{typography.nav}"
    padding: "0.4rem 0"
  legend-item:
    padding: "1rem clamp(0.75rem, 1.4vw, 1.25rem)"
    rounded: "{rounded.none}"
  meta-list:
    typography: "{typography.data}"
  specimen-frame:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
  specimen-titlebar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "0.55rem 0.9rem"
  matrix-mark-responsible:
    size: "1.15rem"
    rounded: "{rounded.none}"
  matrix-mark-none:
    size: "0.4rem"
    rounded: "{rounded.circle}"
---

# Design System: Xavier Pascual Portfolio

## Overview

**Creative North Star: "The Identity Program"**

The portfolio is built like a civic identity program in the line of Otl Aicher's Munich '72 and Trias's Barcelona '92. Order is the argument: a site that claims to make dense B2B systems legible has to show that discipline itself. Each case study owns one flat, saturated field and one solid geometric pictogram. The page ground takes on the field of the case in view, and ink, one type family and a strict 12-column grid hold everything else steady.

The world is flat and rectilinear. Color arrives only as whole fields, never as decoration, and structure is drawn in 2px ink rules. Everything else is typography: Archivo is used as a numbered width × weight family, the way Univers was, with extended heavy cuts for display, normal width for reading and condensed tabular cuts for data. Coded product specimens stand in for the work. They sit in square, ink-titled white frames and use their own UI font and tokens, so they read as another company's product placed inside the program.

The direction explicitly rejects the category default for designer portfolios: a friendly intro hero followed by a grid of rounded mockup cards on pastel.

**Key Characteristics:**
- One saturated field per case; the whole page recolors to the case in view.
- Solid pictograms on a 48-unit grid, using only 0/45/90° edges and whole circles.
- A single family (Archivo) whose role is set by width and weight, not by switching typefaces.
- Square corners, no drop shadows, no color gradients.
- 2px ink rules for structure, 1px mixed-ink hairlines inside rows.
- Specimens of the work framed as flat white screens under an ink title bar.

## Colors

The palette is ink, paper and silver plus four saturated case fields, and each field is used only as a full ground.

### Primary
- **Program Ink** (#121316): the single voice of the chrome. Used for all text, 2px rules, button fills, specimen title bars, the focus ring and pictograms (which fill with `currentColor`). It also works as a field: the profile section uses ink as its ground, with white as its ink.

### Secondary (case fields)
Each case owns exactly one field, and only as a ground: the case's plate on the home page, its case header, and the "next case" block that pulls the following case's field onto the current page.
- **Logistics Sky Blue** (#3fa9f5): the logistics console case.
- **Clinic Green** (#2bc48a): the surgical scheduling case.
- **System Orange** (#ff7a1a): the multi-brand design system case.
- **Treasury Yellow** (#ffd230): the SME bank reconciliation case.

### Neutral
- **Paper White** (#ffffff): the default field. Case bodies and the case index sit on paper, and specimen screens are always white.
- **Aluminum Silver** (#d9dcdf): the contact field, a cool neutral ground that closes the page.
- **Secondary Ink** (`ink-2`, 78% ink mixed into the field in OKLab): secondary text such as meta labels, table heads, small notes and area descriptions. The mix is live: it is re-evaluated against whatever field is in view, so it is always a darkened tone of the current ground, never a fixed gray. The frontmatter value shows it resolved on paper.
- **Hairline** (`rule`, 88% ink mixed into the field): 1px dividers between rows inside tables and lists. It is live-mixed like Secondary Ink.

`--negro` and `--blanco` are fixed aliases of ink and paper. They exist because `--ink` itself is reassigned at runtime: the ink field is painted with `--negro`, and its ink swaps to `--blanco`.

### Named Rules
**The Field Is The Color Rule.** Saturated color appears only as a full-bleed field. Field colors never appear as text, borders, icons or small accents on another ground. There are two sanctioned exceptions. A primary button's label is the current field knocked out of an ink block. Inside a case body, the "Responsable" mark in the role matrix is filled with that case's own field and outlined in ink.

**The Ink On Every Field Rule.** Text on a saturated or light field is always ink (at least 7.1:1 on every field) or Secondary Ink (at least 5.2:1). White text appears only on the ink field.

## Typography

**Display Font:** Archivo (variable, `wdth` axis loaded), with Helvetica Neue, Arial, sans-serif
**Body Font:** Archivo, same family
**Label/Mono Font:** Archivo at condensed width with tabular numerals. There is no separate mono.

**Character:** One grotesque family numbered like Univers. The extended heavy cuts carry authority at poster scale, the normal width reads calmly, and the condensed tabular cuts make data feel like signage.

Width is set in code with `font-stretch` (125% extended down to 75% condensed), which drives Archivo's `wdth` axis. The frontmatter records it as `fontVariation`.

### Hierarchy
- **Display** (820, wdth 125, clamp 2.6–5.6rem, line-height 0.94, -0.035em, balanced): case titles, the contact headline and the next-case title. Inside a case plate it is sized from its column (`min(10.4cqi, 5.4rem)`), so the longest word always fits.
- **Headline** (780, wdth 122, clamp 2–3.6rem, line-height 1, -0.03em): section titles such as "Índice de casos", the profile statement and case-body sections.
- **Title** (720, wdth 112, clamp 1.3–1.6rem, line-height 1.12): area rows and decision titles.
- **Lead** (440, normal width, clamp 1.15–1.42rem, line-height 1.38): case summaries and the opening paragraph of a section, capped at 34–44ch depending on context.
- **Body** (400, 1.0625rem, line-height 1.62, max 68ch): running prose.
- **Data** (560, wdth 75, 0.875rem, line-height 1.3, +0.01em, tabular numerals): meta lists, table heads, index columns and the footer.
- **Note** (500, wdth 82, 0.8125rem, Secondary Ink): small secondary annotations.

Local derivations stay inside the family and keep the same logic. Index titles use 740 at wdth 115. Result figures use 820 at wdth 125, and their "before" value is condensed to wdth 90 in Secondary Ink. The learning pull quote uses 640 at wdth 112 with a 32ch measure. Buttons use Action (720, wdth 112); the wordmark is 830 at wdth 125.

### Named Rules
**The One Family Rule.** Portfolio chrome is set only in Archivo. Hierarchy comes from width and weight together: wide and heavy for display, normal for reading, narrow for data. The system UI font belongs to the specimens alone.

**The Tabular Data Rule.** Numbers in data (years, counts, before/after metrics) always use tabular numerals, and data labels use the condensed width.

## Layout

A strict 12-column grid (`repeat(12, minmax(0, 1fr))`) inside a shell that is at most 1680px wide, with a fluid side gutter and a fluid column gap (see spacing tokens). A sticky top bar of fixed height (4.25rem) sits over every page, and scroll padding matches it so anchor jumps land below the bar.

- **Label column, content columns.** The reused section grammar is a title in columns 1–4 and content in columns 5–12. It appears in the case index, every case-body section and every decision. The profile's area rows split into three bands (1–4 title, 5–8 description, 9–12 linked cases).
- **Specimens bleed.** A specimen framed at the side of a grid cancels the gutter with a negative margin, so the work runs off the viewport edge.
- **Viewport-scaled rhythm.** Section padding uses clamp values keyed to viewport width (roughly 3–10rem). Case plates fill `100svh` minus the bar. Where the legend band must stay in the first viewport, vertical gaps are keyed to viewport height.
- **Responsive.** At 62rem and below, every multi-column block collapses to one column, and the facts are reordered with `display: contents` so the work follows the title: pictogram, title, specimen, then summary, meta and action. Specimens then show near 1:1 as a pannable horizontal crop (max 27rem tall) instead of a shrunken console. At 40rem the index drops its data columns and decision fragments stack. At 30rem the legend becomes a single column and the top bar tightens.

### Named Rules
**The Margin Line Rule.** Section rules start and end on the gutter line, like the top bar's rule. They never run edge to edge.

## Elevation & Depth

The system is completely flat. It has no drop shadows, no blur and no layered surfaces. The only thing that reads as depth is the field changing under the reader. Frames and rules are drawn as 2px ink strokes. Where a stroke must not change the box size (outlined buttons, matrix marks), it is drawn as an inset ring, which is still a stroke and not elevation.

### Shadow Vocabulary
- **Inset stroke** (`box-shadow: inset 0 0 0 2px var(--ink)`): the outline of an outlined button, a button on hover, and the matrix marks. A border substitute that has no offset and no blur.

### Named Rules
**The Flat Program Rule.** Surfaces never lift. Emphasis comes from ink mass, field color and type width, never from shadow. The specimens' internal shadows are part of the depicted product and do not count.

## Shapes

The form language is square. Chrome has zero radius everywhere. Structure uses 2px ink strokes (the top bar's rule, meta tops, the index, legend dividers, specimen frames, section rules), and 1px Hairline rules separate rows inside a block.

Pictograms are solid `currentColor` shapes on a 48-unit grid (viewBox `4 4 40 40`) made only of 0°, 45° and 90° edges plus whole circles: a truck, a cross, a 2 × 2 of squares with one turned 45°, and a pair of opposed arrows. Whole circles (truck wheels, the "no participa" dot) are the only curves, and 45° diamonds are the only diagonals. The arrow glyph used in actions is drawn the same way.

A dashed 2px frame marks a "before" state and a solid frame marks "after".

## Components

### Buttons
Rectangles of ink.
- **Shape:** square corners (0 radius).
- **Primary:** an ink block whose label is the current field color knocked out of the ink. Uses the Action type (1rem, 720, wdth 112, line-height 1) and slightly asymmetric padding (0.95rem 1.3rem 0.95rem 1.4rem) that accounts for the trailing arrow.
- **Hover:** the fill empties to transparent and the label turns ink inside a 2px inset ink stroke. The trailing arrow nudges 0.25em to the right. Transitions run over 260ms (arrow 320ms) on the program ease.
- **Active:** moves down 1px.
- **Focus:** the global focus ring, a 3px solid ink outline at a 3px offset.
- **Outline:** a transparent button with an ink label and a 2px inset ink stroke. It fills with ink on hover, the reverse of Primary. Used as the second action beside a primary.

### Navigation (top bar)
- **Style:** sticky and painted with the current field, so it recolors with the page. It is 4.25rem tall and closed by a 2px ink rule on the gutter line.
- **Wordmark:** the name at 830, wdth 125. Beside it, a condensed descriptor in Secondary Ink that hides at 62rem and below.
- **Links:** Nav type (0.975rem, 620, wdth 88). An ink underline 2px thick draws in from the left over 380ms on hover and stays drawn for `aria-current="page"`.
- **Mobile:** the same bar with tighter gaps; nothing collapses into a menu.

### Case Legend (pictogram index)
A four-cell band of pictogram plus case name, with the domain in small Secondary Ink below. It is ruled on top and between cells with 2px ink. On hover or focus the cell takes a 9% ink tint over 300ms and previews that case's field on the whole page. It goes to two columns at 62rem and one at 30rem.

### Case Index Row
A ruled list row: pictogram, title (740, wdth 115), domain and year in Data type, and a trailing arrow. On hover or focus the row gains 0.75rem of inline padding and the arrow nudges 0.3rem, over 360ms. Hovering a row also previews its field.

### Meta List
A two-column definition list in Data type: labels in Secondary Ink, values in ink, a 2px ink rule on top. It carries facts such as domain, role, team, duration, platform and year.

### Specimen Frame
- **Frame:** a flat white screen inside a 2px ink border with square corners, clipped. When the frame bleeds to the viewport edge it drops its bottom border.
- **Title bar:** an ink band in white condensed type (0.78rem, 620, wdth 82) that names the depicted product.
- **Content:** a coded product UI exposed to assistive tech as a single described image. It uses its own system font and `--u-*` tokens (rounded controls, pills, soft shadows, per-product accent blues and greens). That is specimen content showing the work, not portfolio tokens, and none of it transfers to the chrome.

### Before / After Fragment
Two cropped specimen screens side by side (16:10). "Antes" has a dashed 2px ink frame and "Después" a solid one. Each has a caption: the state in bold (760, wdth 110), then a description in Secondary Ink.

### Role Matrix
A responsibility table in which each cell holds one mark. "Responsable" is a 1.15rem square filled with the case's field inside a 2px inset ink stroke. "Participa" is the same square left empty. "No participa" is a 0.4rem Secondary Ink dot. A legend repeats the three marks. The table scrolls horizontally inside its own frame below 36rem.

### Field (signature interaction)
Every full-width zone declares its field. As a zone crosses a reading line 42% down the viewport, the whole page ground eases to that field over 720ms (`cubic-bezier(0.16, 1, 0.3, 1)`) through registered `--field` and `--ink` properties. Hovering or focusing any link that carries a field preview (legend cells, index rows, area links) shows that case's field and releases it on leave. A zone marked as an ink field swaps the ink to white. At the bottom of the page the last zone wins. The first paint is server-rendered in the correct field. Without JavaScript each zone paints its own ground. Under `prefers-reduced-motion` the recolor is instant and smooth scrolling is off. The next-case block at the foot of every case carries the following case's field, so the recolor continues across pages.

### Pictogram
The program's signature mark. It appears at 96px on a plate, at poster scale in a case header (clamp 7–13.5rem), at 2.6rem in the index and at 1.5rem in area links. It is always solid, always ink (or white on the ink field), and never outlined or tinted.

## Do's and Don'ts

### Do:
- **Do** give every new case study exactly one field and one pictogram, drawn on the 48-unit grid with only 0/45/90° edges and whole circles, filled with `currentColor`.
- **Do** declare every full-width zone's field so the page recolors to it. Use ink-on-white swapping only for the ink field.
- **Do** set all chrome in Archivo and pick width together with weight by role: wdth 125/820 for display, normal for reading, wdth 75 with tabular numerals for data.
- **Do** draw structure with 2px ink rules on the gutter line, and use 1px Hairline rules only between rows inside a block.
- **Do** put titles in columns 1–4 and content in columns 5–12 for new sections.
- **Do** show work as coded specimens in the white, ink-titled, square frame, bleeding off the viewport edge where the grid allows.
- **Do** keep all motion on the program ease (`cubic-bezier(0.16, 1, 0.3, 1)`) at 260–380ms for state changes and 720ms for the field.

### Don't:
- **Don't** round corners on portfolio chrome. Radius exists only inside the specimens and as whole circles.
- **Don't** use drop shadows, blur or color gradients. The inset 2px ink stroke is a border, and the single-color gradient behind the nav underline is only an animatable bar.
- **Don't** use field colors as text, borders, icons or accents on another ground. The knocked-out button label and the Responsable matrix mark are the only exceptions.
- **Don't** put white text on a saturated field; ink carries every field except the ink field itself.
- **Don't** bring a second typeface, or the specimens' `--u-*` tokens, into portfolio chrome.
- **Don't** build the category default this world rejects: a friendly intro hero, then a grid of rounded mockup cards on pastel.
