#notes 

**Robinson's Arithmetic**, or $Q$, is the weakest subsystem of arithmetic for which [[Gödel's Incompleteness Theorems]] hold.
It has a constant zero $0$ and function symbols:
+ $S$ : successor;
+ $+$ : addition;
+ $\times$ : multiplication.

It has no induction. The axioms are as follows:
1. $S(x)\neq0$;
2. $(S(x)=S(y))\to x=y$;
3. $y=0\vee \exists x(S(x)=y)$;
4. $x+0=x$;
5. $x+S(y)=S(x+y)$;
6. $x \times 0 = 0$;
7. $x \times S(y)=x \times y+x$.

