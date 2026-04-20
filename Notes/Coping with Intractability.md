#notes 

>[!abstract]
>In [[Complexity Classes]], we have been concerned with [[Decision Problems]]. It is often more natural to look at **optimisation** versions of the same problems.

If an algorithm for the optimisation problem is produced, it would also provide an algorithm for the decision problem. If the decision problem is **$NP$-complete**, then the optimisation problem is **$NP$-hard**.
If an optimisation problem is $NP$-hard, we generally regard it as **intractable**.
## Working Under Intractability
There are three traditional ways to cope with an intractable problem:
1. Look at special cases: perhaps the solution to the general problem is unnecessary and the special case is tractable;
2. Use heuristics;
3. Use approximation algorithms, which guarantee being within a certain factor of the optimal answer.
### Approximation
An algorithm is a $k$-approximation if it always finds a solution that is a factor of $k$ within the optimum.
+ For **minimisation** problems, a $k$-approximation find a solution at *most* $k$ times the optimum;
+ For **maximisation** problems, a $k$ approximation finds a solution such that the optimum is at most $k$ times as big.
#### Vertex Cover
Vertex cover is $NP$-hard. We can easily find a **nearly optimal** vertex cover, however. The following is a 2-approximation:
```
fn approx_vertex_cover
in graph G=(V,E)
op vertex cover
	C <- emptyset
	E' <- E(G)
	while E' != emptyset do
		let (u, v) be an arbitrary edge of E'
		C <- C logical or {u, v}
		remove from E' every edge incident with u or v
	endwhile
	return C
```
#### Metric TSP
For every $u,v$ let the weight $d(u,v)$ denote the geometric distance from city $u$ to city $v$ in an instance of the TSP.
An instance is called **metric** if:
1. It is *symmetric* ($d(u,v)=d(v,u)\forall u,v$);
2. It possesses the *triangle inequality*: for all $u,v,w$, $d(u,v)+d(v,w)\geq d(u,w)$.

An approximation algorithm looks like:
1. Find a [[Minimum Spanning Trees|Minimum Spanning Tree]];
2. Construct a tour that includes every vertex and finishes at the same city using only the edges of the minimum spanning tree;
3. Modify the tour by removing repeated cities but keep the order the same;
4. Output the modified tour.

>[!theorem]
>The algorithm is a 2-approximation for the metric TSP.

>[!proof]
> + Let $K$ be the length of the optimal tour;
> + The weight of a minimum spanning tree is at most $K$;
> + A tour that uses edges of the MST uses each edge exactly twice, so has length at most $2K$;
> + When we modify the tour to remove repetitions we do not increase its length, so the modified tour also has length at most $2K$.
#### Maximum Cut
>[!question] Maximum Cut
>**Instance**: A graph $G=(V,E)$;
>**Question**: Partition $V$ into two sets $A,B$ so that the number of edges joining $A$ to $B$ is maximised.

Given a partition $(A,B)$ of the vertex set:
+ The size of the cut is the number of edges between $A,B$;
+ To **flip** a vertex means to move it from one set to the other;
+ A vertex $v$ is **light** if flipping it increases the size of the cut.

```
fn approx_max_cut
in graph G = (V, E)
op approx max cut
	A <- V
	B <- emptyset
	while there exists a light vertex v do
		flip v
	endwhile
	return A, B
```

This is a 2- approximation, with polynomial running time.