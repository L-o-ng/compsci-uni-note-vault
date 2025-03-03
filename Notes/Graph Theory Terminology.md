#notes 
## Terminology
If $G$ is a graph and $uv$ an edge in it:
+ $u,v$ are called *endpoints* on the edge $uv$;
+ $u,v$ are called *neighbours*/*adjacent* vertices;
+ $uv$ is said to be *incident* to $u$ and to $v$;
+ If $vw$ is also an edge where $w \neq u$ then $uv,vw$ are called *adjacent*.

If $G=(V,E)$ is a graph, then:
+ The *neighbourhood* of a vertex $v \in V$, denoted $\operatorname{N}(v)$, is the set of neighbours of $v$: $N(v)=\{ u \in V | uv \in E \}$.
+ The *degree* of a vertex $v \in V$, denoted $\operatorname{deg}(v)$, is the number of neighbours of $v$: $\operatorname{deg}(v)=|\operatorname{N}(v)|$.
+ With $\delta(G)$, or just $\delta$, we denote the *smallest* degree in $G$, and similarly $\Delta(G)$ or $\Delta$ denotes the *largest* degree.
+ A vertex with degree 0 is called an *isolated* vertex.
+ A vertex with degree 1 is called an *end*/*pendant* vertex.
### Walks, Paths, Cycles, and Distances
A *walk* in a graph $G$ is a sequence of edges $v_{0}v_{1},v_{1}v_{2},v_{2}v_{3},\dots,v_{n-1}v_{n}$. In this case, we also say that $v_{0},v_{1},\dots,v_{n}$ is a walk in $G$.
A walk $v_{0},v_{1},\dots,v_{n}$ in $G$ is a *path* if all $v_{i}$s are distinct. In this case we also say that $v_{0},v_{1},\dots,v_{n}$ is a path in $G$.
A walk $v_{0},v_{1},\dots,v_{n}$ with $v_{0}=v_{n}$ is called a *circuit* or *closed walk*.
A closed walk is a *cycle*, or *simple circuit* if all $v_{i}$s in it are distinct except $v_{0}=v_{n}$.
If $G$ is a directed graph then the *directed paths* and *directed cycles* are defined in a natural way, with each edge being directed from $v_{i}$ to $v_{i+1}$.
The *length* of a path or cycle is the number of edges in it.
The *distance* between vertices $u,v$ in a graph, denoted $\text{dist}(u,v)$ is the length of a shortest path from $u \to v$ if such a path exists, and $\infty$ otherwise.
The *diameter* of a graph is the largest distance between two vertices in it.
## Theorems
### Handshaking Lemma
This is the relationship between the sum of the degrees of the vertices of a graph and the number of edges in that graph.

>Let $G=(V,E)$ be a graph. Then: $$\sum_{v \in V}\operatorname{deg}(v)=2|E| $$

This is useful for proving nonexistence of some graphs with certain properties.
#### Corollary
>In every undirected graph $G$, the number of vertices with an odd degree is even.

