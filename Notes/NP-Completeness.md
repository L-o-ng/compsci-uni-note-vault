#notes 

>[!abstract]
>![[NP-Completeness 1.png]]
> + Any complexity class can be partitioned into equivalence classes via [[Polynomial Time Reducibility|Polynomial Time Reduction]] - each class contains problems that are reducible to each other.
> + These equivalence classes are partially ordered by reduction.
> + Problems in the **maximal** class are called *complete*. 

**NP-Complete** problems are the hardest problems in $NP$.
They are all *equally* difficult: an efficient solution to one would solve them all at once.
To show that $\cal L$ is $NP$-complete, we must show that **every** language in $NP$ can be reduced to $\cal L$ in polynomial time. This is hard! However, once we have *one* $NP$-complete language $\cal L_{0}$, we can show any other language $\cal L$ is $NP$-complete by showing that $\cal L_{0}\leq L$.
## The First $NP$-Complete Problem
>[!theorem] The Cook-Levin Theorem
>[[SAT-Solving|Satisfiability]] is $NP$-complete

>[!theorem] Corollary
>$P=NP$ if and only if `Satisfiability` is in $P$.
## Proofs
To show that a problem $\sqcap$ is $NP$-complete we just have to perform two steps:
1. Show that $\sqcap$ belongs to $NP$;
2. Find a known $NP$-complete problem $\sqcap'$ and show $\sqcap'\leq\sqcap$.

If we can complete step 2, but not step 1, we say that $\sqcap$ is $NP$-hard.
### Proof Techniques
There are 3 general methods to prove that an $NP$-complete problem $\sqcap'$ is polynomial-time reducible to a problem $\sqcap$:
1. **Restriction** - show that $\sqcap'$ is a sub-problem of $\sqcap$;
2. **Local Replacement** - show that every basic unit in an instance of $\sqcap'$ can be replaced by a different structure in a uniform way to obtain an instance of $\sqcap$;
3. **Component Design** - Show that the constituents of an instance of $\sqcap$ can be used to design components that can be combined to encode instances of $\sqcap'$.
### Proof Examples
#### `Vertex Cover`
>[!question] Vertex Cover
>**Instance**: A graph $G=(V,E)$ and a natural number $k$;
>**Question**: Is there a set $W \subseteq V$ with $|W|\leq k$ such that for each edge $(i,j) \in E$: $$\{ i,j \}\cap W\neq \emptyset$$

This is in $NP$ - the list of vertices in the cover is the certificate.
To show that it is $NP$-complete, we will reduce `Satisfiability`.
>[!proof]
>Given a formula $f$ with $n$ variables and clauses $C_{1},C_{2},\dots,C_{m}$:
> + For each variable $x$, create two adjacent vertices $x^{t},x^{f}$ to represent the literals $x,\neg x$;
> + For each clause $C_{j}$ of size $n_{j}$, create a complete subgraph $G_{j}$ with vertices connected to corresponding literals;
> + Set $k=n+\sum_{j=1}^{m}(n_{j}-1)$.
>
> This can be carried out in polynomial time.
> ![[Vertex Cover Reduction 2.png]]
> ![[Vertex Cover Reduction 3.png]]
> ![[Vertex Cover Reduction 4.png]]
> ![[Vertex Cover Reduction 1.png]]
> ![[Vertex Cover Reduction 5.png]]
> > [!theorem]
> > There exists a truth assignment that satisfies the formula $f$ if and only if there exists a vertex cover of the constructed graph with size at most $k$.
> 
> ($\Rightarrow$):
> 1. At least one of each pair $x^{f},x^{t}$ must be in the cover;
> 2. At least $n_{j}-1$ vertices from each complete graph $G_{j}$ must be in the cover;
> 3. If the formula is satisfiable, the choose the cover by choosing each literal assigned true, plus all but one vertex in each $G_{j}$ (omit a vertex which is connected to a satisfied literal).
>
> ($\Leftarrow$)
> 1. Conversely, if a vertex cover exists, we assign each boolean variable according to whether $x^{t}$ (true) or $x^{f}$ (false) is in $M$;
> 2. By the choice of $k$, there must be exactly one vertex in each clique which is not in $M$. This vertex must be adjacent to a literal-vertex in $M$, and so the clause is satisfied.
> 
> Therefore, since `Satisfiability` is $NP$-complete, it follows that:
> > [!theorem]
> > `Vertex Cover` is $NP$-complete.
#### `Clique`
>[!question] Clique
>**Instance**: A finite graph $G=(V,E)$ and an integer $k$;
>**Question**: Does $G$ have a *clique* of size $k$?

