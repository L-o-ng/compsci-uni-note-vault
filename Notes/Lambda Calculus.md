#notes 

**Lambda Calculus** is a rule system that describes computations solely by function *abstraction* and *application*. It inspired *functional* programming languages.
## $\lambda$-Expressions
We use an *inductive* argument to build all $\lambda$-expressions:
+ Variable $v$ is a $\lambda$-expression;
+ If $M$ is a $\lambda$-expression, then $(\lambda v.m)$ is a $\lambda$-expression;
	+ This is *abstraction*; we are defining a function with parameter $v$ and body $M$
+ If $M,N$ are $\lambda$-expressions, then $(MN)$ is a $\lambda$-expression.
	+ This represents the *application* of $M$ to $N$.

Functions take exactly **one** argument. *Currying* is used to model multi-argument functions.

So, in other words, we have each $\lambda$-term defined by:
$$
\eqalign{
\langle\text{term}\rangle &:= &\langle\text{name}\rangle \\
&|&(\lambda \langle\text{name}\rangle.\langle\text{term}\rangle) \\
&|&(\langle\text{term}\rangle \langle\text{term}\rangle)
}
$$
### Conventions
1. Application is left-associative;
2. Abstraction is right-associative;
3. Application has precedence over abstraction.
## Transformations
We consider a $\lambda$-term to be in **normal form** if no $\beta$-reduction can be *applied* to it.
We compute the *normal form* by repeatedly replacing the *leftmost* **bound** variable by the actual argument until we cannot reduce.
### Church-Rosser Theorem
If a $\lambda$-term has a normal form then that normal form is **unique**.
### Free and Bound Variables
A variable is **bound** if it occurs in a function that takes a variable of the same name as input. For instance, $x$ in $\lambda x.x$ is bound. A variable binds to the closest function argument considering its enclosing functions.

A variable is **free** if it is not bound. For instance, $x$ in $\lambda y.x$ is free.
### $\beta$-reduction
$\beta$-reduction allows us to substitute the *argument* of an **abstraction** with the *value* of an **application**: $((\lambda x.M[x])N)\to(M[x:=N])$.
An expression is in $\beta$-normal-form if no $\beta$-reduction is possible.
#### Example
$$
\begin{matrix}
((\lambda x.(\lambda y.(xy)))a)b= \\
(\lambda y.(ay))b= \\
ab
\end{matrix}
$$
### $\alpha$-conversion
$\alpha$-conversion allows us to resolve name conflicts by renaming bound variables as such: $(\lambda x.M[x])\to(\lambda y.M[y])$.
This prevents the capturing of free variables when $\beta$-reducing expressions. For instance, $\beta$-reduction would change the semantics of the inner function in $(\lambda x.(\lambda y.xy))y$ without prior $\alpha$-conversion.
#### Example
$$
\begin{matrix}
\lambda x.x \equiv \lambda y.y  \\
\lambda x.(\lambda x.x) \equiv \lambda x.(\lambda y.y)
\end{matrix}
$$
## Church Numerals
The **Church numerals** $C_{0},C_{1},C_{2},\dots$ are defined as follows:
$$
\begin{align}
C_{0}&\equiv \lambda sz.z  \\
C_{1}&\equiv \lambda sz.s(z) \\
C_{2}&\equiv \lambda sz.s(s(z)) \\
&\vdots
\end{align}
$$
### Successor
We define the **successor** as:
$$
S=\lambda uvw.v(uvw)
$$
### Predecessor
The *predecessor* is harder. We first define true and false:
$$
\begin{align}
T&\equiv \lambda xy.x  \\
F&\equiv \lambda xy.y
\end{align}
$$
We represent a pair $(a,b)$ by $\lambda z.zab$. We can define: $\Phi=\lambda pz.z(S(pT))(pT)$, and so the predecessor is defined as:
$$
P \equiv \lambda n.n\Phi(\lambda z.zC_{0}C_{0})F
$$

