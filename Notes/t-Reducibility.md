#notes 
## Oracle Turing Machines
+ An **oracle** for a language $A$ is a black box that takes a word $w$ as input and instantly and correctly replies if $w \in A$;
+ An **Oracle Turing Machine** $\mathscr{M}$, denoted by $\mathscr{M}^{A}$, is a Turing machine that has an additional capability of making calls to an oracle for the language $A$.
## t-Reducibility
>[!theorem]
> + A language $A$ is t-reducible to a language $B$ if $A$ is decidable by some oracle Turing machine $\mathscr{M}^{B}$.
> + If $A\leq_{t}B$ and $B$ is [[Turing Languages|Turing Decidable]], then $A$ is Turing-decidable.

