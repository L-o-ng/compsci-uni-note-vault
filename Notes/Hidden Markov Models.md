#notes 

We keep a Markov chain over states $S_{1},\dots,S_{L}$, but now the states are *not observed directly*. At each *step* $i$, being in *state* $s$ causes a **letter** $X_{i}$ to be **emitted** according to a ==state-dependent emission probability==. We observe only the emitted letters $x_{1},\dots,x_{L}$. The underlying state sequence $s_{1},\dots,s_{L}$ is **hidden**.
![[Hidden Markov Models.png]]
## Formal Definition
A HMM is:
+ A set of states $\{ 1,\dots,m \}$ and an alphabet of symbols $\Sigma$;
+ Transition probabilities $m_{st}=P(S_{i+1}=t|S_{i}=s)$ and an artificial start state $s_{0}$;
+ Emission probabilities $e_{s}(b)=P(X_{i}=b|S_{i}=s)$ with $\sum_{b}e_{s}(b)=1$.
## HMM for [[CpG Islands]]
We combine the two chains $M^{-},M^{+}$, with small switching probabilities:
+ Within $+$ states, $x^{+} \to y^{+}:(1-p)\cdot M^{+}(x\to y)$;
+ Within $+$ states, $x^{+}\to y^{-}:p\cdot M^{+}(x\to y)$;
+ Within $-$ states, $x^{-}\to y^{-}:(1-q)\cdot M^{-}(x\to y)$;
+ Within $-$ states, $x^{-}\to y^{+}:q\cdot M^{-}(x\to y)$.

So switching, $+\to -$ or vice versa with probabilities $p,q$ respectively, spread across the four states on the other side.
We set $\frac{1}{p}$ based on the expected length of an island, and $\frac{1}{q}$ on the expected gap between them.
![[Hidden Markov Models-1.png]]
Each state emits the letter without the sign.
$p=0.01$ is the chance of leaving an island at each base, so islands average $\frac{1}{p}=100$ bases.
Similarly, $q=0.001$ is the chance of entering an island, so gaps average 1000 bases.
## Problems
Given an HMM and observed sequence $x$, three questions recur constantly:
1. **Decoding**: what is the most probable state path $\mathbf{s}^{*}$ that produced $\mathbf{x}$?
2. **Evaluation**: what is the total probability $P(\mathbf{x})$ summed over all possible state paths? What is the probability that the output is $\mathbf{x}$?
3. **Posterior State Probabilities**: for each position $i$, what is $P(S_{i}=k|\mathbf{x})$?

