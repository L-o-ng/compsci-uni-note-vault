#notes 

Let $G_{1},G_{2}$ be two vertex-disjoint graphs. The **disjoint union** $G_{1}+G_{2}$ is the graph with:
+ Vertex set $V(G_{1})\cup V(G_{2})$;
+ Edge set $E(G_{1})\cup E(G_{2})$.

The **join** $G_{1}\times G_{2}$ is the graph with:
+ Vertex set $V(G_{1})\cup V(G_{2})$;
+ Edge set $E(G_{1})\cup E(G_{2})\cup E^{*}$ where $E^{*}$ is the set of all edges between vertices of $G_{1}$ and $G_{2}$.

Now, a graph $G$ is a cograph if it can be created with these rules:
1. The 1-vertex graph is a cograph;
2. If $G_{1},G_{2}$ are cographs then so is $G_{1}+G_{2}$;
3. If $G_{1},G_{2}$ are cographs then so is $G_{1}\times G_{2}$.
## Alternative Definition
Let $P_{4}$ denote the **path** on 4 vertices. A graph $G$ contains $P_{4}$ as an **induced subgraph** if $G$ can be modified to $P_{4}$ via vertex deletions. If not, then $G$ is $P_{4}$-free.
![[P4-free graphs.png]]
>A graph $G$ is a **cograph** $\iff$ $G$ is $P_{4}$-free.
## Cotrees
Let $G$ be a cograph. The **cotree** $T_{G}$ of $G$ is the unique decomposition tree that satisfies:
1. The **root** $r$ of the tree represents the graph $G_{r}=G$;
2. Every **leaf** $x$ of the tree represents exactly one vertex of $G$, and vice versa;
3. Every **internal node** $x$ of the tree has at least *2 children*, is either labelled $+$ or $\times$, and represents an **induced subgraph** $G_{x}$ of $G$, defined as follows:
	1. If $x$ is a $+$-node then $G_{x}$ is the *disjoint union* of all graphs $G_{y}$ where $y$ is a child of $x$;
	2. If $x$ is a $\times$-node then $G_{x}$ is the *join* of all graphs $G_{y}$ where $y$ is a child of $x$.
4. Along the path from the root $r$ to any leaf, the labels of the internal nodes **alternate** between $+$ and $\times$. 

>Any cograph $G$ has a unique cotree. If we drop condition 4, there may be many trees representing $G$.

