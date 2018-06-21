// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // solution 1
    // let totalHash = '#';
    // let addHash = '##';
    //
    // for(let i=0; i<n; i++) {
    //     console.log(' '.repeat(n - i - 1) + totalHash + ' '.repeat(n - i - 1));
    //     totalHash += addHash;
    // }

    // solution 2
    for(let row = 0; row < n; row++) {
        let level = '';
        let midpoint = n - 1;

        for(let column = 0; column < n*2 -1 ; column++) {
            if (column >= midpoint-row && column <= midpoint+row) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

module.exports = pyramid;
