#notes 

Heaps are "improper" trees. Whilst heaps are trees, they are typically assumed to be stored in a flat array - so:
+ **Physically**, on a linear array;
+ **Logically**, on a binary tree with all levels filled but the lowest.
Each tree node corresponds to an element of the array.
The tree is complete except perhaps for the lowest level, filled from left to right.
![[Heap Data Structure Example.png]]
Heaps are good data structures for [[Priority Queues]] and sorting.
	Given a sequence of objects with different priorities, we want to deal with the highest priority items first.
	So, to support priority queues, we need to extract the maximum element from the collection. The following algorithm is an $O(1)$ implementation:
```
fn HeapExtractMax
in heap A
op max element
	ret <- A[1]
	A[1] <- A[HeapSize(A)]
	HeapSize(A) <- HeapSize(A) - 1
	Heapify(A, 1, HeapSize(A))
	return ret
```
## Types of Heap
+ **Max-Heap**:
	+ For every node excluding the root, the value is at *most* that of its parent: `A[parent[i]] >= A[i]`;
	+ The *largest* element is stored at the *root*;
	+ In any subtree, no values are *larger* than the subtree root.
+ **Min-Heap**:	
	+ For every node excluding the root, the value is at *least* that of its parent: `A[parent[i]] <= A[i]`;
	+ The *smallest* element is stored at the *root*;
	+ In any subtree, no values are *smaller* than the subtree root.
## Properties
A heap is a binary tree with the following properties:
1) It is a *complete* binary tree;
2) The value stores at a node is greater than or equal to the values stored at the children.
A heap represented as an array `A` has 2 attributes:
1) `Length(A)` - the number of elements in array `A`;
2) `HeapSize(A)` - the number of elements in heap stored in `A`.
We need `Length(A) >= HeapSize(A)` at all times, so we now also need `A[v.parent.index] >= A[v.index]`
Also note that the height `h` of a heap is $\lfloor \log n \rfloor$.
## Insertion
Assuming we are inserting into a binary max-heap `H`:
1) Add the new element node to the bottom left `H`;
2) If the new node value is bigger than its parent, swap their values. Set the parent node as the new node and repeat. This is known as `Heapify()`;
3) Else, exit.
### Managing Array Indices
Assuming we are using 1-based indexing:
+ The root is in `A[1]`;
+ `left(i) = A[2 * i]`
+ `right(i) = A[2 * i + 1]`
+ `parent(i) = A[i // 2]`
So we have `v.left.index = 2 * v.index` and so on.
## Deletion
An element is always deleted from the root of the heap, so deletion is done via the following steps:
1) Replace the root node's value with the last node's value so that `H` is still a complete binary tree but not necessarily a heap.
2) Delete the last node.
3) Move down the new root node's value so that `H` satisfies the heap property. In this step, interchange the root node's value with its child node's value, whichever is largest among its children.
## Heapify
4) Starting at the root, identify the largest between current node `v` and its children;
5) Suppose the largest element here is `w`;
6) If `w != v` then:
	1) Swap `A[w]` and `A[v]`.
	2) Recurse into `w`.
### Algorithm
```
fn Heapify
in heap A, starting node v, heap size n
op heap A restructured according to heap rules
	largest <- v
	// 2v refers to the left child
	if 2v <= n and A[2v] > A[v] then
		largest <- 2v
	endif
	// 2v+1 refers to the right child 
	if 2v+1 <= n and A[2v+1] > A[largest] then
		largest <- 2v+1
	endif
	if largest != v then
		swap A[v], A[largest]
		Heapify(A, largest, n)
	endif
```
This algorithm is $O(\log n)$.
## Analysis
### Loose Upper Bound
Consider the cost of a `Heapify` call multiplied by the number of calls to `MaxHeapify`:
	We obtain $O(\log n)\times O(n)=O(n\log n)$.
### Tighter Bound
The cost of a call to `Heapify` at a node depends on the height `h` of the node $O(h)$.
The height of most nodes is smaller than `n`.
The height of nodes ranges from 1 to $\lfloor \log n \rfloor$.
So the number of nodes of height `h` is $\left\lceil  \frac{n}{2}^{h}  \right\rceil$.
$$
\eqalign{
&T(n)&=\sum_{h=1}^{\log n} (\text{no. nodes at h}\cdot O(h)) \\
&&\leq \sum_{h=1}^{\log n} \frac{n}{2^{h}}\cdot O(h) \\
&& = O\left( \sum_{h=1}^{\log n} \frac{n}{2^{h}}\cdot h \right) \\
&& = O\left( n\cdot \sum_{h=1}^{\log n} \frac{h}{2^{h}} \right) \\
\text{Well known that:} \\
&&\text{For } x \in (0,1) \\
&& \sum_{i=0}^{\infty} i\cdot x^{i}= \frac{x}{(1-x)^{2}} \\
\text{So:} \\
&& \quad\sum_{h=1}^{\log n} \frac{h}{2^{h}}\leq \sum_{h=0}^{\infty} h \cdot \left( \frac{1}{2} \right)^{h}\\
&&= \frac{\frac{1}{2}}{\left( 1- \frac{1}{2} \right)^{2}}= \frac{\frac{1}{2}}{\frac{1}{4}}=2 \\
\text{Hence:} \\
&T(n)&=O\left( n\cdot \sum_{h=1}^{\log n} \frac{h}{2^{h}} \right)=O(n)
}
$$
