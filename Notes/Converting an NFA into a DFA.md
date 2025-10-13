#notes 

At any time there are a number of possible states the NFA computation can be in. As the DFA needs to keep track of all of these, the DFA has states corresponding to subsets of the NFA's state set. The transition function of the DFA can then be defined as shown:
![[Converting an NFA into a DFA.png]]
## Formal Definition
Let $N=(Q,\Sigma,\updelta,q_{0},F)$ be an NFA recognising language $L$. We assume for now that $N$ has no $\varepsilon$-transitions, but will fix that [[#Handling $ varepsilon$-Transitions|later]]. We shall construct a DFA $M=(Q',\Sigma,\updelta',q_{0}',F')$ that recognises the same language $L$ as follows:
1. $Q'=\mathscr{P}(Q)$;
2. For $R \in Q', a \in \Sigma$, let: $$\begin{matrix}&\updelta'(R,a)=\{ q \in Q|q \in \updelta(r,a)\text{ for some }r \in R \} \\ \equiv & \updelta'(R,a)=\cup_{r \in R}\updelta(r,a)\end{matrix}$$
3. $q_{0}'=\{ q_{0} \}$;
4. $F'=\{ R \in Q'|\exists r \in R, r \in F \}$.
### Handling $\varepsilon$-Transitions
For $R \subseteq Q$, or equivalently $R \in Q'$, let:
$$
E(R)=\{ q|q \text{ is reachable from }R\text{ through a number of }\varepsilon\text{-transitions} \}
$$
Note that $R \subseteq E(R)$. We *modify* the construction as follows:
1. $Q'=\mathscr{P}(Q)$;
2. For $R \in Q'$ and $a \in \Sigma$ let $\updelta'(R,a)=\{ q \in Q|q \in E(\updelta(r,a))\text{ for some }r \in R\}$;
	1. Equivalently, $\updelta'(R,a)=\cup_{r \in R}E(\updelta(r,a))$
3. $q_{0}'=E(\{ q_{0} \})$;
4. $F'=\{ R \in Q'|\exists r \in R, r \in F \}$.
## Theorem
We have now proven that
>Every NFA has an *equivalent* DFA.

This has the corollary:
>A language is regular if and only if some NFA recognises it.
## Example
![[NFA to DFA conversion 1.png]]
![[NFA to DFA conversion 2.png]]
The red redundant states can be removed alongside their transitions. Observe that the $\{   \}$ state is absolutely necessary - it correct operations that would freeze in the NFA (observe $b\text{ on }q_{3}$).

