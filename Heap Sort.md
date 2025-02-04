#notes 

See [[Heaps]]

Heap sort is a trivial algorithm:
1) Call `BuildHeap` on unsorted data;
2) Repeatedly call `HeapExtractMin` until empty.
The runtime is $O(n\log n)$.
## Algorithm
```
fn HeapSort
in array A
op sorted A
	BuildHeap(A, length(A))
	for i = length(A) downto 2 do
		swap A[i] and A[1]
		HeapSize(A) <- HeapSize(A) - 1
		Heapify(A, 1, HeapSize(A))
	endfor
```
