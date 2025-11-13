#notes 

A **population** is a group that contains all the cases in which the researcher is interested.
A **sample** is a relatively small subset of a population.

It is always interesting to know some features of the population. A numerical feature is called a *parameter*. In reality, we usually get a sample from the population. A numerical-valued function of the sample observation is called a statistic.

Note that every statistic is a **random variable**:
+ Because a sample is only a part of the population, the statistic cannot be expected to give us the *exact* value of the parameter;
+ The observed value of a statistic depends on the sample that happens to be selected;
+ There will be some variability in the value of a statistic over different samples.

We write $\mu$ for the **population** *mean* and $\sigma$ for the *standard deviation*. We write $\bar{x}$ for the **sample** *mean*, $\bar{X}$ for the corresponding random variable, and $s$ for the *standard deviation*.
+ $\mu$ is a parameter;
+ $\bar{x}$ is used to estimate $\mu$;
+ The true proportion of a **population** with a certain train is called $p$. This is a parameter.
+ The proportion of a **sample** with a certain trait is called $\hat{p}$. This is a statistic and is used to estimate $p$.
## Useful Statistics

|                    | Population (Size $N$)                                | Sample (Size $n$)                                     |
| ------------------ | ---------------------------------------------------- | ----------------------------------------------------- |
| Mean               | $\mu=\frac{\sum_{i=1}^{N}x_{i}}{N}$                  | $\bar{x}=\frac{\sum_{i=1}^{n}x_{i}}{n}$               |
| Variance           | $\sigma^{2}=\frac{\sum_{i=1}^{N}(x_{i}-\mu)^{2}}{N}$ | $s^{2}=\frac{\sum_{i=1}^{n}(x_{i}-\bar{x})^{2}}{n-1}$ |
| Standard deviation | $\sigma=\sqrt{ \sigma^{2} }$                         | $s=\sqrt{ s^{2} }$                                    |
Given a sample $\{ x_{1},\dots,x_{n} \}$:
+ The median for $x_{1}\leq x_{2}\leq\dots\leq x_{n}$ is: $$\begin{dcases}x_{\frac{n+1}{2}},\quad&\text{if }n\text{ is odd} \\ \frac{x_{\frac{n}{2}}+x_{\frac{n}{2}+1}}{2},&\text{if }n\text{ is even}\end{dcases}$$
+ The mode is the **most frequently occurring value**;
+ The range is $r=max(x_{i})-min(x_{i})$;
+ **Order Statistics**: Sort from min to max and take the $k$th value.
## Distribution
The **population distribution** of a variable is the distribution of values of the variable amongst all individuals in the population.
The **sampling distribution** of a statistic is the distribution of values taken by the statistic in all possible samples of the same size from the same population. It is a probability distribution based on a large number of samples of size $n$.
### Careful Note
The population distribution describes the individuals that make up the population. A sampling distribution describes how a statistic varies in many samples from the population.
Each sample yields a slightly different statistic. It is usually assumed that the samples are **independent and identically distributed data**, or IID.
The variability of sample statistics is measured by the [[Standard Error]].
