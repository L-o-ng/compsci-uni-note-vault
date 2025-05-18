#notes 

**Depth First Search** is a graph traversal algorithm. It explores the graph, but does not find distances to the source. In contrast to [[Breadth First Search]], a vertex is immediately explored upon discovery. Two timestamps are recorded for each vertex: $d,f$, or the *discovery* and *finish* times. We can also record predecessors, or $\pi$, again.
Colours are used again:
+ White represents undiscovered;
+ Grey represents discovered but unfinished;
+ Black represents finished.
## Idea
Colour the source vertex grey, and the others white. Discover the source at time 1.
Repeat:
1) Increment time;
2) If there is a white neighbour of the current vertex: colour it grey, note its discovery time, and set it to current;
3) Otherwise colour the current vertex black, note its finish time and return to its predecessor (or jump to an undiscovered vertex), or stop.
## Algorithm
```
fn DFS
in graph G
op discovery time d and finish time f
	for each vertex u in V[G] do
		colour[u] <- WHITE
		pi[u] <- NULL
	endfor
	time <- 0
	for each vertex u in V[G] do
		if colour[u] = WHITE then
			DFSVisit(u)
		endif
	endfor
```
```
fn DFSVisit
in vertex u
op process u
	colour[u] <- GREY
	time <- time + 1
	d[u] <- time
	for each vertex v in Adj[u] do
		if colour[v] = WHITE then
			pi[v] <- u
			DFSVisit(v)
		endif
	endfor
	colour[u] <- BLACK
	f[u] <- time <- time + 1
```
## Analysis
Initialisation takes $O(V)$.
Time $O(V)$ is spent on incrementing time, colouring vertices, and updating $d,f$.
Each vertex in each adjacency list is considered at most once. This takes time $O(E)$.
Thus, the total time is $O(V+E)$, or $O(V^{2})$.
## Edge Classification
Once we have run DFS on a graph we can construct the predecessor subgraph. This has the same vertex set as the graph, and for each vertex $v$, there is an edge from the predecessor of $v$, to $v$. The predecessor subgraph is a **depth-first forest**.
+ **Tree** edges are edges in the DFS forest.
+ **Back** edges are edges *not in the tree* that join a vertex to an ancestor.
+ **Forward** edges are edges *not in the tree* that join a vertex to its descendant.
+ **Cross** edges are all other edges.
### Undirected Graph Classification
For an undirected graph, forwards and backward edges are the same. We can refine the definition to differentiate these:
+ Suppose that $e$ is an edge that joins a vertex $u$ to its descendant $v$:
	+ $e$ is a *forward* edge if DFS first considers $e$ from $u$;
	+ $e$ is a *back* edge if DFS first considers $e$ from $v$.

>In an undirected graph, every edge is a tree edge or a back edge.

