/*
Intermediate Algorithm Scripting: Sorted Union

Write a function that takes two or more arrays and returns a new 
array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included 
in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the 
final array should not be sorted in numerical order.Check the assertion 
tests for examples.
*/

function uniteUnique(arr) {
    let allArr = Array.from(arguments).reduce((arr1, arr2) => arr1.concat(arr2));
    let uniqueArr = [];
    allArr.forEach(function (elem) {
        if (!uniqueArr.includes(elem)) {
            uniqueArr.push(elem);
        }
    });
    return uniqueArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
