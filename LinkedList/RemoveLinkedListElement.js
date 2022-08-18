//LEETCODE PROBLEM 203

//Remove Linked List Elements - EASY

//Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.


//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(1)
var removeElements = function(head, val) {
    
    while(head && head.val==val)
        {
            head = head.next
        }
    
    let temp = head
    
    while(temp && temp.next)
    {
        if(temp.next.val==val)
            {
                temp.next = temp.next.next
            }
        else
            {
                temp = temp.next
            }
    }
    return head


}

//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)
var removeElements = function(head, val) {
    
    let temp = head
    let arr=[]
    while(temp!=null)
        {
            arr.push(temp.val)
            temp=temp.next
        }
    head = arr.reverse().filter((item)=> item!=val).reduce((acc,curr)=>
                                                          {
            
        if(acc == null)
           {
                acc = new ListNode(curr,null)
           }
        else
            {
                acc = new ListNode(curr,acc)
            }
        return acc
        
        
    },null)
    return head
};