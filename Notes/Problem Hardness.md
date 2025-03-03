#notes 

Throughout, a "problem" refers to [[Decision Problems]], unless stated otherwise

---

Algorithms should provide:
+ Answers on inputs of a reasonably large size.
+ Answers reasonably quickly.
We can use [[Big-Omega Notation]] as an immediate lower bound on any algorithmic solution.
	So, any algorithm of $O(n)$ is efficient, but $O(n)$ is too stringent a condition for efficiency: sorting is $\Omega(n\log n)$.
## Definitions
>A problem is **efficiently solvable**, or **tractable**, if it can be solved by an algorithm of time-complexity $O(n^k)$ for some $k$, that is, in **polynomial time**.

>The **complexity class** of efficiently solvable problems is denoted **P** - polynomial time.

There are 2 valid objections: 
+ What about the hidden constants? How can you say a problem is tractable if the constants could be huge?
+ What about an algorithm of say, $O(n^{200})$? It is polynomial, but even on $n=100$, $100^{200}$ is still gigantic.
## Inefficient Problems
Many problems we would like to be efficiently solvable don't *appear* to be:
+ Decision version of [[The Travelling Salesman Problem]].
+ Decision version of the [[Map Colouring]] problem.
+ Decision version of the [[Finding Independent Sets]] problem.
### A Common Property
Do these problems have a common property?
Consider the TSP:
+ **Witness** - a *possible* tour.
+ **Check** - is the tour a legitimate tour of length at most $b$? $O(n)$.
Or graph colouring:
+ **Witness** - a *possible* $b$-colouring.
+ **Check** - is the $b$-colouring proper? $O(n^2)$.
Or independent sets:
+ **Witness** - a set of $b$ vertices.
+ **Check** - is the set an independent set? $O(n^2)$.
## Efficiently Checkable
>A decision problem is **efficiently checkable** if:
>	given a polynomial **witness** that some instance is a yes-instance, we can **check** in polynomial time whether the witness is indeed a witness.

Or, alternatively,
+ We are allowed to "guess" within a polynomial time algorithm to solve the problem, where we execute one thread for each possible guess:
	+ We have *acceptance* when there is at least one accepting thread.
+ Such an algorithm is called **non-deterministic**.
So we can also define efficiently checkable as solvable by a polynomial time non-deterministic algorithm.

