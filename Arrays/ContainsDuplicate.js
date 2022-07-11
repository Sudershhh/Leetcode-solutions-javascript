//LEETCODE PROBLEM 217

//Contains Duplicate - EASY

//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//TIME COMPLEXITY - 0(N)
//SPACE COMPLEXITY - 0(N)


var containsDuplicate = function(nums) {
    let map = {}
    for(let i =0;i<nums.length;i++)
        {
            if(!map[nums[i]])
                {
                    map[nums[i]]=true
                }
            else{
                return true
            }
        }
    return false;
};
