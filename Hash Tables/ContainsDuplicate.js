//LEETCODE PROBLEM 219


//CONTAINS DUPLICATE - II - EASY



//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)

var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for(let i=0;i<nums.length;i++)
        {
            
            if(map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <=k)
                {
                    return true
                }
            
            map.set(nums[i],i)
            
        }
    return false
};



//BRUTE FORCE SOLUTION
//TIME COMPLEXITY - O(N^2)
//SPACE COMPLEXITY - O(1)

// var containsNearbyDuplicate = function(nums, k) {
    
//     for(let i =0;i<nums.length;i++)
//         {
//             for(let j=i;j<nums.length;j++)
//                 {
//                     if(i!=j && nums[i]==nums[j] && Math.abs(i-j)<=k)
//                         {
//                             return true
//                         }
//                 }
//         }
//     return false
// };