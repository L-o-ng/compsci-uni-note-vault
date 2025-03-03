#notes 

[PageRank](https://en.wikipedia.org/wiki/PageRank) is an algorithm invented by Larry Page and Sergey Brin, who founded Google.
It finds the *importance* of a page by the number of pages linking to it. This can be gamed with *link farms*, so it also considers the *importance* of pages of upcoming links.
## An Idea of the Algorithm
1) Find all the links between pages.
2) Construct the directed graph where nodes are pages and edges are links.
3) Make an initial assignment of PageRank values to each node.
4) Transfer the PageRank of each node to the nodes it links to by following edges.
5) Weight the rank according to the number of output links.
6) Repeat.
### Solution for this (Simple) Case
$$
r(p)=\sum_{q \in I(p)}\frac{r(q)}{l(q)}
$$Where,
+ $r$ is the rank function;
+ $p$ and $q$ are pages;
+ $I(p)$ is the set of pages that link to $p$;
+ $l(q)$ is the number of links leaving $q$.
## PageRank as a Matrix Equation
1) We can give all the pages a number $i=1\dots n$.
2) Then, we can construct the [Adjacency Matrix](https://en.wikipedia.org/wiki/Adjacency_matrix) $A$.
3) We can make $M$ the transposed modified adjacency matrix, by scaling so each column sums to 1.
4) We can write the vector $\mathbf{r}$ as $(r_{1},\dots r_{n})$.
$$
M\mathbf{r}=\mathbf{r}
$$
A more complex version includes *damping*.
### Solving the Equation
There are currently more than a billion web pages - so a $10^9\times 10^9$ matrix.
+ Successive approximation can get close.
+ However, just storing the real matrix takes $8\times 10^{18}$ bytes.
	+ A lot of them are 0s - it is a *sparse* matrix.
	+ However, multiplication in `numpy` is about $O(n^{2.85})$
		+ `scipy`, along with non-terrible languages exist.
