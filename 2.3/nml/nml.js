/*global document, window */
'use strict';

/*
 * js23.js
 */
var validity = function () {
    var obj = document.forms.myform;
    var arg = parseInt(obj.num.value);
    if (isNaN(arg) || arg < 1) {
        obj.result.value = "invalid number";
        obj.num.focus();
        return false;
    }

    obj.result.value = factorial(arg);
    return true;
}

var factorial = function (arg) {
    if (arg === 1)
        return 1;
    else
        return arg * factorial(arg - 1);
}

var initialize = function () {
    document.getElementById('mybutton').addEventListener('click', validity);
}

window.addEventListener('load', initialize);
