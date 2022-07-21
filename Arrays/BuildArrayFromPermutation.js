//LEETCODE PROBLEM 1920

//Build Array from Permutation - EASY





//TIME COMPLEXITY - O(N+N) = O(2N) = O(N)
//SPACE COMPLEXITY - O(1)
var buildArray = function(nums) {

for(let i=0;i<nums.length;i++)
{
    nums[i]= nums[i] + (nums[nums[i]]%1000)*1000
}
for(let i=0;i<nums.length;i++)
{
    nums[i]= Math.floor(nums[i]/1000)
}
return nums;
}


//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)

// var buildArray = function(nums) {
    
    
//     let temp=[]
//     for(let i=0;i<nums.length;i++)
//         {
//             temp[i] = nums[nums[i]]
//         }
//     return temp
// };