There is a straightforward reduction from `Vertex Cover` to `Clique`: a set of vertices $W$ is a vertex cover in $G$ if and only of $V-W$ is a clique in the complement of $G$.
##### From `Satisfiability`
`Clique` is in $NP$: the list of vertices in the clique is the certificate.
Given a formula $f$ with clauses $C_{1},C_{2},\dots,C_{k}$:
+ For each literal $x$ in clause $C_{j}$, create a vertex;
+ Put an edge between every pair of vertices from distinct clauses, unless they are incompatible (eg, $x,\neg x$).

This can be carried out in *polynomial* time.
The resulting graph has a clique of size $k$ if and only if $f$ is satisfiable.
![[Clique SAT 1.png]]
![[Clique SAT 2.png]]
#### `Hitting Set`
>[!question] Hitting Set
>**Instance**: Collection $C$ of subsets of a set $S$ and a positive integer $k$;
>**Question**: Does $S$ contain a hitting set for $C$ of size $k$ or less? ie: a subset $S' \subseteq S$ with $|S'|\leq k$ such that $S'$ contains at least one element from each subset from $C$.

`Hitting Set` is in $NP$. The subset $S'$ is the certificate.
To show it is $NP$-complete, we restrict it to instances with $|c|=2$ for all $c \in C$; ie, every set $c$ in $C$ has 2 elements. This is equivalent to vertex cover!
#### `3-Satisfiability`
To show that `3-Satisfiability` is $NP$-complete, we reduce `Satisfiability` to `3-Satisfiability`.
>[!proof]
> 1. Replace every clause $$C=x_{1}\lor x_{2}\lor\dots \lor x_{k}$$ with $k>3$ by: $$\small C'=(x_{1}\lor x_{2}\lor y_{1})\land(\neg y_{1}\lor x_{3}\lor y_{2})\land\dots \land(\neg y_{k-3}\lor x_{k-1}\lor x_{k})$$
> 2. $C$ is satisfiable if and only if $C'$ is, since at least at one of the literals other than the $y$s must be true.
#### `Hamiltonian Cycle`
>[!question] Hamiltonian Cycle
>**Instance**: A graph $G=(V,E)$;
>**Question**: Is there a [[Hamiltonian Cycles|Hamiltonian Cycle]] in $G$? That is, a cycle passing through each vertex exactly once?

1. This problem is in $NP$; a Hamiltonian cycle is the certificate;
2. To show completeness, we will reduce  from `3-Satisfiability`. We will use the **component design** method.
##### Encoding
We are given a CNF formula $f$ with clauses $C_{1},\dots,C_{m}$ and variables $x_{1},\dots,x_{n}$. We encode it as a graph such that the graph has a Hamiltonian cycle if and only if the formula is satisfiable. We must therefore encode:
+ Boolean variables;
+ A choice between two values per variable;
+ Consistency: all occurrences of any variable get the same truth value;
+ Constraints on the possible values imposed by clauses.
###### Choice Gadget
![[Choice Gadget.png]]
This *gadget* will allow the Hamiltonian cycle coming through it to pick either the left or right edge, thus communicating the truth value. They are joined to the rest of the graph on the black vertices.
###### Consistency Gadget
![[Consistency Gadget.png]]
This gadget can be traversed by a Hamiltonian cycle in exactly 2 ways: up or down.
We can draw this shorthand with a quick pattern joining 2 lines:
![[Consistency Gadget Shorthand.png]]
###### Constraint Gadget
![[Constraint Gadget.png]]
**Triangles** correspond to *clauses* and their **sides** to *literals*. The edges parallel to the sides will be contained in choice gadgets, communicating truth values to literals in clauses.
##### Using Gadgets
We shall combine these three gadgets such that a *side* of the *triangle* is traversed by a Hamiltonian cycle, avoiding its two black endpoints if and only if the corresponding literal is **true** - at least one literal in each clause must be true.
![[Truth to Multiple Constraints.png]]
##### Properties
+ The **choice** gadget can be traversed in *exactly* two ways;
+ The *internal vertices* of the **consistency** gadget can be traversed in *exactly* two ways, such that exactly one pair of the external black vertices is involved;
	+ Either the black pair on one side;
	+ Or the pair on the other side;
+ Any Hamiltonian cycle traverses at most *two* triangle sides **using** its two black endpoints in the **constraint** gadget:
	+ If the Hamiltonian cycle traverses **one** *side* using the black endpoints:
		+ It must visit the **two** *vertices* of this side, one after the other;
	+ If it traverses **two** *sides*:
		+ It must visit all **three** *vertices* of the triangle;
	+ If it traverses **three** *sides*:
		+ It must visit the same vertex of the triangle twice: impossible for a Hamiltonian cycle!
