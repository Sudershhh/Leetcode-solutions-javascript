//LEETCODE PROBLEM 1920

//Build Array from Permutation - EASY


//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)

var buildArray = function(nums) {
    
    
    let temp=[]
    for(let i=0;i<nums.length;i++)
        {
            temp[i] = nums[nums[i]]
        }
    return temp
};