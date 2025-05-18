#notes 
## Minimum Spanning Tree Problem
>Find a tree that *spans* the vertices and has **minimum** cost.

A minimum spanning tree:
+ Has $|V|-1$ edges;
+ Has no cycles;
+ Might not be unique.
## Weighted Graph Representation
Be careful with the adjacency matrix $A$:
+ An entry $a_{ij}=0$ means that the edge $(v_{i},v_{j})$ does not exist; this is not the same as that edge having weight 0.
+ As we are looking for a minimum cost spanning tree, we can think of 0s as $w(i,j)=\infty$.
So:
$$
A=\begin{pmatrix}
0 & 5 & 0 & 4 & 0 & 0 & 0 & 0 & 0 \\
5 & 0 & 10 & 3 & 9 & 0 & 0 & 0 & 0 \\
0 & 10 & 0 & 0 & 5 & 7 & 0 & 0 & 0 \\
4 & 3 & 0 & 0 & 8 & 0 & 7 & 0 & 0 \\
0 & 9 & 5 & 8 & 0 & 7 & 6 & 7 & 0 \\
0 & 0 & 7 & 0 & 7 & 0 & 0 & 2 & 4 \\
0 & 0 & 0 & 7 & 6 & 0 & 0 & 5 & 0 \\
0 & 0 & 0 & 0 & 7 & 2 & 5 & 0 & 3 \\
0 & 0 & 0 & 0 & 0 & 4 & 0 & 3 & 0
\end{pmatrix}
\implies\begin{pmatrix}
\infty & 5 & \infty & 4 & \infty & \infty & \infty & \infty & \infty \\
5 & \infty & 10 & 3 & 9 & \infty & \infty & \infty & \infty \\
\infty & 10 & \infty & \infty & 5 & 7 & \infty & \infty & \infty \\
4 & 3 & \infty & \infty & 8 & \infty & 7 & \infty & \infty \\
\infty & 9 & 5 & 8 & \infty & 7 & 6 & 7 & \infty \\
\infty & \infty & 7 & \infty & 7 & \infty & \infty & 2 & 4 \\
\infty & \infty & \infty & 7 & 6 & \infty & \infty & 5 & \infty \\
\infty & \infty & \infty & \infty & 7 & 2 & 5 & \infty & 3 \\
\infty & \infty & \infty & \infty & \infty & 4 & \infty & 3 & \infty
\end{pmatrix}
$$
## Kruskal's Algorithm
1) Sort the edges by weight;
2) Let $A=\emptyset$;
3) Consider edges in increasing order of weight. For each edge $e$, add $e$ to $A$ unless this would create a cycle.
This has runtime $O(E\log V)$.
## Prim's Algorithm
1) Let $U=\{ u \}$ where $u$ is some vertex chosen arbitrarily;
2) Let $A=\emptyset$;
3) Until $U$ contains all vertices:
	1) Find the least-weighted edge $e$ that joins a vertex $v$ in $U$ to a vertex $w$ not in $U$.
	2) Add $e$ to $A$ and $w$ to $U$.
This has runtime $O(V\log V+E)$.
## A General Algorithm
Kruskal's and Prim's algorithms are special cases of a generic greedy algorithm for finding a minimum spanning tree - we iteratively build a vertex set $A$ such that $A$ is a subset of some minimum spanning tree (henceforth MST).
### Definitions
+ Let $A$ be a subset of an MST. If the set $A \cup{(u,v)}$ is also a subset of an MST, then $(u,v)$ is a **safe** edge for $A$.
+ A **cut** $(S, V-S)$ of $G=(V,E)$ is a partition of $V$.
+ An edge $(u,v)\in E$ **crosses** the cut $(S,V-S)$ if $u \in S$ and $v \in V-S$ or vice versa.
+ An edge $(u,v) \in E$ is a **light edge** crossing a cut if its weight is smallest amongst all edges crossing the cut.
+ A cut **respects** a set $A$ of edges if no edge of $A$ crosses the cut.
### Algorithm
```
fn GenericMST
in graph G, weights w
op MST
	A <- EMPTYSET
	while A does not form a spanning tree do
		find an edge (u,v) that is safe for A
		A <- A + (u,v)
	endwhile
	return A
```
>Let $G=(V,E)$ be a connected undirected graph with a real-valued weight function $w$ defined on the edges $E$. Let $A \subseteq E$ such that $A$ is included in some MST of $G$, let $(S,V-S)$ be any cut of $G$ that respects $A$, and let $(u,v)$ be a light edge crossing $(S,V-S)$. Then the edge is *safe* for $A$.

The above theorem implies correctness for Prim's algorithm.
#### Corollary
>Let $G=(V,E)$ be a connected undirected graph with a real-valued weight function $w$ defined on the edges $E$. Let $A \subseteq E$ such that $A$ is included in some MST of $G$, and let $C=(V_{C},E_{C})$ be a connected component (tree) in the forest $G_{A}=(V,A)$. If $(u,v)$ is a light edge that connects $C$ to some other component in $G_{A}$, then the edge $(u,v)$ is *safe* for $A$.

This implies correctness for Kruskal's algorithm.