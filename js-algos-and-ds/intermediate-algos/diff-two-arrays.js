function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr.filter(elem => !(arr1.includes(elem) && arr2.includes(elem)));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));