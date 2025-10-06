#coursework 

1) Apply resolution on the clauses listed.
	1) $p\vee q,\quad ¬p\vee r,\quad ¬p\vee¬r,\quad p\vee¬q$
		1) $$\array{\text{Resolve }p:& q\vee r, \quad q \vee ¬r, \quad ¬q \vee r,\quad ¬q \vee ¬r \\ \text{Resolve }q:& r \vee r,\quad r \vee ¬r,\quad ¬r \vee r,\quad ¬r \vee ¬r \\ \text{We have }&r \wedge ¬r \implies \emptyset}$$
	2) $p\vee q\vee¬r\vee s,\quad ¬p\vee r\vee s,\quad ¬q\vee¬r,\quad p\vee¬s,\quad ¬p\vee¬r,\quad r$
		1) $$\array{\text{Resolve }p:& \underbrace{ q \vee¬r \vee s \vee r \vee s }_{ \text{tautology} },\quad q \vee ¬r \vee s \vee ¬r,\quad \underbrace{ r\vee s\vee¬s }_{ \text{tautology} },\quad  ¬s\vee¬r \\ \text{Resolve }q:& ¬r \vee ¬r \vee s \\ \text{Resolve }s:& ¬r \vee ¬r \\\text{We have }& r \wedge ¬r \implies \emptyset}$$
	3) $\array{¬b\vee¬c\vee a,\quad ¬e\vee¬f\vee a,\quad ¬f\vee¬k\vee b,\quad ¬e\vee c,\\ ¬k\vee d,\quad e,\quad ¬j\vee¬e\vee f,\quad ¬c\vee f,\quad ¬c\vee j}$
		1) $$\array{\text{Resolve }e:& ¬b \vee ¬c\vee a,\quad ¬f \vee a,\quad ¬f \vee ¬k \vee b,\quad c,\quad ¬k\vee d,\\ & ¬j \vee f,\quad ¬c \vee f,\quad ¬c \vee j \\ \text{Resolve }c:& ¬b\vee a,\quad ¬f\vee a,\quad ¬f\vee¬k\vee b,\quad ¬k\vee d,\quad ¬j\vee f,\quad f,\quad j \\ \text{Resolve }f:& ¬b\vee a,\quad a,\quad ¬k\vee b,\quad ¬k\vee d,\quad j \\ \text{Resolve }a& ¬k \vee b,\quad ¬k \vee d,\quad j \\ & \implies \emptyset\text{ cannot be resolved.}}$$
2) Apply resolution on the following scenarios.
	1) Decide whether $((p\vee q)\wedge(p \implies r))\implies (p \implies r)$ is a theorem.
		1) $$\array{\text{Apply }¬:& ¬(((p\vee q)\wedge(p \implies r))\implies(p \implies r)) \\ \text{Obtain CNF}:& ¬(¬((p \vee q)\wedge(¬p \vee r))\vee (¬p \vee r)) \\ & ¬((¬(p \vee q)\vee¬(¬p\vee r))\vee (¬p \vee r)) \\ & ¬(¬(p\vee q)\vee¬(¬p\vee r))\wedge¬(¬p\vee r) \\ & (p \vee q) \wedge (¬p \vee r) \wedge p \wedge ¬r \\ \text{Resolve }p:& r \wedge ¬r \implies \emptyset\\ & \implies \upvarphi \text{ is a theorem.}}$$
	2) There are three suspects for the murder of Peter: Hajo, Nick, and Liz. Hajo says: ‘I didn’t do it. Peter was an old acquaintance of Nick’s. But Liz hated him.’ Nick states: ‘I didn’t do it. I didn’t know Peter. Besides, I was away all week.’ Liz says ‘I didn’t do it. I saw both Hajo and Nick in town with Peter that day; one of them must have done it.’ Assume that the two innocent people are telling the truth, but that the guilty person might not be. Write out the facts using formulae of propositional logic and use Resolution to solve the crime.
		1) 💀
	3) We say that a clause $C$ *subsumes* a clause $C'$ if every literal in $C$ is in $C'$. Let $\Sigma$ be a set of clauses containing the clause $C$ and suppose that $C$ subsumes the clause $C'$, Let $\Sigma'$ be the set of clauses $\Sigma$ with the clause $C'$ added. **Show that $\Sigma$ is satisfiable if and only if $\Sigma'$ is satisfiable** - so, if you have a set of clauses $\Sigma'$ and you wish to know whether all the clauses in $\Sigma'$ are satisfiable, then if $C,C'$ are clauses of $\Sigma'$ such that $C$ subsumes $C'$ then you can remove $C'$ from $\Sigma$'. This can help reduce the length of certain resolution proofs.
		1) 💀
3) Answer the following set operation questions:
	1) For the sets $X_{0},X_{1},X_{2},\dots$ we write $\cap_{i=0}^{\infty}X_{i}$ to denote the intersection of all these sets; that is, the set of elements that lie in every one of the sets. Define $X_{0},X_{1},X_{2},\dots$ such that:
		1) For every $X_{i},X_{j}$ such that $i \ne j$, we have that $X_{i}\cap X_{j}\ne \emptyset$ but that $\cap_{i=0}^{\infty}X_{i}=\emptyset$
			1) 💀
		2) For any finite subset $S \subset \Bbb{N}$, we have that $\cap_{i \in S}^{\infty}X_{i}$ is infinite but that $\cap_{i=0}^{\infty}X_{i}=\emptyset$.
			1) 💀
	2) We can define ordered pairs with set theory. Define that $(a,b)=\{ \{ a \},\{ a,b \} \}$. Prove that $(a,b)=(c,d)$ if and only if $\{ \{ a \},\{ a,b \} \}=\{ \{ c \},\{ c,d \} \}$
		1) 💀
