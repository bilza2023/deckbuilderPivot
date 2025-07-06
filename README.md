# README.md

# Taleem DeckBuilder v0.0.9 (Timing-Enabled)

A declarative, timing-aware slide deck generator for Taleem.Help presentations.  
Build clean, structured decks that render perfectly in the Taleem Player — now with full slide and item-level timing.

###### Under Testing...

---

## 📦 Installation

```bash
npm i taleem-pivot-deckbuilder
```

---

## 🚀 Overview

Taleem DeckBuilder is a **script-based compiler** for educational slide decks.

You define:

* Slide types  
* End times per slide  
* Visibility timing per item

The system automatically tracks timing and outputs clean JSON for the Player.

---

## 📦 Exports

```js
export {
  DeckBuilder,
  demo_deck
}
```

## 📦 Player is Available At

```bash
npm i taleem-pivot-player
```

---

## 📄 Quickstart Example

```js
import { DeckBuilder } from "taleem-pivot-deckbuilder";
const deckbuilder = new DeckBuilder();

deckbuilder.s.titleSlide(10, [
  { name: "title", content: "Welcome to Taleem.Help", showAt: 0 }
]);

deckbuilder.s.statistic(20, [
  { name: "number", content: "95%", showAt: 0 },
  { name: "label", content: "Success Rate", showAt: 2 }
]);

const eq = deckbuilder.s.eq(40);
eq.addLine({ type: "heading", content: "Physics Formulas", showAt: 0 });
eq.addLine({ type: "math", content: "E = mc^2", showAt: 5 });
eq.addSp({ type: "heading", content: "Physics Formulas" });
eq.addSp({ type: "text", content: "Einstein's famous equation" });

export const deck = deckbuilder.build();
```

---

## ✅ Features

* 🔹 18+ structured slide types  
* 🔹 Timing-aware output: `start`, `end`, `showAt`  
* 🔹 `eq()` support for math derivations  
* 🔹 Auto-managed sequencing  
* 🔹 Required `showAt` on all items (except sidebar)  
* 🔹 Image paths passed as-is — not parsed

---

## ⛔ Limitations

* ❌ No layout or render logic  
* ❌ No slide-level backgrounds yet  
* ❌ No Zod validation  
* ❌ No animations or transitions  
* ❌ No per-slide theme overrides

---

## 🧱 Slide Types

```js
deckbuilder.s.slideType(end, [ { name, content, showAt } ])
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
| `eq`                    | Animated math/explanation slide |

---

## 🖼 Image Rules

Use only given `imagesList[]`.  
Fallback:

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
    "type": "eq",
    "start": 10,
    "end": 40,
    "data": {
      "lines": [ { "type": "math", "content": "E = mc^2", "showAt": 5 } ],
      "sp": [ { "type": "text", "content": "Einstein's equation" } ]
    }
  }
]
```

---

## 📚 Developer Docs

* [DeckBuilder API](./docs/api.md)  
* [Slide Timing System](./docs/timing.md)  
* [EQ Slide Format](./docs/eq.md)

---

## 📣 License

ISC License — MIT-compatible  
Built by Taleem.Help
