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

