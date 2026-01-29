#notes 

Given a flow network $G=(V,E)$ and a flow $f$, an **augmenting path** $P$ is a simple path in the [[Residual Flow Networks|Residual Network]] $G_{f}$.
Recall that each edge $(u,v)$ in $G_{f}$ admits some additional positive flow, obeying the capacity restraint.
The flow *value* can be **increased** by:
$$
c_{f}(P)=\underset{(u,v) \in P}{\min} c_{f}(u,v)
$$
![[Augmenting Paths.png]]
The possible augmentation here is at most 2.
## Lemma
Let $G=(V,E)$ be a flow network, $f$ be a flow in $G$, and let $P$ be an augmenting path in $G_{f}$. We define $f_{P}$ by:
$$
f_{P}(u,v)=d\begin{cases}
c_{f}(P) & \text{if }(u,v)\text{ is on } P  \\
-c_{f}(P) & \text{if }(v,u)\text{ is on }P  \\
0 & \text{otherwise}
\end{cases}
$$
Then $f_{P}$ is a flow in $G_{f}$ with value $|f_{P}|=c_{f}(P)>0$.
### Corollary
Let $G,f,P,f_{P}$ be as above. We define $f'=f+f_{P}$. Then, $f'$ is a flow in $G$ with value $|f'| = |f|+|f_{P}|>|f|$.
