
// GoldStart_QuadraticFormula_EQ_Deck.js
// Single EQ slide: Quadratic Formula (6 steps)

const eq = deckbuilder.s.eq(60);

eq.addLine({
  type:    "math",
  content: "ax² + bx + c = 0",
  showAt:  0
});
eq.addLine({
  type:    "math",
  content: "x² + (b/a)x + (c/a) = 0",
  showAt:  5
});
eq.addLine({
  type:    "math",
  content: "x² + (b/a)x = −c/a",
  showAt: 10
});
eq.addLine({
  type:    "math",
  content: "x² + (b/2a)² = (b/2a)² − c/a",
  showAt: 20
});
eq.addLine({
  type:    "math",
  content: "x + b/2a = ±√(b²−4ac)/(2a)",
  showAt: 30
});
eq.addLine({
  type:    "math",
  content: "x = [−b ± √(b²−4ac)]/(2a)",
  showAt: 40
});
