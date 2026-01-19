#notes 

A language $A$ is **m-Complete** if:
1. $A$ is [[Turing Languages|Turing Recognisable]];
2. For every Turing-Recognisable language $B$: $B\leq A$.

Or informally, if $A$ is m-complete then $A$ is as hard as any other Turing-Recognisable language.
>If $A$ is m-complete, and $A\leq B$, then $B$ is m-complete.
## Completeness of the Halting Language
See first [[The Halting Problem]].
The **halting language** $H$ consists of the words $\langle \mathscr{M} \rangle_\sqcup w$ over some fixed alphabet such that $\mathscr{M}$ terminates on $w$.
>$H$ is m-complete.

>$H_{0}$ is the *diagonal* of $H$: the language $\langle \mathscr{M}\rangle_{\sqcup}\langle \mathscr{M} \rangle$ such that $\mathscr{M}$ terminates on $\langle \mathscr{M} \rangle$.

>$H_{0}$ is m-complete.



