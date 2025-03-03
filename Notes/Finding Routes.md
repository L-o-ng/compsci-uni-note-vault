#definition 

Consider the following problem:
+ You are given a map and 2 towns.
Can you find a route from the start town to the end town, avoiding all motorways?

## Abstraction
We can abstract an instance as:
+ A graph $G=(V,E)$ where
	+ vertices correspond to towns,
	+ An edge $(u,v)$ corresponds to a route from town $u$ to town $v$ avoiding any other town.
+ And a list of edges corresponding to the direct motorway routes.
+ Plus the start and end towns.
