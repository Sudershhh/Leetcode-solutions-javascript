//LEETCODE PROBLEM 67

//ADD BINARY - EASY

//Given two binary strings a and b, return their sum as a binary string.

//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(1)
var addBinary = function(a, b) {
    
    let result=''
    let carry=0
    let val=0
    let len1 = a.length
    let len2 = b.length
    let max = Math.max(len1,len2)
    for(let i=0;i<max;i++)
        {
            val = carry + Number(a[len1-i-1] || 0) + Number(b[len2-i-1] || 0)
            carry = Math.floor(val/2)
            result = (val%2) + result
            
        }
     
     if(carry)
         {
             result = 1+result
         }
     
     return result
     
     
 };