#notes 

Let $A,B$ be languages over the same alphabet $\Sigma$. $A$ is **many-to-one reducible** to $B$ (write $A\leq B$) if there is a [[The Turing Machine|Turing Machine]] $F$ that terminates on every input $u \in \Sigma^{*}$, and such that:
$$
A=\{ u \in \Sigma^{*}|F(u)\in B \}
$$
or informally, the notion that checking $u \in A$ is no harder than checking $w \in B$.
## Properties
Suppose $A\leq B$:
1. If $B$ is [[Turing Languages|Turing Decidable]], so is $A$;
2. If $B$ is [[Turing Languages|Turing Recognisable]], so is $A$;
3. If $A\leq B$ and $B\leq C$, then $A\leq C$.

We denote $A \equiv B$ to mean that $A\leq B$ and $B\leq A$, or that $A$ and $B$ are equally difficult.

---

See also: [[m-Completeness]]
