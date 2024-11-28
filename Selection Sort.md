#notes 

```
fn selection sort
in real numbers a_1 to a_n, n>=2
op numbers sorted in ascending order
	for i <- 1 to n - 1 do
		elem <- a_i
		pos <- i
		for j <- i + 1 to n do
			if a_j < elem then
				elem <- a_j
				pos <- j
			endif
		endfor
		swap a_i and a_pos
	endfor
```

## Invariant
After `i`-th iteration, positions `1, ..., i` contain the overall `i` many smallest elements in order.
Note that it is not necessarily the first `i` elements, as in [[Insertion Sort]].
## How it Works
In the `i`-th iteration of the outer loop, we search for the `i`-th smallest element in remainder (positions `i+1, ..., n`) of input and swap it into position `i`.
+ `elem` keeps track of the current idea of **value** `i`-th smallest element.
+ `pos` keeps track of current idea of **position** of `i`-th smallest element.
## Time Complexity
$$\eqalign{
\sum_{i=1}^{n-1}\sum_{j=i+1}^{n}1 &= \sum_{i=1}^{n-1}(n-i) \\
&= \left( \sum_{i=1}^{n-1}n \right)-\left( \sum_{i=1}^{n-1}i \right) \\
&= (n-1)\cdot n- \frac{n(n-1)}{2} \\
&= \frac{n(n-1)}{2}\\
&=O(n^2)
}$$
