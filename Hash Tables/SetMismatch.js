//LEETCODE PROBLEM 645

//SET MISMATCH - EASY


//You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.


//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(1)
var findErrorNums = function(nums) {
    
    
    //nums=[1,2,2,4]
    let length = nums.length;//4
    let sumLength = (length*(length+1))/2;//1+2+3+4 = 10
    
    let set = new Set(nums)//{1,2,4} 
    let setSum=0
    set.forEach((item)=>setSum +=item)//1+2+4 = 7
    
    let origArraySum = nums.reduce((acc,item)=>acc+item,0)//1+2+2+4=9
    
    return [origArraySum-setSum, sumLength-setSum]
    
};