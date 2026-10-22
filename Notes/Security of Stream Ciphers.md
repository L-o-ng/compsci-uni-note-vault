#notes 

We want to be able to prove that if we have a PRG $G$ that is PRG secure, we can build a stream cipher $\cal E$ that is [[Semantic Security|semantically secure]].
> [!theorem] 
> If $G$ is a secure PRG then the stream cipher $\cal E$ constructed as in [[Pseudo-Random Generators and Stream Ciphers]] is semantically secure. In particular, for every adversary $\cal A$ against the semantic security of $\cal E$ there exists an adversary $\cal B$ against the PRG security of $G$ where $\cal B$ is an elementary wrapper around $\cal A$ such that: $$\mathbf{Adv}^{\text{SS}}_{\cal E}({\cal A})\leq 2\mathbf{Adv}^{\text{PRG}}_{G}({\cal B})$$
> 
## Proof
![[Security of Stream Ciphers.png]]
![[Security of Stream Ciphers-1.png]]
![[Security of Stream Ciphers-2.png]]
![[Security of Stream Ciphers-3.png]]
