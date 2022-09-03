//LEETCODE PROBLEM 387.

// First Unique Character in a String - EASY


//Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.



//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N) ~ O(1) finite number of english characters.   
var firstUniqChar = function(s) {
    let map = new Map()
    for(let i=0;i<s.length;i++)
        {
            if(map.has(s[i]))
                {
                    let val = map.get(s[i])
                    map.set(s[i],val+1)
                    continue
                }
            map.set(s[i],1)
        }
    
    for(i=0;i<s.length;i++)
        {
            if(map.get(s[i])==1)
                {
                    return i
                }
        }
    return -1
};






//TIME COMPLEXITY - O(N^2)
//SPACE COMPLEXITY - O(N)
var firstUniqChar = function(s) {
    let map = new Map()
    for(let i=0;i<s.length;i++)
        {
            let obj={
                val:0,
                index:[i]
            }
            if(map.has(s[i]))
                {
                    obj.val = map.get(s[i]).val +1
                    let existingIndex = map.get(s[i]).index
                    existingIndex.push(...obj.index)
                    obj.index =[...existingIndex]
                    map.set(s[i],obj)
                    continue
                }
            obj.val = 1
            map.set(s[i],obj)
        }
    console.log(map)
    
    for(const [key,value] of map)
    {
        if(value.val==1)
            {
                return Number(value.index[0])
            }
    }
    return -1
};









