#topic 
## Notes
+ [[Samples and Populations]]
+ [[Statistical Inference]]
+ [[Weak Law of Large Numbers]]
+ [[Strong Law of Large Numbers]]
+ [[Central Limit Theorem]]
+ [[Standard Error]]
+ [[Hypothesis Testing]]
+ [[Data Plots]]
+ 

# Summary of Sample Distributions

| Statistic                         | Formula                                   | Sample Distribution Mean | Sample Distribution Std        | Central Limit Theorem                                                                                   |
|----------------------------------|--------------------------------------------|---------------------------|--------------------------------|-----------------------------------------------------------------------------------------------------------|
| **Mean** ($\bar{X}$)             | $\bar{x} = \dfrac{\sum_{i=1}^n x_i}{n}$    | $\mu_{\bar{X}} = \mu$     | $\sigma_{\bar{X}} = \dfrac{\sigma}{\sqrt{n}}$ | $\bar{X} \sim N\!\left(\mu,\;\dfrac{\sigma}{\sqrt{n}}\right),\; n > 30$                                  |
| **Proportion** ($\hat{p}$)       | $\hat{p} = \dfrac{\#\text{success}}{n}$    | $\mu_{\hat{p}} = p$       | $\sigma_{\hat{p}} = \sqrt{\dfrac{p(1-p)}{n}}$ | $\hat{p} \sim N\!\left(p,\;\dfrac{p(1-p)}{n}\right)$, with $np > 10$ and $n(1-p) > 10$                   |
| **Variance** ($s^2$)             | $s^2 = \dfrac{\sum_{i=1}^n (x_i - \bar{x})^2}{n-1}$ | Out of scope              | Out of scope                    | Out of scope                                                                                              |
