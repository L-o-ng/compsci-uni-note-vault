#notes 
## Discrete Uniform Distribution
The simplest discrete random variable.
Assumes only a finite number of possible values, each with equal probability.
A random variable $X$ has discrete uniform distribution if each of the $n$ values in its range $x_{1},x_{2},\dots x_{n}$ has equal probability:
>Suppose random variable $X$ has uniform distribution. The PMF of $X$ is given by $(X \textasciitilde \operatorname{Uni}(n))$:$$P(X=k)=f(k)=\frac{1}{n}$$

Alternatively, suppose $X$ is a discrete uniform random variable on the consecutive integers $a,a+1,a+2,\dots,b, a\leq b$. Then: 
$$
\begin{matrix}
\mu=E[X]=\frac{b+a}{2} \\
\sigma^{2}=\operatorname{Var}(x)=\frac{(b-a+1)^{2}-1}{12}
\end{matrix}
$$
## Bernoulli Distribution
The most **commonly** appearing discrete distributions are associated with *Bernoulli trials*. In a random experiment, if each outcome only consists of 2 possibilities, it is considered a Bernoulli trial.
+ If there are more that 2 possibilities, it is called a multinomial trial.

In a Bernoulli trial, let the possible events in each outcome be denoted by $A,B$. Then $A \cap B=\emptyset,A \cup B=S$. Now let $A$ be *success* and $B$ *failure*. Let the probability of $A$ be $p$. Now:
$$
P(A)=p,P(B)=P(\bar{A})=1-P(A)=1-p=q
$$
Let $X$ be a random variable taking only 2 possible values $\{ 0,1 \}$. Let $p=P(X=1)$. Now $X$ is said to be a **Bernoulli random variable** with *parameter* $p$:
$$
\small
\begin{align}
\text{Let }X \sim Ber(p),\text{ then:}& \\
&\eqalign{
E[X]&=0\times P(X=0)+1\times P(X=1)=p  \\
E[X^{2}]&=0^{2}\times P(X=0)+1^{2}\times P(X=1)=p  \\
V(X)&= E[X^{2}]-(E[X])^{2}=p-p^{2}=p(1-p)
}
\end{align}
$$
So we have:
$$
\begin{matrix}
E[X]=p  \\
V(X)=p(1-p)=pq
\end{matrix}
$$
## Discrete Binomial Distribution
Consider a random experiment consisting of $n \in \mathbb{N}$ **independent** Bernoulli trials. If the probability of *success* for each trial is $p,0\leq p\leq 1$, and it is **constant**, then:
>The random variable $X$ that equals the number of trials that result in a success is a **Binomial Random Variable** with parameters $n,p$. The PMF of $X$ is given by $(X \sim Bin(n,p))\space$: $$P(X=k)=f(k)=(^{n}_{k})p^{k}(1-p)^{n-k},k=0,1,\dots,n$$

