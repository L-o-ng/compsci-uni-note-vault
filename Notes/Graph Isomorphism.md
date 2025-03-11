#notes 
## See Also
+ [[Trees in Graph Theory]] (for [[#Isomorphism in Trees]])
## Graph Isomorphism
>Two graphs $G=(V,E)$ and $G'=(V',E')$ are **isomorphic** if there exists a *bijective* function $f:V \to V'$ such that for every $u,v \in V$ we have $uv \in E\iff f(u)f(v)\in E'$. Then we write $G \ismorph G'$.

In other words, $G \ismorph G'$ when:
+ There exists a correspondence between vertices of $G,G'$ which maintains the "neighbourhood" property;
+ There is a renaming of $G'$ such that it coincides with $G$.
Isomorphism is an equivalence relationship:
+ $G \ismorph G$: every graph is isomorphic to itself;
+ If $G_{1} \ismorph G_{2}$ and $G_{2} \ismorph G_{3}$ then $G_{1} \ismorph G_{3}$.

If $G,G'$ are isomorphic then they share *all* their structural characteristics:
+ Their number of vertices and edges;
+ Their degree sequence;
+ (Strong) connectivity;
+ [[Eulerian Circuits]];
+ [[Hamiltonian Cycles]];
+ [[Map Colouring|Chromatic Number]]
+ Size of its largest independent set...
However, *none* of these **show** isomorphism. They can **only** be used to show non-isomorphism.
## Isomorphism in Trees


---
## Examples

