// Write a function which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, n){

    if (arr.length < n){
        return null
    }

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i  < n; i++){
        maxSum += arr[i]
    }

    tempSum = maxSum
    // At this point, the max sum is set to the first window of n elements
    // All we will do is shift our window by subtracting the first element and adding next element
    // Repeat this process until we reach end of array 

    for (let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}

console.log(maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 2, 9, 9, 9, 1], 3))