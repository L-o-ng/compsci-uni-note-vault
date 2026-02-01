#notes 

Consider the following:
+ $X$ is a set of machines and $Y$ a set of jobs;
+ $x \in X$ is connected to $y \in Y$ if a job $y$ can be executed on machine $x$;
+ We can find the maximum number of executed jobs by finding a maximum matching.

We can use [[Flow Networks]] to solve this problem:
1. Let $G=(X,Y,E)$ be a bipartite graph;
2. We construct from $G$ a flow network $H$ such that every maximum flow in $H$ can be immediately converted to a maximum matching in $G$;
3. We then apply [[The Ford-Fulkerson Algorithm]] on $H$.

We can *reduce* this problem to [[The Maximum Flow Problem]]!
## Finding $H$
![[Maximum Bipartite Matching.png]]
1. We include in $H$ all vertices of $G$, plus a new **source** $s$ and **sink** $t$;
2. We add all **edges** of $G$ and direct them all from $X$ to $Y$;
3. We add directed edges from $s$ to all vertices in $X$ and $Y$ to $t$;
4. We assign capacity 1 to all edges of $H$.
## Matching
Given a **maximum** flow $f$ in $H$:
1. We can safely assume that the flow on each edge is 0 or 1;
2. We define a set of edges in $G$ such that $f(e)=1\implies e \in M$;
3. Each $x \in X$ has exactly one incoming edge, implying at most one *outgoing* edge of $x$ has non-zero flow in $f$;
4. Similarly, each $y \in Y$ has exactly one outgoing edge, implying at most one incoming edge has non-zero flow.

Each vertex in $X$ is paired by $M$ with at most one vertex of $Y$ and vice versa: $M$ is a **matching**, where $|M| = |f|$.

Conversely, given a maximum matching $M$ in $G$:
1. For each edge $e$ of $H$ that also belongs to $G$:
	1. If $e \in M$, we set $f(e)=1$;
	2. Otherwise, we set $f(e)=0$.
2. For each edge $e$ incident to $s$ or $t$:
	1. If $e$ shares an endpoint with an edge of $M$, we set $f(e)=1$;
	2. Otherwise, we set $f(e)=0$.
3. It is easy to verify that:
	1. $f$ is a **flow** in $H$;
	2. The value of $f$ is $|f| = |M|$.

Therefore, a maximum matching in $G$ is equal to a maximum flow in $H$.
## Runtime
Given a bipartite graph $G$ with $n$ vertices and $m$ edges:
1. We construct $H$ from $G$ in $O(n+m)$ time;
2. We compute a maximum flow in $H$ using [[The Ford-Fulkerson Algorithm]];
3. The value of the maximum flow is $|f| = |M| \leq \frac{n}{2}$:
	1. This is at most $\frac{n}{2}$ computations;
	2. This gives a runtime of $O(n\cdot(n+m))=O(nm)$.
4. Finally, a construction of $M$ from $f$ is done in $O(n+m)$ time.

The fastest known algorithm has runtime $O(m\sqrt{ n })$ by simultaneously augmenting many paths.



