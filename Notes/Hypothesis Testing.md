#notes 
## Structure of a Hypothesis Test
### Null and Alternative Hypotheses
- **Null hypothesis** $H_0$:  
  Statement of “no effect”, “no difference”, or “status quo”.  
  Usually involves an equality, e.g. $H_0: \mu = \mu_0$ or $H_0: p = p_0$.
- **Alternative hypothesis** $H_1$ (or $H_a$):  
  Statement representing a change or effect, e.g. $H_1: \mu \neq \mu_0$, $H_1: \mu > \mu_0$, or $H_1: \mu < \mu_0$.
### Test Statistic
- A **test statistic** is a value computed from the sample used to decide about $H_0$.
- It is obtained by converting the sample statistic to a standardized score, **assuming $H_0$ is true**.
- Generic structure: $$\text{test statistic} = \frac{\text{(sample estimate)} - \text{(hypothesized value)}}{\text{(standard error under }H_0\text{)}}$$
### Significance Level
- **Significance level** $\alpha$:
  - Probability of making a **Type I error** (rejecting $H_0$ when $H_0$ is true).
  - Common choices: $0.10$, $0.05$, $0.01$.
---
## Z-Tests (Normal Distribution, $\sigma$ Known or Large $n$)
### Test Statistic for a Population Proportion
- Hypotheses involve $p$, e.g. $H_0: p = p_0$.
- Sample proportion: $\hat{p} = \dfrac{x}{n}$.
- Under $H_0$ and for large $n$, use:$$
  z = \frac{\hat{p} - p_0}{\sqrt{\dfrac{p_0(1 - p_0)}{n}}}$$
### Test Statistic for a Population Mean (Known $\sigma$)
- Hypotheses involve $\mu$, e.g. $H_0: \mu = \mu_0$.
- Sample mean: $\bar{x}$.
- Population standard deviation $\sigma$ is assumed known, or $n$ is large so a $z$-approximation is used:$$
  z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}
  $$
---
## Rejection Criteria and Critical Regions
### Tails and Critical Regions
- A **critical region** is the set of test statistic values leading to **rejection** of $H_0$.
- **Tails** of the distribution are the extreme regions bounded by **critical values**.
### Two-Tailed Test
- Used for “not equal” alternatives, e.g. $H_1: \mu \neq \mu_0$.
- $\alpha$ is split equally between both tails.
- Reject $H_0$ if:$$
  |z| > z_{\alpha/2}
  $$
### Right-Tailed Test
- Used for “greater than” alternatives, e.g. $H_1: \mu > \mu_0$.
- Entire $\alpha$ is placed in the **right** tail.
- Reject $H_0$ if:$$
  z > z_\alpha
  $$
### Left-Tailed Test
- Used for “less than” alternatives, e.g. $H_1: \mu < \mu_0$.
- Entire $\alpha$ is placed in the **left** tail.
- Reject $H_0$ if:$$
  z < -z_\alpha
  $$
---
## p-Values
### Definition
- The **p-value** is:
  - The probability, **assuming $H_0$ is true**, of obtaining a test statistic **at least as extreme** as the observed one (in the direction of $H_1$).
### Decision Rule Using p-Values
- **Reject** $H_0$ if $p\text{-value} \le \alpha$.
- **Fail to reject** $H_0$ if $p\text{-value} > \alpha$.
### General Procedure (Normal / Large $n$)
1. State $H_0$ and $H_1$.
2. Choose $\alpha$.
3. Compute the test statistic (e.g. $z$).
4. Compute the p-value based on the test type (one- or two-tailed).
5. Compare p-value to $\alpha$ and make a decision.
6. Write a conclusion in context.
---
## Testing a Mean with Unknown $\sigma$: t-Tests
### Student t-Distribution
- Used when testing hypotheses about $\mu$ with:
  - Unknown population standard deviation $\sigma$.
  - Sample standard deviation $s$.
  - Typically small or moderate $n$.
- Degrees of freedom: $df = n - 1$.
### Properties of the t-Distribution
- Depends on $df$: each sample size gives a different $t$-distribution.
- Symmetric and bell-shaped like the standard normal distribution.
- Mean is $0$.
- Standard deviation is **greater than 1**, reflecting extra variability from estimating $\sigma$.
- As $n$ increases, the $t$-distribution approaches the standard normal distribution.
### Test Statistic for Mean with Unknown $\sigma$
- Hypotheses involve $\mu$ with unknown $\sigma$:$$
  t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}, \quad df = n - 1
  $$
---
## Conclusions in Hypothesis Testing
### Standard Forms of Conclusion
- After performing the test:
  - **Reject $H_0$**: There is sufficient sample evidence (at the chosen $\alpha$) to support $H_1$.
  - **Fail to reject $H_0$**: There is **not** sufficient sample evidence to support $H_1$.
### “Accept” vs “Fail to Reject”
- Prefer **“fail to reject $H_0$”** rather than “accept $H_0$”.
- Rationale:
  - We rarely prove $H_0$ is true.
  - We only show evidence is not strong enough to discard $H_0$.
---
## Errors in Hypothesis Testing
### Type I Error
- **Definition**: Rejecting $H_0$ when $H_0$ is actually true.
- Probability:$$
  \alpha = P(\text{Type I error}) = P(\text{Reject } H_0 \mid H_0 \text{ true})
  $$
### Type II Error
- **Definition**: Failing to reject $H_0$ when $H_0$ is actually false.
- Probability:$$
  \beta = P(\text{Type II error}) = P(\text{Fail to reject } H_0 \mid H_1 \text{ true})
  $$
### Power of a Test
- **Power**:$$
  \text{Power} = 1 - \beta = P(\text{Reject } H_0 \mid H_1 \text{ true})
  $$
- Interpretation: Probability that the test correctly detects a false $H_0$ (supports a true alternative).
---
## Controlling Type I and Type II Errors
- For **fixed $\alpha$**, increasing the **sample size $n$** generally:
  - Decreases $\beta$.
  - Increases the **power** of the test.
- For **fixed $n$**:
  - Decreasing $\alpha$ (being more conservative) **increases** $\beta$.
  - Increasing $\alpha$ (being more willing to reject) **decreases** $\beta$.
- To **decrease both $\alpha$ and $\beta$**, increase the sample size $n$.
