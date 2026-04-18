#notes 
## Certificates
Every *yes*-instance of such problems has a **short** and **easily checkable** *certificate*:
+ [[Satisfiability of Formulae and Clause-Sets|Satisfiability]] - a satisfying assignment;
+ [[Graph Colouring Problem|k-colourability]] - a proper colouring;
+ [[Hamiltonian Cycles]] - a Hamiltonian cycle;
+ [[The Travelling Salesman Problem]] - a permutation.
## Verifiers
>[!definition]
>An **acceptor** machine $V$ which halts on all inputs is called a **verifier** for a language $\cal L$ if:
>$$\cal L =\{ w | V \text{ accepts }w; c\text{ for some string }c \}$$

The string $c$ is called a **certificate** or *witness* for $w$.
A *verifier* is said to be **polynomial-time** if it is a polynomial-time [[The Turing Machine|TM]] and there is a polynomial $p(x)$ such that for any $w \in L$ there is a certificate $c$ with $|c|\leq p(|w|)$.
All the problems listed above have polynomial-time verifiers.

  