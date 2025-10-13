#notes 

$w \in L_{1}\circ L_{2}$ only works if there are words $x,y$ such that $w=xy,x \in L_{1},y \in L_{2}$.
We need to run $M_{1}$ on a prefix of $w$ and then to run $M_{2}$ on the rest. We can find the **break-point** by guessing it. This is non-deterministic, and so gives rise to a new type of automaton.
![[Concat NDSA.png]]
## Definition
An **NFA**, or *Non-Deterministic Finite-State Automaton* is a 5-tuple $(Q,\Sigma,\updelta,q_{0},F)$ where:
1. $Q$ is a finite set of states;
2. $\Sigma$ is a finite alphabet;
3. $\updelta:Q\times(\Sigma \cup{\varepsilon})\to \mathscr{P}(Q)$ is the transition function;
4. $q_{0} \in Q$ is the start state;
5. $F \subseteq Q$ is the set of accept states.
## Example
![[NFA Example.png]]
This NFA accepts words containing the sub-words 11 or 101.
There are 3 potential problems:
1. There is more than one next possible state - read 1 in $q_{1}$ for example;
2. $\varepsilon$-transition: in $q_{2}$ and the next symbol is 0;
3. No "next" state (in $q_{3}$ read 0) - the computation hangs.
==Note that $\varepsilon$ is not a letter from the alphabet $\Sigma$. It instead means go straight to that state and postpone reading the next input symbol==.
![[NFA Example Computation Diagram.png]]
Conventionally, a single step in a computation consists of first reading the next input symbol followed by taking any number of $\varepsilon$-transitions.

---

See:
+ [[Computing Non-Deterministic Finite State Automata]]
+ [[Converting an NFA into a DFA]]
+ 