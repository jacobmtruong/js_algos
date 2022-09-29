// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
    if (str1.length != str2.length){
        return false;
    }

    let freqObj = {};
    
    for (let char of str1){
        freqObj[char] = (freqObj[char] || 0) + 1
    }
    
    for (let i = 0; i < str2.length; i++){
        let letter = str2[i]

        if (!(freqObj[letter])){
            return false;
        } else {
            freqObj[letter] -= 1;
        }
    }

    console.log("anagram")
    return true
}

validAnagram("saucel", "causel")