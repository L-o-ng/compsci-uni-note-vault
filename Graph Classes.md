#notes 

Some graphs appear so often that they get special names, or even symbols.
## Graphs
### Set 1
#### Graph 1
![[Graph Class P3.png]]
This graph is denoted $P_{3}$, and in general we define $P_{n}$ as the **path** on $n$ vertices: a graph with vertex set $V=\{ v_{1},v_{2},\dots,v_{n} \}$ and edge set $E=\{ v_{1}v_{2},v_{2}v_{3},\dots,v_{n-1}v_{n} \}$.
So $P_{n}$ has $n-1$ edges.

>A **path** in a graph $G$ is a subgraph of $G$ which is isomorphic to the graph $P_{k}$ for some integer $k \geq 1$. Sometimes a path is called a *simple path*.
#### Graph 2
![[Graph Class C4.png]]
This graph is denoted by $C_{4}$, the **cycle** on 4 vertices. In general, a $C_{n}$ graph on $n$ vertices is defined similarly to $P_{n}$, but with an additional edge $v_{n}v_{1}$. So $C_{n}$ has $n$ edges.

>A **cycle** in a graph $G$ is a subgraph of $G$ which is isomorphic to the graph $C_{k}$ for some integer $k\geq 3$. Sometimes a cycle is called a *simple circuit*.
#### In General
![[Graph Classes Other.png]]
Generally, and for example the 2 graphs pictured above can be described as a $K_{p,q}$: a graph consisting of 2 disjoint vertex set on $p$, and on $q$ vertices, and all possible edges between these 2 vertex sets and no other edges. So, $K_{p,q}$ has $p \cdot q$ edges.

>$K_{p,q}$ is called a **complete bipartite** graph. Any subgraph of $K_{p,q}$ is called a **bipartite** graph. A graph is bipartite if and only if we can partition its vertex set to two vertex sets such that every edge has one endpoint in each set.

Bipartite graphs play an important role in [[Sports Day|scheduling]] and assignment problems.
### Set 2
#### Complete Graphs
>A **complete** graph on $n$ vertices, denoted by $K_{n}$, contains all the possible edges between pairs of vertices.

A $K_{n}$ therefore has $\begin{pmatrix}n\\2\end{pmatrix}=\frac{1}{2}n(n-1)$ edges.
#### N-Dimensional Graphs
>The ($n$-dimensional) **hypercube** or $n$-cube $Q_{n}$ with $n \geq 1$ is the graph with:$$V=\{ (e_{1},\dots,e_{n})|e_{i}\in \{ 0,1 \}(i=1,\dots,n) \}$$
>in which 2 vertices are neighbours if and only if the corresponding rows differ in exactly one entry.

todo! more on n-cubes.