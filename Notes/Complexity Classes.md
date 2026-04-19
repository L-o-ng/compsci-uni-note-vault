#topic 
## Notes
+ [[P]]
+ [[Polynomial Time Reducibility]]
+ [[Certificates and Verifiers]]
+ [[Non-Deterministic Time Complexity]]
+ [[NP]]
+ [[P=NP]]
+ [[NP-Completeness]]
+ [[Ladner's Theorem and NP-Indeterminate Problems]]
+ [[Strong vs Weak NP-Completeness]]
+ [[coNP]]
---
## Optimisation vs Decision Problems
See first [[Optimisation Problems]], [[Decision Problems]]

The problems studied in [[Algorithms and Complexity]] are *optimisation* problems. We found *fast, polynomial* algorithms for most of these problems.
A major *variation* of optimisation problems is the **decision** problem. The answer is *not a value*, but **yes**, or **no**. *Every* optimisation problem has its **decision counterpart** (does the solution exist?).
An optimisation problem has a fast algorithm *if and only if* the corresponding decision problem has a fast algorithm.
### Encoding Decision Problems
The standard way to define a decision problem is to describe a generic *instance* and a yes/no *question* about each instance.
To input problems to a computer, each instance must be **encoded** as a **string** of **symbols** over some alphabet - an encoding scheme.
The scheme must be concise (efficient number representation, no unnecessary information) so that the encoding does not change the nature of the problem.
### Language
+ An **alphabet**, $\Sigma$ is a finite set of symbols;
+ A **string** over $\Sigma$ is a finite *sequence* of symbols from $\Sigma$;
+ A **language** over $\Sigma$ if any set of strings over $\Sigma$.

For a *problem* $\mathsf\Pi$, and an *encoding scheme* $e$ with *alphabet* $\Sigma$, the set of all strings corresponding to instances with answer **yes** is denoted $\mathcal{L}(\mathsf\Pi), e$ and called the **language** associated with $\sf \Pi$ and $e$.
For decision problems, we want to decide whether the given instance belongs to the language.
## Complexity of Problems
![[Problem Classification.png]]
The problems encountered so far have been **tractable**. There are many problems which **cannot** be quickly solved in practice - they are **intractable**.
One *technique* we will use in **problem classification** is showing that one decision problem can be *reduced* into another.


