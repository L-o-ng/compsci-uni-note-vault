#linker 

**SAT-Solving** allows us to encode a problem as a propositional formula so that a solution corresponds to the formula having a satisfying truth assignment. 

It also refers to a method of solving the SAT-Problem - to decide if a propositional formula has a satisfying truth assignment. This is an [[P=NP#NP-Completeness|NP-Complete]] problem, even in CNF.
## Applications
### Map Colouring
Consider the [[Map Colouring]] problem. It is not hard to prove that a graph representation of the map, $G$ can be 3 coloured if a propositional formula $\upvarphi$ describing it has a satisfying truth assignment.
### Sub-SAT Problems
A *clause* is a non-tautological disjunction of literals.
If every clause contains exactly $k$ literals, then we obtain the $k$-SAT problem.
This is polynomial for $k=2$ but NP-complete if $k\geq 3$.

Suppose we further consider formulae where:
1) Every clause contains exactly $k$ distinct literals;
2) Every variable appears in at most $s$ clauses.
This yields the $(k,s)$-SAT problem.
Every instance of $(3,3)$-SAT is satiable, but $(3,4)$-SAT is NP-complete.
### Automated Reasoning
+ Software and hardware verification;
+ AI - planning and constraint satisfaction;
+ Circuit design;
+ Cryptography;
+ Databases;
+ Mathematical theorem proving.
## Notes
+ [[Motivations for SAT-Solving]]
+ [[DIMACS Format]]
+ [[Satisfiability of Formulae and Clause-Sets]]
+ [[List of Defining Clause-Sets]]
+ [[Pure Literals]] - See especially [[Pure Literals#DPLL Algorithm]]
+ 