We can calculate the mean and variance of $X$ directly using the PMF; however, there is an easier way:
A binomial random variable is $n$ independent repetitions of a Bernoulli variable:
$$
X=X_{1}+X_{2}+\dots+X_{n}
$$
So we can calculate:
$$
\small
\begin{align}
E[X]&=E[X_{1}+X_{2}+\dots+X_{n}]=E[X_{1}]+E[X_{2}]+\dots+E[X_{n}] \\
V(X)&=V(X_{1}+X_{2}+\dots +X_{n})=V(X_{1})+V(X_{2})+\dots+V(X_{n})
\end{align}
$$
So we have:
$$
\begin{align}
E[X]&=np  \\
V(X)&=np(1-p)
\end{align} 
$$
## Discrete Geometric Distribution
Consider a series of independent Bernoulli trials with constant probability of success $p$. Let the random variable $X$ denote the number of trials until the **first** success. Then:
>$X$ is called a **Geometric Random Variable** with *parameter* $p$, such that $(X \sim Geom(p))\space$: $$\begin{matrix}P(X=k)=f(k)=p(1-p)^{k-1},k=1,2,\dots\\ E[X]=\frac{1}{p}\\ V(X)=\frac{1-p}{p^{2}}\end{matrix}$$
### Memoryless Property
The geometric distribution has no memory of the past. If you have waited $k$ trials already without seeing a success, you must wait $m$ more trials to get success with probability: 
$$
p(1-p)^{m-1}:P(X=k+m|X>k)=P(X=m)
$$
This distribution is the only discrete distribution satisfying this property. This means that for objects for which there is no *wear* during normal operation, the geometric distribution is a good model.
## Negative Binomial Distribution
We can generalise the idea behind the geometric distribution - instead of waiting for the first success, we wait until $r$ successes.
>Consider a series of independent Bernoulli trials with constant success probability $p$. Let the random variable $X$ denote the number of trials until $r \in \mathbb{N}$ successes are obtained. Then, $X$ is called a **negative binomial random variable** with parameters $p,r$, and $(X \sim NegBin(r,p))\space$: $$\small\begin{matrix}P(X=k)=f(k)=\begin{dcases}0, &\text{if }k<r \\ \begin{pmatrix}k-1 \\ r - 1\end{pmatrix}p^{r}(1-p)^{k-r},&\text{if }k\geq r \end{dcases}\space \text{where }k \in \mathbb{N}\\ E[X]=\frac{r}{p}\\ V(X)=r \frac{1-p}{p^{2}}\end{matrix}$$
## Poisson Distribution
A **Poisson Random Variable** has a distribution that shows *how many times* an event is likely to happen within a specific period of time.
>$X$ is called a **Poisson random variable** with parameter $\lambda>0$. It is the number of events in a *Poisson process*, $(X \sim Poisson(\lambda))\space$: $$\begin{matrix}P(X=k)=f(k)=\frac{e^{ -\lambda }\lambda^{k}}{k!},k=0,1,2,\dots\\ E[X]=\lambda\\ V(X)=\lambda\end{matrix}$$
### Derivation
Suppose you want to model the **number of customers** entering a store over the period of one day. Let's make 2 assumptions:
+ The customers behave **independently** from one-another;
+ The *expected* number of customers per unit time is a **constant** (for example, $\lambda=12$ means 12 customers per day on average).
![[Poisson 1.png]]
Let us now break the day into 4 hour intervals. The day is now divided into 6 pieces $n=6$, so the expected number of customers for each individual is $\frac{\lambda}{n}=\frac{12}{6}=2$:
![[Poisson 2.png]]
If the intervals were extremely small - like 1 minute - then the number of customers is either 0 or 1 with very high probability. We can set $n=1440$, so our expected number of customers per interval is $\frac{\lambda}{n}=\frac{12}{1440}\approx 0.008$.
![[Poisson 3.png]]
Now the number of customers in each interval is approximately an independent Bernoulli random variable with $p=\frac{\lambda}{n}$.
Now we look at getting $k$ arrivals in a $Bin(n,p)$ where $n \to \infty$. In this case, the probability of a single event will be $p=\frac{\lambda}{n}$:
$$
\small
\begin{matrix}
P(X=k)=P\left( Bin\left( n,\frac{\lambda}{n} \right)=k \right),\text{ where }n \to \infty \\
P(X=k)=\lim_{ n \to \infty } P\left( Bin\left( n,\frac{\lambda}{n} \right)=k \right)=\lim_{ n \to \infty } \frac{n!}{k!(n-k)!}\left( \frac{\lambda}{n} \right)^{k}\left( 1-\frac{\lambda}{n} \right)^{n-k} \\ =\underbrace{\lim_{ n \to \infty } \frac{n}{n}\frac{n-1}{n}\dots \frac{n-k+1}{n}}_{=1}\left( \frac{\lambda^{k}}{k!} \right)\underbrace{\left( 1-\frac{\lambda}{n} \right)^{n}}_{\Tiny{\begin{matrix}\lim_{ n \to \infty } \left( 1-\frac{\lambda}{n} \right)^{n/\lambda}=\frac{1}{e} \\ \implies\text{ converges to }e^{-\lambda}\end{matrix}}}\underbrace{\left( 1-\frac{\lambda}{n} \right)^{-k}}_{=1}
\end{matrix}
$$
### Remarks
+ We can take $Y \sim Bin(n,p)$ with large $n$, small $p$ such that $np \approx \lambda$. Then $Y$ is approximately $Poisson(\lambda)$ distributed. This means we can use a Poisson distribution to **approximate** the binomial distribution.
+ The interarrival times of a Poisson process have a continuous exponential distribution with mean $\frac{1}{\lambda}$.

