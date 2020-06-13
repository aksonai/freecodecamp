/*
Intermediate Algorithm Scripting: Spinal Tap CasePassed
Convert a string to spinal case. Spinal case is 
all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    newStr = str.replace(/([a-z])([A-Z])/g, "$1_$2");
    let regexp = /[\s_]+/g;
    return newStr.split(regexp).join("-").toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
