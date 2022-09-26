//LEETCODE PROBLEM 557

//Reverse Words in a String III - EASY

//Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.


//TIME COMPLEXITY - O(N^2)
//SPACE COMPLEXITY - O(N)
var reverseWords = function(s) {
    let arr = s.split(" ");
    let output='';
    for(let i =0;i<arr.length;i++)
        {
            for(let j=arr[i].length-1;j>=0;j--)
                {
                   output += arr[i][j] 
                }
            if(i==arr.length-1) break;
            output+=" ";
        }
    return output
    
};