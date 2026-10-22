#notes 

Biological change is *not* deterministic. A **probabilistic model** reflects this: instead of a score, we can ask questions such as "how *probable* is it that these sequences are related?", or "is an observed similarity *significant* or could it arise by *chance*?".

Consider an ungapped alignment where each position is independent of the others. For each aligned position, there are two competing hypotheses:
+ $R$: the two letters are **random**;
+ $M$: the two letters are **matched**.
## $R$: Unrelated Sequences
Each position is sampled independently from a background letter distribution $q()$:
$$
P(s[1..n],t[1..n]|R)=\prod_{i}q(s[i])q(t[i])
$$
## $M$: Related Sequences
Each aligned pair $(s[i],t[i])$ descended from a common ancestral letter.
Let $p(a,b)$ be the probability that some ancestral letter evolved into this pair:
$$
P(s[1..n]t[1..n]|M)=\prod_{i}p(s[i],t[i])
$$
## Scoring
### Odds Ratio
$$
Q= \frac{P(s,t|M)}{P(s,t|R)}= \prod_{i} \frac{p(s[i],t[i])}{(q(s[i])q(t[i]))}
$$
### Additive Log-Odds
Taking logs of both sides turns the product into a sum: the additive form used by dynamic programming:
$$
\log Q=\sum_{i}\log \frac{p(s[i],t[i])}{(q(s[i])q(t[i]))}
$$
An additive score $\operatorname{sigma(a,b)}=\log[p(a,b) / (q(a)q(b))]$ is precisely a log-odds test between un/related.
## Substitution Matrices in Practice
$q(a)q(b)$ are based on observed frequencies of characters.
In each case, the matrix entries are log-odds scores $\operatorname{sigma(a,b)}=\log[p(a,b) / (q(a)q(b))]$.
### PAM Matrices
Here, $p(a,b)$ are estimated from closely related sequences, extrapolated to a more distant evolutionary time.
### BLOSUM Matrices
$p(a,b)$ are estimated directly from blocks of already aligned, moderately divergent sequences (62% match).
