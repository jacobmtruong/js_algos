// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...args){
    args.sort() // string sort
    args.sort((a,b) => a - b); // number sort

    let i = 0;
    for (let j = 1; j < args.length; j++){
        if (args[i] == args[j]){
            console.log("Duplicate found: " + args[i])
            return true;
        }
        i += 1
    }
    console.log("No duplicates")
    return false
}

areThereDuplicates("whatever", "yeahokay", 1, 3,5, 0, "whatever")