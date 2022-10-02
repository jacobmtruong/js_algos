// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair(sortedArr, target){
    let i = 0;
    let j = sortedArr.length - 1;
    let average = 0;

    while (i < j){
        average = (sortedArr[i] + sortedArr[j]) / 2
        console.log(average)

        if (average === target){
            console.log("Target hit")
            return true
        }
        else if (average > target){
            j -= 1
        }
        else {
            i += 1
        }
    }

    console.log("Target not hit")
    return false
}

averagePair([0, 6], 3)