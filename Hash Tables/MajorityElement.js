//LEETCODE PROBLEM 169

//MAJORITY ELEMENT - EASY

//ARRAY AND HASHTABLE


//TIME COMPLEXITY - O(N.LOGN) - BECAUSE OF SORT FUNCTION
//SPACE COMPLEXITY - O(N)


var majorityElement = function(nums) {
    let majorityMap = {}
    nums.forEach((item)=>{
        if(item in majorityMap)
            {
                majorityMap[item]+=1
            }
        else{
            majorityMap[item] =1
        }
    })
    let sortedArr = Object.entries(majorityMap).sort((a,b)=>b[1]-a[1])
    return sortedArr[0][0]
    };