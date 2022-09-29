// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(sortedArr){
    if (sortedArr.length == 0){
        return 0;
    }

    // left pointer
    let i = 0;
    for (let j = 1; j < sortedArr.length; j++){
        if (sortedArr[i] != sortedArr[j]){
            i++;
            sortedArr[i] = sortedArr[j]
        }
    }

    return i+1
}

console.log(countUniqueValues([]))
console.log(countUniqueValues([1, 1, 3, 4, 5, 6, 7]))