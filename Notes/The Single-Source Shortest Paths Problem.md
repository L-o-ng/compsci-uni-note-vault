#notes 
## Graphs as Matrices
To give an *adjacency matrix* representation of a graph with edge weights, we use a square matrix and label the rows and columns with the vertices. 
The entry in row $i$, column $j$ is:
+ $w$ if there is an edge of weight $w$ from $i$ to $j$;
+ $0$ if there is no edge.
![[Graph as Adjacency Matrix.png]]
## Shortest Paths
The weight of a **path** from vertices $u$ to $v$ is the sum of the weights of the edges in the path. The *shortest* **path** between $u$ and $v$ is denotes $\updelta(u,v)$. If there is **no** path, then $\updelta(u,v)=\infty$.

If our graph contains a **positive** cycle, then we know it will *not* be contained in a shortest path. We can assume the graphs we consider will have no **negative** cycles, as this will cause $\updelta(u,v)=-\infty$.
## Problem
Our aim is to define an algorithm which finds the shortest path from a specific *source* vertex $s$ to **all** other vertices in the graph. The output should be two **arrays**: $d, \pi$, where for each vertex $v$:
+ $d(v)=\updelta(s,v)$;
+ $\pi(v)$ is the **predecessor** of $v$.

