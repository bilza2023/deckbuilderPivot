# eq.md

# 📐 EQ Slide Format — Full Reference

The `eq()` slide type is a **specialized, timing-driven layout** designed for step-by-step math, logic, or formula explanations.  
It offers **fine-grained control over animation, layout, and pacing**, and behaves very differently from all other slide types.

> ✅ Use `eq` when presenting equations, math proofs, science derivations, or detailed visual narratives.

---

## ⚠️ Design Philosophy

Each EQ deck should contain only **one `eq()` slide**.  
This ensures:

- Full control over reveal timing
- Fixed layout and positioning
- No transition glitches between formats

---

## 🔧 Creating an EQ Slide

```js
const eq = deckbuilder.s.eq(60); // ends at 60s
```

This returns a slide object with:

- `.addLine({ type, content, showAt })` — animated timeline content
- `.addSp({ type, content })` — pinned side panel content

`.addSp()` always attaches to the most recent line.

---

## 🧩 EQ Slide Data Model

The slide’s output is structured as:

```json
{
  "type": "eq",
  "start": 0,
  "end": 60,
  "data": [
    {
      "name": "line",
      "type": "math",
      "content": "E = mc^2",
      "showAt": 5,
      "spItems": [{ "type": "text", "content": "Einstein's formula" }]
    },
    {
      "name": "line",
      "type": "math",
      "content": "x = ...",
      "showAt": 15,
      "spItems": []
    }
  ]
}
```

- Each `line` has its own `showAt`
- Any `addSp()` follows the previous `addLine()` and fills its `spItems[]`

---

## 🎛 Supported Types

### `addLine()` accepts:

| Type      | Description          |
| --------- | -------------------- |
| `math`    | LaTeX-style math     |
| `text`    | Plain explanation    |
| `image`   | Embedded image       |
| `heading` | Slide section header |

```ts
{
  type: "math" | "text" | "image" | "heading",
  content: string,
  showAt: number
}
```

### `addSp()` accepts:

| Type      | Description         |
| --------- | ------------------- |
| `heading` | Sidebar title       |
| `text`    | Hints, explanations |
| `math`    | Reference formula   |
| `image`   | Sidebar image       |

```ts
{
  type: string,
  content: string
}
```

⚠️ You must call `addLine()` before calling `addSp()`.

---

## 🧠 Best Practices

- Add `heading` as first line + sidebar item
- Use 2–4 `spItems` per line for clarity
- Space `showAt` values every 5–10 seconds
- Keep only 1 `eq()` slide per deck

---

## 🧪 Full Example

```js
const eq = deckbuilder.s.eq(60);
eq.addLine({ type: "heading", content: "Key Formulas", showAt: 0 });
eq.addSp({ type: "heading", content: "Key Formulas" });
eq.addSp({ type: "text", content: "Important concepts from physics" });

eq.addLine({ type: "math", content: "E = mc^2", showAt: 5 });
eq.addSp({ type: "math", content: "E = mc^2" });
eq.addSp({ type: "image", content: "/pivot/box.webp" });

eq.addLine({
  type: "math",
  content: "x = (-b ± √(b² - 4ac)) / 2a",
  showAt: 15,
});
eq.addSp({ type: "text", content: "Quadratic roots" });

export const deck = deckbuilder.build();
```

---

## 📤 Final Output

```json
{
  "type": "eq",
  "start": 0,
  "end": 60,
  "data": [
    {
      "name": "line",
      "type": "heading",
      "content": "Key Formulas",
      "showAt": 0,
      "spItems": [
        { "type": "heading", "content": "Key Formulas" },
        { "type": "text", "content": "Important concepts from physics" }
      ]
    },
    {
      "name": "line",
      "type": "math",
      "content": "E = mc^2",
      "showAt": 5,
      "spItems": [
        { "type": "math", "content": "E = mc^2" },
        { "type": "image", "content": "/pivot/box.webp" }
      ]
    },
    {
      "name": "line",
      "type": "math",
      "content": "x = (-b ± √(b² - 4ac)) / 2a",
      "showAt": 15,
      "spItems": [{ "type": "text", "content": "Quadratic roots" }]
    }
  ]
}
```

---

## 📚 See Also

- [DeckBuilder API](./api.md)
- [timing.md](./timing.md)
- [README](../README.md)
