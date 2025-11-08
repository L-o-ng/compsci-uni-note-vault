#notes 

Suppose you invest in a stock in a volatile market:
+ A basic investing principle is to ==buy low, sell high==;
+ A basic problem is naturally that you don't know the future prices. What would you do if you knew all the prices in advance?
	+ Ideally, you would buy at the lowest and sell at the highest.
	+ This is not always possible: consider that the lowest price could come *after* the highest.
## Maximum-Subarrays
We have an obvious polynomial-time algorithm to solve this: we brute-force all pairs of days and check the price difference, keeping the highest.
This has runtime $(^{n}_{2})=\Theta(n^{2})$.

We can do this faster: consider the array $A$ of price changes from day-to-day.
We can now look for a contiguous subarray of $A$ with the largest sum. We can do this with a [[Divide-and-Conquer Algorithms|Divide and Conquer]] approach:
1. Find the midpoint $mid$ and break into 2 subarrays;
2. Every contiguous subarray $A[i..j]$ of $A[1..n]$ is either:
	1. Entirely in the subarray $A[1..mid]$;
	2. Entirely in the subarray $A[mid+1..n]$;
	3. Crossing the midpoint $mid$ such that $1\leq i\leq mid<j\leq n$.

The cases 1 and 2 can be solved recursively, as they are a smaller instance of the same problem.
For case 3, we do not have a smaller instance of the same problem, since we have the extra restriction that the subarray must cross the midpoint. We can however compute this in $O(n)$ time.
## Algorithms
```
fn max_cross_subarray
in array A, values low, mid, high
op max subarray that crosses mid
	left_sum <- -infty
	sum <- 0
	for i = mid down to low do
		sum <- sum + A[i]
		if sum > left_sum then
			left_sum <- sum
			max_left <- i
		endif
	endfor
	right_sum <- -infty
	sum <- 0
	for j = mid + 1 to high do
		sum <- sum + A[j]
		if sum > right_sum then
			right_sum <- sum
			max_right <- j
		endif
	endfor
	return (A, max_left, max_right, left_sum + right_sum)	
```

```
fn max_subarray
in array A, values low and high
op the max subarray of array A
	if high = low then
		return (low, high, A[low])
	else
		m <- FLOOR((low + high) / 2)
		(l_low, l_high, l_sum) <- max_subarray(A, low, m)
		(r_low, r_high, r_sum) <- max_subarray(A, m + 1, high)
		(cross_low, cross_high, cross_sum) <- max_cross_subarray(A, low, m, high)
		if l_sum >= MAX(r_sum, cross_sum) then
			return (l_low, l_high, l_sum)
		else if r_sum >= MAX(l_sum, cross_sum) then
			return (r_low, r_high, r_sum)
		else
			return (cross_low, cross_high, cross_sum)
		endif
	endif
```
### Runtime Analysis
We denote by $T(n)$ the runtime of `max_subarray` on an array with $n$ elements:
1. Lines 1-4 take $O(1)$ time;
2. Each call of lines 5-6 takes $T\left( \frac{n}{2} \right)$ time;
3. Line 7 takes $\Theta(n)$ time;
4. Lines 9-13 take $O(1)$ time.

Therefore, we have: $$
T(n)=\begin{dcases}
\Theta(1)&\text{ if }n=1 \\
2T\left( \frac{n}{2} \right)+\Theta(n)&\text{ if }n>1
\end{dcases}
$$
This turns out to be the same recurrence as [[Merge Sort]]: we therefore have $T(n)=\Theta(n\log n)$.


