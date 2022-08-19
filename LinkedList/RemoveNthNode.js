//LEETCODE PROBLEM 19

//Remove Nth Node From End of List - MEDIUM



//Given the head of a linked list, remove the nth node from the end of the list and return its head.



//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(1)
var removeNthFromEnd = function(head, n) {
    
    let newNode = new ListNode(0)
    newNode.next = head
    let slow = newNode
    let fast = newNode
    
    let count = n
    while(count>=0)
        {
            fast=fast.next
            count--;
        }
    
    while(fast)
        {
            slow=slow.next
            fast=fast.next
        }
    
    slow.next = slow.next.next
    return newNode.next
}


//TIME COMPLEXITY - O(2N)
//SPACE COMPLEXITY - O(1)
var removeNthFromEnd = function(head, n) {
    
    if(!head)
        {
            return null
        }
    let temp = head
    let ll = head
    let counter=0    
    while(temp!==null)
        {
            counter+=1
            temp=temp.next
        }
 
    let leadingCount = counter - n 
    if(leadingCount==0)
        {
            return head.next
        }
    
    while(leadingCount>1)
        {
            ll=ll.next
            leadingCount-=1;
        }
    
   ll.next = ll.next && ll.next.next
    
    return head
  
};