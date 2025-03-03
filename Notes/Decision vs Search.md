#notes 

Corresponding to any [[Decision Problems]], there are usually [[Search Problems]].
For example:
+ The search problem corresponding to a map or graph 3-colouring problem aims to return a 3-colouring rather than just verify one exists.

>Conversely, there is *always* a decision problem corresponding to a search problem $S=(I,J,R)$:
>	The decision problem has the same set of instances $I$.
>	The yes-instances are those instances $x \in I$ for which there exists some $y \in J$ for which $(x,y)\in R$.