#notes 

**Statistical Inference** is the process of using information from a sample to draw conclusions about a wider population.
We want to be able to know the probability distribution of a population. In many cases, we do not know the true form of a probability distribution. We may know some aspects only.
## Types of Inference
### Inequalities and Bounds
**Inequalities and Bounds** still allow us to say something about the distribution if we know some aspects. This may be imprecise compared to the true distribution, however.
+ [[Markov's Inequality]]
+ [[Chebyshev's Inequality]]
### Point Estimator
A **point estimator** draws inference about a population by estimating the value of an unknown parameter using a single value or point.
![[Point estimation.png]]
#### Bias and Variance
Let $\hat{\theta}$ be an estimator of parameter $\theta$. The *bias* of the estimator is defined as:
$$
b(\hat{\theta})=E(\hat{\theta})-\theta
$$
An *unbiased* estimator satisfies $b(\hat{\theta})=0$. For instance, the sample mean is an unbiased estimator of $\mu$, as $E(\bar{X})=\mu$ so $E(\bar{X})-\mu=0$.
The **variance** of the estimator measures the divergence from the estimator mean:
$$
V(\hat{\theta})=E[((\hat{\theta})-E(\hat{\theta}))^{2}]
$$
### Interval Estimator
Any estimator has some variability which we can quantify with an interval estimation. An **interval estimator** draws inferences about a population by estimating the value of an unknown parameter using an interval.
#### Confidence Intervals
$$
\tiny\text{Point Estimate}\pm\text{Measure of how confident we want to be}\times\text{Standard Error}
$$
Where:
+ Point Estimate: The value of the statistic in the sample;
+ Confidence Measure: From a Z/T-table, depending on the sampling distribution

This gives a plausible range of values for a population parameter. It quantifies the precision of an estimate, which is useful when sampling variability is high. A 95% confidence interval should include the true effect 95% of the time.
##### Computing the Confidence Interval
Based on the [[Central Limit Theorem]], the point estimate will likely have a [[Normal Distribution]]. We can use the characteristics of the plot here:
$$
\operatorname{point estimate}(\hat{\theta})\pm(z)\times(\sigma)
$$
Depending on the confidence interval we want to have, the value of $z$ changes.
$$
P\!\left( \hat{\theta} - |z_{\alpha/2}| \times s.e 
\;\le\; \theta \;\le\;
\hat{\theta} + |z_{\alpha/2}| \times s.e \right)
= 1 - \alpha
$$
We write this as $z_{\frac{\alpha}{2}}$ where $\alpha=1-\text{confidence value}$. $Z \sim N(0,1)$.
For example, if we want a 95% confidence interval, then $0.95=1-\alpha \implies \alpha=0.05$. Looking at the Z-table, the z score where the area under the curve is 2.5%, we have $z=-1.96$.
$$
z_{\frac{0.05}{2}}=z_{0.025}=-1.96
$$
## Distribution of Sample Mean
Suppose that $\bar{X}$ is the mean of a sample of size $n$ drawn from a large population with mean $\mu$ and a standard deviation $\sigma$. Then, the sampling distribution of $\bar{X}$ has mean $\mu$ and standard deviation $\frac{\sigma}{\sqrt{ n }}$.
$$
\begin{align}
E(\bar{X})&=E\left( \frac{X_{1}+X_{2}+\dots+X_{n}}{n} \right)=\mu \\
V(\bar{X})&=V\left(\frac{X_{1}+X_{2}+\dots+X_{n}}{n} \right)=\frac{\sigma^{2}}{n}
\end{align}
$$
When sampling is done from [[Normal Distribution]], then $\bar{X}$ also has a normal distribution.