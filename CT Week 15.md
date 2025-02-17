#coursework 

1) Prove the following sequents:
	1) $(a\wedge b)\implies c,b \implies a,b \vdash c$
		1) $$\begin{array}{c|c}(a\wedge b)\implies c & \text{premise} \\ b \implies a & \text{premise} \\ b & \text{premise} \\ a & \implies e 2 2  \\ a \wedge b & \wedge i 3 4  \\ c & \implies e 2 1\end{array}$$
	2) $p \implies (q \implies r)\vdash (p \wedge q)\implies r$
		1) $$\begin{array}{cc|c}1. & p \implies (q \implies r) & \text{premise} \\ \array{2.\\3.\\4.\\5.\\6.} & \boxed{\array{p \wedge q \\ p \\ q \implies r \\ q \\ r}} & \array{\text{assumption} \\ \wedge e 2 \\ \implies e 13 \\ \wedge e 2 \\ \implies e 4 5} \\ 7. & (p \wedge q) \implies r & \implies i 2-6\end{array}$$
	3) $(A \implies B)\vdash (B \implies C)\implies(A \implies C)$
		1) $$\begin{array}{cc|c}1. & (A \implies B) & \text{premise} \\ \array{2.\\3.\\4.\\5.\\6.} & \boxed{\array{ B \implies C  \\ \boxed{\array{A \\ B \\ C}} \\ A \implies C}} & \array{\text{assumption} \\\text{assumption} \\\implies e 1 3 \\\implies e 2 4 \\\implies i 3-5} \\7. & (B \implies C) \implies (A \implies C) & \implies i 2-6\end{array}$$
	4) $p \implies(q\wedge r) \vdash r \implies(p \implies q)$
		1) $$\begin{array}{cc|c}1. & p \implies(q \wedge r) & \text{premise} \\\array{2.\\3.\\4.\\5.\\6.} & \boxed{\array{r \\\boxed{\array{p \\q \wedge r  \\q }} \\p \implies q}} &\array{\text{assumption} \\\text{assumption} \\\implies e 1 3 \\\wedge e 4 \\\implies i 3-5} \\7.& r \implies (p \implies q) & \implies i 2-6\end{array}$$
2) Prove the following sequents:
	1) $p \vee(q \wedge r)\vdash p\vee q$
		1) $$\begin{array}{cc|c}1.& p \vee (q\wedge r) & \text{premise} \\2.& (p \vee q)\wedge(p\vee r) &  \\3.& p \vee q & \wedge e 2\end{array}$$
	2) $p \implies r,q \implies s, p \vee q \vdash r \vee s$
		1) $$
\begin{array}{cc|c}
1.& p \implies r & \text{premise} \\
2.& q \implies s & \text{premise} \\
3.& p \vee q & \text{premise} \\

\end{array}
$$