#notes 

See also: [[Map Colouring]], [[Solving Map Colouring]]

---

**Colouring** of a graph is an assignment of colours to its vertices such that any two adjacent vertices get a different colour. 
+ A colouring using at most $k$ colours is a $k$-colouring;
+ The **chromatic number** $\chi_{G}$ of a graph $G$ is the *smallest* integer $k$ for which $G$ has a $k$-colouring.

This problem is [[Problem Hardness|NP-Hard]].
## Special Cases
### 3-Colouring
Can a graph be coloured with 3 colours? In other words, given a graph $G$, is $\chi_{G}\leq 3$?
This is an NP-hard problem also.
### 2-Colouring
Given a graph $G$, can we colour it such that $\chi_{G}\leq 2$? This is efficiently solvable in $\Theta(n)$ time.
## Dealing with NP-Hardness
We can deal with this problem in several ways. These include:
+ **Heuristics**;
+ **Approximation**;
+ Exact Algorithms;
+ Parameterised algorithms;
+ Algorithms on **restricted** inputs.

We can focus on the last approach and exploit the structure of the input to develop faster algorithms. In applications, real inputs may have a special structure. By focusing on the input structure we can understand better which structure makes a problem computationally hard.

Now see [[Cographs and Cotrees]].

---

## Colouring Cographs
Given a cograph $G$, construct its cotree $T_{G}$. This can be done in $O(n+m)$ time.
We follow a **bottom-up** approach, where we only process node $x$ *after* processing its children:
+ **Leaves** - Each leaf represents a single vertex of $G$. The chromatic number of a single vertex graph is 1;
+ **Union-Nodes** - if $x$ is a $+$-node, then $\chi_{G}$ is the **maximum** of the chromatic numbers of the graphs $G_{Y}$, where $y$ is a child of $x$.