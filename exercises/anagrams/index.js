// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

    let sortedStringA = stringA.split('').sort().join();
    let sortedStringB = stringB.split('').sort().join();

    return sortedStringA === sortedStringB;

    // solution 2
    // let sortedStringA = null;
    //     // let sortedStringB = null;
    //     //
    //     // for(let i = 65; i<=122; i++) {
    //     //     let char = String.fromCharCode(i);
    //     //     if(stringA.indexOf(char) > -1) {
    //     //         sortedStringA += char;
    //     //     }
    //     //
    //     //     if(stringB.indexOf(char) > -1) {
    //     //         sortedStringB += char;
    //     //     }
    //     // }
    //     //
    //     // return sortedStringA === sortedStringB;



    //solution 3
//     let stringAMap = getCharMap(stringA);
//     let stringBMap = getCharMap(stringB);
//
//     if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
//         return false;
//     }
//
//     for (let char in stringAMap) {
//         if (stringAMap[char] !== stringBMap[char]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// function getCharMap(str) {
//     let charMap = {};
//
//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;

}

module.exports = anagrams;
