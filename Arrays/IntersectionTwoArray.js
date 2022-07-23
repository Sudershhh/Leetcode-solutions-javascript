
//LEETCODE PROBLEM 349


//Intersection of Two Arrays - EASY


//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.



//OPTIMAL SOLUTION
//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let resultSet= new Set()
    for(let i =0;i<nums2.length;i++)
        {
            if(set1.has(nums2[i]))
                {
                   resultSet.add(nums2[i]) 
                }
        }
    let resultArray = Array.from(resultSet)
    return resultArray
    }



//BRUTE FORCE APPROACH
//TIME COMPLEXITY - O(N^2)
//SPACE COMPLEXITY - O(N)

// var intersection = function(nums1, nums2) {
//     let result={}

//    for(let i=0;i<nums1.length;i++)
//        {
//            for(let j=0;j<nums2.length;j++)
//                {
//                    if(nums1[i]==nums2[j])
//                        {
//                            result[nums1[i]]=true
//                        }
//                }
//        }
//     let finalArray = Object.keys(result).map((item)=> Number(item))
//     return finalArray
//     }