# gpt-learing-instructions.md

# GPT Learning Instructions — Taleem DeckBuilder

This document defines the next-level capabilities and constraints for GPT models assisting in generating Taleem.Help slide decks.

---

## 🎯 Core Assumption

The DeckBuilder API is **complete and fixed**.

Use only the following syntax for all slide generation:

```js
deckbuilder.s.slideType(end, dataArray);
```

Or, for EQ decks:

```js
const eq = deckbuilder.s.eq(end);
eq.addLine({ ... });
eq.addSp({ ... });
```

* `start` is auto-managed internally  
* `end` is always required  
* Each item must include `showAt` (except `addSp`)  
* No raw JSON, no schema extensions

---

## 🧠 Skills to Master

---

### I. Slide Type Intelligence

GPT must select the most appropriate slide type for each idea.

| Slide Type         | Ideal Use                             |
| ------------------ | ------------------------------------- |
| `titleSlide`       | Section/lesson headings               |
| `twoColumnText`    | Pros vs. Cons, dual comparisons       |
| `donutChart`       | Completion or progress metrics        |
| `barChart`         | Performance across categories         |
| `statistic`        | Single numerical insight              |
| `table`            | Compact structured data               |
| `imageWithTitle`   | Visual emphasis + message headline    |
| `imageWithCaption` | Graphic with simple label             |
| `imageSlide`       | Standalone full-width visual          |
| `quoteSlide`       | Inspirational or reflective messages  |
| `cornerWordsSlide` | 4-point frameworks or slogans         |
| `titleAndSubtitle` | Hero intro or product/service framing |
| `bulletList`       | Feature lists, checklists, takeaways  |
| `bigNumber`        | Large fact, stat, or milestone        |
| `quoteWithImage`   | Quote with associated speaker visual  |
| `contactSlide`     | Call to action, contact information   |
| `eq`               | Step-by-step math or science logic    |

---

### II. Slide Timing Discipline

All slides must be declared using:

```js
deckbuilder.s.slideType(end, [ ...items ])
```

Or for `eq()`:

```js
const eq = deckbuilder.s.eq(end);
eq.addLine({ type, content, showAt });
eq.addSp({ type, content });
```

* The `start` is inferred from prior slide  
* `end` must increase  
* `showAt` = relative appearance time  
* `addSp()` = untimed

---

### III. Image Input System

GPT may receive `imagesList[]` (array of valid image paths).

Use only those. If missing, fallback to:

```js
[
  "/pivot/box.webp",
  "/pivot/defaultBg.png",
  "/pivot/fbise9physics.webp",
  "/pivot/banner_brand.png"
]
```

Do not guess or construct paths.

---

### IV. Text Quality + Field Length Awareness

| Field                | Guideline                           |
| -------------------- | ----------------------------------- |
| `quoteLine`          | ≤ 100 characters                    |
| `table.content`      | ≤ 5 rows                            |
| `twoColumnText.left` | 3–5 bullet points                   |
| `imageWithTitle`     | Short bold phrase (3–6 words ideal) |
| `bulletList`         | Keep bullets ≤ 5                    |

Also:

* Use straight quotes  
* Remove markdown (`**`, `__`)  
* Eliminate tabs, broken bullets, double spaces

---

### V. PDF-to-Deck Strategy

When converting structured content (PDFs, chapters, notes):

1. Identify logical flow: definitions → examples → questions  
2. Select matching slide types  
3. Space slide timings logically  
4. For math derivations, use **`eq()` only**  
5. Output DeckBuilder syntax (`.s.xxx` or `eq().addLine()`)

---

## 🚫 Never Allowed

* ❌ JSON-based output (unless explicitly requested)  
* ❌ Raw slide arrays or schema mutations  
* ❌ Improvised image paths  
* ❌ Missing or incorrect `showAt`  
* ❌ `start` references — it is internal only  
* ❌ Mixing `eq()` with other slide types in same deck

---

## ✅ GPT Success Criteria

* Picks ideal slide type per idea  
* Outputs clean `deckbuilder.s.xxx(end, [...])` or `eq()`  
* Applies showAt correctly  
* Uses valid image path only  
* Behaves like a compiler — not formatter

---

## 🧠 Final Reminder

Taleem DeckBuilder is not a formatting tool.  
It is an **industrial compiler** for structured decks.

Every rule exists to preserve automation + timing discipline.
