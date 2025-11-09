#notes 

Let $X$ be a random variable representing the temperature in a room. Here, the probability of a **specific** value is 0. However, the probability of $X$ being in a **range** of values is greater that 0. Such random variables are known as **Continuous Random Variables**.
## Probability Density Functions
In general, a continuous random variable is described by a PDF. It maps a probability of a range of events from the sample space to a function. The PDF of $X$ is denoted by $f_{X}$ or simply $f$.
### Formal Definition
For a continuous random variable $X$, a probability density function is a function $f(x)$ such that:
1. $f(x)\geq 0\text{, for all }x \in \mathbb{R}$;
2. $\int _{-\infty}^{+\infty}f(x) \, dx=1$;
3. $P(a\leq X\leq b)=\int _{a}^{b}f(x) \, dx\text{, for any }a,b \in \mathbb{R}\text{ such that }a\leq b$.

Note that $<\equiv\leq$ here because $P(X=x)=0$.
## Cumulative Distribution Function
This is the same concept as for discrete random variables:
>The CDF of a random variable $X$ is denoted by $F(x):\mathbb{R}\to[0,1]$, where $x \in \mathbb{R}$ and is given by: $$F(x)=P(X \leq x)=\int _{-\infty}^{x}f(t) \, dt $$

As with discrete variables, a continuous CDF has the following properties:
+ $F(x)$ is nondecreasing: if $x\leq y$ then $F(x)\leq F(y)$;
+ $0\leq F(x)\leq 1$, $\lim_{ x \to -\infty }F(x)=0$, $\lim_{ x \to +\infty }F(x)=1$;
+ For $a\leq b$ we have $P(a\leq X\leq b)=F(b)-F(a)$.
## Relationship Between PDF and CDF
If $F(x)$ is the CDF of a continuous random variable, then its derivative is the PDF:
$$
f(x)=F'(x)=\frac{d}{dx}F(x)
$$
Note that if you plot the CDF, the area under the CDF curve will **not** be a probability, unlike for the PDF.
## Mean and Variance
The mean and variance are used to summarise the distribution:
### Mean
The expected value of $X$:
$$
\mu=E(X)=\int _{-\infty}^{+\infty}xf(x) \, dx 
$$
### Variance
The measure of dispersion in the distribution:
$$
\begin{matrix}
\sigma^{2}=V(X)=E[(X-\mu^{2})]=\int _{-\infty}^{+\infty}(x-\mu )^{2}f(x) \, dx  \\
\text{Also }V(X)=E[X^{2}]-\mu^{2}=\int _{-\infty}^{+\infty}x^{2}f(x) \, dx -\mu^{2}
\end{matrix}
$$
The standard deviation of $X$ is $\sigma=\sqrt{ \sigma^{2} }$

---

The mean and variance have the following properties:
Let $X$ be a random variable. Let $a,b \in \mathbb{R}$. Then:
1. $E[aX+b]=aE[X]+b$;
2. $V(aX+b)=a^{2}V(X)$;
3. $\sqrt{ V(aX+b) }=|a|\sqrt{ V(X) }$.

Note that in general:
+ $E[X^{2}]\neq(E[X])^{2}$;
+ $E[\sqrt{ X }]\neq \sqrt{ E[X] }$.
## Functions of Random Variables
Let $X$ be a random variable and $h:\mathbb{R}\to\mathbb{R}$ be an arbitrary function. Then $Y=h(X)$ is also a random variable. This is as for discrete random variables. Therefore, per the [[Law of the Unconscious Statistician]]:
>If $X$ is a continuous random variable and $Y=h(X)$ we will have: $$E(Y)=E(h(X))=\int _{-\infty}^{+\infty}h(x)f(x) \, dx $$
