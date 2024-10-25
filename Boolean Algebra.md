#notes 

There are $2^{2^k}$ possible boolean operations on k inputs.
The trivial operations are $0,1,A,B$, and, $\overline{A},\overline{B}, A\cdot B,A+B$
These form a [[Functionally Complete Sets|functionally complete set]].
## Syntax
Variables, or **literals** are represented by letters.
The **complement** or **inverse** of a *literal* is represented with an over-line.

The AND operation is called the **product**.
+ A **minterm** is a product in which **all** inputs to a function appear once each.
The OR operation is called a **sum** or **implicant**.
+ A **maxterm** is a sum in which **all** inputs to a function appear once each.

For more on **minterms** and **maxterms**, see [[Sum of Products vs Product of Sums]]
## Axioms

|     | Axiom                  |     | Dual Axiom             | Name         |
| --- | ---------------------- | --- | ---------------------- | ------------ |
| A1  | $B=0\text{ if }B\ne 1$ | A1' | $B=1\text{ if }B\ne 0$ | Binary Field |
| A2  | $\overline{0}=1$       | A2' | $\overline{1}=0$       | NOT          |
| A3  | $0\cdot 0=0$           | A3' | $1+1=1$                | AND / OR     |
| A4  | $1\cdot 1=1$           | A4' | $0+0=0$                | AND / OR     |
| A5  | $0\cdot 1=1\cdot 0=0$  | A5' | $1+0=0+1=1$            | AND / OR     |
## Theorems
### One Variable

|     | Theorem                     |     | Dual Theorem       | Name         |
| --- | --------------------------- | --- | ------------------ | ------------ |
| T1  | $B\cdot 1=B$                | T1' | $B+0=B$            | Identity     |
| T2  | $B\cdot 0=0$                | T2' | $B+1=1$            | Null Element |
| T3  | $B\cdot B=B$                | T3' | $B+B=B$            | Idempotency  |
| T4  | $\overline{\overline{B}}=B$ |     | No Dual theorem    | Involution   |
| T5  | $B\cdot \overline{B}=0$     | T5' | $B+\overline{B}=1$ | Complements  |
### Many Variables
![[Many Variable Theorems Boolean Algebra.png]]
## DeMorgan's Theorem
$$\overline{A\cdot B}=\overline{A}+\overline{B}$$
