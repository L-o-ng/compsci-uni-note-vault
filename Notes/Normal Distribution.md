#notes 

The sum of many independent random variables almost always looks similar to a **bell curve**. This bell-shaped curve can have different centres and spreads depending on $\mu,\sigma^{2}$.

A random variable $X$ is said to have a normal distribution with mean $\mu (-\infty < \mu < +\infty)$ and variance $\sigma^2$ ($\sigma > 0$), written as $X \sim \mathcal{N}(\mu, \sigma^2)$.

The probability density function (PDF) is:
$$
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}
$$

Expected value and variance:
$$
E(X) = \mu \quad\text{and}\quad Var(X) = \sigma^2
$$

Derivations:
$$
E(X) = \int_{-\infty}^{+\infty} 
x \cdot \frac{1}{\sigma \sqrt{2\pi}} 
e^{-\frac{1}{2}\left(\frac{x - \mu}{\sigma}\right)^2} \, dx
$$
$$
Var(X) = 
\left( \int_{-\infty}^{+\infty} 
x^2 \cdot \frac{1}{\sigma \sqrt{2\pi}} 
e^{-\frac{1}{2}\left(\frac{x - \mu}{\sigma}\right)^2} \, dx \right)
- \mu^2
$$
## Usefulness
The relationship between the sum of many independent random variables and the normal distribution is called the [[Central Limit Theorem]].
## The Empirical Rule
No matter what $\mu$ and $\sigma$ are:
+ The area between $\mu - \sigma$ and $\mu + \sigma$ is about **68%**;
+ The area between $\mu - 2\sigma$ and $\mu + 2\sigma$ is about **95%**;
+ The area between $\mu - 3\sigma$ and $\mu + 3\sigma$ is about **99.7%**;
+ Almost all values fall within **3 standard deviations**.
Because of the **symmetry**, you can conclude other proportions. This is known as the **Empirical Rule**.
### Tail Symmetry
Because the curve is symmetric and the total area under it is 1, you can easily determine the area under the curve in the tails.
## Standard Normal Distribution
The **Standard Normal Distribution** is a special case of the normal distribution with the following definition:
>A random variable $Z$ with PDF as follows is called a standard normal random variable: $$f(z)=\frac{1}{\sqrt{ 2\pi }}e^{ -\frac{z^{2}}{2} }$$This is a normal random variable with parameters $\mu=0,\sigma^{2}=1$. The corresponding CDF is denoted as: $$\Phi(z)=P(Z\leq z)$$
### Conversion
All normal distributions can be converted into the SND $Z$ by subtracting the mean and dividing by the standard deviation:
$$
Z=\frac{X-\mu}{\sigma}
$$
This is called a $z$-score or $Z$-score. It tells you how many standard deviations the value of $X$ is above/below the mean.
### Uses
+ $z$-scores make it easier to compare scores from distributions with different scales.
+ They allow us to determine the relationship between one score and the rest of the sores using one table for **all** normal distributions.
### $Z$-Table
A $Z$-table is used to find probabilities associated with the SND. There are 3 types:
+ **Cumulative**: Gives the proportion of the population that is left/below the $z$-score;
+ **Complementary Cumulative**: Gives the proportion of the population right/above the $z$-score;
+ **Cumulative from Mean**\; Gives the proportion of the population to the left of the $z$-score to the mean only.

Values in a table are for $z>0$ as the SND PDF $f$ for $\Phi$ is symmetric around 0, so $f(-z)=f(z), \Phi(z)=1-\Phi(-z)$.
## Normal Approximation to the Binomial
With a binomial distribution where $n$ is large and $p \approx 0.5$, then the distribution tends to look like a normal distribution:
$$
X \sim Bin(n,p)\implies P(X\leq x)\approx \Phi\left( \frac{x-np}{\sqrt{ npq }} \right)
$$
The approximation is good for $np>5,n(1-p)>5$.
NB: You must use **Continuity Correction**: Change $P(X\leq x)$ to $P(X\leq x\pm 0.5)$ before using the normal approximation, using whichever sign is appropriate.
## Normal Approximation to the Poisson
If $X$ is a [[Special Discrete Distributions#Poisson Distribution|Poisson Random Variable]] with $E(X)=\lambda$ and $V(X)=\lambda$ then:
$$
X \sim Poisson(\lambda)\implies P(X\leq x)\approx \Phi\left( \frac{x-\lambda}{\sqrt{ \lambda }} \right)
$$
The same **continuity correction** should also be applied. This approximation is sound for $\lambda>5$.

