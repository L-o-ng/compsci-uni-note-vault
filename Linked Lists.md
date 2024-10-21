#notes 

See [[Arrays]] for an alternative way to store sequential data.
## Definition
A **list** is made up of **nodes**. Each node stores an **element** plus a **pointer**, or **link** to another node.
The first node is called the **head**.
The last node, called the **tail**, points to null.
The nodes may be scattered all over memory.
## Syntax
For list L,
```
L.head // gets head node
L.tail // gets tail node
L.size // gets int size of list
```
And for node N,
```
N.data // returns element in node
N.next // returns a pointer to the next node in the list
```
## Finding the $i$th element
```
Input: list L, +ive integer i
Output: ith piece of data in L
	if i > N.size then
		return out of range
	endif
	N <- L.head
	if i = 1 then
		return N.data
	endif
	for j <- 2 to i do
		N <- N.next
	endfor
	return N.data
```
## Altering the List
Anything that inserts or removes must fix all references to predecessors and successors.
```Deletion_of_the_head
Input: list L
Output: L with head deleted
	if L.head = NULL then
		return no head to delete
	endif
	if L.head = L.tail then
		L.head <- NULL
		L.tail <- NULL
		L.size <- L.size - 1
	endif
	L.head <- L.head.next
	L.size <- L.size - 1
```
## Inserting into the List
```Insertion_of_v_after_N
Input: list L, data v, node N
Output: L, with v inserted after N
	node M
	M.data <- v
	M.next <- N.next
	N.next <- M
	if L.tail = N then
		L.tail = M
	endif
```

A [[Doubly Linked Lists|doubly linked list]], or a [[Circularly Linked Lists|circularly linked list]] fixes some issues with a linked list.