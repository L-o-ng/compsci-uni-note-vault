#topic 

Optimisation problems have in common:
+ A set of instances,
+ corresponding to any of which is a set of potential solutions,
+ such that each solution has a value measuring its quality.
+ The aim is to return the best solution.
## Formal Definition
>An optimisation problem $O$ is defined as follows:
>	There is a set of instances $I$.
>	For every instance $x \in I$, there is a set of *feasible* solutions $f(x)$.
>	For every instance $x \in I$ and for every $y \in f(x)$ there is a value $v(x,y)\in \underbrace{\mathbf{N}}_{\text{\{0,1,2,...\}}}$ giving the measure of the feasible solution $y$ for the instance $x$.
>	There is a **goal** which is either *min* or *max* denoting whether the problem is a **minimisation** or a **maximisation** problem.

To solve an optimisation problem, given $x \in I$,
+ We need to find a feasible solution of maximum/minimum measure, as appropriate.
There may be:
+ No feasible solutions for an instance, or
+ For a maximisation problem, feasible solutions are of increasingly large measure.
In which case this should be signalled.
## Questions
+ [[The Travelling Salesman Problem]]
+ [[Sports Day]]
+ 