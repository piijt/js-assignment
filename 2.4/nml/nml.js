/*global document, window */
'use strict';

/*
 * js24.js
 */
var hovered = function (e) {
    e.target.style = 'outline: 2px solid red;';
}
var unhovered = function (e) {
    e.target.style = 'outline: 0px solid red;';
}

var initialize = function () {
    var arr1 = document.getElementsByTagName('p');
    var arr2 = document.getElementsByTagName('div');
    for (var i = 0; i < arr1.length; i++) {
        arr1[i].addEventListener('mouseover', hovered)
        arr1[i].addEventListener('mouseout', unhovered)
    }
    for (var i = 0; i < arr1.length; i++) {
        arr2[i].addEventListener('mouseover', hovered)
        arr2[i].addEventListener('mouseout', unhovered)
    }
}

window.addEventListener('load', initialize);
