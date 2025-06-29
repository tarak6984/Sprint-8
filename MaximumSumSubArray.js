function maxSubArray(nums){
    if(nums.length === 0)return 0;
     let maxSum = nums[0];
     let currentSum = nums[0];
  for (let i =1; i< nums.length; i++){
    currentSum = Math.max(nums[i], currentSum+ nums[i])
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum;
}


//[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//currentSum = -2 , maxSum = -2
