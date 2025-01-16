#notes #homework-needed 

The median-of-medians algorithms allows for **worst-case linear-time** deterministic selection in **unsorted** data.
+ It is similar to [[Quick Select]] but with a good, deterministic pivot selection strategy.
+ It is *doubly* recursive.
+ It has a guaranteed time complexity of $O(n)$ for finding the $i$-th smallest element in a sequence of $n$ unsorted items.
## Algorithm
1) Divide the $n$ elements into groups of 5. Find the median of each 5-element group by rote.
2) Recursively `Select` the median $x$ of the $\left\lfloor  \frac{n}{5}  \right\rfloor$ group medians to be the pivot.
3) Partition around the pivot $x$. Let $k=\operatorname{rank}(x)$.
4) 
```
if i = k then
	return x
else if i < k then
	recursively Select the i-th smallest element in the lower part
else
	recursively Select the (i-k)-th smallest element in the upper part
endif
```

## Analysis
todo!


