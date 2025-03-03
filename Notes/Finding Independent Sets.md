#notes 

We can proceed greedily:
+ choose a vertex of smallest degree and put it in the independent set $I$.
+ Remove it and its neighbours from the graph.
+ Iterate on the remaining graph until there is nothing left, then output $I$.

