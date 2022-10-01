// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2){

    // conver both numbers to string for convenience
    let string1 = String(num1)
    let string2 = String(num2)

    // return false if lengths of numbers not the same
    if (string1.length != string2.length){
        console.log("False")
        return false
    }

    // create object for storing frequency of digits of first number
    let freqObj = {}
    
    for (digit of string1){
        freqObj[digit] = (freqObj[digit] || 0) + 1
    }

    // compare to second number by subtracting from freqObj (frequency 0 or number not present will return false)
    for (digit of string2){
        if (!freqObj[digit]){
            console.log("False 2")
            return false
        } else {
            freqObj[digit] -= 1
        }
    }
    console.log("TRUEEEE")
    return true
}

sameFrequency(123333, 333322);