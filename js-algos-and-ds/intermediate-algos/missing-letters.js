/*
Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    let start = str.charCodeAt(0);
    let finish = str.charCodeAt(str.length - 1);
    for (let i = start; i <= finish; i++) {
        let x = String.fromCharCode(i);
        let y = str[i - start];
        if (x !== y) {
            return x
        }
    }
}

console.log(fearNotLetter("abce"));
