'use strict';

let Rational = {

    init (n, d) {
          this.num = n; // numerator
          this.den = d; // denominator
    },

    toString() {
      if (Rational.den === 1) {
          return this.num;
      } else {
        return this.num + '/' + this.den;
      }
    },

    negate() {
    let i = Object.create(Rational);
    i.init(this.num * -1, this.den);
      return i;
    },

    invert() {
    let i = Object.create(Rational);
        i.init(this.den, this.num);
      return i;
    },

    toFloat() {
      return this.num / this.den;
    },

    reduce() { // num / den / greatest common den
      let m = gcd (this.den, this.num);
      this.den /=m;
      this.num /=m;
      return;
    },

  add() {
    return (this.num, this.den);
  },

  sub() {

  },

  mul() {

  },

  div() {

  }


};

let gcd = function (a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}


let obj = Object.create(Rational);
obj.init(4,8);
console.log(obj.invert().toString() + ' invert');
console.log(obj.toFloat() + ' toFloat');
obj.reduce();
// console.log(obj.reduce() + ' reduce');
console.log(obj.toString());
console.log(obj.add() + ' add');
