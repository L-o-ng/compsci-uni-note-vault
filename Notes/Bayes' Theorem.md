#notes 

[[Conditional Probability]] represents the probability of an event given a condition. What if we have event $B$ happen, and we now want to determine the probability of the occurrence of a **condition** $A$? 
**Bayes' Theorem** computes the probability of a condition given an outcome:
$$
P(A|B)=\frac{P(B|A)\times P(A)}{P(B)}
$$
We also call $P(A)$ the **prior** probability, $P(A|B)$ the **posterior** probability, $P(B|A)$ the **likelihood**, and $P(B)$ the **evidence**.
## Application
Suppose $E_{1},E_{2},\dots,E_{n}$ are mutually exclusive events such that:
$$
\cup_{i=1}^{n}E_{i}=S
$$
This means that one of the events **must** occur - we have considered all conditions. Then, if $A$ is any event, Bayes' theorem states:
$$
P(E_{k}|A)=\frac{P(E_{k})\times P(A|E_{k})}{\sum_{j=1}^{n} P(E_{j})P(A|E_{j})}
$$
