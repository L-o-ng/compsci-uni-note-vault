#topic 
## Notes
+ [[Viterbi's Algorithm]]
+ [[The Forward Algorithm]]
+ [[The Backward Algorithm]]
+ [[The Joined Algorithm]]

---

Viterbi's Algorithm finds the single most probable hidden state path in $O(m^{2}l)$ time. The forward algorithm computes $p(x)$, the backward with forward gives posterior state probabilities.

All three algorithms assume the [[Hidden Markov Models]] parameters $M,E$ were already known.

These algorithms are useful for gene finding, detecting [[CpG Islands]], and profiling [[Hidden Markov Models]]. 