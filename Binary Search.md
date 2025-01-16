#notes
## Idea
1) Peek into the middle of the array, at position $p=\left[ \frac{n}{2} \right]$.
2) If $A[p]=x$, return $p$.
3) Otherwise, if $x>A[p]$, we look on the *right* of $A[p]$ and completely ignore items to the left.
4) If $x<A[p]$ then we focus on the left side and ignore the right.

```
fn Search
in list A[1..n], int right, int left, int x
op position p of x in A
	if right = left and A[left] != x then
		handle error and exit 
	endif
	
	p <- middle index between left and right
	
	if A[p] = x then
		return p
	endif
	if x > A[p] then
		return Search(A, p + 1, right, x)
	else
		return Search(A, left, p - 1, x)
	endif
```

The initial call would then be `Search(A, 1, n, x)`.
## Analysis
This is called **binary search** because the search space halves in each unsuccessful step.
It is an example of the *divide and conquer* paradigm.

Our [[Trivial Search]] is $O(n)$ time, but for binary search, we have:
$$
T(n)=T\left( \frac{n}{2} \right)+O(1)=O(\log n)
$$
This is much faster for large $n$.

