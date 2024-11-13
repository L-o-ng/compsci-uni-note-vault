#definition 

>A **finite state machine**, or **FSM** $M=\left( \sum,Q,\updelta:Q\times \sum \to Q,q_{0}\in Q,F \right)$, where:
>	$\sum$ is some finite alphabet.
>	$Q$ is a finite set of **states** with **initial state** $q_{0}$ and **final states** $F \subseteq Q$
>	$\updelta:Q\times \sum \to Q$ is a **transition function**.

On input string $a_{1}a_{2}\dots a_{n}$ over $\sum$, $M$ yields a state sequence $q_{0},q_{1}\dots q_{n}$ via:
+ $q_{1}=\updelta(q_{0},a_{1}),q_{2}=\updelta(q_{1},a_{2}),q_{3}=\updelta(q_{2},a_{3},\dots,q_{n}=\updelta(q_{n-1},a_{n})$
+ $a_{1}a_{2}\dots a_{n}$ is **accepted** if $q_{n} \in F$.
$M$ **accepts** a set of strings over $\sum$, namely: 
+ All those string that when input to $M$, the sequence of states ends in a final state.