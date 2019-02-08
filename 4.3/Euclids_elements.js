/**
 * The world's oldest non trivial algorithm:
 * Euclid's Elements, Book 7, ca. 300 BC.
 * Based on
 * if r = the remainder from the division a/b,
 * then a og b's commom divisors are the same as b's and r's.
 * This means that gcd(a,b) = gcd(b,r)
 *
 * By doing this continuously we get:
 * gcd(36,20) = gcd(20,16) = gcd(16,4) = gcd(4,0)
 * It is possible to prove that we will end with a pair
 * where the second number is 0. When that happens
 * the first number of the pair equals their gcd.
 *
 * This is the quintessential example of recursive function programming!
 */

/**
 * Euclid's algorithm
 *
 * calling sequence
 * let n = parseInt(prompt('Give me an integer:'));
 * let d = parseInt(prompt('Give me an integer:'));
 * n = Number(n);
 * d = Number(d);
 * gcd(n, d);
 */
let gcd = function (a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b); // Modolus Divison Remainder 
    }
}
