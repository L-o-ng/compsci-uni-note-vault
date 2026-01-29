#notes 

A **Residual Network** consists of edges that can admit *more* flow.
## Formal Definition
Formally, we consider vertices $u$ and $v$. The amount of *additional flow* that we can push from $u$ to $v$ before exceeding the capacity $c(u,v)$ is the **residual capacity** of $(u,v)$:
$$
c_{f}(u,v)=c(u,v)-f(u,v)
$$
When the flow is negative, then the residual capacity is greater than the capacity.
### Interpretation
The flow of $-x$ from $u$ to $v$ implies a flow of $x$ from $v$ to $u$. This can be [[Flow Networks#Cancellation|cancelled]] by pushing $x$ units from $u$ back to $v$. We can now push another $c(u,v)$ from $u$ to $v$. In total, we can push $c_{f}(u,v)=c(u,v)+x>c(u,v)$ from $u$ to $v$.
## Network Induction
Given a flow network $G=(V,E)$ and a flow $f$, the **residual network** of $G$ induced by $f$ is $G_{f}=(V,E_{f})$ with:
$$
E_{f}=\{ (u,v)\in V\times V:c_{f}(u,v)>0 \}
$$
meaning each residual edge can admit flow that is strictly positive.
![[Induced Residual Network.png]]
Note that $|E_{f}|\leq 2|E|$.
### Lemma
Let $G=(V,E)$ be a flow network, $f$ be a flow in $G$, $G_{f}$ be the residual network of $G$ induced by $f$, and let $f'$ be a flow in $G_{f}$. Then the flow sum $f+f'$ with:
$$
(f+f')(u,v)=f(u,v)+f'(u,v)
$$
is a flow in $G$ with value $|f+f'| = |f|+|f'|$.
