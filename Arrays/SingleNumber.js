//LEETCODE PROBLEM 136

//SINGLE NUMBER - EASY

//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.



//MORE INTUITIVE/OPTIMAL APPROACH - BLEW MY MIND - BIT MANIPULATION
//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(1)

//XOR OPERATION
//n ^ n = 0
//n ^ 0 = n
var singleNumber = function(nums) {
  
    let result = 0
    for(let i=0;i<nums.length;i++)
        {
            result = nums[i] ^ result
        }
    return result
    }

//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)
var singleNumber = function(nums) {
  
    if(nums.length<2)
        {
            return nums[0]
        }
    
    let map = new Map()
    for(let i=0;i<nums.length;i++)
        {
            if(map.has(nums[i]))
                {
                    map.set(nums[i],map.get(nums[i])+1)
                }
            else{
                 map.set(nums[i],1)
                }
        }
        
    for (const [key, value] of map) 
    {
            if(value==1)
                {
                    return key
                }
        }
    
};