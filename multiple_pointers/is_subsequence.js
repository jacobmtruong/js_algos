// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true 
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2){
    let i = 0;

    for (let j = 0; j < str2.length; j++){

        // edge case
        if (str1.length == 0){
            console.log("empty")
            return false;
        }

        if (str1[i] === str2[j]){
            i++;
        }

        if (i === str1.length){
            console.log("Yeah")
            return true
        }
    }

    console.log("Nah")
    return false
}

isSubsequence('ehd', 'ellh world')