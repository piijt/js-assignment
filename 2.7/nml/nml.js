/*global document, window */
'use strict';

/*
 * js27.js
 */

var first = function (txt) {
    return txt.charAt(0);
}
var last = function (txt) {
    return txt.charAt(txt.length - 1);
}
var middle = function (txt) {
    return txt.substr(1, txt.length - 2);
}

var isPalindrome = function (phrase) {
    if (phrase.length <= 1)
        return true;

    if (first(phrase) !== last(phrase)) {
        return false;
    }

    return isPalindrome(middle(phrase));

}

var doTheHonors = function () {
    if (isPalindrome(document.forms.myform.pal.value)) {
        document.forms.myform.feedback.value = 'Text is a palindrome';
    } else {
        document.forms.myform.feedback.value = 'Text is not a palindrome';
    }
}

var initialize = function () {
    $('mybutton').addEventListener('click', doTheHonors);
}

window.addEventListener('load', initialize);
