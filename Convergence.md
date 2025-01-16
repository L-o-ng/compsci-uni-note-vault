#notes 

A **finite** series has a finite sum, and the terms can be added in any order.
For an *infinite* series, we define a **partial sum** $S_{K}$ for each $K$ which is the sum of just the first $K$ terms in the series - so $S_{K}$ is a finite series.
Consequently, we have a sequence of partial sums $S_{1},S_{2},\dots$ and the question of whether they tend to a finite limit value.

If this sequence has a limit, we say the infinite series **converges**.
	That is, the limit $\lim_{ K \to \infty }S_{K}$ exists.
	If so, we define the sum of the infinite series to be $S=\lim_{ K \to \infty }S_{K}$
If the series does not converge, it is said to instead **diverge**.
## Condition
A *necessary* condition for convergence of a series $\sum a_{n}$ is that $\lim_{ n \to \infty }a_{n}=0$. If this is not true, the series diverges.
So,
+ Infinite series $\sum_{n=1}^{\infty}a_{n}$ converge *only* if the limit of the terms $a_{n}$ is 0.
+ They can **still diverge** even when the limit of the terms $a_{n}$ is 0.
$$
\Large
\lim_{ K \to \infty } S_{K}=\lim_{ K \to \infty }\sum_{n=1}^{K}a_{n}=\sum_{n=1}^{\infty}a_{n} 
$$
## Examples
### Arithmetic Series
$$
\array{
\text{We have}:&a_{n}=n \implies S_{N}=\sum_{n=1}^{N}n \\
\text{So}&S_{N}=1+2+3+\dots+(N-1)+N \\
\text{And}&S_{N}=N+(N-1)+(N-2)+\dots+2+1 \\
&2S_{N}=(N+1)+(N+1)+\dots+(N+1)=N(N+1)
\text{So}&S_{N}=\frac{1}{2}N(N+1)
}
$$
This clearly does not converge.
### Geometric Series
$$
\array{
\text{We have:}&a_{n}=ax^n, a \ne 0,x \\
\text{Take }n=0,1,\dots&\\
&S_{N}=\sum_{n=0}^{N-1}ax^n=a+ax+ax^2+\dots+ax^{N-1}
}
$$
The partial sums $S_{N}$ of a geometric series have an important explicit expression. Multiplication by $1-x$ yields:
$$
\eqalign{
(1-x)S_{N}&=a(1-x)+ax(1-x)+ax^{2}(1-x)+\dots+ax^{N-1}(1-x) \\
&=(a-ax)+(ax-ax^2)+(ax^2-ax^{3})+\dots+(ax^{N-1}-ax^{N}) \\
&=a-ax^{N}
}
$$
So assuming $x \ne 1$, we obtain $S_{N}=a \frac{(1-x^{N})}{(1-x)}$ - ==an important formula!==
+ If $|x|<1, \lim_{ N \to \infty }x^{N}=0$ and the infinite series converges to the sum: $$S=\sum_{n=0}^{\infty}ax^n=\lim_{ N \to \infty } S_{N}=\lim_{ N \to \infty } a \frac{(1-x^{N})}{(1-x)}=a \frac{1}{1-x}$$
+ For $|x|\geq 1$, the limit of $S_{N}$ does not exist, and the infinite series diverges.
#### Example
$$
\large\sum_{n=n_{0}}^{\infty}x^{n}=\sum_{m=0}^{\infty}x^{n_{0}}x^{m}=x^{n_{0}}\sum_{m=0}^{\infty}x^{m}=x^{n_{0}}\cdot \frac{1}{1-x}=\underbrace{ \frac{x^{n_{0}}}{1-x} }_{ \array{\text{The sum}\\\text{of this series}} }
$$
#### Special Case
Setting $a=1$, we get the ==basic geometric series==: for $|x|<1$:
$$
\frac{1}{1-x}=1+x+x^{2}+\dots
$$
### Harmonic Series
$$
S=\sum_{n=1}^{\infty} \frac{1}{n}
$$
Here the terms are $a_{n}= \frac{1}{n}, n\geq 1$. This has $\lim_{ n \to \infty }a_{n}=0$. but the series still diverges!
#### Proof of Divergence
Some of the first partial sums are:
$$
S_{1}=1,S_{2}=1+\frac{1}{2}=\frac{3}{2},S_{4}=S_{2}+\frac{1}{3}+\frac{1}{4}> \frac{3}{2} + \frac{1}{4} + \frac{1}{4} =2
$$
This leads to the guess that we always have:
$$
S_{2n}\geq \frac{N}{2}+1
$$
This can be proved by [[Proof by Induction|induction]], so the partial sums tend to $\infty$ as $N \to \infty$. The harmonic series is therefore *divergent*.