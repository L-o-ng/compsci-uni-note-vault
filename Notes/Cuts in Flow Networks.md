#notes 

A **cut** of a flow network $G=(V,E)$ is a *partition* of $V$ into the sets $S$ and $T=V-S$ such that $s \in S$ and $t \in T$.
If $f$ is a *flow* in $G$ then $f(S,T)$ is the **net flow** across cut $(S,T)$; its capacity is $c(S,T)$.

The net flow across any cut is the **same**.
## Net Flow Lemma
>[!theorem]
>Let $f$ be a flow in a flow network $G$ with source $s$ and sink $t$. Let $(S,T)$ be a cut of $G$. Then the flow across $(S,T)$ is $f(S,T)= |f|$
### Upper Cut Corollary
>[!theorem]
>The value of a flow $f$ in a network $G$ is **upper-bounded** by the *capacity* of any cut $(S,T)$ in $G$.

Therefore, $\text{max-flow}\leq\text{min-cut}$
## Max-Flow Min-Cut Theorem
This theorem improves on the corollary and show **equality**.

If $f$ is a flow in a flow network $G=(V,E)$ with source $s$ and sink $t$, then the following conditions are equivalent:
1. $f$ is a maximum flow in $G$;
2. The residual network $G_{f}$ contains no augmenting path;
3. $|f|=c(S,T)$ for some cut $(S,T)$ of $G$.
![[Max Flow = Min Cut.png]]
---
## Example
![[Network Flow Cuts.png]]
Here we have:
+ **Flow**: $$f(S,T)=f(a,c)+f(b,c)+f(b,d)=12-4+11=19$$
+ **Capacity**: $$c(S,T)=c(a,c)+c(b,d)=12+14=26$$
