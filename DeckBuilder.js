// routes/pivot/deckbuilder/DeckBuilder.js

import { Slides } from './Slides.js';

export class DeckBuilder {
  constructor() {
    this.theme = null;
    this.background = null;
    this.slides = new Slides();
    this.s = this.slides;
  }

  setTheme(themeName) {
    this.theme = themeName;
  }

  setBackground(background) {
    this.background = background;
  }

  // build() {
  //   return {
  //     theme: this.theme,
  //     background: this.background,
  //     slides: this.slides.toJSON()
  //   };
  // }
  build() {
    return this.slides.toJSON();
  }
  
}
