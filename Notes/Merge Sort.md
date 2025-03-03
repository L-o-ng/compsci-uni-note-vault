#notes 

Merge Sort is probably the simplest recursive sorting algorithm.
Its bad cases are a lot less bad than those of [[Sorting Algorithms#Traditional Algorithms]].
Its good cases, however, made be **worse** than some of the above. Not all algorithms take the same number of steps per item (see [[#Complexity]]).
## Background
### Idea
1) If the given sequence is of no more than one element, it is already complete.
2) Otherwise, (length > 1), split the sequence into two shorter sequences of equal length, sort them recursively, and merge the two resulting *sorted* sequences.
### Assumption
+ The length of the top-level list is a power of 2.
This allows for nice splitting into equal-sized sub-problems.
## Algorithm
``` 
fn MergeSort
in list m
op list m sorted 
	if length(m) <= 1 then
		return m
	endif
	int middle <- length(m) / 2
	list left, right, leftSorted, rightSorted
	left <- m[1..middle]
	right <- m[middle+1..length(m)]
	leftSorted <- MergeSort(left)
	rightSorted <- MergeSort(right)
	return Merge(leftSorted, rightSorted)
```
## How to Merge
Suppose 2 **sorted** sequences are given as arguments, say *left* and *right*.
Start with an initially empty result.
1) If both the left and right are **not** empty, look at the first leftmost element in each, say $l_{1}\text{ and }r_{1}$
2) If $l_{1} < r_{1}$ then append $l_{1}$ to result, and remove it from *left*; otherwise, append $r_{1}$ to result and remove it from *right*.
3) If either left or right is empty, append the entire **other** one to result.
4) Repeat until both are empty.
### Algorithm
```
fn Merge
in list left, list right
op list result, sorted
	list result
	while length(left) > 0 or length(right) > 0 do
		if length(left) > 0 and length(right) > 0 then
			if head(left) <= head(right) then
				append head(left) to result
				left <- tail(left)
			else 
				append head(right) to result
				right <- tail(right)
			endif
		else if length(left) > 0 then
			append left to result 
			left <- empty list
		else // meaning length(right) > 0#
			append right to result
			right <- empty list
		endif
	endwhile
	return result
```
## Complexity
Merge sort always requires $\approx n\log n$ steps to sort any $n$ numbers.
Insertion sort may get away with $\approx n$ in nice cases, but **will** require $\approx n^2$ for others.
$n^2$ is a **lot** worse than $n\log n$; for example:
+ for $n=100 000$, $n^2=10000000000$, whereas $n\log_{2}n \approx 1500000$
