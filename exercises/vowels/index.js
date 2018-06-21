// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    // solution 1
    // let vowelsCount = 0;
    // const vowelsLetters = ['a', 'e', 'i', 'o', 'u'];

    // for(let char of str.toLowerCase()) {
    //     // if(vowelsLetters.indexOf(char) > -1) {
    //     //     vowelsCount++;
    //     // }

    //     if(vowelsLetters.includes(char)) {
    //         vowelsCount++;
    //     }
    // }
  
    // return vowelsCount;

    // solution 2
    let matches = str.match(/[aeiou]/gi);

    // if(matches) {
    //     return matches.length;
    // } else {
    //     return 0;
    // }

    return matches ? matches.length : 0;

    
}

module.exports = vowels;
