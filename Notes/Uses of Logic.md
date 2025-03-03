#notes 
## Programming Languages
The syntax of a [[Programming Languages|programming language]] determines exactly which combinations of symbols constitute a legitimate program.
### A Logic Example
Intuitively, assignments are of the form:
```
s := x + y
t := z - y
x := 4
```
Programs are sequences of assignments, such as:
```
s := x + y;
x := x - 3;
t := z + z;
z := z + t;
```

We can give *semantics* to out program as follows:
+ Initially, all variables have some given non-negative integer values.
+ We execute the program with the usual definitions of `+` and `-`.

Thus, an input for a given program $\boldsymbol{\rho}$ is a specification $\mathbf{v}$ of a non-negative integer value for every variable of $\boldsymbol{\rho}$.
An input $\mathbf{v}$ can be said to *satisfy* $\boldsymbol{\rho}$ if throughout the execution of $\boldsymbol{\rho}$ with the variables initially valued by $\mathbf{v}$, no variable ever takes a negative value.
## Databases
A [[Databases|database]] is a structured collection of logical records.
A database query language, such as [[Querying with SQL|SQL]] is a language for asking and answering questions of this structured data.
SQL queries, such as `SELECT Group, Genre FROM Music` have expressive power closely related to [[First-Order Logic]].
## Formal Methods
A **formal method** is the use of mathematically-based techniques for the specification and verification of computer systems. Formal methods are used to *prove* programs have certain properties, without *just* relying on testing.
### Model Checking
**Model Checking** refers to a branch of formal methods where a computer system is modelled as some mathematical structure, then a specific property that this system might have is expressed by a formula of some logic.
We then computationally verify as to whether the particular formula is satisfied by the mathematical model. That is, whether the actual computer system has the specific property.
#### Microprocessor Design
All major microprocessor manufacturers use model checking as a part of their design process.
#### Data-Communications Protocol Software
Model checkers have been used as rapid prototyping systems for validating new data-communications/security protocols.
#### Critical Software
NASA uses model checking to look for bugs in code developed by the space program.
#### Operating Systems
Microsoft uses model checking to verify the correct functioning of new windows device drivers.
