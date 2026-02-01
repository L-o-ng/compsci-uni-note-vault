#notes 

The **Ford-Fulkerson** method is an iterative method for solving [[The Maximum Flow Problem]], relating to [[Flow Networks]]:
1. We start with $f(u,v)=0\forall u,v \in V$;
2. At each iteration, we increase the flow value by finding an **augmenting path** - a path from source to sink, along which we can *increase* flow - and then augment flow along this path;
3. We repeat until no augmenting path can be found.

There are three important ideas to this method:
1. [[Residual Flow Networks|Residual Networks]];
2. [[Augmenting Flow Paths|Augmenting Paths]];
3. [[Cuts in Flow Networks|Cuts]].
## Algorithm
```
fn ford_fulkerson
in network G, source s, sink t
op maximum flow
	for each edge (u, v) in E do
		f(u, v) <- 0
		f(v, u) <- 0
	endfor
	while there exists a path P=s->t in the residual network G_f do
		// ie if there exists an augmenting path in G
		c_f(P) <- min(c_f(u, v) : (u, v) in P)
		for each edge (u, v) in P do
			f(u, v) <- f(u, v) + c_f(P)
			f(v, u) <- -f(u, v)
		endfor
	endwhile
```
## Runtime
The algorithm runtime strongly depends on how augmenting paths are found.
If done poorly, the value of flow *increases* every iteration, but possibly **too slowly** - in extreme cases it might *never* terminate! It can also not converge to the value of maximum flow, if irrational numbers are given for capacities.

If capacities are integers then the algorithm always terminates. If the capacities are also small then the algorithm is efficient. This however is not always the case.
### Analysis
We assume integral capacities. We have a simple bound $O(E\cdot |f^{*}|)$ for runtime when choosing paths arbitrarily. Here $|f^{*}|$ is the **value** of maximum flow.
1. Initialisation takes $O(E)$;
2. The while loop is executed at most $|f^{*}|$ times;
3. Within the while loop we need $O(V+E)=O(E)$ time.

In the worst case, we have $\Omega(E\cdot|f^{*}|)$ time, because $(u,v)$ is **always** chosen to be part of the augmenting path. Here we have $|f^{*}|=2 000 000$:
![[Network Flow Ford Fulkerson Runtime.png]]
This algorithm is clearly **not** polynomial in the worst case. See [[The Edmonds-Karp Algorithm]] for a polynomial algorithm.