// GoldStart_EQ_All_SP_Types.js
// EQ slide with all sidebar types per step

const eq = deckbuilder.s.eq(50);

// STEP 1
eq.addLine({
  type:    "heading",
  content: "Test All Sidebar Types",
  showAt:  0
});
eq.addSp({ type: "heading", content: "SP Heading" });
eq.addSp({ type: "text",    content: "This is a sidebar comment." });
eq.addSp({ type: "math",    content: "a^2 + b^2 = c^2" });
eq.addSp({ type: "image",   content: "images/box.webp" });

// STEP 2
eq.addLine({
  type:    "math",
  content: "E = mc^2",
  showAt: 10
});
eq.addSp({ type: "heading", content: "Einstein's Law" });
eq.addSp({ type: "text",    content: "Energy-mass equivalence" });
eq.addSp({ type: "image",   content: "images/box.webp" });

// STEP 3
eq.addLine({
  type:    "math",
  content: "\\int_0^\\pi \\sin x \\,dx = 2",
  showAt: 20
});
eq.addSp({ type: "heading", content: "Integral Result" });
eq.addSp({ type: "text",    content: "Area under sine curve from 0 to π" });
eq.addSp({ type: "math",    content: "\\int_0^\\pi \\sin x \\,dx = 2" });

// STEP 4
eq.addLine({
  type:    "math",
  content: "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}",
  showAt: 30
});
eq.addSp({ type: "heading", content: "Basel Problem" });
eq.addSp({ type: "text",    content: "Euler's famous result" });
eq.addSp({ type: "image",   content: "images/box.webp" });

// STEP 5
eq.addLine({
  type:    "text",
  content: "End of test. All sidebar types shown.",
  showAt: 40
});
eq.addSp({ type: "text", content: "Thanks for testing EQ format!" });
