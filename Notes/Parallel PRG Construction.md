#notes 

If we know we have a black box PRG, what do we do if we want to generate more random bits?

Suppose we have a black box PRG defined over $({\cal S,R})$ and are confident in generating seeds. We can build $G'$ over $({\cal S}^{n},{\cal R}^{n})$ by running $G$ $n$ times in parallel: $G'(s_{1},\dots,s_{n}):=(G(s_{1}),\dots,G(s_{n}))$. Perhaps unsurprisingly the security of this degrades with the number of parallel calls.

> [!definition] 
> If $G$ is a secure PRG defined over $({\cal S, R})$ then $G'$ constructed as above is also a secure PRG defined over $({\cal S}^{n},{\cal R}^{n})$. In particular, for every adversary $\cal A$ against the PRG security of $G'$, there exists an adversary $\cal B$ against the PRG security of $G$ such that: $$\mathbf{Adv}^{\text{PRG}}_{G'}({\cal A}) \leq n \mathbf{Adv}^{\text{PRG}}_{G}({\cal B})$$
### Proof
![[Combining PRGs.png]]
![[Combining PRGs-1.png]]
![[Combining PRGs-2.png]]
![[Combining PRGs-3.png]]

---

See [[Sequential PRG Construction]].