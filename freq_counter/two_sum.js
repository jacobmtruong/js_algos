// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++){
        let another = target - nums[i]

        if (map[another] != null){
            return [map[another], i]
        }

        map[nums[i]] = i
    }
    console.log(map)
};

console.log(twoSum([12,97,2,7],9))