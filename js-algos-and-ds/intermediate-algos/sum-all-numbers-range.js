/* 
Intermediate Algorithm Scripting: Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers 
plus the sum of all the numbers between them. The lowest number will not 
always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers 
between 1 and 4 (both inclusive) is 10. 
*/


function sumAll(arr) {
	let sum = 0;
	let a, b;
	arr[0] <= arr[1] ? [a, b] = arr : [b, a] = arr;

	for (let num = a; num <= b; num++) {
		sum += num
	}

	return sum;
}

console.log(sumAll([1, 4]));
