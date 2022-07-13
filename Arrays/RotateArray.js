//LEETCODE PROBLEM 189

//ROTATE ARRAY - MEDIUM

//Given an array, rotate the array to the right by k steps, where k is non-negative.


//TIME COMPLEXITY - 0(N)
//SPACE COMPLEXITY - O(N)

var rotate = function(nums, k) {
    let map={},startIndex=0;
    for(let i=0;i<nums.length;i++)
        {
            map[nums[i]]=i;
        }
    for(let i=0;i<nums.length;i++)
        {
          if(map[nums[i]]+k>=nums.length)  
              {
                    map[nums[i]]=startIndex;
                    startIndex++;
              }
            else{
                
                map[nums[i]] = map[nums[i]]+k

            }
        }
    nums = Object.keys(map).sort((a,b)=>map[a]-map[b]).map((item)=>Number(item))
}



//TIME COMPLEXITY - 0(N)
//SPACE COMPLEXITY - O(N)

// var rotate = function(nums, k) {
//     let barrier = k%nums.length;
    
//     let endValues = nums.splice(nums.length-barrier)
    
//     nums.splice(0,0,...endValues)
    
// }