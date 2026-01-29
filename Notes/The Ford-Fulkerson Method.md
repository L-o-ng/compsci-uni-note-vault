#notes 

The **Ford-Fulkerson** method is an iterative method for solving [[The Maximum Flow Problem]], relating to [[Flow Networks]]:
1. We start with $f(u,v)=0\forall u,v \in V$;
2. At each iteration, we increase the flow value by finding an **augmenting path** - a path from source to sink, along which we can *increase* flow - and then augment flow along this path;
3. We repeat until no augmenting path can be found.

There are three important ideas to this method:
1. [[Residual Flow Networks|Residual Networks]];
2. [[Augmenting Flow Paths|Augmenting Paths]];
3. [[Cuts in Flow Networks|Cuts]]. todo!
## Algorithm
todo!