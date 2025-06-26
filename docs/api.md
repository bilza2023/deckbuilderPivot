
# 🧱 DeckBuilder API

The `DeckBuilder` is a declarative, timing-aware slide deck constructor for Taleem.Help presentations.  
Each deck is a sequence of timed slides, where every item appears with a controlled delay.

---

## 📦 Import

```js
import { DeckBuilder } from "taleem-pivot-deckbuilder";
````

---

## 🛠 Creating a Deck

```js
const deckbuilder = new DeckBuilder();

// Create slides
deckbuilder.s.titleSlide(10, [
  { name: "title", content: "Physics Chapter 1", showAt: 0 }
]);

// Final output
export const deck = deckbuilder.build();
```

---

## 📐 Core Syntax

```js
deckbuilder.s.slideType(endTime, [ ...items ]);
```

* `slideType`: any of the official 18+ supported slide layouts
* `endTime`: absolute time (seconds) when the slide ends
* `items[]`: array of `{ name, content, showAt }` objects

`start` is auto-managed by the builder. `showAt` is **required**.

---

## 🧱 Slide Types

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

## 📤 Output Structure

`deckbuilder.build()` returns:

```json
[
  {
    "type": "titleSlide",
    "start": 0,
    "end": 10,
    "data": [
      { "name": "title", "content": "Welcome", "showAt": 0 }
    ]
  }
]
```

---

## 🔍 Notes

* All items must declare `showAt`
* Image paths are not validated — they’re passed as-is
* Avoid exceeding 10–15 items per slide
* Keep slide durations realistic for pacing
