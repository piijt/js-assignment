'use strict';
let isDate = function (date) {
    return true;
}
let validate = function (e) {
    let date = $('date');
    var number = $('number');
    if (number.value > 100 || number.value < 0){
        number.focus();
        e.preventDefault();
        window.alert('The number must be between 0 and 100!');
        return false;
    } else {
        return true;
    }
    if (!isDate(date.value)) {
        date.focus();
        e.preventDefault();
        return false;
    }
    
    return true;
}

let dispSlide = function () {
    $('ranger').innerHTML =
            $('degree').value;
}

let followme = function () {
    $('formal').addEventListener('submit', validate);
    dispSlide();
    $('degree').addEventListener('mousemove', dispSlide);
}
window.addEventListener('load', followme);
