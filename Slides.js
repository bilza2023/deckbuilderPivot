// routes/pivot/deckbuilder/Slides.js

export class Slides {
    constructor() {
      this.slidesArray = [];
    }
  
    quoteSlide(data) {
      this._add("quoteSlide", data);
    }
  
    cornerWordsSlide(data) {
      this._add("cornerWordsSlide", data);
    }
  
    titleSlide(data) {
      this._add("titleSlide", data);
    }
  
    imageSlide(data) {
      this._add("imageSlide", data);
    }
  
    imageLeftBulletsRight(data) {
      this._add("imageLeftBulletsRight", data);
    }
  
    imageRightBulletsLeft(data) {
      this._add("imageRightBulletsLeft", data);
    }
  
    imageWithCaption(data) {
      this._add("imageWithCaption", data);
    }
  
    imageWithTitle(data) {
      this._add("imageWithTitle", data);
    }
  
    table(data) {
      this._add("table", data);
    }
  
    statistic(data) {
      this._add("statistic", data);
    }
  
    barChart(data) {
      this._add("barChart", data);
    }
  
    twoColumnText(data) {
      this._add("twoColumnText", data);
    }
  
    donutChart(data) {
      this._add("donutChart", data);
    }
  
    _add(type, data) {
      this.slidesArray.push({ type, data });
    }
  
    [Symbol.iterator]() {
      return this.slidesArray.values();
    }
  
    toJSON() {
      return this.slidesArray;
    }
  }
  