#definition 

If we can travel along the edges of a given graph $G$ so that we start and finish at the same vertex while traversing each edge exactly once, the circuit in G produced by the traversal is called an **Eulerian Circuit**.

>A connected graph with at least two vertices has an Eulerian Circuit if and only if each of its vertices has even degree.
## Proof
Necessity: each time this circuit passes through a vertex $v$, it contributes 2 to $\operatorname{deg}(v)$. Since each edge is used exactly once, $\operatorname{deg}(v)$ must be even.
Sufficiency: induction on the number of vertices in $G$, with base $G=K_{3}$ as an obvious claim. We have induction step:
1) Start walking from any vertex $u$ along the untraversed edges, marking off the traversed edges.
2) Stop when a vertex is reached that the walk cannot continue from. This vertex must be $u$ again.
3) Hence we have a circuit $C$. Delete it from $G$ to obtain a smaller graph $H$ in which all degrees are also even.
4) By the induction hypothesis, each connected component of $H$ has an Eulerian circuit.
5) Combine $C$ and these circuits to obtain the required circuit for $G$.
