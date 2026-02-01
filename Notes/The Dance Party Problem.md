#definition 

Consider groups $X$ of men and $Y$ of women, all in a dance party. $x \in X$ is **matchable** with $y \in Y$ if they are both willing to dance with each other. The goal is to find out the largest set of pairs dancing simultaneously.
## Maximum Matching
Let $G=(V,E)$ be an undirected graph. A **matching** in $G$ is a set of *edges* of $E$ with **no common endpoints**.

We pair neighbouring vertices of $V$ such that each vertex is paired with at most one other vertex of $V$. We have a special case in which $G$ is *bipartite*: [[Maximum Bipartite Matching]].