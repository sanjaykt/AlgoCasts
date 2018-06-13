// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charsTable = {};
    let max = 0;
    let maxRepeatedChar;

    for(let char of str) {
        //if no value exists, meaning if key is just created then it will return falsy
        //so, if falsy then assign '1' to it
        charsTable[char] = charsTable[char] + 1 || 1;
    }
    //another way to write the above code
    // for(let char of str) {
    //     if(charsTable[char]) {
    //         charsTable[char]++
    //     } else {
    //         charsTable[char] = 1;
    //     }
    // }

    for(let key in charsTable) {
        if(charsTable[key] > max) {
            max = charsTable[key];
            maxRepeatedChar = key
        }
    }
    return maxRepeatedChar;
}

module.exports = maxChar;
