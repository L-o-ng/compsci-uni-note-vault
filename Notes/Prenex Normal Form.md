#notes 
## See First
+ [[First-Order Logical Equivalence]]
+ [[First-Order Syntax#Parse Trees]]
---
Consider the process of constructing a first-order formula: we start from atoms and construct increasingly more complex formula by using $\{ \wedge,\vee,¬,\exists,\forall \}$, with the structure of a formula given by its parse tree.
We say that a first-order formula is in **prenex normal form** if it is written in the form:
$$
Q_{1}x_{1}Q_{2}x_{2}\dots Q_{k}x_{k}\phi
$$
where:
+ Each $Q_{i}$ is a quantifier;
+ Each $x_{i}$ is a variable;
+ The formula $\phi$ is quantifier-free.
## Establishing Prenex Normal Form
We first need to show that **every** first-order formula is equivalent to one in prenex normal form. We use the **parse tree** of a formula $\phi$ to construct an equivalent formula in *prenex normal form*.
A key observation is that if we choose some node of the parse tree of $\phi$ and look at the subtree with this node as root, then this subtree corresponds to a subformula of $\phi$; that is, a formula appearing as a formula within $\phi$.
We can start at the *leaves* of the parse tree and work up the tree, repeatedly constructing prenex normal form formulae that are equivalent to the formula corresponding to subtrees of the parse tree.
### Process
#### $\wedge,\vee$-Nodes
Start at the *leaves*. The formula at each leaf is trivially in prenex normal form, as it involves no quantifiers.
Suppose we reach a node of the parse tree that is an $\wedge$-node and we have constructed prenex normal form formulae equivalent to the formulae corresponding to the subtrees rooted at the 2 children of this $\wedge$-node.
+ This means the formula corresponding to the subtree rooted at this $\wedge$-node is of the form $\psi \wedge \chi$ and we have already constructed $\psi'$ and $\chi'$ such that:
	+ $\psi',\chi'$ are in prenex normal form:
		+ $\psi'$ is $Q_{1}x_{1}Q_{2}x_{2}\dots Q_{k}x_{k}\psi''$ with $\psi''$ quantifier-free, and each $Q_{i}$ a quantifier;
		+ $\chi'$ is $P_{1}y_{1}P_{2}y_{2}\dots P_{k}y_{k}\chi''$ with $\chi''$ quantifier-free, and each $P_{i}$ a quantifier.
	+ $\psi \equiv \psi'$;
	+ $\chi \equiv \chi'$.
By renaming bound variables, if necessary, we may assume that no $x_{i}$ is the same variable as any $y_{j}$. So, $\psi \wedge \chi$ is equivalent to a formula in prenex normal form:
$$
\eqalign{
\psi \wedge \chi &\equiv Q_{1}x_{1}Q_{2}x_{2}\dots Q_{k}x_{k}\psi''\wedge P_{1}y_{1}P_{2}y_{2}\dots P_{k}y_{k}\chi'' \\
&\equiv Q_{1}x_{1}Q_{2}x_{2}\dots Q_{k}x_{k}P_{1}y_{1}P_{2}y_{2}\dots P_{k}y_{k}(\psi'' \wedge \chi'')
}
$$
This same construction also works for a $\vee$-node of the parse tree.
#### $¬$-Nodes
Now consider a $¬$-node. Now we have that the formula corresponding to the subtree rooted at this $¬$-node is equivalent to a formula of the form $Q_{1}x_{1}Q_{2}x_{2}\dots Q_{k}x_{k}\psi''$ with $\psi''$ quantifier-free and each $Q_{i}$ a quantifier.
Hence, this formula is equivalent to:
$$
Q_{1}x_{1}Q_{2}x_{2}\dots Q_{k}x_{k}¬\psi''
$$
which is in prenex normal form.
#### $\forall,\exists$-Nodes
Consider a $\forall$-node. Now we have that the formula corresponding to the subtree rooted at this $\forall$-node is equivalent to a formula of the form $Q_{1}x_{1}Q_{2}x_{2}\dots Q_{k}x_{k}\psi''$ with $\psi''$ quantifier-free and each $Q_{i}$ a quantifier. This is immediately in prenex normal form. The same works for an $\exists$-node of the parse tree.

Hence, continuing in this way yields an equivalent formula to $\phi$ in prenex normal form.

---
## Example
Consider the first-order formula $\phi$ defined as:
$$
¬\forall x(\exists y\forall z(E(x,y)\vee¬\forall w¬P(w,y,z))\vee¬\forall y(E(y,x)\wedge M(y)))
$$
This can be written in prenex normal form:
$$
\exists x\forall y\exists z\forall w\forall t¬((E(x,y)\vee P(w,y,z))\vee¬(E(t,x)\wedge¬M(t)))
$$
