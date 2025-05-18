#notes 

Breadth First Search is a graph traversal method.
We input:
+ a graph $G=(V,E)$;
+ a start vertex $s$.
We aim to find the **distance** from $s$ to each of the other vertices in the graph.
## Idea
BFS maintains a **queue** that contains vertices that have been discovered, but not yet processed.
It can be thought to colour vertices:
+ White indicates that a vertex is undiscovered;
+ Grey indicates that a vertex is discovered but unprocessed;
+ Black indicates that a vertex has been processed.
The algorithm maintains an array $d$, storing distances:
+ `d[s]=0` as $s$ is the source vertex;
+ If we discover a new vertex $v$ while processing $u$, we set `d[v]=d[u]+1`.
## Algorithm
```
fn BFS
in graph G, source s
op distance array d
	for each vertex u in V[G]-s do
		colour[u] <- WHITE
			d[u] <- INFINITY
				pi[u] <- NULL
	endfor
	colour[s] <- GREY
	d[s] <- 0
	pi[s] <- NULL
	Q <- EMPTYSET
	Enqueue(Q,s)
	while Q != EMPTYSET do
		u <- Dequeue(Q)
		for each v in Adj[u] do
			if colour[v] = WHITE then
				colour[v] = GREY
				d[v] <- d[u] + 1
				pi[v] <- u
				Enqueue(Q,v)
			endif
			colour[u] <- BLACK
		endfor
	endwhile
```
Here, $\pi$ represents the predecessor of the vertex. This allows us to later find the shortest path between nodes.
## Analysis
We assume that it takes constant time to:
+ Test/update colour;
+ Alter distances/predecessors;
+ Enqueue/dequeue.
Initialisation takes time $O(V)$.
Each vertex enters and leaves the queue once, so queuing operations take $O(V)$.
The adjacency lists of each vertex are scanned. Each list is read once, and the combined length of the lists is $O(E)$.
Thus, the total runtime is $O(V+E)$, or $O(V^{2})$.
## Shortest Path
The traversed edges form a tree: we call this the **breadth-first tree**. A path from $s$ to another vertex $v$ through the tree is the shortest path between $s$ and $v$.
The **predecessor** of a vertex is the one through which it was discovered. We record predecessors in an array $\pi$ when we run the algorithm and use this to construct the tree.
