#notes 

A **DFA**, or *Deterministic Finite-State Automaton* is a 5-tuple of $Q,\Sigma,\updelta,q_{0},F$ where:
+ $Q$ is a finite set of **states**;
+ $\Sigma$ is a finite **alphabet**;
+ $\updelta:Q\times \Sigma \to Q$ is the **transition function**;
+ $q_{0}\in Q$ is the **start state**;
+ $F \subseteq Q$ is the set of **accept states**.
## Designing a DFA
Designing finite-state automata is a creative process, similar to programming. There are no recipes, but looking at many [[#Examples]] helps.



See also: [[Finite State Machine]]
## Examples
### Example 1: Formal Definition Example
### Example 2: Accepts strings ending in 1
### Example 3: Accepts strings ending in 0
### Example 4: Accepts strings starting and ending with the same symbol.
### Example 5: Counts modulo 3
todo! fix mermaid