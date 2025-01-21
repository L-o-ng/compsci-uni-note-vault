#notes 
## How?
In a [[Doubly Linked Lists|doubly linked list]], each node had a pointer to a predecessor, successor, and an item.
In a binary tree, each node has:
+ A pointer to parent, or `null`, or itself if root.
+ A pointer to a left child, or `null`/itself if nonexistent.
+ A pointer to a right child, or `null`/itself if nonexistent.
+ An item.
So we can navigate the tree much like a list.
## Why?
Binary trees, if implemented properly, provide fast insert, lookup, and delete operations.
Suppose we have a sequence of dictionary operations; we can start with an empty tree, then:
+ todo! finish this.