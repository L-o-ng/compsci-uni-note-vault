#notes 

```
fn bubble sort
in real numbers a_1 to a_n, n >= 2
op numbers sorted into ascending order
	for i <- n down to 2 do
		for j <- 2 to i do
			if a_j-1 > a_j then
				swap a_j-1 and a_j
			endif
		endfor
	endfor
```
## Invariant
After the iteration for `i` of the outer for-loop, positions `i, ..., n` contain the overall `n-i+1`many largest elements in order.
## Time Complexity
$$(n-1)+(n-2)+\dots+2+1=O(n^2)$$
## Variation
Terminate if no swap detected during inner for-loop.

