#linker 

The algorithms covered in [[Sorting Algorithms]] are somewhere between $O(n\log n)$ and $O(n^2).$ That is no coincidence:

>For any **comparison-based** sorting algorithm $A$ and any $n \in \Bbb{N}$ large enough, there exists an input of length $n$ that requires $A$ to perform $\Omega(n\log n)$ comparisons.

No algorithm, past, present, or future can consistently beat the stated bound.
However:
+ The theorem talks about *comparison-based* algorithms. The vast majority of sorting algorithms are in this class.
+ The theorem only says that there exists *an* input. For most inputs of length $n$, it may beat the bound, but there must be at least 1 for which it does not.
If there are constraints on the problem, we can create algorithms that are better than $O(n\log n)$ and do not involve comparisons.
## Notes
+ [[Bucket Sort]]
+ [[Radix Sort]]
+ [[Radix Sort vs Bucket Sort]]
+ 