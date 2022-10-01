// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...args){
    let freqObj = {}

    for (arg of args){
        if (freqObj[arg]){
            console.log("TRUEEEE")
            return true;
        } else {
            freqObj[arg] = 1
        }
    }

    console.log("False")
    return false;
}

areThereDuplicates("Red", "red", 1, 2, 3, 1)