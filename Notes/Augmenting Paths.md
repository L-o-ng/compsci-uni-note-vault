#notes 

See first: [[The Matching Problem]], [[Alternating Paths and Cycles]]
See also: [[Augmenting Flow Paths]]

---

Let $G$ be a **graph** with a *matching* $M$ and an $M$-augmenting path $P$.
Then, $|M \otimes P|=|M|+1$ : the matching $M \otimes P$ has **more** edges than $M$.
So $M$ is **not** a maximum matching.

We now prove that the **converse** holds also: that if there exists **no** $M$-augmenting path $P$, then $M$ is a *maximum* matching.
## Lemma
Let $G=(V,E)$ be an undirected graph and let $M,M^{*}$ be two matchings in $G$. Then the subgraph $H=(V,M \otimes M^{*})$ of $G$ is the disjoint union of:
1. Isolated vertices;
2. Alternating cycles with respect to both $M,M^{*}$;
3. Alternating paths with respect to both $M,M^{*}$.
## Lemma
Let $G=(V,E)$ be a graph. The following are equivalent:
1. $M$ is a maximum matching;
2. $G$ has no $M$-augmenting path.
## Corollary
Let $G=(V,E)$ be a graph, and $M,M^{*}$ be two matchings in $G$ such that $|M^{*}|=|M|+k$ for some $k\geq 1$. Then $G$ has **at least** $k$ ==pairwise vertex-disjoint $M$-augmenting paths==.
