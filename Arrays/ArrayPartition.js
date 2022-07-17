//LEETCODE PROBLEM 561

//ARRAY PARTITION - EASY



//TIME COMPLEXITY - O(N.LOGN)
//SPACE COMPLEXITY - O(N)

var arrayPairSum = function(nums) {
    let maxSum = 0;
   nums.sort((a,b)=>a-b)
   for(let i=0;i<nums.length;i+=2)
       {
           maxSum+= nums[i]
       }
    
    return maxSum;
};