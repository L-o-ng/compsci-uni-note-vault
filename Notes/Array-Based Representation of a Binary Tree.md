#notes 

A binary tree can be stored in an array as such:
![[Array representation binary tree.png]]

An advantage of this is that a position on the tree can be represented by a single integer.
However, space efficiency depends on the shape of the tree, and some update operations are inefficient. For example, **delete** operations are $O(n)$ as you need to move all descendants of the deleted node within the array.
Searching is also $O(n)$ - no better than a [[Linked Lists|linked list]]!

This gives rise to the [[Binary Search Tree]].
