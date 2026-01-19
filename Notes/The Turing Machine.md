#notes 

A **Turing Machine** is the first mathematically rigorous definition of computation, proposed by *Alan Turing* in 1936. It can do everything a real computer can (see [[The Church-Turing Thesis]]).
## Motion
A Turing machine has an **infinite tape** extending to the right, representing its memory. There is a *finite-state* **program** that controls a **tape head**. The head can *read*, *write*, and *move around* in both directions on the tape.
Each instruction is in the format:
+ If the finite control is in state $p$ and the head reads $b$, then write $a$, move the head left/right and go to state $q$.
## Formal Definition
A **Turing Machine** (TM) is a 7-tuple $(Q,\Sigma,\Gamma,\updelta,q_{0},q_{\text{accept}},q_{reject})$, where:
1. $Q$ is the set of states;
2. $\Sigma$ is the input alphabet not containing the special blank symbol $\sqcup$;
3. $\Gamma$ is the tape alphabet satisfying: $\Sigma \subset \Gamma \cap\sqcup \in \Gamma$;
4. $\updelta:Q\times \Gamma \to Q\times \Gamma \times \{ L,R \}$ is the transition function;
5. $q_{0}\in Q$ is the start state;
6. $q_{\text{accept}} \in Q$ is the accept state;
7. $q_{\text{reject}}\in Q$ is the reject state, and $q_{\text{reject}}\neq q_{\text{accept}}$.
## Computation
+ The tape content is **unbounded** but always **finite**. The leftmost blank marks the end of the tape content;
+ A **configuration** consists of three items:
	+ The current state;
	+ The tape content;
	+ The head location.
+ The *configuration* $C_{1}$ **yields** the configuration $C_{2}$ if the TM can legally go from $C_{1}$ to $C_{2}$ in a single step;
+ The **start configuration** on an input $w \in \Sigma^{*}$ consists of the start state $q_{0}$, $w$ as the tape content, and the head location being the first (leftmost) position of the tape;
+ An **accepting** or **rejecting** configuration is one whose state is $q_{\text{accept}}$ or $q_{\text{reject}}$ respectively. Accepting and rejecting configurations are **halting** configurations.

A TM $\mathscr{M}$ accepts an input $w$ if there is a sequence of configurations $C_{1},C_{2},\dots,C_{k}$ such that:
1. $C_{1}$ is the start configuration of $\mathscr{M}$ on input $w$;
2. $C_{i}$ *yields* $C_{i+1}$ for $1\leq i\leq k-1$;
3. $C_{k}$ is an accepting configuration.

The set of strings *accepted* by $\mathscr{M}$ constitutes the **language** of $\mathscr{M}$, denoted by $L(\mathscr{M})$.

---

See also: [[Turing Languages]], [[Types of Turing Machine]]
