//LEETCODE PROBLEM 448

//Find All Numbers Disappeared in an Array - EASY

//Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)
var findDisappearedNumbers = function(nums) {
        
    let map = {}
    let output=[]
    for(let i=0;i<nums.length;i++)
        {
            if(!map[nums[i]])
                {
                    map[nums[i]]=true
                }
        }
    
    for(let i=1;i<=nums.length;i++)
        {
            if(!map[i])
                {
                    output.push(i)
                }
        }
    
    return output
    
};