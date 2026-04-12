#notes 

This is a special implementation of [[The Ford-Fulkerson Algorithm]]. The [[Augmenting Flow Paths|Augmenting Path]] is always chosen to be a shortest path from $s$ to $t$ using [[Breadth First Search]] in the [[Residual Flow Networks|Residual Network]] $G_{f}$. **regardless** of the flow that fits in this path $P$.
## Runtime
There are in total at most $O(V\cdot E)$ augmentations. This gives a runtime of $O(V\cdot E^{2})$, since each augmentation needs $O(E)$ time. 
## Lemmas
### Monotonicity of the Edmonds-Karp Algorithm
>[!theorem]
>For every vertex $v \in V-\{ s,t \}$, the shortest-path distance $\updelta_{f}(s,t)$ in the residual network $G_{f}$ increases monotonically after each flow augmentation.
### Number of Flow Augmentations
>[!theorem]
>The algorithm performs at most $O(V\cdot E)$ flow augmentations.

