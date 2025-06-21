export class Slides {
  constructor() {
    this.slidesArray = [];
    this.currentTime = 0; // Internal clock
  }

  quoteSlide(end, data) {
    this._add("quoteSlide", end, data);
  }

  cornerWordsSlide(end, data) {
    this._add("cornerWordsSlide", end, data);
  }

  titleSlide(end, data) {
    this._add("titleSlide", end, data);
  }

  imageSlide(end, data) {
    this._add("imageSlide", end, data);
  }

  imageLeftBulletsRight(end, data) {
    this._add("imageLeftBulletsRight", end, data);
  }

  imageRightBulletsLeft(end, data) {
    this._add("imageRightBulletsLeft", end, data);
  }

  imageWithCaption(end, data) {
    this._add("imageWithCaption", end, data);
  }

  imageWithTitle(end, data) {
    this._add("imageWithTitle", end, data);
  }

  table(end, data) {
    this._add("table", end, data);
  }

  statistic(end, data) {
    this._add("statistic", end, data);
  }

  barChart(end, data) {
    this._add("barChart", end, data);
  }

  twoColumnText(end, data) {
    this._add("twoColumnText", end, data);
  }

  donutChart(end, data) {
    this._add("donutChart", end, data);
  }

  titleAndSubtitle(end, data) {
    this._add("titleAndSubtitle", end, data);
  }

  contactSlide(end, data) {
    this._add("contactSlide", end, data);
  }

  quoteWithImage(end, data) {
    this._add("quoteWithImage", end, data);
  }

  bigNumber(end, data) {
    this._add("bigNumber", end, data);
  }

  bulletList(end, data) {
    this._add("bulletList", end, data);
  }

  _add(type, end, data) {
    const start = this.currentTime;

    if (end <= start) {
      throw new Error(`Invalid slide timing: end (${end}) must be greater than start (${start})`);
    }

    this.currentTime = end;

    const patchedData = data.map(item =>
      item.showAt === undefined ? { ...item, showAt: 0 } : item
    );

    const slide = {
      type,
      start,
      end,
      data: patchedData
    };

    this.slidesArray.push(slide);
  }

  [Symbol.iterator]() {
    return this.slidesArray.values();
  }

  toJSON() {
    return this.slidesArray;
  }
}
