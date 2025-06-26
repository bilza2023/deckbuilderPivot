
# ⏱️ Slide Timing System

This document explains how the **Taleem DeckBuilder** manages **timing** at both the slide level and the item level.

Timings are declarative, predictable, and essential for syncing slides with narration or visuals.

---

## 🎯 Key Concepts

- **start** — When the slide begins (auto-computed)
- **end** — When the slide ends (you define it)
- **showAt** — Delay before each item appears (relative to start)

---

## 🧭 Slide Timing

Each slide is created using:

```js
deckbuilder.s.slideType(end, [ ...items ]);
````

* The slide's `start` time is automatically inferred from the previous slide’s `end`
* The `end` time must always be **strictly increasing**

### Example

```js
deckbuilder.s.titleSlide(10, [ ... ]); // starts at 0, ends at 10
deckbuilder.s.barChart(20, [ ... ]);   // starts at 10, ends at 20
deckbuilder.s.quoteSlide(35, [ ... ]); // starts at 20, ends at 35
```

---

## 🧩 Item Timing: `showAt`

Each item inside a slide has a `showAt` property:

```js
{ name: "label", content: "Accuracy", showAt: 3 }
```

* This number is **relative to the slide’s start**
* If the slide starts at `10`, and `showAt: 3`, this item appears at **13**

If `showAt` is greater than the slide's duration, the item will **not appear**.

---

## 📊 Timeline Visualization

| Slide Type | Start | End | Item             | showAt | Absolute Time |
| ---------- | ----- | --- | ---------------- | ------ | ------------- |
| barChart   | 10    | 20  | label: "Ali"     | 2      | 12            |
| barChart   | 10    | 20  | label: "Zain"    | 5      | 15            |
| quoteSlide | 20    | 35  | quoteLine: "..." | 0      | 20            |
| quoteSlide | 20    | 35  | author: "..."    | 3      | 23            |

---

## ⚠️ Common Timing Errors

* ❌ Omitting `showAt` → item appears too early (or never)
* ❌ Using same `end` as previous slide → breaks sequencing
* ❌ `showAt` too close to `end` → may be skipped in playback

---

## 🧠 Best Practices

* Use **0–2–4–6** patterns for pacing
* Reserve last 2 seconds for “settling”
* Avoid crowding all items at `showAt: 0`
* Long slides (>20s) should space items generously

---

## ✅ Timing Checklist

* [x] Every slide ends after the previous one
* [x] Every item has a `showAt`
* [x] No item extends past `end - start`
* [x] First slide starts at `0` by default

