#notes 

![[DFA Minimisation.png]]

The goal of DFA minimisation is to find a DFA that recognises the *same* language as the DFA above with as few states as possible. There are finitely many possibilities, but we need to be able to decide whether two given DFAs recognise the same language first.
## Algorithm
We want to find an algorithm that minimises any given DFA. The algorithm simply has two steps:
1. Remove all states not reachable from the start state;
2. Contract a set of states that are *equivalent* into a single state.

Two states, $s,t$ are **equivalent** if any word $w$ which is accepted when starting from $s$ is accepted when starting from $t$ and vice-versa. In other words, there is no word that is accepted when starting from one of the states, but rejected when starting from the other.
### Equivalent and Distinguishable States
>Let a DFA $M=(Q,\Sigma,\updelta,q_{0},F)$ be given and let $\hat{\updelta}:Q\times \Sigma^{*}\to Q$ be defined as: $$\array{\hat{\updelta}(s,\varepsilon)=S \\ \hat{\updelta(s,w_{1}w_{2}\dots w_{n})=\hat{\updelta}(\updelta(s,w_{1}),w_{2}\dots w_{n})}}$$
>for every state $s$ and every word $w_{1}w_{2}\dots w_{n}$.
>**Question**: What is $\{ w \in \Sigma^{*}|\hat{\updelta}(q_{0},w)\in F \}$?
>**Definition**: $$\{ w \in \Sigma^{*}|\hat{\updelta}(s,w)\in F \}=\{ w \in \Sigma^{*}|\hat{\updelta}(t,w)\in F \}$$
>Otherwise, $s,t$ are **distinguishable** - there is a witness word $u$ such that either: $\hat{\updelta}(s,u)\in F,\hat{\updelta}(t,u)\not\in F,\text{ or }\hat{\updelta}(s,u)\not\in F,\hat{\updelta}(t,u)\in F$.
## Team Splitting Algorithm
Think of sets of states as teams of players that pass balls of different colours to represent input symbols via transitions.
+ **Start** - Disqualify the useless players (states that are unreachable from the start state);
+ **Round 0** - Start with 2 teams, one consisting of all the accept states and one consisting of all the non-accept states. Set $i=1$;
+ **Round i** - for every team $S \in \mathscr{P}(Q)$ and every colour $a \in \Sigma$, check if all players from $S$ agree on passing an $a$-ball. If not, split the team $S$ into the maximal sub-teams that agreed; set $i=i+1$; and go to round $i$;
+ **End** - Return the teams as sets of equivalent states.
### Correctness
+ The algorithm terminates:
	+ There cannot be more that $n-1$ splits where $n$ is the number of players.
+ Every two players that are in the same team in the end are equivalent:
	+ Pick any sequence of passes (a word) and prove by induction of its length that it cannot tell the two players apart.
+ Every two players that have been split at some round cannot be equivalent:
	+ Induction on the round number; the inductive step is a proof by contradiction.
## DFA Equivalence and Isomorphism
Given two DFAs $M_{1},M_{2}$, how can we know they recognise the same language?
We can put them **together**, apply the **minimisation** algorithm, as if they were a single automaton, and see whether the 2 start states are equivalent.
>**Corollary**: If $M_{1},M_{2}$ are 2 minimal DFAs that recognise the same language, the minimisation algorithm always produces a bijection between the equivalent states of $M_{1},M_{2}$. We say that they are **isomorphic**.

>**Proof**: Build the bijection starting from the 2 start states.

>**Theorem**: The Team-Splitting algorithm finds the minimal DFA equivalent to the original one.

>Proof. By first arguing that the DFA produced by the algorithm is equivalent to the minimal one, and then observing that the former cannot have unreachable or equivalent states, so it must be isomorphic to the latter.

---
