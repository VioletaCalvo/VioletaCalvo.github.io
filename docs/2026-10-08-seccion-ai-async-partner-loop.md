# Sección "AI & Automation": Async Partner Loop

- **Personas:** Violeta Calvo
- **Fecha:** 2026-10-08
- **Aplicación:** violetacalvo.github.io (web personal)

## Contexto

Quiero añadir un caso de estudio de IA a mi web. Antes de tocar nada, revisa la estructura del repo (stack, estilos, si hay versiones ES/FR) y sigue sus convenciones. El copy va en inglés, tal cual; no inventes datos ni cifras.

## Cambios

### 1. Línea en el puesto actual de SustraiLab (Experience)

Bajo los chips, añade una línea enlazada a `#ai`:

> Built an async agent loop that removes the manual relay between my coding sessions and my partner. **Async Partner Loop ↓**

### 2. Sección nueva `id="ai"`, entre Experience y Roots

Mismo estilo que el resto de secciones.

- **Eyebrow:** AI & Automation
- **H2:** Async Partner Loop
- **Subtítulo:** A question-and-answer loop between my coding sessions and my business partner, with no manual relay.

**4 tarjetas en fila** (en móvil, 2x2 o apiladas):

| Título | Texto |
|---|---|
| Ask | Each coding session adds questions to a shared page. |
| Answer | My partner replies when she can, from her phone or by voice. |
| Notify | One tap on "notify" and I get the answers. |
| Act | An hourly agent reads them and continues the work. |

**Bloque con filas etiquetadas:**

- **Problem:** I was the human relay: collecting questions from each coding session, sending them to my partner, gathering her answers and pasting them back to the AI.
- **Solution:** A shared web page on a real-time database. Questions arrive grouped by project and batch. Answers autosave as drafts and sync live. An hourly agent sends new questions, reads the answers and acts on them without my intervention.
- **Result:** My partner answers whenever she can, on her own schedule, and I'm notified with one tap, so I can stay in deep focus instead of context-switching. No manual relay, no chasing answers: the question, answer and action loop runs on its own. I automated it from day one, because relaying information by hand is a design smell, and an engineer should treat it like one.
- **Stack (chips):** Claude · Real-time database · Scheduled agent runs · Voice dictation

### 3. Diseño

- Usa los tokens y componentes ya existentes: tarjetas verdes `#E6EEE8`, bloque crema `#F6F1E6`, tipografía display, chips.
- Debe verse bien en móvil, con gutter mínimo de 16px y sin scroll horizontal.

### 4. Idiomas

Si la web tiene versiones ES/FR, añade las traducciones; si no, solo EN.

## Al terminar

Arranca en local, comprueba escritorio y móvil, y enséñame el resultado antes de hacer commit.

## Referencia visual

Diseño de escritorio en el lienzo "Violeta Calvo · Web CV" (artboard `A · Desktop`), sección "AI & Automation".
