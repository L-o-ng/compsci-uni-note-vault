#linker 

A search problem has in common for each instance:
+ There are numerous acceptable solutions and one of these should be returned, or
+ There is no acceptable solution, and this should be signalled.
## Formal Definition
>A search problem $S$ consists of:
>	A set of instances $I$.
>	A set of solutions $J$.
>	A **binary search relation** $R \subseteq I \times J$

So in order to solve a search problem for any instance $x \in I$ we need to:
+ Find a solution $y \in J$ such that $(x,y) \in R$ if there is one.
+ Answer no if there is no solution $y$ for which $(x,y)\in R$
Sometimes our search problem might be such that for every $x \in I$ there is exactly one $y \in J$ such that $(x,y)\in R$.
## Questions
+ [[Finding Routes]]
+ 