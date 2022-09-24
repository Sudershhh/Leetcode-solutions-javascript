//LEETCODE PROBLEM 771

//JEWELS AND STONES - EASY

//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.



//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)
var numJewelsInStones = function(jewels, stones) {
    let count =0;
    let map = new Map()
    for(let i =0;i<jewels.length;i++)
        {
            map.set(jewels[i],true);
        }
    
    for(i=0;i<stones.length;i++)
        {
            if(map.has(stones[i]))
                {
                    count++
                }
        }
    return count
    
    
    
};