//LEETCODE PROBLEM 1290


//Convert Binary Number in a Linked List to Integer - EASY


//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(1)
var getDecimalValue = function(head) {
    let output=0;
    let length=0
    let temp = head
    while(temp!=null)
        {
            length++;
            temp=temp.next;
        }
    let bit = Math.pow(2,length-1)
    while(head!=null)
    {
        if(head.val==1)
            {
                output+= (head.val * bit)
                
            }
        bit= bit/2
        head=head.next
    }
    return output
    
    
};

//ANOTHER SOLUTION
//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(1)

// var getDecimalValue = function(head) {
    
//     if(!head) return head
    
//     let str=''
//     while(head!=null)
//     {
//         str+=head.val
//         head=head.next
//     }
//     return parseInt(str,2)
// };