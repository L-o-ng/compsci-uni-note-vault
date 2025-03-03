#linker 

Whereas the fundamental building block in [[Propositional Logic]] is the propositional variable, within first-order logic, it is the *predicate*.
A *predicate symbol*, or *relation symbol*, is just a symbol with an associated arity: $P$ might be defined as a predicate symbol of arity $r$.
So, given a predicate symbol $P$ or arity $r$ and some variables $x_{1},x_{2},\dots,x_{r}$ the formula:
$$
P(x_{1},x_{2},\dots,x_{r})
$$
is an atomic formula of first-order logic.
In order to know whether this atomic formula is *true* or *false*, we need to be given an $r$-ary relation $P'$ over some domain $D$, say, and values $v_{1},v_{2},\dots,v_{r}$ from $D$ for $x_{1},x_{2},\dots,x_{r}$.
## An Example
Suppose $T$ is a ternary relation symbol. Then: 
$$
T(x,y,z)
$$
is an *atomic formula*.

Now, let $T'$ be the following ternary relation on $\Bbb{N}$:
$$
\{ (u,v,w) : u,v,w \in \Bbb{N},u=2v,w \text{ is even} \}
$$
and consider the *interpretation* (*model*) of $T(x,y,z)$ in $T'$ with $x=6,y=3$. This is *true*.

>In this case we write $(T',x=6,y=3) \vDash T(x,y,z)$, or sometimes $(\Bbb{N},T', x=6,y=3)\vDash T(x,y,z)$.

We can read $\vDash$ as "models".
## Notes
+ [[Building First-Order Formulae]]
+ [[More Complicated First-Order Formulae]]
+ 
