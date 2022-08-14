// LEETCODE PROBLEM 83

//Remove Duplicates from Sorted List


//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.


//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(1)
var deleteDuplicates = function(head) {
    
    if(head == null)
        {
            return null
        }
    let set = new Set()
    let temp = head
    while(temp!=null)
        {
            if(!set.has(temp.val))
                {
                   set.add(temp.val)
                }
            temp=temp.next
        }
    
    head = [...set].reverse().reduce((acc, curr) => 
            {
                if (acc == null) 
                    {
                        acc = new ListNode(curr);

                    } 
                    else 
                    {
                            acc = new ListNode(curr, acc);
                    }
             return acc;
            }, null);
    return head
    
};