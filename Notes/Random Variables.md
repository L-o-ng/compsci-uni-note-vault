#notes 
## Random Variables
A **random variable**, or *stochastic* variable, is a function that assigns a number to each outcome in the sample space of a random experiment. It is usually denoted by a capital letter like $X,Y$. We say that $X$ is a *discrete* random variable if $X$ can take:
+ Only a finite number $k$ of different values $x_{1},\dots,x_{n}$;
+ An infinite sequence of different values $x_{1},x_{2},\dots$ which can be distinguished from each other.

In simple words, a random variable $X$ is discrete if it has countably many values.

## Probability Distributions
The **probability distribution** of a random variable $X$ describes the probabilities associated with each possible outcome of $X$.
Let $X$ be a discrete random variable, with possible values $x_{1},x_{2},\dots,x_{n}$. Then, these values are associated with probabilities given by $P(X=x_{k})=f(x_{k}),\space k=1,2,\dots,n$
This function $f$ is known as the **probability mass function**.
### Probability Mass Function
The value of this function is a probability. Thus, a PMF has these characteristics:
1. $f(x_{K})\geq 0$;
2. $\sum_{k=1}^{n}f(x_{k})=1$.
#### Definition
For a discrete random variable $X$ with possible values of $x_{1},x_{2},\dots$ the PMF is a function $f:\{ x_{1},x_{2},\dots \}\to[0,1]$ satisfying 3 properties:
1. $f(x_{i})\geq 0$;
2. $\sum_{k=1}^{\infty}f(x_{i})=1$;
3. $P(X=x_{i})=f(x_{i})$.
#### Computing a PMF 
1. Collect all possible outcomes for which $X=x$;
2. Add their probabilities;
3. Repeat for all $x$.
### Cumulative Distribution Function
The **Cumulative Distribution Function**, or just *distribution function*, for a random variable $X$ is defined as
$$
F(x)=P(X \leq x)=\sum_{x_{i}\leq x}P(X=x_{i})=\sum_{x_{i}\leq x}f(x_{i}),\text{ where }x \in \mathbb{R},\space F:\mathbb{R}\to[0,1]  
$$
For discrete variables, we use the PMF more than the CDF.
The CDF $F$ has some interesting properties:
+ $F(x)$ is nondecreasing - if $x \leq y$ then $F(x)\leq F(y)$;
+ $0\leq F(x)\leq 1 (\lim_{ x \to -\infty }F(x);\lim_{ x \to +\infty }F(x)=1)$
### PMF vs CDF
All the information contained in the PMF is also contained in the CDF. However, the CDF is properly defined for any random variable/real number, and not only for the values $X$ can take like the PMF.
## Mean and Variance
These 2 quantities are used often to summarise a probability distribution.
+ **Mean** - the centre of the distribution: $$\mu=E(X)=\sum_{x}xf(x)$$
+ **Variance** - the measure of dispersion in a distribution.
	+ Variance of $X$: $$\sigma^{2}=V(X)=E[(x-\mu)^{2}]=\Sigma_{x}(x-\mu)^{2}f(x)=\Sigma_{x}x^{2}f(x)-\mu^{2}$$
	+ The standard deviation of $X$ is $\sigma=\sqrt{ \sigma^{2} }$
### Two Laws
1. Functions of random variables are also random variables;
2. The law of the unconscious statistician:
	1. Let $X$ be a random variable with PMF $f$ and $h:\mathbb{R} \to \mathbb{R}$ be an arbitrary function; then $Y=h(x)$ is also a random variable. If $X$ is discrete and takes values $\{ x_{1},x_{2},\dots \}$ then:$$E[Y]=E[h(X)]=\sum_{i}h(x_{i})f(x_{i})$$
### Transformed Random Variables
The two laws draw the following conclusion:
>One can perform arithmetic operations with random variables to get new ones, and the expectation and variance can be computed from them.

Some properties include:
+ $E(aX+b)=aE(X)+b$;
+ $E[h(x)]=\sum_{x}h(x)f(x)$;
+ $V(aX+b)=a^{2}V(X)$;
+ $V(X)=E(X^{2})-[E(X)]^{2}$.
Note that $E[X^{2}]\neq(E[X])^{2}\text{ or }E[\sqrt{ X }]\neq \sqrt{ E[X] }$.
$E[X^{2}]$ is called the **second moment**. Similarly, $E[X]$ is called the **first moment**.
The variance is also called the **central second moment**.
## Independence of Random Variables
The concept of [[Dependent Events|independence]] extends naturally to random variables.
Let $X,Y$ be two random variables. These are said to be independent if, for any sets $A,B$ we have:
$$
P(\{ X \in A \}\cap \{ Y \in B \})\equiv P(X \in A,Y \in B)=P(X \in A)P(Y \in B)
$$
For independent random variables only, we have:
$$
V(X_{1}+X_{2}+\dots+X_{n})=V(X_{1})+V(X_{2})+\dots+V(X_{n})
$$
This does **not** hold in general if the random variables are dependent.
### Linearity of Expectation
$$
E(X_{1}+X_{2}+\dots+X_{n})=E(X_{1})+E(X_{2})+\dots+E(X_{n})
$$

This holds *always*, no matter whether the random variables are independent or not.