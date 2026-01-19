#notes 

We consider functions on the set of natural numbers $\mathbb{N}$.
The **initial functions** are:
1. The *successor*: $s(x)=x+1$;
2. The *zero*: $n(x)=0$;
3. The *projections*: $u_{i}^{n}(x_{1},x_{2},\dots,x_{n})=x_{i}\forall n \in \mathbb{N},1\leq i\leq n$.

A function is called **primitive recursive** if it can be obtained from the *initial functions* by a finite number of applications of **composition** and **primitive recursion**:
+ Let $f$ be a function of $k$ variables and $g_{1},g_{2},\dots,g_{k}$ be functions of $n$ variables. The function $h$ of $n$ variables is obtained from $f$ and $g_{1},g_{2},\dots,g_{k}$ by *composition* if: $$\tiny h(x_{1},x_{2},\dots,x_{n})\overset{\text{def}}{=}f(g_{1}(x_{1},x_{2},\dots,x_{n}),g_{2}(x_{1},x_{2},\dots,x_{n}),\dots,g_{k}(x_{1},x_{2},\dots,x_{n}))$$
+ Let $f,g$ be total functions of $n$ variables and $n+2$ variables respectively. The function $h$ of $n+1$ variables is obtained from $f,g$ by primitive recursion if: $$\begin{align}h(x_{1},x_{2},\dots,x_{n},0)&\overset{\text{def}}{=}f(x_{1},x_{2},\dots,x_{n}) \\ h(x_{1},x_{2},\dots,x_{n},t+1)&\overset{\text{def}}{=}g(t,h(x_{1},x_{2},\dots,x_{n},t),x_{1},x_{2},\dots,x_{n})\end{align}$$
The functions below are all primitive recursive:
+ Addition;
+ Subtraction;
+ Multiplication;
+ Integral Division;
+ Exponentiation;
+ Integral Logarithm;
+ $n$-th Prime Number;
+ $i$-th digit in base $b$ expansion.

