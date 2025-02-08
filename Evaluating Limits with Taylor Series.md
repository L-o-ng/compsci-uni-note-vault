#notes 

We can use Taylor series to evaluate limits:
$$
\lim_{ x \to a } \frac{f(x)}{g(x)}
$$
where $f,g$ are regular at $a$. We write the functions in their [[Taylor Series]] about $a$:
$$
f(x)=\sum_{n=0}^{\infty} a_{n}(x-a)^{n},\quad g(x)=\sum_{n=0}^{\infty} b_{n}(x-a)^{n}
$$
Suppose the first non-zero coefficients are $a_{N},b_{M}$, so: $$f(x)=a_{N}(x-a)^{N}+\dots,\quad g(x)=b_{M}(x-a)^{M}+\dots$$
Then:
$$
\lim_{ x \to a } \frac{f(x)}{g(x)}=\lim_{ x \to a } \frac{(x-a)^{N}}{(x-a)^{M}}\cdot \frac{a_{N}+a_{N-1} \frac{1}{x-a}+\dots}{b_{M}+b_{M-1} \frac{1}{x-a}+\dots}=\lim_{ x \to a } \frac{a_{N}}{b_{M}}(x-a)^{N-M}
$$
So:
+ If $N>M$ then $\lim_{ x \to a } \frac{f(x)}{g(x)}=0$;
+ If $N < M$ then the limit does not exist;
+ If $N=M$ then $\lim_{ x \to a } \frac{f(x)}{g(x)}= \frac{a_{N}}{b_{N}}=\frac{f^{(N)(a)}}{g^{(N)}(a)}$
The non-trivial limits are the ratio of the first non-zero coefficients in the Taylor series. This is clearly related to evaluating the limits via [[L'Hopital's Rule]], and may be useful where we already know the Taylor series or can obtain it without explicitly evaluating the derivatives.