#notes 
## Definition
Let $G$ be a group under $\bullet_{G}$ and $H$ another group under $\bullet_{H}$. Then a function $\phi:G \to H$ is called a homomorphism if $$
\phi(x \bullet_{G}y)=\phi(x)\bullet_{H}\phi(y)
$$If $G,H$ have the same [[Finite Cyclic Groups#Order|Order]] and there is a unique map for each element ([[Functions in Computer Science#Injections, Surjections, and Bijections|Bijection]]), it is called an **isomorphism**.
2 groups which have an *isomorphism* are called **isomorphic** - it means they are essentially the same group.
### Example
Rotations of an $n$-gon are isomorphic to a [[Finite Cyclic Groups#Modulo Arithmetic|Cyclic Group of Order n]], $\Bbb{Z}_{n}$.
The map from $G=\{ Id,r,r^{2},\dots,r^{n-1} \}\text{ to }H=\{ 0,1,2,\dots,n-1\operatorname{mod}n \}$ is simply $\phi(r^k)=k$. Then, $$\array{\phi(r^kr^{k^\backprime})=\phi(r^{k+k^\backprime})=k+k^\backprime=\phi(r^k)+\phi(r^{k^\backprime})\\ \text{So }\phi(a \bullet_{G}b)=\phi(a)\bullet_{H}\phi(b)}$$
