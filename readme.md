# Taleem DeckBuilder v0.1.0

A minimalist, production-ready slide deck generator for Taleem.Help presentations.

---

## 🚀 Overview

Taleem DeckBuilder is a **JSON-generating library** that outputs slide decks compatible with the Taleem Player. It supports a clean declarative format with no runtime logic, no rendering engine, and no layout engine.

You can use it to build entire presentations programmatically and export JSON decks that are stable, portable, and render-ready.

---

## 📦 Installation

```bash
npm install deckbuilderpivot
```

---

## 📄 Quickstart

```js
import { DeckBuilder } from "deckbuilderpivot";

const deck = new DeckBuilder();
deck.setTheme("royalBlue");
deck.setBackground({
  backgroundColor: "#b3d8b4",
  backgroundImage: "/pivot/defaultBg.png",
  backgroundImageOpacity: 1.0,
  pattern: null
});

deck.s.titleSlide([
  { name: "title", content: "Welcome to Taleem.help" }
]);

export const finalDeck = deck.build();
```

---

## ✅ Features (v0.1.0)

* 13 slide types supported
* Background + theme set once globally
* Consistent, clean JSON output
* Alias-friendly API: `deck.s.slideType()`
* Passive system: no render logic, no animation, no validation layer yet

---

## ⛔ Limitations (v0.1.0)

* No per-slide background overrides
* No start/end/showAt logic
* No animations, timing, or sequence controls
* No Zod validation (coming in v0.2.0)
* No audio, no Howler, no transitions

---

## 🧱 Slide Types and Examples

Each slide type uses the same API:

```js
deck.s.slideType(dataArray);
```

Below is a full list of all 13 supported types with demo data:

### 1. `titleSlide`

```js
deck.s.titleSlide([
  { name: "title", content: "Welcome to Taleem.help" }
]);
```

### 2. `twoColumnText`

```js
deck.s.twoColumnText([
  { name: "left", content: "Advantages:\n\u2022 Fast\n\u2022 Cheap" },
  { name: "right", content: "Disadvantages:\n\u2022 Unstable\n\u2022 Short-term" },
  { name: "title", content: "Pros and Cons" }
]);
```

### 3. `donutChart`

```js
deck.s.donutChart([
  { name: "percent", content: 72 },
  { name: "label", content: "Completion" },
  { name: "color", content: "#4CAF50" }
]);
```

### 4. `barChart`

```js
deck.s.barChart([
  { name: "title", content: "Student Performance" },
  { name: "bar", label: "Math", value: 90, color: "#4CAF50" },
  { name: "bar", label: "Physics", value: 75, color: "#2196F3" },
  { name: "bar", label: "Chemistry", value: 80, color: "#FFC107" }
]);
```

### 5. `statistic`

```js
deck.s.statistic([
  { name: "number", content: "95%" },
  { name: "label", content: "Exam Success Rate" }
]);
```

### 6. `table`

```js
deck.s.table([
  {
    name: "table",
    content: [
      ["Subject", "Marks", "Grade"],
      ["Math", "90", "A+"],
      ["Physics", "85", "A"],
      ["Chemistry", "88", "A+"]
    ]
  }
]);
```

### 7. `imageWithTitle`

```js
deck.s.imageWithTitle([
  { name: "image", content: "/pivot/box.webp" },
  { name: "title", content: "Explore the Universe" }
]);
```

### 8. `imageWithCaption`

```js
deck.s.imageWithCaption([
  { name: "image", content: "/pivot/fbise9physics.webp" },
  { name: "caption", content: "Our solar system in a nutshell" }
]);
```

### 9. `imageRightBulletsLeft`

```js
deck.s.imageRightBulletsLeft([
  { name: "image", content: "/pivot/fbise9physics.webp" },
  { name: "bullet", content: "First point about the image" },
  { name: "bullet", content: "Second insight, very sharp" },
  { name: "bullet", content: "Third takeaway, well said" }
]);
```

### 10. `imageLeftBulletsRight`

```js
deck.s.imageLeftBulletsRight([
  { name: "image", content: "/pivot/box.webp" },
  { name: "bullet", content: "This is content Number 1" },
  { name: "bullet", content: "This is content Number 2" },
  { name: "bullet", content: "This is content Number 3" }
]);
```

### 11. `quoteSlide`

```js
deck.s.quoteSlide([
  { name: "quoteLine", content: "Imagination is more important", start: 0 },
  { name: "quoteLine", content: "than knowledge.", start: 2 },
  { name: "author", content: "\u2014 Albert Einstein", start: 3 }
]);
```

### 12. `imageSlide`

```js
deck.s.imageSlide([
  { name: "image", content: "/pivot/fbise9physics.webp" }
]);
```

### 13. `cornerWordsSlide`

```js
deck.s.cornerWordsSlide([
  { name: "card", icon: "\ud83d\ude80", label: "Explore" },
  { name: "card", icon: "\ud83d\udee0\ufe0f", label: "Build" },
  { name: "card", icon: "\ud83d\udcda", label: "Learn" },
  { name: "card", icon: "\ud83c\udf0d", label: "Share" }
]);
```

---

## 🧠 Philosophy

Taleem DeckBuilder is not a renderer. It’s not a browser. It’s not a layout engine.
It’s a **compiler for slides** — a system that produces clean, predictable, supportable data.

It does not break silently. It does not fight you. It does not require perfection to deliver value.

This is your engine for production.

---

## 🔮 Roadmap

* [ ] Zod schema validation (v0.2.0)
* [ ] `deck.overrideBackground()`
* [ ] Slide timing: `start`, `end`, `showAt`
* [ ] Built-in themes + presets
* [ ] CLI tool to generate decks from templates
* [ ] GUI deckbuilder playground

---

## 📢 License

ISC License — MIT-friendly, free to use.
Built by Bilal Tariq for Taleem.Help.
