let Tunes = {
  init (titles, composers, year, performers) {
        this.titles = titles;
        this.composers = composers;
        this.year = year;
        this.performers = performers;
  },

  getTitles() {
    return this.titles;
  },

  setTitles(titles) {
    this.titles = titles;
  },

  getComposers() {
    return this.composers;
  },

  setComposers(composers) {
    this.composers = composers;
  },

  getYear() {
    return this.year;
  },

  setYear(year) {
    this.year = year;
  },

  getPerformers() {
    return this.performers;
  },

  setPerformers() {
    this.performers = performers;
  },

  toString() {
    let t = this.getComposers();
  }
    return t;


}
