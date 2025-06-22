

# Taleem DeckBuilder v0.0.9 (Timing-Enabled)

A declarative, timing-aware slide deck generator for Taleem.Help presentations.  
Build clean, structured decks that render perfectly in the Taleem Player — now with full slide and item-level timing.

###### Under Testing....
---

## 📦 Installation

```bash
npm i taleem-pivot-deckbuilder
````

---

## 🚀 Overview

Taleem DeckBuilder is a **script-based compiler** for educational slide decks.

You define:

* Slide types
* End times per slide
* Visibility timing per item

The system automatically tracks slide timing and outputs clean JSON for use in the Player.

---

## 📦 Exports

```js
export {
  DeckBuilder,
  demo_deck
}
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

deckbuilder.s.imageWithCaption(30, [
  { name: "image", content: "/pivot/box.webp", showAt: 0 },
  { name: "caption", content: "Powered by AI", showAt: 1 }
]);

export const deck = deckbuilder.build();
```

---

## ✅ Features

* 🔹 18+ structured slide types
* 🔹 Timing-aware output: `start`, `end`, `showAt`
* 🔹 Auto-managed sequencing (`start` handled internally)
* 🔹 Required `showAt` on every item (default: 0)
* 🔹 Image content is literal — never parsed or validated
* 🔹 Fully compatible with Taleem Pivot Player

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

---

## 🧪 Full Deck Example

```js
import { DeckBuilder } from "taleem-pivot-deckbuilder";
const deckbuilder = new DeckBuilder();

deckbuilder.s.titleSlide(10, [
  { name: "title", content: "Physics Chapter 1", showAt: 0 }
]);

deckbuilder.s.twoColumnText(20, [
  { name: "title", content: "SI Units", showAt: 0 },
  { name: "left", content: "Meter\\nKilogram\\nSecond", showAt: 1 },
  { name: "right", content: "Length\\nMass\\nTime", showAt: 2 }
]);

deckbuilder.s.barChart(30, [
  { name: "bar", label: "Ali", value: 85, color: "#4CAF50", showAt: 0 },
  { name: "bar", label: "Sara", value: 92, color: "#2196F3", showAt: 2 }
]);

deckbuilder.s.bulletList(40, [
  { name: "bullet", content: "Modular", showAt: 0 },
  { name: "bullet", content: "Visual", showAt: 1 },
  { name: "bullet", content: "Flexible", showAt: 2 }
]);

deckbuilder.s.cornerWordsSlide(50, [
  { name: "card", icon: "🔬", label: "Observe", showAt: 0 },
  { name: "card", icon: "📏", label: "Measure", showAt: 0 },
  { name: "card", icon: "🧪", label: "Experiment", showAt: 0 },
  { name: "card", icon: "💡", label: "Conclude", showAt: 0 }
]);

deckbuilder.s.quoteSlide(60, [
  { name: "quoteLine", content: "Knowledge is power.", showAt: 0 },
  { name: "author", content: "— Francis Bacon", showAt: 1 }
]);

export const deck = deckbuilder.build();
```

---

## 📣 License

ISC License — MIT-compatible
Built by Taleem.Help