##### Example
![[Hamiltonian Cycle 3-SAT example.png]]
##### Construction
+ The graph $G$ contains $n$ copies of the **choice** gadget, one for each variable, connected in series;
+ We add the *blue* vertices $1,2$ and the green vertex;
+ $G$ contains $m$ triangles, one for each *clause*, with a side in the triangle identified with each literal in the clause;
+ A side corresponding to literal $x_{i}$ is connected via the **consistency** gadget with the *true* side of the corresponding **choice** gadget; a side corresponding to the literal $\neg x_{i}$ is connected to the *false* side;
+ If an edge of some **choice** gadget is connected with several sides of different triangles then it is divided into several consecutive edges, each corresponding to a side of a triangle. This ensures the same truth value is communicated to all occurrences of a literal;
+ All $3m+2$ blue nodes are connected into a **clique**.
##### Truth Assignment
1. Every Hamiltonian cycle must use the edge between 1 and the green vertex;
2. From there, it can only go up through all the choice gadgets, choosing one side (truth value) in each gadget and traversing the corresponding consistency gadgets on the way;
3. It traverses all the triangles in some order, by avoiding the triangle vertices, and finishes at vertex 2;
4. The cycle determines an assignment of truth values to variables;
5. Every triangle has at least one side which is traversed avoiding its endpoints (otherwise there is no Hamiltonian cycle!), implying that the corresponding literal in the clause is true, so all clauses are satisfied.
###### Drawing the Cycle
1. Start from 1 to the green vertex, and then go through all choice gadgets, each time picking the side corresponding to the truth value of the variable in the assignment;
2. Once this is done, you arrive at vertex 2 at the top of the choice gadget series. Now go through the triangles in an arbitrary order, using the sides corresponding to false literals;
3. By doing so, you will also visit all unvisited vertices in the choice gadgets. Since all blue vertices of the triangles are fully connected, it is possible to visit every vertex exactly once;
4. Once this is done, move and finish at 1. This completes the cycle.
#### `TSP` (Decision)
>[!question] Travelling Salesman Decision Version
>**Instance**: A finite set of cities $\{ c_{1},c_{2},\dots,c_{n} \}$, a positive integer distance $d(i,j)$ between each pair $(c_{i},c_{j})$, and an integer $B$;
>**Question**: Is there a permutation $\pi$ of $\{ c_{1},c_{2},\dots,c_{n} \}$ such that: $$\left( \sum_{i=1}^{n-1} d(\pi(c_{i}),\pi(c_{i+1})) \right)+d(\pi(c_{n}),\pi(c_{1}))\leq B?$$

1. TSP is in $NP$ - a route is the certificate;
2. We shall reduce `Hamiltonian Cycle` to `TSP`
##### Reduction
Given a graph $G=(V,E)$:
+ For each vertex $v$ create a city $c_{v}$;
+ For each pair of distinct $u,v \in V$, set $d(c_{u},c_{v})=1$ if $(u,v) \in E$ and $d(c_{u},c_{v})=2$ otherwise;
+ Set $B=|V|$.

Then:
+ If $G$ has a Hamiltonian cycle then the cycle is a route of cost exactly $B$;
+ If there is a route of cost $B$ then it cannot use pairs with distance 2 and so goes through edges of $G$ and hence is a Hamiltonian cycle.
#### `Graph 3-Colouring`
>[!question] Graph 3-Colouring
>**Instance**: A graph $G=(V,E)$
>**Question**: Is there a colouring of the vertices of $G$ in 3 colours such that adjacent vertices are all a different colour?

1. The problem is in $NP$ - a 3-colouring is the certificate;
2. To show completeness, we will reduce `3-Satisfiability` to `Graph 3-Colouring`.
##### Encoding
We are given a 3CNF formula $f$. We encode it as a graph $G_{f}$ such that the graph has a proper 3-colouring if and only if the formula is satisfiable.
+ Let us call the colours **ground**, **true**, and **false**;
+ We introduce a 3-clique of designated vertices: $v_{g},v_{t},v_{f}$. By symmetry, assume we log that they always coloured their respective colours;
+ For each variable $x$, we introduce two vertices $x_{p},x_{n}$ for $x,\neg x$; and add all edges between $x_{p},x_{n}$ and $v_{g}$. Hence one of $x_{p},x_{n}$ must be **true** and the other **false**. 
![[3-colouring from 3-SAT.png]]
+ For each clause, say $(x\lor \neg y\lor z)$, connect vertices $x_{p},y_{n},z_{p}$ to $v_{t}$ by the above gadget;
+ Check that, in the above gadget, any combination of colours for $x_{p},y_{n},z_{p}$ *except for all false*, can be realised;
+ Verify that a 3-colouring of $G_{f}$ can be translated into a satisfying assignment for $f$, and vice versa.





