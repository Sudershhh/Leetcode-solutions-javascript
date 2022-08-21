
//LEETCODE PROBLEM 268

//MISSING NUMBER - EASY

//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(1)
var missingNumber = function(nums) {
    let n = nums.length
    let sum = n*(n+1)/2
    let arraySum = nums.reduce((acc,item)=>acc+item,0)
    return Math.abs(arraySum-sum)
};



//TIME COMPLEXITY - O(N.LOGN)
//SPACE COMPLEXITY - O(1)

var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++)
        {
            if(nums[i]!=i)
                {
                    return i
                }
        }
    return nums.length
};