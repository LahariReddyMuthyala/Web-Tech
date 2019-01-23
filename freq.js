/* exported freq */
/* eslint-env browser */
/* eslint no-console */

function freq() {
    var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    a.sort();
    var max = 0, c, i, c1 = 1;
    for (i = 0; i < a.length - 1; i = i + 1) {
        if (a[i] === a[i + 1]) {
            c1 = c1 + 1;
        } else {
            if (max < c1) {
                max = c1;
                c = a[i];
            }
            c1 = 1;

        }

    }
    if (max < c1) {
        max = c1;
        c = a[i];
    }
    document.writeln(c + " repeats " + max + " number of times");
}
