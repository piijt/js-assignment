'use strict';

let str2frac = function(s) {
    let arr = s.value.split('/');
    let obj = Object.create(Rational);
    obj.init(Number(arr[0]), Number(arr[1]));
    return obj;
}

let calc = function(ev) {
    let f1 = str2frac($('f1'));
    let f2 = str2frac($('f2'));
    switch(ev.target.id) {
        case 'plus': f1 = f1.add(f2);
            break;
        case 'minus': f1 = f1.sub(f2);
            break;
        case 'mul': f1 = f1.mul(f2);
            break;
        case 'div': f1 = f1.div(f2);
    }
    $('f1').value = f1.toString();
    $('f2').value = '';
    $('f2').focus();
}


let begin = function() {
    $('plus').addEventListener('click', calc);
    $('minus').addEventListener('click', calc);
    $('mul').addEventListener('click', calc);
    $('div').addEventListener('click', calc);
}
window.addEventListener('load', begin);
