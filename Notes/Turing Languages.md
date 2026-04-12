#notes 

A language $\mathscr{L}$ is **Turing-Recognisable** if there is a TM $\mathscr{M}$ that recognises it: $\mathscr{L}=L(\mathscr{M})$.
A language $\mathscr{L}$ is **Turing-Decidable** if there is a TM $\mathscr{M}$ that accepts every $w \in \mathscr{L}$ and rejects every $w \not\in \mathscr{L}$;

If $\mathscr{M}$ recognises $\mathscr{L}$, it may or may not halt on words **not** in $\mathscr{L}$. However, if $\mathscr{M}$ *decides* $\mathscr{L}$, it **always** halts;

>[!theorem]
>A language $\mathscr{L}$ is Turing-Decidable if and only if both $\mathscr{L}$ and its complement $\text{co-}\mathscr{L}$ are Turing-Recognisable.