//LEETCODE PROBLEM 141

//Linked List Cycle - EASY


//Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.



//OPTIMAL APPROACH - LESS MEMORY
//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(1)
var hasCycle = function(head) {
    
    if(!head)
        {
            return false
        }
    
    let slowPointer = head
    let fastPointer=head.next
    while(slowPointer && fastPointer)
        {
        
        if(slowPointer == fastPointer)
            {
                return true
            }
            
        slowPointer=slowPointer.next
        fastPointer=fastPointer.next?.next
        }
    
    return false
};



//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(N)
var hasCycle = function(head) {
    if(head == null || head.next == null)
        {
            return false;
        }
    
    if(head == head.next.next)
        {
            return true
        }
    
    let d1 = head
    let set = new Set()
    while(d1!=null)
        {
           if(set.has(d1.next))
               {
                   return true
               }
            
            set.add(d1)
            d1=d1.next
        }
    return false

};