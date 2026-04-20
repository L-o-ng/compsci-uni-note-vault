#notes 

Let us consider [[The Knapsack Problem]]:
>[!question] Knapsack
>**Instance**: A set of items $I=\{ i_{1},\dots,i_{n} \}$ where each item $i_{j}$ has value $v_{j}$ and weight $w_{j}$ (positive integers); and a target value $t$ and a weight upper-limit $L$;
>**Question**: Is there a subset $T$ of $I$ with total value at least $t$, and total weight at most $L$?

>[!theorem]
>`Knapsack` is $NP$-complete.

1. The problem is in $NP$: a subset $T$ is the certificate;
2. To show completeness, we will use **restriction** to reduce from `Subset Sum`.
## Reduction
>[!question] Subset Sum
>**Instance**: A set of positive integers $S=\{ n_{1},n_{2},\dots,n_{k} \}$ and a target integer $t'$;
>**Question**: Is there a subset $T \subseteq S$, such that $\sum_{i \in T}n_{i}=t'$?

+ Consider instances of `Knapsack` such that $v_{j}=w_{j}(=n_{j})$ for all $j$, and let $t=L(=t')$. Then we get exactly `Subset Sum`.
+ Indeed, we have both $\sum_{j \in T}v_{j}\geq t$ and $\sum_{j \in T}w_{j}\leq L$ if and only if $\sum_{j \in T}n_{j}=t'$.
## Polynomial?
`Knapsack` can be solved in $O(nL)$ time using *dynamic programming*: see [[The Knapsack Problem]].
The algorithm used, despite being polynomial, is **not** sufficient to show that `Knapsack` is in $P$!
This is because the *length of input* to `Knapsack` is in $O(n\log L)\implies nL$ is **not** bounded by a polynomial function of the input length. We must restrict the input length like $L\leq p(n)$ for some polynomial $p$ to obtain a problem in $P$.
So:
+ An algorithm which is polynomial in the size of the **numbers** in the input is called **pseudo-polynomial**;
+ $NP$-complete problems which remain $NP$-complete when all numbers are bounded by some polynomial in the length of the input are called **strongly $NP$-complete**. Otherwise, they are called **weakly $NP$-complete**.
## Strongly $NP$-Complete Problems
Any $NP$-complete problem without numerical data is *strongly* $NP$-complete. Examples include:
+ `Satisfiability`;
+ `Hamiltonian Cycle`;
+ `3-Colourability`;
+ `Vertex Cover`;
+ `Independent Set`;
+ `Clique`...

`TSP (D)` (see [[NP-Completeness#`TSP` (Decision)|TSP(D)]]) is *strongly* $NP$-complete, since it is $NP$-complete even if all the distances are 1 and 2.
`Subset Sum` is **not** strongly $NP$-complete - it is a sub-problem of `Knapsack`.
## Examples
### Example 1
>[!question] Partition
>**Instance**: A multi-set $S$ of positive integers (some integers may appear multiple times)
>**Question**: Is there a partition of $S$ into two subsets $S_{1},S_{2}$ such that: $$\sum_{s \in S_{1}}s=\sum_{s \in S_{2}}s?$$

This problem is *weakly* $NP$-complete. A dynamic programming algorithm exists with running time $O\left( |S|\cdot \sum_{s \in S}s \right)$. The length of the input is $O\left( |S|+\sum_{s \in S}\log s \right)$.
This running time is **pseudo-polynomial**:
+ If we encode the input numbers in *unary*, the running time is small;
+ If we encode the input in *binary*, the runtime is large.
### Example 2
>[!question] 3-Partition
>**Instance**: A multi-set $S$ with $n=3m$ positive integers.
>**Question**: Is there a partition of $S$ into $m$ subsets $S_{1},\dots,S_{m}$ such that $\sum_{s \in s_{i}}s=\sum_{s \in s_{j}}s$ for every $i,j \leq m$?

This is a similar problem to [[#Example 1]], but is instead **strongly** $NP$-complete! The order of the time complexity does **not** change much if we change the encoding.
Let $B=\frac{1}{m}\cdot \sum_{s \in S}s$. It remains strongly $NP$-complete even if $\frac{B}{4}<s< \frac{B}{2}\forall s \in S$. In this case, every set $S_{i}$ has exactly 3 elements. There exists no pseudo-polynomial algorithm, unless $P=NP$.


