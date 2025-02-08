#coursework 

1) All knaves
2) `p NAND (q NAND r)`, `(p NAND q) NAND r`

| `p`   | `q`   | `r`   | `q NAND r` | `p NAND (q NAND r)` |
| --- | --- | --- | -------- | ----------------- |
| `0`   | `0`   | `0`   | `1`        | `1`                 |
| `0`   | `0`   | `1`   | `1`        | `1`                 |
| `0`   | `1`   | `0`   | `1`        | `1`                 |
| `0`   | `1`   | `1`   | `0`        | `1`                 |
| `1`   | `0`   | `0`   | `1`        | `0`                 |
| `1`   | `0`   | `1`   | `1`        | `0`                 |
| `1`   | `1`   | `0`   | `1`        | `0`                 |
| `1`   | `1`   | `1`   | `0`        | `1`                 |

| p   | q   | r   | p NAND q | (p NAND q) NAND r |
| --- | --- | --- | -------- | ----------------- |
| 0   | 0   | 0   | 1        | 1                 |
| 0   | 0   | 1   | 1        | 0                 |
| 0   | 1   | 0   | 1        | 1                 |
| 0   | 1   | 1   | 1        | 0                 |
| 1   | 0   | 0   | 1        | 1                 |
| 1   | 0   | 1   | 1        | 0                 |
| 1   | 1   | 0   | 0        | 1                 |
| 1   | 1   | 1   | 0        | 1                 |
$\implies$ not logically equivalent
3) .
	1) $(¬q\wedge(p \implies q))\implies¬q$$$\array{(¬q \wedge (¬p \vee q)) \implies ¬q\\ (¬q \wedge ¬p \vee ¬q \wedge q) \implies ¬q \\ (¬q \wedge ¬p)\implies ¬q \\ ¬(¬q \wedge ¬p ) \vee ¬q \\ q \vee p \vee ¬q \\ p \vee 1 \\ 1 \therefore\text{tautology}}$$
	2) $((p \vee q)\wedge ¬p)\implies q$$$\array{(¬p\wedge p\vee¬p\wedge q)\implies q \\ ¬(¬p\wedge q)\vee q \\ p \vee ¬q \vee q \\ p \vee 1 \\ 1 \therefore\text{tautology}}$$
4) $$\array{\begin{matrix}(a \vee c)\wedge(b \implies c)\wedge (c \implies a) & (b \implies c) \wedge a  \\ (b \implies c)\wedge(a \vee c) \wedge (¬c \vee a) \\ (b \implies c) \wedge (a \wedge ¬c \vee a \wedge a \vee c \wedge ¬c \vee c \wedge a) \\ (b \implies c) \wedge (a \vee (a \wedge ¬c) \vee (c \wedge a)) \\ (b \implies c) \wedge (a \vee (c \wedge a)) \\ (b \implies c) \wedge a\end{matrix} \\ LHS \equiv RHS}$$
5) .
	1) `NAND`: $¬(p \wedge q)$, `NOR`: $¬(p \vee q)$
	2) no :)
6) 