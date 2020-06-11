/*
Intermediate Algorithm Scripting: Diff Two ArraysPassed

Compare two arrays and return a new array with any items only found in one of the two given 
arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr.filter(elem => !(arr1.includes(elem) && arr2.includes(elem)));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));