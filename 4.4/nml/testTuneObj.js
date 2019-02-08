'use strict';

let begin = function() {
    let tunes = [];

/* the following array elements are for test purposes
 * with ajax the array might come by json from server file, re ajax lesson
 * with php the array may be generated on the server side from json, re REST
 */
    let tune = Object.create(Tune);
    tune.bigbang("Mac the Knife", "Kurt Weil", 1935);
    tune.addPerformer("Lotte Lenya");
    tunes.push(tune);

    tune = Object.create(Tune);
    tune.bigbang("Ode an der Freude", "Beethoven", 1835);
    tune.addPerformer("Berliner");
    tunes.push(tune);

    tune = Object.create(Tune);
    tune.bigbang("What a Wonderful World", "unknown", 1966);
    tune.addPerformer("Louis Armstrong");
    tunes.push(tune);
/* end of test data */

    let disp = function() {
        let div1 = $('tunearea');
        while (div1.firstChild) {    // Removing all children from an element
            div1.removeChild(div1.firstChild);
        }
        for (let tune of tunes) {
            div1.innerHTML += tune.toString();
        }
    };

    disp();
    $('butt').addEventListener('click', function() {
            let cmp = $('cmp').value;
            let title = $('title').value;
            let year = $('year').value;
            let perf = $('perf').value;
            if (cmp !== '' && title !== '' && perf !== '') {
                let tune = Object.create(Tune);
                tune.bigbang(title, cmp, year);
                tune.addPerformer(perf);
                tunes.push(tune);
                disp();
                $('cmp').value = '';
                $('title').value = '';
                $('perf').value = '';
            }
        }
    );
}
window.addEventListener('load', begin);
