#notes 

A **circularly** linked list has the same kind of nodes as a **singly** linked list - a next pointer and a reference to an element.
However, the circularly linked list has **no** beginning or end. The last node points back to the **first** node instead of NULL.
Instead of references to the head and tail, we mark a node of the circularly linked list as the **cursor**. The **cursor** is the starting node when traversing a list.
![[Circularly linked list.png]]