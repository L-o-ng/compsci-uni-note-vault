#notes 

Each node in a doubly linked list stores 2 references:
+ A **next** link, which points to the next node in the list.
+ A **prev** link, pointing to the previous node in the list.
To simplify, 2 **dummy** or **sentinel** nodes are added at either end of the list: 
+ The header has a valid next and a NULL prev.
+ The trailer has a valid prev and a NULL next.
A doubly linked list needs to store references to the 2 sentinel nodes and a size counter keeping track of the nodes in the list excluding sentinel nodes.

An empty list has 2 sentinel nodes pointing to each-other.

![[Doubly linked list.png]]
## Operations
```Deletion
Input: list L, node N
Output: L with N removed
	M <- N.prev
	P <- N.next
	M.next <- P
	P.prev <- M
	L.size <- L.size - 1
```