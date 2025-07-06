// GoldStart_QuadraticFormula_EQ_Deck_with_SP.js
// Single EQ slide: Quadratic Formula (6 steps), each step paired with a sidebar image

const eq = deckbuilder.s.eq(60);

eq.addLine({
  type:    "math",
  content: "ax² + bx + c = 0",
  showAt:  0
});
eq.addSp({
  type:    "image",
  content: "images/box.webp"
});

eq.addLine({
  type:    "math",
  content: "x² + (b/a)x + (c/a) = 0",
  showAt:  5
});
eq.addSp({
  type:    "image",
  content: "images/box.webp"
});

eq.addLine({
  type:    "math",
  content: "x² + (b/a)x = −c/a",
  showAt: 10
});
eq.addSp({
  type:    "image",
  content: "images/box.webp"
});

eq.addLine({
  type:    "math",
  content: "x² + (b/2a)² = (b/2a)² − c/a",
  showAt: 20
});
eq.addSp({
  type:    "image",
  content: "images/box.webp"
});

eq.addLine({
  type:    "math",
  content: "x + b/2a = ±√(b²−4ac)/(2a)",
  showAt: 30
});
eq.addSp({
  type:    "image",
  content: "images/box.webp"
});

eq.addLine({
  type:    "math",
  content: "x = [−b ± √(b²−4ac)]/(2a)",
  showAt: 40
});
eq.addSp({
  type:    "image",
  content: "images/box.webp"
});
