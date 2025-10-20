#notes 
## Steps
1. Convert the given $n$-state DFA into an equivalent $n+2$-state [[Generalised Non-Deterministic Finite Automata|GNFA]];
2. **Eliminate** all internal states of the GNFA one by one, while **preserving** the language recognised by the automaton;
3. We are done, as $L(R)=L(DFA)$.
## Internal State Elimination
We first pick an internal state $r$ for elimination.
For every two states $u,v,\space u \neq r\neq v$, we do the following:
![[Internal State Elimination.png]]
NB: We have to consider the case $u \equiv v$ as well.
