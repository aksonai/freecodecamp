/*
Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can 
be evenly divided by both, as well as by all sequential numbers in the 
range between these parameters.

The range will be an array of two numbers that will not necessarily be 
in numerical order. For example, if given 1 and 3, find the smallest common 
multiple of both 1 and 3 that is also evenly divisible by all numbers between 
1 and 3. The answer here would be 6.
*/


function computeSCM(num1, num2) {
    let a = Math.min(num1, num2);
    let b = Math.max(num1, num2);

    for (let m = b; m <= a * b; m += b) {
        if (m % a == 0) {
            return m;
        }
    }
}

function smallestCommons(arr) {
    let a = Math.min(...arr);
    let b = Math.max(...arr);
    let scm = 1;

    for (let i = a; i <= b; i++) {
        scm = computeSCM(scm, i);
    }
    return scm;
}


console.log(smallestCommons([2, 10]));
