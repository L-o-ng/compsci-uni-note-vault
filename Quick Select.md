#notes 

Recall [[Quick Sort]]; Quick Select uses mostly the same ideas:
+ It is a recursive algorithm;
+ There is a partition function for selecting a pivot and partitioning into low and high lists;
+ There is now only *one* recursive call:
	+ Look into the appropriate list where we know the $i$-th smallest element will be;
	+ After partitioning, the pivot is in the correct position with respect to the overall sortedness, so we can compare the pivot position after partitioning with the sought index $i$.
## Algorithm
```
fn QuickSelect
in integers A[1..n], int left, int right, int i
op smallest integer in A
	if left = right then
		return A[left]
	else
		pivot <- Partition(A, left, right)
		if i = pivot then
			return A[i]
		else if i < pivot then
			return QuickSelect(A, left, pivot - 1, i)
		else 
			return QuickSelect(A, pivot + 1, right, i)
		endif
	endif
```
## Analysis
In the worst case, the input is in sorted order and you pick the rightmost element as the pivot, it is just as bad as [[Quick Sort]] in its worst case:
+ The part that is recursed into is just one element smaller than the current input.
+ $T(n)=T(n-1)+O(n)\implies T(n)=O(n^{2})$.
So, it **can** be a lot slower than trivially sorting the list with [[Merge Sort]] for example.

However, if the pivot is chosen at **random** from the current sub-problem, between `left` and `right`, the **expected** runtime of ==randomised quick select== is actually $O(n)$. There is still a probability that it takes $O(n^{2})$ steps, but the probability is small.
