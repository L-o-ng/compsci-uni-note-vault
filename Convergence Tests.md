#notes 

Often we want to decide whether a series converges without knowing the exact value of its sum. Since negative terms introduce cancellation, we assume all terms in the following series that $a_{n}\geq 0$.
## Tests
Note that the convergence/divergence of a series does **not** change when we change **finitely** many terms.
### Comparison Test
Given $S=\sum a_{n}$, find some other series $T=\sum b_{n}$ whose convergence/divergence is known to compare it to.
+ If $T$ converges and $a_{n}\leq b_{n}\forall n>k$ for some $k$ then $S$ converges.
+ If $T$ diverges and $a_{n}\geq b_{n}\forall n>k$ for some $k$ then $S$ diverges.
#### Example
Consider $S=\sum \frac{2^{n}+5}{3^{n+1}}$. We can compare it to the convergent geometric series $T=\sum\left( \frac{2}{3} \right)^{n}$. We have $a_{n}<b_{n},n>1$ since for $n \in \Bbb{N}$:
$$
\frac{2^{n}+5}{3^{n+1}}< \frac{2^{n}}{3^{n}}\iff 2^{n}+5<3\cdot 2^{n}\iff 5<2^{n+1}\iff n\geq 2
$$
So we have $S$ converges by comparison to a geometric series.
### Quotient Test
Given $S=\sum a_{n}$, take some $T=\sum b_{n}$ and consider $\rho=\lim_{ n \to \infty } \frac{a_{n}}{b_{n}}$ if it exists.
+ If $\rho$ is finite and non-zero, then $S,T$ either both converge or both diverge.
+ If $\rho=0$ and $T$ converges, then $S$ also converges.
+ If $\rho=0$ and $S$ diverges, then $T$ also diverges.
+ If $\rho$ does not exist then the test is inconclusive.
#### Example
Consider $S=\sum \frac{2^{n}+5}{3^{n+1}}$. Compare it to $T=\sum\left( \frac{2}{3} \right)^{n}$:
$$
\rho=\lim_{ n \to \infty } \frac{2^{n}+5}{3^{n+1}}\left( \frac{3}{2} \right)^{n}=\frac{1}{3}
$$
So we know both $S$ and $T$ converge or diverge. We know that $T$ converges, so $S$ is convergent also by the quotient test.
### Ratio Test
Consider $\rho=\lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}}$, if it exists.
+ If $\rho<1$ then $S$ converges.
+ If $\rho >1$ then $S$ diverges.
+ If $\rho=1$, or the limit does not exist, then the test is inconclusive.
#### Examples
##### Example 1
Consider $S=\sum \frac{2^{n}+5}{3^{n+1}}$. Then $\rho=\frac{2}{3}$ so $S$ converges by the ratio test.
##### Example 2
Consider $S=\sum_{n=0}^{\infty} \frac{n^{2}}{2^{n}}$. Then:
$$
\Large
\eqalign{
\frac{a_{n+1}}{a_{n}}&= \frac{\frac{(n+1)^{2}}{2^{n+1}}}{\frac{n^{2}}{2^{n}}} \\
&= \frac{1}{2} \frac{(n+1)^{2}}{n^{2}} \\
&= \frac{1}{2} \left( 1+\frac{1}{n} \right)^{2} \to \frac{1}{2} \text{ as } n \to \infty
}
$$
### Cauchy's Root Test
Consider $\rho=\lim_{ n \to \infty } a_{n}^{1/n}$, if it exists.
+ If $\rho<1$ then $S$ converges.
+ If $\rho>1$ then $S$ diverges.
+ If $\rho=1$ or the limit does not exist then the test is inconclusive.
#### Example
Consider $S=\sum_{n=1}^{\infty} \frac{2n}{3^{n}}$. The $n$-th root of the $n$-th term is:
$$
\left( \frac{2n}{3^{n}} \right)^{1/n}=\frac{(2n)^{1/n}}{3}
$$
So we need to compute $\lim_{ n \to \infty } \frac{(2n)^{1/n}}{3}$.
Taking the logarithm of the numerator, we have:
$$
\ln((2n)^{1/n})=\frac{\ln(2n)}{n}
$$
By [[L'Hopital's Rule]]:
$$
\lim_{ n \to \infty } \frac{\ln(2n)}{n}=\lim_{ n \to \infty } \frac{\frac{2}{2n}}{1}=0
$$
Exponentiating both sides, we obtain $\lim_{ n \to \infty }((2n)^{1/n}=e^{0}=1$, so:
$$
\lim_{ n \to \infty } \frac{(2n)^{1/n}}{3}=\frac{1}{3}<1
$$
So $S$ converges by the root test.
### Integral Test
Suppose we can find a *decreasing* positive function $f:f(n)=a_{n}$. Then $\sum_{n=1}^{\infty}a_{n}$ converges if and only if:
$$
\lim_{ N \to \infty } \int_{1}^{N} f(x)dx \space \text{exists}
$$
The idea it that the finite integral is a good approximation of the partial sums of the series, so if the limit of the integral exists, then the implication is that the series converges.
An important note is to ==explicitly verify that the function is decreasing before applying the test==.
#### Examples
##### Example 1
For $S=\sum_{n=1}^{\infty} \frac{1}{n^{q}},q>0$ we can take $f(x)=\frac{1}{x^{q}}$, which is decreasing in $x$. Here, $S$ is the harmonic series in the case $q=1$, which is known to be divergent. So, we can assume that $q \neq 1$. In this case, we have:
$$
\eqalign{
\int_{1}^{N}f(x)dx &= \int_{1}^{N} \frac{dx}{x^{q}} \\
&= \left[ \frac{1}{-q+1}x^{-q+1} \right]_{1}^{N} \\
&= \frac{1}{1-q}\left( \frac{1}{N^{q-1}}-1 \right)
}
$$
So:
+ If $q>1$ then we get $\lim_{ N \to \infty } \frac{1}{N^{q-1}}=0$, so $\lim_{ N \to \infty }\int_{1}^{N}f(x)dx = \frac{1}{q-1}$ so the series $S$ converges by the integral test.
+ If $q<1$ then $\lim_{ N \to \infty } \frac{1}{N^{q-1}}=\infty$ and the integrals have no limit as $N \to \infty$ so the series $S$ diverges by the integral test.
##### Further Examples
![[Integral Test for Convergence Further Examples.png]]
