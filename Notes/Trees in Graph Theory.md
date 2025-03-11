#notes 
## See Also
+ [[Trees]]
## Trees
Trees are a special graph class with many applications.
>A **forest** is an *acyclic* graph.
>A **tree** is a *connected* forest - a connected, acyclic graph.

![[Trees and Forests graph example.png]]
The above can be considered 6 different trees, each on 6 vertices, or a **forest** on 36 vertices.
### Spanning Trees
A subgraph $G'=(V',E')$ of a graph $G=(V,E)$ is **spanning** if $V'=V$.

>Every connected graph contains a spanning tree.
#### Proof
Let $G$ be a connected graph:
+ If $G$ contains no cycles, it is a tree, and hence a spanning tree of itself.
+ If $G$ contains a cycle, we can remove one edge from the cycle.
	+ The new graph is still connected;
	+ Repeating this, we can destroy all cycles and end up with a spanning tree.

It follows that trees are the smallest connected structures.
### Leaves
A **leaf** in a tree is a vertex of degree 1.

>Every tree on at least 2 vertices contains a leaf.
#### Proof
By contradiction:
>Assuming that every vertex has degree 0 or at least 2, we can show that the graph is not a tree:
>If a vertex has degree 0 then the graph (containing at least 2 vertices) is not connected and so not a tree.
>If every vertex has degree of at least 2, then we can start at any vertex and traverse the graph. Since the vertex set is finite, we will eventually encounter a vertex we have already visited. This implies a cycle exists, so the graph is not a tree.
#### Alternative Proof
>Consider a longest path $P$ and an end vertex $v$ of $P$:
>All neighbours of $v$ are on $P$.
>If $\deg(v)\geq 2$ then there is a cycle.
>The same holds for the second end vertex $u$ of $P$.
>$\implies \deg(u)=\deg(v)=1$
### Edges
>A connected graph on $n$ vertices is a tree if and only if it has $n-1$ edges.
#### Proof
By induction: 
($\Rightarrow$)
>For small $n$ the lemma holds: a tree on one vertex has no edges; a tree on two vertices has one edge.
>Suppose each tree on $n-1$ vertices has $n-2$ edges:
>Take a tree $T$ on $n$ vertices, for some $n\geq 3$; $T$ contains a leaf $v$. Consider the graph $T-v$ - it has one vertex less and one edge less that $v$. $T-v$ is still connected and acyclic so is a tree with $n-1$ vertices and by the induction hypothesis, $n-2$ edges. $T$ has one edge more: so $n-1$ edges.

($\Leftarrow$)
>Assume $G$ is a connected graph with $n$ vertices and $n-1$ edges:
>Then, as we proved before, $G$ contains a spanning tree $T$. We know $T$ contains exactly $n-1$ edges. $T$ is a subgraph of $G$ and has the same number of edges as $G$. Hence, $T,G$ are the same. $G$ is a tree.
### Paths
Since trees are connected, there exists a path between any two vertices in a tree. There cannot be more than one.
>Let $T$ be a tree and $u,v \in V(T),u \neq v$.
>Then, there is a ***unique*** path in $T$ between $u$ and $v$.
#### Proof
By contradiction:
>There is a path between $u,v$ in $T$, since $T$ is connected.
>Suppose there are two paths $P,Q$ in $T$ between $u,v$: Let $x,y \in V(T)$ be distinct and chosen in such a way that $x,y$ are on both $P,Q$ but between $x,y$ the vertices on $P,Q$ are disjoint. Then the segments of $P,Q$ between $x,y$ form a cycle. This contradicts that $T$ is a tree.
## Rooted trees
A (directed) rooted tree is a tree in which one vertex is fixed as the root (and every edge is directed away from this root).

We usually draw rooted trees in horizontal levels:
![[Rooted Tree Graph Theory.png]]
### Definitions
Let $v$ be a vertex in a rooted tree $T$:
+ The neighbours of $v$ in the next level are called the **children** of $v$.
+ The (unique) neighbour of $v$ in the previous level (if $v$ is not the root) is called the **parent** of $v$.
+ If $v$ has no children then it is called a **leaf** of $T$.
+ If $v$ has children then it is an **internal** vertex.
## Applications of Trees
+ [[Binary Search Tree]]
+ Search Trees
+ Phylogenetic Trees in Bioinformatics
## Number of Leaves in a Tree
>A tree with at least 2 vertices, $n_{3}$ of which have degree at least 3, has at least $n_{3}+2$ leaves.
### Proof
+ Let $\leaves(T)$ denote the number of leaves in $T$ and $n_{3}(T)$ the number of vertices of degree at least 3 in $T$.
+ Base case:
	+ If $n=2$, then $n_{3}=0$ and $T$ has 2 leaves.
+ Inductive Step:
	+ Suppose that every tree on $<n$ vertices has at least $n_{3}+2$ leaves and consider a tree $T$ on $n\geq 3$ vertices. Since $T$ is a tree on at least 3 vertices, $T$ has a leaf $u$. Then $T'=T-u$ is a tree on $n-1$ vertices. By the induction hypothesis, we have $\leaves(T')\geq n_{3}(T')+2$. Now let $v$ be the unique neighbour of $u$ in $T$. $T$ is connected and has at least 3 vertices, so $v$ has at least 2 neighbours in $T$. Now:
		+ Suppose that $v$ has exactly two neighbours in $T$:
			+ Then, $n_{3}(T')=n_{3}(T),\quad \leaves(T')=\leaves(T)$
			+ Hence, $\leaves(T)=\leaves(T')\geq n_{3}(T')+2=n_{3}(T)+2$
		+ Suppose that $v$ has exactly three neighbours in $T$:
			+ Then, $n_{3}(T')=n_{3}(T)-1 \quad \leaves(T')=\leaves(T)-1$
			+ Hence, $\leaves(T)=\leaves(T')+1\geq n_{3}(T')+2+1=n_{3}(T)-1+2+1=n_{3}(T)+2$
		+ Suppose that $v$ has at least four neighbours in $T$:
			+ Then, $n_{3}(T)=n_{3}(T')\quad \leaves(T')=\leaves(T)-1$
			+ Hence, $\leaves(T)=\leaves(T')+1 \geq n_{3}(T')+2+1=n_{3}(T)+2+1\geq n_{3}(T)+2$
## Bipartition in Trees
>Every tree is a bipartite graph.
### Proof
We can give a *direct* proof.
+ Choose any vertex $v$ and put this vertex in the set $V_{1}$.
+ For every vertex $u\neq v$ there is a unique path from $v \to u$ in $T$; consider the length of this path:
	+ If the length is odd, put $u$ in $V_{2}$; otherwise, put $u$ in $V_{1}$.
+ $V_{1},V_{2}$ are disjoint and together make up $V(T)$.
+ Every edge has end vertices in both $V_{1},V_{2}$
+ Therefore, the above is a valid bipartition.

---
## Examples
