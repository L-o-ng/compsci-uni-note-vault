#notes 
## Representations
### Adjacency Lists
To give an adjacency list representation of a graph, for each vertex $v$, list all of the vertices adjacent to $v$.
### Adjacency Matrices
To give an adjacency matrix representation of a graph, create a square matrix $A$ and label the rows and columns with the vertices. The entry $a_{ij}$ (row $i$, column $j$) is 1 if vertex $j$ is adjacent to vertex $i$ and 0 if not.
### Edge Array
A graph can also be stored as an array containing all its edges.
## Comparison
For an undirected graph with $n$ nodes and $m$ edges:

|             | Space | Initialise | Copy | Insert | List adj. vertices | Search edge                |
| ----------- | ----- | ---------- | ---- | ------ | ------------------ | -------------------------- |
| Edge Array  | $m$     | $1$          | $m$    | $1$      | $m$                  | $m$                          |
| Adj. Matrix | $n^2$   | $n^2$        | $n^2$  | $1$      | $n$                  | $1$                          |
| Adj. List   | $n+m$   | $n$          | $m$    | $1$      | $n$                  | $\operatorname{deg}(u)=O(n)$ |
