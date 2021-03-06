//LEETCODE PROBLEM 1

//TWO SUM - EASY

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


//BRUTE FORCE SOLUTION

//TIME COMPLEXITY - O(N^2)
//SPACE COMPLEXITY - O(1)

// var twoSum = function(nums, target) {
    
//     for(let i=0;i<nums.length;i++)
//         {
           
//           for(let j=0;j<nums.length;j++)
//           {
//             if(nums[i]+nums[j]==target)
//             {
//                 return [i,j]
//             }
//           }
            
//         }
    
    
// };



//OPTIMAL SOLUTION

//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)


var twoSum = function(nums, target) {
    
    let map={};
    for(let i=0;i<nums.length;i++)
        {
            
            if(map.hasOwnProperty(target-nums[i]))
                {
                    return [map[target-nums[i]],i];
                }
            map[nums[i]]=i;
            
        }
    
};