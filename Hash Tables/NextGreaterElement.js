//LEETCODE PROBLEM 496

//Next Greater Element I - EASY

//The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
//For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.


//TIME COMPLEXITY - O(N^2)
//SPACE COMPLEXITY - O(N)
var nextGreaterElement = function(nums1, nums2) {
    
    let output=[]    
    function getIndex(indexValue)
    {
        
        for(let i=0;i<nums2.length;i++)
            {
                if(nums2[i]==indexValue)
                    {
                        return i
                    }
            }
        
        
    }
    
    function getValue(index)//2
    {
        let value = nums2[index]
        
        for(let i=index+1;i<nums2.length;i++)
            {
               if(nums2[i]>value)
                   {
                       return nums2[i]
                   }
            }
       
        return -1
    }
    
    
    for(let i=0;i<nums1.length;i++)
        {
            
            
            
            //get index of nums1[i] in nums2
            let index = getIndex(nums1[i])
            
            
            //get value of index+1 in nums2
            let value = getValue(index)
            
            if(value>nums1[i])
                {
                    output.push(value)
                }
            else
                {
                    output.push(-1)
                }
            //if greater than return that value
            //else return -1
            
        }
    return output
    
};