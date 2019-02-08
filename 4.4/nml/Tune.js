let Tune = {
    bigbang(title, composer, year) {
        this.title = title;
        this.composer = composer;
        this.year = year;
        this.performers = [];
    },

    addPerformer(performer) {
        this.performers.push(performer);
    },

    toString() {
        let s = '<p>';
        s += this.composer + ': ';
        s += '<i>' + this.title + '</i>, ';
        s += this.year;
        s += '</p>';
        return s;
    }
}
