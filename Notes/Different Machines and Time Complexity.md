#notes 

Recall from [[Worst-Case Upper Bounds]] that the constant $c$ is machine dependent.
Now, consider the situation where an implementation of [[Selection Sort]] is run on a machine $100\times$ slower than the machine executing the theoretical [[Worst-Case Upper Bounds#Usage|Algorithm X]]:
$$
\text{So }f_{s}(n)=100c(3n^2+4n-4),\text{ whereas } g_{X}(n)=c(n^3-4n^2+10)
$$
When $n\leq 305,g_{X}(n)<f_{s}(n)$ but when $n\geq 306,f_{s}(n)<g_{X}(n)$, so we choose selection sort on the slower machine.

We ought to use a notation that suppresses all irrelevant constants and only details the dominant term of the complexity function: the [[Big-O Notation]].
>For 2 functions, $f,g:\Bbb{N}\to \Bbb{N}$, we write $f=O(g)$ if there exists $n_{0}\in \Bbb{N}$ and $k \in \Bbb{Q}$ such that $f(n)\leq k\cdot g(n)$ whenever $n\geq n_{0}$.
## Reasons for Constrictions
+ $f(n)\leq k\cdot g(n)$ only need hold when $n\geq n_{0}$ since $O$ caters for when some algorithm might run quicker than another but only on a small number of inputs of small size.
+ The role of the constant $k$ is to equate all functions that differ only by a multiplicative constant.
## Practical Relevance
Asymptotic time complexity is usually a reasonable guide.
However:
+ Hidden constants might be large enough to make a significant difference.
+ Often a worst-case analysis is not realistic as the worst-case inputs are few and far between, or do not arise very often in practice.
+ Some algorithms may be favourable due to space complexity, for example, in-place sorting makes sorting algorithms like bubble sort more favourable.
+ The environment in which an algorithm is used can have an impact on the choice; for example, bubble sort might be used in a networking context where you might be sorting an incompletely-transmitted list.
