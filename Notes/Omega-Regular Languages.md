#notes 

An $\omega$-regular language is built upon [[Regular Languages]] using the following operations:
1. $A \cup B$ where both $A,B$ are $\omega$-regular;
2. $AB$ where $A$ is regular and $B$ is $\omega$-regular;
3. $A^{\omega}$ which is $\{ a_{1}\dots|a_{i}\in A \}$ - an infinite sequence of words from $A$, where $A$ is regular and does not contain the empty word.

>**Theorem**: An $\omega$-language is $\omega$-regular if and only if some non-deterministic Buchi Automaton recognises it.
>**Proof**: Denote by $L_{pq}$ the regular language that takes us from state $p$ to state $q$. Observe that a Buchi Automaton recognises precisely the language $\cup_{q \in F}A_{q_{0}q}A^{\omega}_{qq}$, or in words: first reach an accepting state and then revisit it infinitely often.

>The class of $\omega$-regular languages is closed under intersection and complementation.
## Examples
For $\Sigma$ being $\{ 0,1 \}$:
+ $L_{1}=\{ a \in \Sigma^{\omega}|a\text{ contains infinitely many 0s} \}$;
+ $L_{2}=\{ a \in \Sigma^{\omega}|a\text{ contains finitely many 1s} \}$;

For $\Sigma$ being $\{ 0,1,2 \}$:
+ $\{ a \in \Sigma^{\omega}|a\text{ contains infinitely many 1s and 2s but finitely many 0s} \}$;
+ $\{ a \in \Sigma^{\omega}|\text{In }a\text{, after every occurence of 1, there is an occurence of 2} \};$
+ $\{ a \in \Sigma^{\omega}|\text{In }a\text{, there are an even number of 0s between any two occurences of 1} \}$.
## Limits of Regular Languages
Let $A$ be a regular language. The limit of $A$, $\lim A$ is the language: $$\{ a \in \Sigma^{\omega}|a\text{ has infinitely many prefixes in }A \}$$
>An $\omega$-language is a limit of a regular language if and only if some deterministic Buchi automaton recognises it.

For example, $L_{1}$ from above is a limit of a regular language (namely $\{ 0,1\}^{*}0$), but $L_{2}$ is not.
### Buchi Automata That Cannot Be Made Deterministic
>$L_{2}$ cannot be recognised by a deterministic Buchi automaton.

**Proof**:
Assume that $L_{2}$ can be recognised by some deterministic Buchi automaton $\mathscr{M}$. We will construct a word accepted by $\mathscr{M}$ that contains infinitely many 1s and thus does not belong to $L_{2}$.
1. $0^{\omega}\in L_{2}$ must be accepted by $\mathscr{M}$ so there is some finite prefix $0^{n_{1}}$ that leads into an accepting state $p_{1}$;
2. $0^{n_{1}}10^{\omega} \in L_{2}$ must be accepted by $\mathscr{M}$ so there is some finite prefix $0^{n_{1}}10^{n_{2}}$ that leads into an accepting state $p_{2}$;
3. $0^{n_{1}}10^{n_{2}}10^{\omega}\in L_{2}$ must be accepted by $\mathscr{M}$ so there is some finite prefix $0^{n_{1}}10^{n_{2}}10^{n_{3}}$ that leads into an accepting state $p_{3}$;
4. ...

The limit of this infinite process is a word of the form $(0^{*}1)^{\omega}\not\in L_{2}$ that is accepted by $\mathscr{M}$ since it visits an infinite sequence of accepting states $p_{1},p_{2},p_{3},\dots$
