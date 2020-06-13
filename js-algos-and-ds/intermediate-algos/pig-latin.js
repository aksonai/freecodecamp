/*
Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant 
cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be 
English words in all lowercase.
*/


let vowels = ['a', 'e', 'i', 'o', 'u'];

function translatePigLatin(str) {
    let cluster = '';

    for (let i = 0; i < str.length; i++) {
        if (vowels.some(vowel => vowel === str[i])) {
            break
        } else {
            cluster += str[i];
        }
    }

    if (cluster === '') {
        return str + 'way';
    } else {
        return str.slice(cluster.length,) + cluster + 'ay';
    }
}

console.log(translatePigLatin("consonant"));

