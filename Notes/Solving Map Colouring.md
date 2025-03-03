#notes 

## Kuratowski's Theorem
Not all graphs correspond to planar maps. This makes the map colouring problem slightly easier.
## Solving the Problem
Our graphs may be very large, so we need an algorithm!
The problem shifts to:
+ Can we develop a procedure so that:
	+ If the answer is yes, then the graph can be 3-coloured; but
	+ If the answer is no, then there is still a possibility that the graph can be 3-coloured (a **false-negative**)

Our procedure should be easy to apply with as few false negatives as possible.
### Greedy Algorithms for 4-colouring
Our algorithms works through the vertices in order choosing the "lowest" colour available.
It answers yes if we get a 4-colouring, and no otherwise.
![[Greedy colouring.png]]
This run produced a 5-colouring, so we get "no".
#### Vertex Ordering
![[5 colour crown graph.png]]
![[3 colour crown graph.png]]
![[2 colour crown graph.png]]
For *every* graph, there *always* exists an ordering of the vertices so that greedily colouring the vertices yields an optimal result.
So, returning to the original graph, 
### Optimally Colouring the Graph of America
Suppose we have a vertex $v$, with **degree** less than 4.
+ No matter how the rest of the graph is coloured, we can always extend the colouring by colouring $v$ with a colour that is unused on its neighbours.
+ So, the original graph can be 4-coloured if and only if the graph with $v$ and its incident edges removed can be 4-coloured.
+ We can keep going like this to repeatedly simplify the graph.
+ 