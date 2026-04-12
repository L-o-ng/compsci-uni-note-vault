#notes 

See first: [[The Matching Problem]]

Suppose you have only a small number of cameras which you want to place at road junctions (vertices) in a city to that every road is covered.
![[Vertex Cover 1.png]]
A **vertex cover** of a graph $G=(V,E)$ is a set $S \subseteq V$ so that each edge of $G$ has at least one end-vertex in $S$. The **vertex cover number** $\tau_{G}$ is the size of a **smallest** vertex cover of $G$. Our problem is in determining this number.
## Computing $\tau_{G}$
Computing $\tau_{G}$ for any graph is NP-hard. However, this may change if we restrict the input to some class of graphs.
### Bipartite Graphs
Let $G$ be a bipartite graph. Then $\tau_{G}=v_{G}$, the [[The Matching Problem|matching]] number. Therefore, we can use the algorithms described for that problem here.
### General Graphs
![[Vertex Cover 2.png]]
Let $n,m$ be the number of vertices and edges of $G$ respectively. Brute force requires checking $O(n^{k})$ possible choices for $S$.
Let us assume $k$ is relatively small compared to $n$ - can we find an algorithm that runs in $f(k)+O(n+m)$ time?
Consider the example graph:
![[Vertex Cover 1.png]]
We have 2 rules:
1. *A road junction covers at least one road*. If vertex $v$ is not an end-vertex of an edge then we do not need to install a camera. We remove $v$ and consider the smaller instance $(G-v,k)$.
2. *A road junction covering more than $k$ roads must be used*. If $v$ has at least $k+1$ neighbours then put $v$ in the vertex cover - else we need too man cameras - and consider the smaller instance $(G-v, k-1)$.

At some point, these rules cannot be applied anymore. Let $(G',k')$, computed in $O(n+m)$ time, be the resulting instance, where $k' \leq k$.
+ If $G'$ has at most $k+k^{2}$ vertices, we can solve with brute force. This takes $f(k)$ time for some function $f$ that only depends on $k$. This gives us our desired runtime.
+ Otherwise, then we cannot find the desired algorithm.


