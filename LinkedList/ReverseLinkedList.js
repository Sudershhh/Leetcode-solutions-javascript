//LEETCODE PROBLEM 206


//REVERSE LINKED LIST - EASY


//Given the head of a singly linked list, reverse the list, and return the reversed list.

//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(1)
var reverseList = function(head) {
    
    if(head==null) 
    {
        return head;
    }
    
    let previousNode = null;
    let presentNode = head;
    let nextNode = presentNode.next;
    
    while(presentNode!=null)
        {
            presentNode.next = previousNode;
            previousNode = presentNode;
            presentNode = nextNode
            if(nextNode!=null)
                {
                    nextNode = nextNode.next
                }
        }
    head = previousNode
    return head
    
};