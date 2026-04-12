#notes 

See first: [[Graph Theory]], [[Alternating Paths and Cycles]], [[Augmenting Paths]]
## Problem Definition
Let $G=(V,E)$ be an undirected graph. When modelling a real-world application, the vertices usually represent the interesting objects and the edges their relations. However, sometimes the edges become the interesting object to study - an edge **unites** or **matches** two vertices.
A matching $M \subseteq E$ in $G$ is an *independent* set of edges: a set $M$ of edges where no two edges of $M$ share a common vertex.

Many assignment problems can be formulated as finding a *special matching* in a **bipartite** graph $G=(X \cup Y,E)$.
## Large Matchings
We are interested in matchings that are **large** in *cardinality*. A matching $M$ is called:
+ **Maximal**, if $M$ is not a *proper subset* of any other matching $M'$ in $G$;
+ **Maximum**, if no other matching $M'$ in $G$ contains a strictly *greater* number of edges;
+ **Perfect**, if *every* vertex of $G$ is an *endpoint* in $M$.

![[Matchings 1.png]]
The *matching number* $v_{G}$ of $G$ is the size of a *maximum* matching in $G$.
Note that:
1. Every maximum matching is also maximal;
2. A maximal matching is not necessarily maximum;
3. A perfect matching is always maximum.
## Solving the Problem
[[Alternating Paths and Cycles]] and [[Augmenting Paths]] suggest the following algorithmic method for solving matching:
1. Let $M=\emptyset$;
2. Check if there is an $M$-augmenting path $P$;
3. If $P$ exists, then $M := M \otimes P$ and return to step 2;
4. Otherwise, output $M$.

However, step 2 requires us to find an augmenting path, which is difficult: see [[Finding Augmenting Paths]]
## Other Problems
See [[The Vertex Cover Problem]]