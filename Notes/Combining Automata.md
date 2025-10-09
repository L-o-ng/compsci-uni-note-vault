#notes 

We want to implement an operation on languages by combining the corresponding automata. Given $L_{1}$ recognised by $M_{1}=\{ Q_{1},\Sigma,\updelta_{1},q_{1},F_{1} \}$ and $L_{2}$ recognised by $M_{2}=\{ Q_{2},\Sigma,\updelta_{2},q_{2},F_{2} \}$. We want to combine $M_{1},M_{2}$ into a new automaton $M$ that would recognise $L_{1}\cup L_{2}$.

Naively, we could simulate $M_{1}$ on the input then $M_{2}$ on the same input, and accept if $M_{1} \cup M_{2}$ accept. **This does not work**! After $M_{1}$ has run on the input, the input is exhausted and cannot be rewound to run on $M_{2}$.
## Parallel Combination
Run $M_{1},M_{2}$ in *parallel* by using *pairs* of states. We can define the transition function as below:
![[Combining DSM Transition Function.png]]
Formally, the components of the new automaton $M=(Q,\Sigma,\updelta,q_{0},F)$ are:
1. $Q=Q_{1}\times Q_{2};$
2. $\updelta((s,u),a)=(\updelta_{1}(s,a),\updelta_{2}(u,a))$ for every $s \in Q_{1},u \in Q_{2}, a \in \Sigma$;
3. $q_{0}=(q_{1},q_{2})$;
4. $F=\{ (s,u)\in Q|s \in F_{1} \text{ or } u \in F_{2} \}$.
