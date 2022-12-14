// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(arr, sum){

    // total signifies total of given window
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < arr.length){
        if (total < sum && end < arr.length){
            total += arr[end]
            end++
        }
        else if (total >= sum){
            minLen = Math.min(minLen, end-start)
            total -= arr[start]
            start++
        }
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([1, 2, 3, 4, 5, 6, 7], 6))