import { DeckBuilder } from "deckbuilderpivot";
const deckbuilder = new DeckBuilder();

deckbuilder.setTheme("royalBlue");
deckbuilder.setBackground({
  backgroundColor: "#ffffff",
  backgroundImage: "/pivot/defaultBg.png",
  backgroundImageOpacity: 0.8,
  pattern: null
});

deckbuilder.s.titleSlide([
  { name: "title", content: "Electric Vehicles 101" }
]);

deckbuilder.s.twoColumnText([
  { name: "left", content: "Benefits:\n• Zero emissions\n• Lower operating cost\n• Quiet and smooth drive" },
  { name: "right", content: "Challenges:\n• Limited range\n• Charging infrastructure\n• Battery cost" },
  { name: "title", content: "Pros and Cons" }
]);

deckbuilder.s.statistic([
  { name: "number", content: "14 million" },
  { name: "label", content: "EVs sold worldwide in 2023" }
]);

deckbuilder.s.barChart([
  { name: "title", content: "Top EV Markets 2023" },
  { name: "bar", label: "China", value: 8.1, color: "#4CAF50" },
  { name: "bar", label: "Europe", value: 2.7, color: "#2196F3" },
  { name: "bar", label: "USA", value: 1.4, color: "#FFC107" }
]);

deckbuilder.s.donutChart([
  { name: "percent", content: 18 },
  { name: "label", content: "EV share of new cars" },
  { name: "color", content: "#673AB7" }
]);

deckbuilder.s.imageLeftBulletsRight([
  { name: "image", content: "/pivot/box.webp" },
  { name: "bullet", content: "No tailpipe pollution" },
  { name: "bullet", content: "Renewable energy compatible" },
  { name: "bullet", content: "Incentivized by governments" }
]);

deckbuilder.s.quoteSlide([
  { name: "quoteLine", content: "The future is electric,", start: 0 },
  { name: "quoteLine", content: "and it’s already here.", start: 2 },
  { name: "author", content: "— Elon Musk", start: 3 }
]);

deckbuilder.s.imageWithCaption([
  { name: "image", content: "/pivot/fbise9physics.webp" },
  { name: "caption", content: "EVs rely on lithium-ion battery technology" }
]);

export const deck = deckbuilder.build();
