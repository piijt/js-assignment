/*global document, window */
'use strict';

/*
 * js25.js
 */
var insChar = function (e) {
    var key = String.fromCharCode(e.keyCode || e.charCode)
    $('abc').innerHTML += key;
}
var focused = function (e) {
    window.addEventListener('keypress', insChar);
    $('abc').focus();
    $('abc').addEventListener('mouseout', blurred);
    $('abc').style = 'outline: 2px solid red; width: 50%; height: 300px;';
}
var blurred = function (e) {
    window.removeEventListener('keypress', insChar);
    $('abc').style = 'outline: 1px solid red; width: 50%; height: 300px;';
}

var initialize = function () {
    $('abc').addEventListener('mouseover', focused);
    // window.alert('test');
}

window.addEventListener('load', initialize);
