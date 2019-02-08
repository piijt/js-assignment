/*global document, window */
'use strict';

/*
 * js22.js
 */
var isNumeric = function () {
    var obj = process.argv[2];
    var arg = parseInt(obj);
    if (isNaN(arg) || arg <= 1 || arg > Number.MAX_SAFE_INTEGER) {
        process.exit(1);
    } else{
        return arg;
    }
}

var primality = function () {
    var arg = isNumeric();
    if (! arg) {
        return false;
    }
    let s = "";
    var start = new Date();
    isPrime(arg);
    var stop = new Date();
    var elapsed = "      " + (stop - start) + " ms";
    if (isPrime(arg)) {
        s = arg + " is a prime" + elapsed;
    } else {
        s = arg + " is not a prime" + elapsed;
    }
    console.log(s);
}

var primalityN = function () {
    var arg = isNumeric();
    if (! arg) {
        return false;
    }
    let s = "";
    var start = new Date();
    isPrimeN(arg);
    var stop = new Date();
    var elapsed = "      " + (stop - start) + " ms";
    if (isPrimeN(arg)) {
        s = arg + " is a prime" + elapsed;
    } else {
        s = arg + " is not a prime" + elapsed;
    }
    console.log(s);
}

var isPrime = function (arg) {
    if (arg % 2 === 0)
        return false;
    for (var i = 3; i <= Math.sqrt(arg); i += 2) {
        if (arg % i === 0) {
            return false;
        }
    }
    return true;
}

var isPrimeN = function (arg) {
    if (arg % 2 === 0 || arg % 3 === 0)
        return false;

    var i = 1;
    var lim = Math.sqrt(arg);
    var divm1 = 6 * i - 1;
    var divp1 = 6 * i + 1;

    while (divm1 <= lim || divp1 <= lim) {
        if (arg % divm1 === 0 || arg % divp1 === 0)
            return false;
        i++;
        divm1 = 6 * i - 1;
        divp1 = 6 * i + 1;
    }
    return true;
}

var factor = function (arg) {
    var arr = [];
    var i = 2;
    var modarg = arg / i;
    while (i <= modarg) {
        if (arg % i === 0) {
            arg /= i;
            if (!arr[i])
                arr[i] = 1;
            else
                arr[i]++;
        } else {
            i++;
        }
        if (arg === 1)
            break;
        if (isPrimeN(arg)) {
            i = arg;
        }
    }
    return arr;
}

var printPrimeFactors = function () {
    var arg = isNumeric();
    if (! arg) {
        return false;
    }

    var s = "";                     // init string
    if (isPrimeN(arg)) {
        s = " number is prime";     // either prime
    } else {
        var start = new Date();
        var pfa = factor(arg);
        var stop = new Date();
        for (var i in pfa) {
            s += i;                 // if not, place factor
            if (pfa[i] > 1) {
                s += '^' + pfa[i];  // power of factor if > 1
            }
            if (i < pfa.length -1 ) { // add asterisk execpt after last
                s += " * ";
            }
        }
    }
    console.log("Primefactors of " + arg + ": " + s + "     " + (stop-start) + " ms");
}

printPrimeFactors();
primality();
primalityN();
