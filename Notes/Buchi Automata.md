#notes 

**Buchi Automata** deal with infinite input.
A Buchi automaton accepts $w_{1},w_{2}\dots \in \Sigma^{\omega}$ if there is a sequence of states $r_{0},r_{1},r_{2},\dots \in Q^{\omega}$ satisfying the following conditions:
1. $r_{0}=q_{0}$;
2. $(r_{i},w_{i+1},r_{i+1})\in \Delta$ for every $i,i>0$;
3. There are infinitely many $r_{i}$ in $F$.

See now [[Omega-Regular Languages]]