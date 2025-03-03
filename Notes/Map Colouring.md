#definition 

See also [[Solving Map Colouring]]

![[Map colouring.png]]
Consider the following:
+ You are given a plane map of regions, each contained within a continuous border.
+ For any pair of regions, either:
	+ They share no part of a border or,
	+ Exactly one point of a border when they do not touch, or
	+ They share a segment of some border. when they do touch.
Can you colour the regions of the map with 3 colours so that if any 2 regions touch, they must be coloured differently?
## Applications
+ scheduling
+ register allocation in compilation
+ radio frequency allocation
## Abstraction
We can use discrete mathematics.
>We can represent an instance of the problem as a graph $G=(V,E)$ where
>	$V$ is a set of **vertices**
>		One for each region.
>	$E$ is a set of **edges**, or a set of pairs of distinct vertices.
>		A pair $(u,v)$ is in $E$ if and only if the region represented by $u$ touches the region represented by $v$.

We can thus solve the problem by deciding if we can 3 colour a graph corresponding to a map:
+ Each vertex of $V$ is coloured red, green, or blue so that any pair of vertices joined by an edge of $E$ are coloured differently.