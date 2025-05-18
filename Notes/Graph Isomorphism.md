#notes 
$$
\text{Click here for command definitions!}
\newcommand\free[1]{\operatorname{free}(#1)}
\newcommand{\ismorph}{\overset{\sim}{=}}
\DeclareMathOperator{\cspace}{\mathcal{C}}
\DeclareMathOperator{\span}{\operatorname{span}}
\newcommand\proj[2]{\operatorname{proj}_{#1}({#2})}
\newcommand{\leaves}{ℓ}
$$
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
We have now seen rooted directed trees, where all paths depart from the root.
Undirected rooted trees also exist as a tree $T$ and a specially designated root $r$.

>Two rooted trees $T_{1}(V_{1},E_{1},r_{1})$ and $T_{2}(V_{2},E_{2},r_{2})$ are called **isomorphic** if there exists an *isomorphism bijection* $f:V_{1}\to V_{2}$ such that $f(r_{1})=r_{2}$.

>In a rooted tree $T$ with root $r$, the level $L(i)$ is the set of vertices at distance $i$ from the root $r$.

---
## Examples

