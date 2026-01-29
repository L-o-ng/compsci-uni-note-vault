#notes 

See first: [[The Single-Source Shortest Paths Problem]]
## Algorithm
### Initialisation
We assume the weight on every edge is non-negative. We do *not* directly compute the entry $d(v)=\updelta(s,v)$. Instead, at every step, $d(v)$ is an **estimate** for $\updelta(s,v)$:
1. Initially, $d(v)=\infty$ and it always remains $d(v)\geq \updelta(s,v)$;
2. $d(v)$ is updated as shorter paths are found;
3. At the *end* of the algorithm we have $d(v)=\updelta(s,v)$.
### Relaxation
The process of **relaxing** an edge $(u,v)$ tests whether we can *improve* the shortest path from $s$ to $v$ by going *through* $u$. If **yes**, then we *update* $d(v)$ and $\pi(v)$:
1. Decrease the estimate $d(v)$;
2. Update the predecessor $\pi(v)$ to $u$.

The algorithm *first* calls `initialise-single-source` and *then* repeatedly **relaxes** the appropriate edges, according to the *weight function* $w$.
### Dijkstra's Algorithm
1. Initialisation: distance to source is 0, $S=\emptyset,Q=V$:
	1. $S$ stores the vertices $v$ for which we already found $\updelta(A,v)$;
	2. $Q$ stores **all** the other vertices.
2. While $Q$ is **not** empty:
	1. **Remove** from $Q$ the vertex $u$ for which $d(u)$ is a minimum;
	2. **Add** $u$ to $S$;
	3. **Relax** all edges *leaving* $u$.
## Pseudocode
### Initialisation
```
fn initialise_single_source
in graph G, source vertex s
op arrays d, pi
	for each vertex v in V(G) do
		d(v) <- infty
		pi(v) <- NULL
	endfor
	d(s) <- 0 
```
### Relaxation
```
fn relax 
in vertices u, v; weight function w
op relaxed arrays
	if d(v) > d(u) + w(u, v) then
		d(v) <- d(u) + w(u, v)
		pi(v) <- u
	endif
```
### Dijkstra's Algorithm
```
fn dijkstra
in graph G, weight function w, source s
op arrays d, pi
	initialise_single_source(G, s)
	S <- {}
	Q <- V(G)
	while Q != {} do
		u <- extract_minimum(Q)
		S <- S union {u}
		for each vertex v in adjacent(u) do
			relax(u, v, w)
		endfor
	endwhile
```
## Runtime
+ Initialisation is $O(V)$, for two operations per vertex.
+ Finding the vertex $v \in Q$ with minimum $d(v)$ takes $O(V)$ time. This is performed $V$ times.
+ Relaxation takes $O(E)$ time.

The total runtime is $O(V+V^{2}+E)=O(V^{2})$.
With a more sophisticated implementation for `extract_minimum`, we can reach $O(V\log V+E)$ time.
## Properties
+ **Triangle Inequality** - for all edges $(u,v)$: $\updelta(s,v)\leq \updelta(s,u)+w(u,v)$;
+ **Optimal Substructure** - any sub-path of a shortest path is also a shortest path;
+ **Upper-Bound Property** - For every vertex $v$, we have $d(v)\geq \updelta(s,v)$;
+ **No-Path Property** - If $\updelta(s,v)=\infty$, then we have $d(v)=\infty$ at every iteration;
+ **Convergence Property** - If there is a shortest path from $s$ to $v$ including the edge $(u,v)$ and if $d(u)=\updelta(s,u)$ then we obtain $d(v)=\updelta(s,v)$ when $u,v$ is relaxed.

