// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // let newArr = [];
    // let endIndex = size;

    // for(let i=0; i<array.length; i=i+size) {
    //     newArr.push(array.slice(i, endIndex));
    //     endIndex+=size;
    // }
    // return newArr;

    //solution with while loop

    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index+size));
        index += size;
    }

    return chunked;

    //second solution
    // const chunked = [];
    // for(let element of array) {
    //     const last = chunked[chunked.length -1];

    //     if(!last || last.length === size) {
    //         //push new array [] and pass first entry into it
    //         chunked.push([element]);
    //     } else {
    //         //last is the reference to the last array in the chunk array
    //         //we can push remaining element into it
    //         last.push(element)
    //     }
    // }

    // return chunked;
}

module.exports = chunk;
