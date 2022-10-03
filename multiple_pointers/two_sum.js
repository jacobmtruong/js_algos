// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    let start = 0;
    let end = nums.length-1

    let num1 = 0
    let num2 = 0
    
    let sortedNums = [...nums].sort((a,b) => a-b);
    
    while(start < end){
        let sum = sortedNums[start] + sortedNums[end]
        
        if (sum === target){
            num1 = sortedNums[start]
            num2 = sortedNums[end]
            break;
        } 
        else if (sum < target){
            start += 1
        }
        else {
            end -= 1
        }
    }
  
    return [nums.indexOf(num1), nums.lastIndexOf(num2)]
};

console.log(twoSum([1, 2, 3, 4, 5, 6], 11))