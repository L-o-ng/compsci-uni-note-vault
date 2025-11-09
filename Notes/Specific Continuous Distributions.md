#notes 
## Continuous Uniform Distribution
Here, all samples in a range have the same probability. Let $X$ be a continuous random variable with density function:
$$
f(x)=\begin{dcases}
\frac{1}{b-a},&\text{if }a\leq x\leq b \\
0,&\text{otherwise}
\end{dcases}
$$
Then, $X$ is said to be a continuous uniform random variable with range $[a,b]$.
## Exponential Distribution
Much like the [[Special Discrete Distributions#Discrete Geometric Distribution]] which had the memoryless property, the exponential distribution is a similar concept. It is often used to model the **time** elapsing between events. It has a parameter $\lambda$ called the **rate parameter**, which is the average number of events occurring in a period of one time unit.

A random variable $X$ is called an exponential random variable with parameter $\lambda>0$, denoted by $X \sim Exp(\lambda)$, when the PDF is:
$$
f(x)=\begin{dcases}
\lambda e^{ -\lambda x },&\text{if }x\geq 0 \\
0,&\text{otherwise}
\end{dcases}\quad F(x)=\begin{dcases}
1-e^{ -\lambda x },&\text{if }x\geq 0 \\
0,&\text{otherwise}
\end{dcases}
$$
### Mean and Variance
Let $X \sim Exp(\lambda)$. We obtain:
+ $E(X)=\frac{1}{\lambda}$;
+ $V(X)=\frac{1}{\lambda^{2}}$.
### Memoryless Property
The exponential distribution is the only continuous distribution with the memoryless property. This means for any $t_{1},t_{2}\geq 0$:
$$
P(X>t_{1}+t_{2}|X>t_{1})=P(X>t_{2})
$$
If $X$ denotes the time until a certain event happens, and if we have already waited $t_{1}$ for the event, then the probability that we must wait $t_{2}$ more time does not depend on the value of $t_{1}$.
### Poisson Processes
There is an interesting property of the distribution of the time $X$ until the next event happens in a [[Special Discrete Distributions#Poisson Distribution|Poisson]] Process:
+ In a Poisson process, the number of times an event happens in an interval follows a Poisson distribution with mean $\lambda t$, where $t$ denoted the length of the interval.
+ To determine the distribution of the interarrival time $X$, let $N(t)$ be the number of events happening in the interval $[0,t]$: $$\begin{matrix}N(t)\sim Poisson(\lambda t)\implies P(N(t)=k)=e^{ -\lambda t } \frac{(\lambda t)^{k}}{k!} \\ P(X\leq t)=(P(N(t))>0)=1-P(N(t)=0)\\ =1-e^{-\lambda t}\text{ - the CDF of the exp. dist.!}\end{matrix}$$
+ So $X$ is an exponential random variable with parameter $\lambda$.

--- 

See also [[The Normal Distribution]]
