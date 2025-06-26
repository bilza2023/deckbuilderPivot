import { DeckBuilder } from "./index";
const deckbuilder = new DeckBuilder();

deckbuilder.s.titleSlide(10, [
  { name: "title", content: "Physics Chapter 1", showAt: 0 }
]);

deckbuilder.s.twoColumnText(20, [
  { name: "title", content: "SI Units", showAt: 0 },
  { name: "left", content: "• Meter\n• Kilogram\n• Second", showAt: 1 },
  { name: "right", content: "• Length\n• Mass\n• Time", showAt: 2 }
]);

deckbuilder.s.donutChart(30, [
  { name: "percent", content: 72, showAt: 0 },
  { name: "label", content: "Completion", showAt: 1 },
  { name: "color", content: "#4CAF50", showAt: 1 }
]);

deckbuilder.s.barChart(40, [
  { name: "title", content: "Quiz Scores", showAt: 0 },
  { name: "bar", label: "Ali", value: 85, color: "#4CAF50", showAt: 1 },
  { name: "bar", label: "Sara", value: 92, color: "#2196F3", showAt: 2 },
  { name: "bar", label: "Zain", value: 78, color: "#FFC107", showAt: 3 }
]);

deckbuilder.s.statistic(50, [
  { name: "number", content: "92%", showAt: 0 },
  { name: "label", content: "Average Score", showAt: 2 }
]);

deckbuilder.s.table(60, [
  {
    name: "table",
    content: [
      ["Name", "Marks", "Grade"],
      ["Ali", "85", "A"],
      ["Sara", "92", "A+"],
      ["Zain", "78", "B"]
    ],
    showAt: 0
  }
]);

deckbuilder.s.imageWithTitle(70, [
  { name: "image", content: "/pivot/box.webp", showAt: 0 },
  { name: "title", content: "Physics in Action", showAt: 1 }
]);

deckbuilder.s.imageWithCaption(80, [
  { name: "image", content: "/pivot/box.webp", showAt: 0 },
  { name: "caption", content: "Motion captured in slow-mo", showAt: 2 }
]);

deckbuilder.s.imageRightBulletsLeft(90, [
  { name: "image", content: "/pivot/box.webp", showAt: 0 },
  { name: "bullet", content: "Speed", showAt: 1 },
  { name: "bullet", content: "Accuracy", showAt: 2 },
  { name: "bullet", content: "Technology", showAt: 3 }
]);

deckbuilder.s.imageLeftBulletsRight(100, [
  { name: "image", content: "/pivot/box.webp", showAt: 0 },
  { name: "bullet", content: "Observe", showAt: 1 },
  { name: "bullet", content: "Measure", showAt: 2 },
  { name: "bullet", content: "Compare", showAt: 3 }
]);

deckbuilder.s.quoteSlide(110, [
  { name: "quoteLine", content: "Learning never exhausts the mind.", showAt: 0 },
  { name: "author", content: "— Leonardo da Vinci", showAt: 2 }
]);

deckbuilder.s.imageSlide(120, [
  { name: "image", content: "/pivot/box.webp", showAt: 0 }
]);

deckbuilder.s.cornerWordsSlide(130, [
  { name: "card", icon: "📚", label: "Study", showAt: 0 },
  { name: "card", icon: "💡", label: "Think", showAt: 0 },
  { name: "card", icon: "🔧", label: "Apply", showAt: 0 },
  { name: "card", icon: "🌍", label: "Impact", showAt: 0 }
]);

deckbuilder.s.titleAndSubtitle(140, [
  { name: "title", content: "Smart Learning", showAt: 0 },
  { name: "subtitle", content: "Smarter. Faster. Deeper.", showAt: 1 }
]);

deckbuilder.s.bulletList(150, [
  { name: "bullet", content: "Modular topics", showAt: 0 },
  { name: "bullet", content: "Visual learning", showAt: 1 },
  { name: "bullet", content: "Self-paced", showAt: 2 }
]);

deckbuilder.s.bigNumber(160, [
  { name: "number", content: "1 Million+", showAt: 0 },
  { name: "label", content: "Slides Rendered", showAt: 2 }
]);

deckbuilder.s.quoteWithImage(170, [
  { name: "quote", content: "Teach less. Learn more.", showAt: 0 },
  { name: "author", content: "Taleem.Help", showAt: 1 },
  { name: "image", content: "/pivot/box.webp", showAt: 0 }
]);

deckbuilder.s.contactSlide(180, [
  { name: "headline", content: "Get in Touch", showAt: 0 },
  { name: "email", content: "hello@taleem.help", showAt: 1 },
  { name: "phone", content: "+92 300 1234567", showAt: 2 }
]);

export const deck = deckbuilder.build();
