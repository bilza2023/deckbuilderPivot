// test.js
import { DeckBuilder } from "./index.js"; // adjust path if needed

const deck = new DeckBuilder();

deck.s.titleSlide(10, [
  { name: "title", content: "Test Slide 1", showAt: 0 }
]);

deck.s.statistic(20, [
  { name: "number", content: "42%", showAt: 0 },
  { name: "label", content: "Test Stat", showAt: 3 }
]);

console.log("✅ Deck Output:");
console.log(JSON.stringify(deck.build(), null, 2));
