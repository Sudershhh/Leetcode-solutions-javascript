//LEETCODE PROBLEM 876


//Middle of the Linked List - EASY


//Given the head of a singly linked list, return the middle node of the linked list.


//TIME COMPLEXITY - O(N)
//SPACE COMPLEXITY - O(1)
var middleNode = function(head) {
    let count=0
    let temp=head
    while(temp!=null)
        {
            count++
            temp=temp.next
        }
    let middleCount = Math.floor(count/2)
    for(let i=0;i<middleCount;i++)
        {
            head=head.next
        }
    return head
};