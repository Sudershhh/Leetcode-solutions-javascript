//LEETCODE PROBLEM 804

//Unique Morse Code Words - EASY

//Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.




//TIME COMPLEXITY - O(N^2)
//SPACE COMPLEXITY - O(N)
var uniqueMorseRepresentations = function(words) {
    let map = new Map()
    let arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let ind=0,output=0;
    let set= new Set()
    for(let i= 97;i<123;i++)
        {
            map.set(String.fromCharCode(i),arr[ind])
            ind++;
        }
    for(let i=0;i<words.length;i++)
        {
            let str = ''
            for(j=0;j<words[i].length;j++)
                {
                    str+=map.get(words[i][j])
                }
            set.add(str)
        }
    return set.size
};