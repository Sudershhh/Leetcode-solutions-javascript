//LEETCODE PROBLEM 160

//Intersection of Two Linked Lists - EASY




//OPTIMAL APPROACH -1


//TIME COMPLEXITY - O(2M) or O(2N)
//SPACE COMPLEXITY - O(1)

var getIntersectionNode = function(headA, headB) {
    
    if(headA == null || headB == null)
        {
            return null
        }
    
    let tempA= headA
    let tempB = headB
  
    while(tempA !=null || tempB !=null)
        {
            
            
            if(tempA==null)
                {
                    tempA=headB  
                }
            
            if(tempB==null)
                {
                    tempB=headA
                }
            
            
            if(tempA==tempB)
                {
                    return tempA
                }
            
            tempA=tempA.next
            tempB=tempB.next
        }
    
    return null
    
};




//OPTIMAL APPROACH -2


//TIME COMPLEXITY - O(M+N)
//SPACE COMPLEXITY - O(1)
// var getIntersectionNode = function(headA, headB) {
    
//     if(headA == null || headB == null)
//         {
//             return null
//         }
    
//     let tempA = headA
//     let tempB = headB
    
//     let lenA =0
//     let lenB=0
    
//     while(tempA!=null)
//         {
//             lenA++;
//             tempA=tempA.next
//         }
//     while(tempB!=null)
//         {
//             lenB++;
//             tempB=tempB.next
//         }
    
//     tempA = headA
//     tempB = headB
//     let diff = Math.abs(lenA-lenB)
    
//     if(lenA>lenB)
//         {
//             for(let i=0;i<diff;i++)
//                 {
//                     tempA=tempA.next
//                 }
//         }
//     else
//         {
//            for(let i=0;i<diff;i++)
//                 {
//                     tempB=tempB.next
//                 } 
//         }
    
//     while(tempA!=null && tempB!=null)
//         {
//             if(tempA==tempB)
//                 {
//                     return tempA
//                 }
//             tempA=tempA.next
//             tempB=tempB.next
//         }
    
    
    
    
//     return null
    
// };