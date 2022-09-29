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