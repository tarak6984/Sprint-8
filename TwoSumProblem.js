// Challenge 1: Array Manipulation


function twoSum (nums, target){
const numMap = new Map();
for (let i=0; i< nums.length; i++){
const currentNumber = nums[i];
const complement = target - currentNumber;
if(numMap.has(complement)){
    return [numMap.get(complement), i]
}
numMap.set(currentNumber, i);
}
}

//Test Cases

console.log(twoSum([1,4,5,6,8], 10));