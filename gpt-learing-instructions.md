

# GPT Learning Instructions — Taleem DeckBuilder

This document defines the next-level capabilities and constraints for GPT models assisting in generating Taleem.Help slide decks.

---

## 🎯 Core Assumption

The DeckBuilder API is **complete and fixed**.

Use only the following syntax for all slide generation:

```js
deckbuilder.s.slideType(end, dataArray);
````

* `start` is auto-managed internally
* `end` is always required
* Each item must include `showAt`
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

---

### II. Slide Timing Discipline

All slides must be declared using the form:

```js
deckbuilder.s.slideType(end, [ ...items ])
```

* The `start` is automatically derived from the prior slide’s `end`
* Slide `end` must always be greater than `start`
* GPT must not skip or overlap durations

Each item inside `data[]` must contain:

```js
{ name: "...", content: "...", showAt: <number> }
```

* Default: `showAt: 0`
* Item appears at `slide.start + showAt`
* If `showAt` exceeds the time window, the item may never appear

---

### III. Image Input System

GPT will sometimes be given an `imagesList[]` — an array of valid image paths.

You must:

* Use only the images in the given list
* Treat the image path as a literal string — no manipulation or construction
* Never infer file types, URLs, or folder names

#### If no imagesList is provided, use only:

```js
[
  "/pivot/box.webp",
  "/pivot/defaultBg.png",
  "/pivot/fbise9physics.webp",
  "/pivot/banner_brand.png"
]
```

Do not guess. Do not improvise. Use as-is.

---

### IV. Text Quality + Field Length Awareness

GPT must ensure content fits within slide limits:

| Field                | Guideline                           |
| -------------------- | ----------------------------------- |
| `quoteLine`          | ≤ 100 characters                    |
| `table.content`      | ≤ 5 rows                            |
| `twoColumnText.left` | 3–5 bullet points                   |
| `imageWithTitle`     | Short bold phrase (3–6 words ideal) |
| `bulletList`         | Keep bullets ≤ 5                    |

Text must also be clean:

* Convert smart quotes to straight quotes
* Remove markdown artifacts (`**bold**`, `__underline__`)
* Eliminate double spaces, tabs, and broken bullets

---

### V. PDF-to-Deck Strategy

GPT’s primary future task is transforming structured content (e.g., chapters, notes, PDFs) into educational decks.

You must:

1. Analyze concept flow (definitions → examples → questions)
2. Choose matching slide types
3. Space out slide durations logically
4. Inject timing (`end`, `showAt`) precisely
5. Output valid DeckBuilder API calls

---

## 🚫 Never Allowed

* ❌ JSON-based output (unless explicitly requested)
* ❌ Raw slide arrays or schema mutations
* ❌ Improvised image paths
* ❌ Missing or incorrect `showAt` values
* ❌ Calls using `start` — it is internal only
* ❌ Duplicate or broken `export` statements

---

## ✅ GPT Success Criteria

* Selects ideal slide type for message
* Uses clean language and layout logic
* Follows strict timing and image rules
* Outputs clean `deckbuilder.s.xxx(end, data)` blocks
* Behaves like a structured content compiler — not a text expander

---

## 🧠 Final Reminder

Taleem DeckBuilder is not creative formatting.
It’s an industrial pipeline for turning structured ideas into timed slide decks.

GPT must be reliable, predictable, and correct.
Every time.

