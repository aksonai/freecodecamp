/*
Intermediate Algorithm Scripting: Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&apos;",
    };
    let convertedArr = str.split("").map(function (elem) {
        if (entities.hasOwnProperty(elem)) {
            return entities[elem];
        } else {
            return elem;
        }
    });
    return convertedArr.join('');
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));

