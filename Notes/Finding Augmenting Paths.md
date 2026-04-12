#notes 

A vertex $u$ is $M$-*reachable* from $v$ if there is an $M$-alternating path from $v$ to $u$.
## Initial Approach
1. For every vertex $v \in V$, we search for an $M$-augmenting path starting at $V$;
	1. Use a search algorithm to find all $M$-reachable vertices from $v$;
2. If we find an **unmatched** $M$-reachable vertex $u$ then we have an $M$-augmenting path from $v$ to $u$;
3. Otherwise, there is no $M$-augmenting path from $v$: try other vertices.

In this, we have a potential approach for finding $M$-reachable vertices. We could use a modification of a classic search problem [[Breadth First Search]], [[Depth First Search]], etc - but there exists a problem with **odd cycles**. However, for bipartite graphs, this works!
## Bipartite Algorithm
### Algorithm
1. Grow a search tree rooted at $v$;
2. Each path from $v$ to any vertex $u$ in the tree is **alternating**;
	1. We have an alternating tree $T$.
3. Vertices that are visited are labelled odd or even, such that vertex $u$ is labelled odd/even if the path from $v$ in $T$ is odd/even respectively;
4. An **unmatched** vertex is labelled **odd** implies an augmenting path.
### Analysis
A graph $G$ has the **unique label property** with respect to a matching $M$ and a root vertex $v$ if the search algorithm assigns a *unique* label to **every** labelled vertex, regardless of the order in which it visits the vertices.
If the graph has this property, the search algorithm will always discover an augmenting path, if one exists.
This runs in $O(|E|)$ time.
### Finding a Maximum Matching
In a bipartite graph, we have two colours, $R,B$.
Let $M$ be a matching in a bipartite graph $G=(R \cup B,E)$.
If all **red** vertices are matched, then $M$ is a maximum. Otherwise, we try to find an $M$-augmenting path $P$ if one exists:
1. Start with an unmatched **red** vertex $v$;
2. Consider all *blue* neighbours of $v$;
	1. If one of them is unmatched, then we can halt: we have found $P$.
3. Consider the unique matched **red** neighbour of every newly found *blue* vertex.
4. Consider all new *blue* neighbours of the red vertices of step 3;
	1. If one of them is unmatched, we have found P;
	2. If no new *blue* neighbour is detected, we stop.
	3. Otherwise, go to step 3.

If the algorithm terminated because no new blue neighbour was found in step 4, then we have found an **alternating tree** $T$.
Consider the bipartite graph $G-T$ and repeat until $P$ is found or the set of unmatched red vertices has become empty.

This runs in $O(|E||V|)$ time.
Generalisations to all graphs exist, and the minimum existing runtime for these algorithms is $O(|E|\sqrt{ |V| })$ time, or $O(|V|^{2.376})$, using the Micali and Vazirani algorithm, and the Much and Sankowski algorithm respectively.


