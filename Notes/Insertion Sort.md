#notes 

```
fn insertion sort
in real numbers a_1 to a_n, n >= 2
op numbers sorted in ascending order
	for j <- 2 to n do
		x <- a_j
		i <- j - 1
		while i > 0 and a_i > x do
			a_i+1 <- a_i
			i <- i - 1
		endwhile
		a_i+1 <- x
	endfor
```

We know:
+ when `j` has a certain value, it inserts the `j`-th element into the already sorted sequence.
+ it can be proven correct by using invariant "after `j`-th iteration, the first `j+1`-th elements are in order."
+ the running time is between `n-1` and `n(n-1)/2` - worst case $O(n^2)$.

