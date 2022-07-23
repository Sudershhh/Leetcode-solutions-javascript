//LEETCODE PROBLEM 205

//ISOMORPHIC STRINGS - EASY

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)
var isIsomorphic = function(s, t) {
    
    if(s.length!=t.length) return false;
    
    let isoMapS = new Map()
    let isoMapT = new Map()
    
    for(let i=0;i<s.length;i++)
        {
            if(isoMapS.has(s[i]) && isoMapS.get(s[i])!=t[i])
                {
                    return false
                }
             if(isoMapT.has(t[i]) && isoMapT.get(t[i])!=s[i])
                {
                    return false
                }
            isoMapS.set(s[i],t[i])
            isoMapT.set(t[i],s[i])
        }
    return true

};