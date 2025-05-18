#notes 

A **Decision Tree** is a *full* binary tree.
It represents comparisons between elements performed by a particular algorithm run on a particular (size of) input. Everything but *comparisons* are ignored.

**Internal nodes** are labelled `i : j` for $1 \leq i,j \leq n$ meaning elements `i,j` are compared with indices with respect to their original order.
**Downward Edges** are labelled $\leq,>$ depending on the outcome of the comparisons.
**Leaves** are labelled with some permutation of $\{ 1,\dots,n \}$.
A **Branch** from root to leaf describes a sequence of comparisons - nodes and edges - and ends in some resulting sequence - a leaf.
We have at least $n!$ leaves - at least one for each outcome.
## Example
Consider [[Selection Sort]]; a decision tree for a 3-element input may look like this:
![[Decision Tree Selection Sort.png]]
On sorting the input sequence $<a_{1}=6;a_{2}=8;a_{3}=5>$: the permutation $<3,1,2>$ at the leaf indicates the sorted ordering.
There are 6 possible permutations of the input elements, so the decision tree must have at least 6 leaves.
Note that *any* correct sorting algorithm must be able to produce each permutation of input. A necessary condition is that each of the $n!$ permutations must appear as a leaf of the decision tree.
## Worst Case Lower Bound
The worst case lower bound is the length of the longest path from the root of the decision tree to any leaf - this represents the worst case number of comparisons for a given value of $n$.
For a given $n$, the lower bound on the heights of **all** decision trees where each permutation appears as a leaf is thus the lower bound on runtime of **any** comparison-based sorting algorithm.
### Proof
Also recall the [[Stronger Sorting Algorithms|universal lower bound]]:
1) It is sufficient to determine the minimum height of a decision tree in which each permutation appears as a leaf.
2) Consider a decision tree of height $h$ with $l$ leaves corresponding to a comparison sort on $n$ elements.
3) Each of the $n!$ permutations of input appears as some leaf: $l \geq n!$.
4) A binary tree of height $h$ has at most $2^{h}$ leaves: $l\geq 2^{h}$.
5) Together: $n!\leq l\leq 2^{h}$ and so $n!\leq 2^{h}$.
6) Taking the log, $h\geq \log n\neq \Omega (n\log n)$.

