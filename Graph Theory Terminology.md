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
## Theorems
### Handshaking Lemma
This is the relationship between the sum of the degrees of the vertices of a graph and the number of edges in that graph.

>Let $G=(V,E)$ be a graph. Then: $$\sum_{v \in V}\operatorname{deg}(v)=2|E| $$

This is useful for proving nonexistence of some graphs with certain properties.
#### Corollary
>In every undirected graph $G$, the number of vertices with an odd degree is even.

