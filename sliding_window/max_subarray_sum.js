// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

function maxSubarraySum(arr, nums){
    if (arr.length < nums){
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < nums; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = nums; i < arr.length; i++){
        tempSum = tempSum - arr[i-nums] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }

    console.log("Max sum is : " + maxSum)
    return maxSum
}

maxSubarraySum([1, 2, 3, 4, 5 ,6, 9, 9, 9, 9, 1, 2, 3], 4)