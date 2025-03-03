#notes 

>Every Graph $G=(V,E)$ contains at least $|V|-|E|$ connected components.

Proof:
>By induction over $m=|E|$:
>Basis: $m=0$. No edges, so there are only isolated vertices; ie, $|V|$ connected components.
>Induction: Let $G=(V,E)$ with $|E|=m+1$. Consider an arbitrary $e \in E$, and define $E'=E\setminus \{ e \}$. By the induction hypothesis, $G'=(V,E')$ has at least $|V|-|E'|=|V|-m$ connected components. We now have two cases:$$\array{\bullet \text{ with }e\text{, the number of connected components does not change.}\\ \bullet\text{ with }e\text{, the number of connected components }???\text{ decreases by }1.}$$In both cases, $G$ has at least $|V|-m-1=|V|-|E|$ connected components.

Corollary:
>If $G=(V,E)$ is connected then $|E|\geq |V|-1$.
## Strong vs Weak Connectivity
>A directed graph $G$ is called *weakly connected* if the graph obtained from $G$ by forgetting directions is connected.
>A directed graph is called *strongly connected* if any two distinct vertices are connected by directed paths in both directions.
>A *strongly connected component*, or simply *strong component* of a digraph $G$ is a maximal strongly connected subgraph of $G$.
## Special Circuits and Cycles
If we can travel along the edges of a given graph $G$ so that we start and finish at the same vertex while traversing each edge exactly once, the circuit in G produced by the traversal is called an [[Eulerian Circuits|Eulerian Circuit]].
If we can travel along the edges of a graph so that we start and finish at the same vertex and visit each vertex exactly once, the cycle produced is called a [[Hamiltonian Cycles|Hamiltonian Cycle]].

