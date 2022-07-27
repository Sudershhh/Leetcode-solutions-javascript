//LEETCODE PROBLEM 242

//VALID ANAGRAM - EASY


// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)

var isAnagram = function(s, t) {
    
    if(s.length!=t.length)
        {
            return false
        }
    
    
    let sMap = new Map()
    let tMap = new Map()
    
    
    
    for(let i =0;i<s.length;i++)
        {
            if(sMap.has(s[i]))
                {
                    sMap.set(s[i],sMap.get(s[i])+1)
                }
            else{
                            sMap.set(s[i],1)

            }
        }
    
    for(let i =0;i<t.length;i++)
        {
            if(tMap.has(t[i]))
                {
                    tMap.set(t[i],tMap.get(t[i])+1)
                }
            else
                {
                    tMap.set(t[i],1)
                }
        }
    for(let i=0;i<s.length;i++)
        {
            
            if(sMap.has(s[i]) && sMap.get(s[i])==tMap.get(s[i]))
                {
                    continue
                }
            return false
        }
    return true
    
};