//Leetcode Problem 283

//Move Zeroes - Easy


// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)


 var moveZeroes = function(nums) {
    
    if(nums.length==1) return nums;
    
    let count=0;
    for(let i=0;i<nums.length;i++)
        {
            if(nums[i]==0)
                {
                   count++; 
                }
        }
    
    
    let pointer=0;
    for(let j=0;j<nums.length;j++)
        {
            if(nums[j]!=0)
                {
                    nums[pointer] = nums[j]
                    pointer++;
                }
        }
    nums.splice(pointer)   
    while(count>0)
        {
            nums.push(0)
            count--;
        }
};