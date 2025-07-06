# api.md

# 🧱 DeckBuilder API

The `DeckBuilder` is a declarative, timing-aware slide deck constructor for Taleem.Help presentations.  
Each deck is a sequence of timed slides, where every item appears with a controlled delay.

---

## 📦 Import

```js
import { DeckBuilder } from "taleem-pivot-deckbuilder";
```

---

## 🛠 Creating a Deck

```js
const deckbuilder = new DeckBuilder();

deckbuilder.s.titleSlide(10, [
  { name: "title", content: "Physics Chapter 1", showAt: 0 }
]);

const eq = deckbuilder.s.eq(30);
eq.addLine({ type: "math", content: "E = mc^2", showAt: 5 });
eq.addSp({ type: "text", content: "Einstein's formula" });

export const deck = deckbuilder.build();
```

---

## 📐 Core Syntax

```js
deckbuilder.s.slideType(endTime, [ ...items ]);
```

or

```js
const eq = deckbuilder.s.eq(endTime);
eq.addLine({ type, content, showAt });
eq.addSp({ type, content });
```

* `slideType`: any official layout type  
* `endTime`: absolute ending time  
* `items`: include `showAt` for timed items only

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
| `eq`                    | Math/explanation with sidebar   |

---

## 📤 Output Structure (Actual for `eq()`)

```json
{
  "type": "eq",
  "start": 10,
  "end": 30,
  "data": [
    {
      "name": "line",
      "type": "math",
      "content": "E = mc^2",
      "showAt": 5,
      "spItems": [
        { "type": "text", "content": "Einstein's formula" }
      ]
    }
  ]
}
```

---

## 🔍 Notes

* All `slideType()` items must declare `showAt`  
* All `addLine()` must declare `showAt`  
* All `addSp()` must come **after** a `line` and attach via `.spItems[]`  
* EQ slides return a flat `data[]` with nested `spItems[]` per line

---

## 🧪 Full EQ Example

```js
const eq = deckbuilder.s.eq(60);
eq.addLine({ type: "heading", content: "Summary", showAt: 0 });
eq.addSp({ type: "heading", content: "Summary" });
eq.addSp({ type: "text", content: "This slide demonstrates step-by-step content." });
eq.addLine({ type: "math", content: "a^2 + b^2 = c^2", showAt: 10 });
```

Yields:

```json
{
  "type": "eq",
  "start": 0,
  "end": 60,
  "data": [
    {
      "name": "line",
      "type": "heading",
      "content": "Summary",
      "showAt": 0,
      "spItems": [
        { "type": "heading", "content": "Summary" },
        { "type": "text", "content": "This slide demonstrates step-by-step content." }
      ]
    },
    {
      "name": "line",
      "type": "math",
      "content": "a^2 + b^2 = c^2",
      "showAt": 10,
      "spItems": []
    }
  ]
}
```

---

## 📚 See Also

* [README](./README.md)  
* [eq.md](./eq.md)
