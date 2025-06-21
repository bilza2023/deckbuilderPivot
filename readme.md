
# Taleem DeckBuilder v0.3.0 (Timing-Enabled)

A declarative, timing-aware slide deck generator for Taleem.Help presentations.  
Build clean, structured decks that render perfectly in the Taleem Player — now with full slide and item-level timing.

---

## 🚀 Overview

Taleem DeckBuilder is a **script-based compiler** for educational slide decks.

You define:
- Slide types
- End times per slide
- Visibility timing per item

The system automatically tracks slide timing and outputs clean JSON for use in the Player.

---

## 📦 Exports
export {
    DeckBuilder,
    demo_deck
}

---
## 📦 Installation

```bash
npm install deckbuilderpivot
````

---

## 📄 Quickstart Example

```js
import { DeckBuilder } from "deckbuilderpivot";
const deckbuilder = new DeckBuilder();

deckbuilder.s.titleSlide(10, [
  { name: "title", content: "Welcome to Taleem.Help", showAt: 0 }
]);

deckbuilder.s.statistic(20, [
  { name: "number", content: "95%", showAt: 0 },
  { name: "label", content: "Success Rate", showAt: 2 }
]);

deckbuilder.s.imageWithCaption(30, [
  { name: "image", content: "/pivot/box.webp", showAt: 0 },
  { name: "caption", content: "Powered by AI", showAt: 1 }
]);

export const deck = deckbuilder.build();
```

---

## ✅ Features

* 🔹 20 structured slide types
* 🔹 Timing-aware output: `start`, `end`, `showAt`
* 🔹 Auto-managed sequencing (`start` handled internally)
* 🔹 Required `showAt` on every item (default: 0)
* 🔹 Image content is literal — never parsed or validated
* 🔹 Fully compatible with Taleem Player

---

## ⛔ Limitations

* ❌ No layout or render logic (only generates JSON)
* ❌ No slide-level backgrounds yet (global only)
* ❌ No Zod validation (planned)
* ❌ No animations or transitions
* ❌ No support for per-slide theme overrides

---

## 🧱 Slide Types

Each slide is declared using:

```js
deckbuilder.s.slideType(end, [ { name, content, showAt } ]);
```

| Type                    | Description                     |
| ----------------------- | ------------------------------- |
| `titleSlide`            | One-line title                  |
| `twoColumnText`         | Side-by-side comparison         |
| `donutChart`            | Circular percent chart          |
| `barChart`              | Labeled vertical bars           |
| `statistic`             | Big number with label           |
| `table`                 | Data table                      |
| `imageWithTitle`        | Image + title overlay           |
| `imageWithCaption`      | Image + small caption           |
| `imageRightBulletsLeft` | Image right, bullets left       |
| `imageLeftBulletsRight` | Image left, bullets right       |
| `quoteSlide`            | Multi-line animated quote       |
| `imageSlide`            | Full image                      |
| `cornerWordsSlide`      | 4 words/icons in screen corners |
| `titleAndSubtitle`      | Title with subtitle             |
| `bulletList`            | Simple bullet points            |
| `bigNumber`             | Large stat with label           |
| `quoteWithImage`        | Quote with author image         |
| `contactSlide`          | Contact/CTA block               |

---

## 🖼 Image Rules

* Only use image paths provided manually via `imagesList[]`
* Paths are treated as-is — no URL parsing, extensions, or folders
* Fallbacks (if no list provided):

```js
[
  "/pivot/box.webp",
  "/pivot/defaultBg.png",
  "/pivot/fbise9physics.webp",
  "/pivot/banner_brand.png"
]
```

---

## 📤 Output Format

Calling `deckbuilder.build()` returns:

```json
[
  {
    "type": "titleSlide",
    "start": 0,
    "end": 10,
    "data": [
      { "name": "title", "content": "Welcome", "showAt": 0 }
    ]
  },
  {
    "type": "statistic",
    "start": 10,
    "end": 20,
    "data": [
      { "name": "number", "content": "95%", "showAt": 0 },
      { "name": "label", "content": "Success Rate", "showAt": 2 }
    ]
  }
]
```

This JSON is directly playable in the Taleem frontend.

---

## 🧠 Philosophy

Taleem DeckBuilder is not a renderer.
It’s not a design tool.
It’s a compiler — for turning structured content into precisely timed, fully portable slide decks.

It is built for scale, not styling.

---

## 🔮 Roadmap

* [ ] Slide-level background overrides
* [ ] Zod schema validation
* [ ] Animation scripting (`fadeIn`, `zoom`, `delay`)
* [ ] Deck metadata (`title`, `grade`, `subject`)
* [ ] GUI playground for teachers
* [ ] CLI for batch generation from PDF/text

---

## 📣 License

ISC License — MIT-compatible
Built by Bilal Tariq for Taleem.Help.

```

