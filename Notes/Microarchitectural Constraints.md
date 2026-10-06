#notes 

From the mid-1970s until 2004, microarchitecture rode the predictable wave of **transistor miniaturisation**, delivering annual clock frequency increases *without* prohibitive power penalties.
## The Performance Triad
### Iron Law of Performance
$$
\text{Execution Time} = \text{Instructions}\times CPI\times \frac{1}{f}
$$
Performance is a **three-way** balancing act:
+ **Algorithm and Compiler**: influences dynamic instruction count;
+ **Microarchitecture**: determines average CPI/IPC;
+ **Circuit Design/Process Technology**: Sets maximum $f$.
### Latency vs Throughput
+ **Latency**: time required to complete a single task from start to finish;
+ **Throughput**: Total amount of work completed per unit time across all execution units.
### Power and Energy Limits
+ Faster clock frequencies and wider execution engines drive up power consumption: $$P_{\text{total}}=P_{\text{dynamic}}+P_{\text{static}}=\alpha CV^{2}f+l_{leak}V$$
+ Performance gains cannot be evaluated in isolation from **thermal design power** and **energy cost per instruction**;
+ Optimisation targets transition from raw execution speed to energy-delay metrics such as **EDP** - *Energy Delay Product*: $\text{EDP}=\text{Energy}\times\text{Delay}$.

