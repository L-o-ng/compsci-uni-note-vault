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


