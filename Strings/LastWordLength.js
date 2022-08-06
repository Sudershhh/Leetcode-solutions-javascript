
//LEETCODE PROBLEM 58

//LENGTH OF LAST WORD - EASY


//Given a string s consisting of words and spaces, return the length of the last word in the string.

//A word is a maximal substring consisting of non-space characters only.




//TIME COMPLEXITY - O(N) due to split function
//SPACE COMPLEXITY - O(1) 
var lengthOfLastWord = function(s) {
    s=s.trim()
    let wordArray = s.split(" ")
    
    return wordArray[wordArray.length-1].length
};