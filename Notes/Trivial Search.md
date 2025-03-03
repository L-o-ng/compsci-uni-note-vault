#notes 

Scan the array left-to-right, stopping when $x$ is found.

```
fn TrivialSearch
in list of integers A, 1 to n; integer x
op position p of x in A
	p <- 1
	while A[p] != x do
		p <- p + 1
	endwhile
	return p
```

