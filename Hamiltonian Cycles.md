#definition 

If we can travel along the edges of a graph so that we start and finish at the same vertex and visit each vertex exactly once, the cycle produced is called a **Hamiltonian Cycle**.

Detecting a Hamiltonian cycle is an NP-Complete problem - the [[The Travelling Salesman Problem|TSP]] can be viewed as finding Hamiltonian cycles in graphs:
Given a graph $G$ with a set $V$ of vertices ($|V|=n$) and set $E$ of edges:
+ For each vertex $v$, create a city $c_{v}$;
+ For each pair of distinct $u,v \in V$, set $\operatorname{d}(c_{u},c_{v})=1$ if $uv \in E$ and $\operatorname{d}(c_{u},c_{v})=2$ otherwise.
Then, detecting a Hamiltonian cycle in $G$ is essentially the same problem.
+ If $G$ has a Hamiltonian cycle then the cycle is a route of cost exactly $n$.
+ If there is a route of cost $n$ then it can't use pairs with cost 2 and so goes through edges of $G$ and hence is a Hamiltonian cycle.
