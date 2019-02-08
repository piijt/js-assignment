'use strict';

let Rational = {
    init(n, d) {
        this.numerator = n ? Number(n) : 0;
        this.denominator = d ? Number(d) : 1;
        this.reduce();
    },

    toString() {
        let s = '';
        if (this.numerator * this.denominator < 0) {
            s = '-';
        }
        s += Math.abs(this.numerator);
        if (Math.abs(this.denominator) === 1) {
            return s;
        } else if (this.numerator === 0) {
            return this.numerator;
        } else {
            return s + '/' + Math.abs(this.denominator);
        }
    },

    reduce() {
        // let g = MyMath.gcd(this.numerator, this.denominator);
        // this.numerator /= g;
        // this.denominator /= g;
        // return;
        let m = gcd (this.den, this.num);
        this.den /=m;
        this.num /=m;
    },

    invert() {
        let t = Object.create(Rational);
        t.init(this.denominator, this.numerator);
        return t;
    },

    negate() {
        let t = Object.create(Rational);
        t.init(-this.numerator, this.denominator);
        return t;
    },

    toFloat() {
        return this.numerator / this.denominator;
    },

    add(oq) {
        let nq = Object.create(Rational);
        nq.init(this.numerator * oq.denominator + oq.numerator * this.denominator, this.denominator * oq.denominator);
        nq.reduce();
        return nq;
    },

    sub(oq) {
        return this.add(oq.negate());
    },

    mul(oq) {
        let nq = Object.create(Rational);
        nq.init(this.numerator * oq.numerator, this.denominator * oq.denominator);
        nq.reduce();
        return nq;
    },

    div(oq) {
        return this.mul(oq.invert());
    }

}

let gcd = function (a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
