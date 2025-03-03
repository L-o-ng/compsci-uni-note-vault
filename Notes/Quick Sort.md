#notes 
## General Idea
1) Split the input into 2 parts, somewhat differently to [[Merge Sort]].
2) Recursively sort them, one after the other.
3) **Concatenate** the resulting sorted sub-sequences.
Quick sort partitions differently from merge sort so that it is guaranteed that any element in the left sub-problem will be less than any in the right.
## Algorithm
Assuming all elements are pairwise distinct,
```
fn QuickSort
in integers A[1..n], integer left, integer right
op integers sorted
	if left < right then
		// rearrange/partition in place,
		// return value "pivot" is index of pivot element in A[] after
		// partitioning.
		pivot <- Partition(A, left, right)
		// Now:
			// Everything in A[left..pivot-1] is smaller than pivot
			// Everything in A[pivot+1..right] is bigger than pivot
		QuickSort(A, left, pivot-1)
		QuickSort(A, pivot+1, right)
	endif
```
### How it Works
At the beginning of each recursive call, Quick Sort picks one element from the current sequence: the **pivot**.
The partitioning will be done with regards to this value.
+ Each element smaller goes into the left part.
+ Each element greater goes into the right part.
+ The parts may have very different sizes.

In some sense, merge sort does the complicated part after the sorted sub-sequences come back from recursive calls, since we don't know anything about the relationship of elements in the left and right parts, other than that they are sorted, and quick sort does the hard part prior to recursing. This means that simple concatenation is OK.
## Partitioning
The simplest version always picks a fixed position withing the current sequence.
In other words, when called as `Partition(A, left, right)` then it, for example, may always pick `A[right]` as pivot.
Partition() simply shoves everything smaller than the pivot to the left, and everything bigger to the right. It does not sort!  
Depending on the actual implementation, it may, or may not, rearrange among the smaller, or among the bigger, but strictly speaking, that’s not (necessarily) part of the specification. There may be the issue of stability though - it may be desirable to leave the relative order among the smaller (bigger) guys untouched.
![[Quick Sort Partitioning.png]]
### Algorithm
Here, `x` is the pivot and is chosen as right-most.
```
fn Partition 
in integers A[1..n], integer left, integer right
op list sorted
	integer x <- A[right]
	integer i <- left - 1
	for j <- left to right - 1 do
		if A[j] < x then
			i <- i + 1
			swap A[i] and A[j]
		endif
	endfor
	swap A[i+1] and A[right]
	return i + 1 // pivot position after partitioning.
```
