// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    //solution one
    // return str === reversedStr;

    //solution two
    // if(reversedStr.localeCompare(str) === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    //solution three

  
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })
}

module.exports = palindrome;
