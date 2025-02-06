#notes 

We can obtain a bound on the error in the approximation given by a [[Taylor Series]] $f(x)=p_{N,a}(x)$. This error bound is obtained by a careful analysis of a *remainder term*. The precise statement reads as follows:

>If $f(x)$ is differentiable $N+1$ times in a neighbourhood of $a$, $x$ is a point in this neighbourhood, and $f^{(N+1)}$ is continuous between $a$ and $x$, then: $$f(x)=p_{N,a}(x)+R_{N+1,a}(x)$$where$P_{N,a}(x)$ is the $N$-th Taylor polynomial for $f(x)$ around $a$ and $R_{N+1,a}(x)$ is the $N$-th **remainder term**.
## Lagrange Form of a Remainder
The $N$-th remainder term is given by:
$$
R_{N+1,a}(x)=\frac{f^{(N+1)}(\xi)}{(N+1)!}(x-a)^{N+1}
$$
for some value $\xi$ in the interval between $a$ and $x$.
+ This is called the **Lagrange Form** of the remainder.
+ It is reasonable that the remainder term $R_{n+1,a}(x)$ involves $f^{(n+1)}$; if it happened that the function $f(x)$ was a polynomial of degree $n$, $p_{n}(x)$ would be precisely equal to $f(x)$, so $f^{(n+1)}$ and the remainder term would vanish.
+ Since the remainder term involves $(x-a)^{n+1}$, it is smaller for $x$ near $a$, and typically smaller for larger $n$, as long as $|x-a|<1$.
+ We cannot explicitly calculate the remainder term, as it involve some point $\xi \in (a,x)$, and the theorem does not tell us which point to use - $\xi$ depends on $f,n,a,x$. But we may be able to *bound* it: if $|f^{n+1}(\xi)|\leq M$ for all $\xi \in(a,x)$ then: $$R_{n+1,a}(x)\leq \frac{M}{(n+1)!}(x-a)^{n+1}$$
Taylor's theorem lets use use bounds like this to bound the error in a given polynomial approximation to a function, and so allows us to find an approximation of a given accuracy.
## Example
Q: Find a Taylor polynomial approximation to $\cos(0.5)$ accurate to $\pm0.01$.
A:
todo!