//LEETCODE PROBLEM 237


//Delete Node in a Linked List - EASY

//Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

// It is guaranteed that the node to be deleted is not a tail node in the list.

//TIME COMPLEXITY - O(1)
//SPACE COMPLEXITY - O(1)
var deleteNode = function(node) {

    node.val=node.next.val
    node.next = node.next.next

};