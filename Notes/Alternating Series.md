**#notes 

We can make a general statement about [[Convergence Tests#Conditional Convergence|conditional convergence]] for an **alternating series**.

An alternating series is a series where the sign of the terms alternate, so $a_{n}=(-1)^{n}|a_{n}|$ for all $n$ or $(-1)^{n+1}|a_{n}|$ for all $n$; for example:
$$
1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\frac{1}{5}-\frac{1}{6}\pm \dots = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}
$$
We can work out the sum of this series. Recall the sum of the [[Calculus on Series#Example - the Logarithmic Series|logarithmic series]] is 
$$
-\sum_{k=1}^{\infty} \frac{x^{k}}{k}=\ln(1-x)
$$
for $|x|<1$.

This identity is also true for the choice $x=-1$ in which case we obtain:
$$
\sum_{n=1}^{\infty} \frac{(-1)^{n}}{n}=\ln(1-(-1))=\ln 2
$$
Consequently, we have:
$$
1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\frac{1}{5}-\frac{1}{6}\pm \dots = -\ln 2 = \ln \frac{1}{2}
$$
Since the harmonic series is divergent, this alternating series is conditionally convergent.
For example, by the [[Riemann Rearrangement Theorem]], we can arrange the terms in such a way that the sum of the series converges to $\pi$ or $e$ or in fact any real number.
## The Alternating Sign Test
An alternating series $\sum a_{n}$ converges conditionally if:
+ $|a_{n}|\to 0\text{ as }n \to \infty$;
+ $|a_{n+1}|<|a_{n}|\forall n>N$ for some $N$.
### Example
$\sum_{n=1}^{\infty}(-1)^{n} \frac{1}{n}$ is conditionally convergent. This follows from the alternating sign test, since $|a_{n}|= \frac{1}{n} \to 0\text{ as }n \to \infty$ and:
$$
|a_{n+1}|= \frac{1}{n+1} < \frac{1}{n}= |a_{n}|, n \in \Bbb{N}
$$
Note that you **must** fulfil both conditions for the test to apply.

