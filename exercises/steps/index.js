// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    // first solution
    // let hash = '#';
    // for(let i = 1; i <= n; i++) {
    //     console.log(hash + ' '.repeat(n-i));
    //     hash += '#';
    // }

    //second solution
    for(let row = 1; row <= n; row++) {
        let step = '';
        for(let column = 1; column <= n; column++) {
            if(column  <= row) {
                step += '#';
            } else {
                step += ' ';
            }
        }

        console.log(step);
    }


}

module.exports = steps;
