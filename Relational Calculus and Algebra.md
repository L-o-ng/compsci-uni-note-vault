#notes 

SQL is declarative - it specifies *what* data to retrieve. Relational calculus and algebra make up the procedural transform that specifies *how* to retrieve the data.
## Semantics
**Relations** are considered as ==sets of elements==.
An **element** is a ==tuple of attribute values==.
Each **row** in a table specifies one element of the set.

Relational calculus and algebra are equivalent languages:
+ They can be used to create and define the same sets;
+ For every calculus expression there is at least one algebraic expression.
It is not a user-friendly language.
### Relational Calculus
Relational Calculus is declarative. It uses set theoretic expressions: predicate calculus and [[First-Order Logic]]. It defines a new set based on one or more existing sets.
### Relational Algebra
Relational Algebra is procedural. It uses operators to **construct** a new set from one or more existing ones.
## Relational Calculus
### Definitions
+ **Predicate** - a function that returns true or false when arguments are given.
+ **Proposition** - the *expression* obtained when replacing values for the argument of a predicate; this means a proposition is either true or false.
+ 
#### Examples
Let $P(x),Q(x)$ be two predicates with argument $x$. Then:
+ The set of all $x$ such that both $P(x)$ **and** $Q(x)$ is:$$\{ x|P(x)\wedge Q(x) \}$$
+ The set of all $x$ such that $P(x)$ **or** $Q(x)$ is:$$\{ x|P(x)\vee Q(x) \}$$
+ The set of all $x$ such that $P(x)$ is **not** true is:$$\{ x|\sim P(x) \}$$
### Tuple and Domain Calculus
Both of these given notations are equivalent. However, in these notes we focus on tuple calculus.
#### Tuple Calculus
Tuple calculus is more similar to SQL. Its variables' values are **tuples**.
##### Notation
$$
\{ t|P(t) \}
$$
So, for example:
+ To select all tuples from relation $R$ for which predicate $P$ holds: $$\{ t|R(t)\wedge P(t) \}$$
+ To select all $A$ from relation $R(A,B)$ for which the value of $B$ is greater than 0:$$\{ t.A|R(t)\wedge t.B>0 \}$$
#### Domain Calculus
Domain Calculus is more similar to mathematical notation. Its variables' values are **attribute values** from a specific **domain**.
##### Notation
$$
\{ a_{1},\dots,a_{n}|P(a_{1},\dots,a_{n}) \}
$$
So, for example:
+ To select all tuples from relation $R$ for which predicate $P$ holds: $$\{ a_{1},\dots,a_{n}|R(a_{1},\dots,a_{n})\wedge P(a_{1},\dots,a_{n}) \}$$
+ To select all $A$ from relation $R(A,B)$ for which the value of $B$ is greater than 0:$$\{ a|(\exists b)(R(a,b))\wedge b>0 \}$$
## Relational Algebra
Relational algebra is the procedural in that it specifies **operations** to construct a new set from existing ones.
### Syntax
#### Unary Operations
##### Selection - $\sigma$
$\sigma_{\text{condition}}(R)$ is the unary selection operation.
It **selects** the subset of **tuples**/rows from $R$ that satisfy the specified **condition**/predicate.
In SQL:
```
SELECT *
FROM R
WHERE <condition>
```
##### Projection - $\mathsf{\Pi}$
$\mathsf{\Pi}_{\text{col1},\text{col2},\dots}(R)$ is the unary projection operation.
It **selects** the specified subset of **attributes**/columns from $R$, eliminating duplicates.
In SQL:
```
SELECT DISTINCT col1, col2 [, ...]
FROM R
```
##### Rename - ${\rho}$
Algebraic expressions quickly become complex.
We can use the unary $\rho$ rename operator to give names to long expressions.
+ $\rho_{Y}(X)$ returns $X$ renamed as $Y$.
+ $\rho_{Y(A,B,C, \dots)}(X)$ returns $X$ renamed as $Y$, with attributes renamed as $A,B,C, \dots$
This allows re-use of the same relation in different roles.
#### Binary Operations
##### Union - $\cup$
$\cup$ is the binary union operation.
It **selects** tuples that are in $A$ *or* $B$, eliminating duplicates.
In SQL:
```
SELECT ...
UNION[ALL]
SELECT ...
```
###### Union Compatibility
To compute $A \cap B, A-B, A \cap B$:
+ The schemata of $A, B$ must match:
	+ They must have the same number of attributes;
	+ Each pair of matching attributes must have the same *domain*.
	+ Attribute names are *ignored*.
$A,B$ are then called **union compatible**.

If one relation has additional attributes, you can use [[#Projection - $ mathsf{ Pi}$|projection]] to create union-compatible relations.
##### Set Difference - $-$
$-$ is the binary set difference operation.
It **selects** tuples that are in $A$ but *not* in $B$, and **removes** all tuples from a copy of $A$ that are also in $B$.
In SQL:
```
SELECT ...
{ MINUS | EXCEPT }
SELECT ...
```
##### Cartesian Product - $\times$
$\times$ is the binary Cartesian product.
It generates all possible combinations of tuples in $A,B$ by concatenating them.
This results in $r_{A}\times r_{B}$ tuples with $c_{A}+c_{B}$ attributes, where $r,c$ are the number of rows and columns respectively.
There are no compatibility requirements on $A,B$.
Attributes with the same name are *prefixed* with the relation name.
In SQL:
```
SELECT *
FROM A,B
```
Or equivalently,
```
SELECT *
FROM A CROSS JOIN B
```
#### Derived Operations
##### Intersection - $\cap$
$\cap$ is the binary intersection operator.
It **selects** tuples that are in $A$ **and** in $B$.
In SQL:
```
SELECT ...
INTERSECT
SELECT ...
```
Intersection is **derived**:$$\eqalign{A \cup B &= A - (A-B)\\ &= B-(B-A)}$$
##### Division - $\div$
$\div$ is the binary division operator.
It selects tuples from $A$ that exist in **all possible combinations** with $B$.
It is called division since $(A \div B)\times B$ is the "relevant" part of $A$.
For example:
![[Relational Algebra Division.png]]
Division is **derived**:$$A \div B = \underbrace{ \overbrace{\mathsf{\Pi}_{X_{1},X_{2},\dots}}^{\text{project down}}(A)-\overbrace{\mathsf{\Pi}_{X_{1},X_{2},\dots}}^{\text{project up}}((\underbrace{ \overbrace{\mathsf{\Pi}_{X_{1},X_{2},\dots}(A)\times B}^{\text{all combinations}})-A }_{\text{combinations not in }A})}_{\text{values of }X_{1},X_{2},\dots\text{ for which all combinations with }B\text{ appear in }A}$$
##### Join - $\bowtie$
###### Inner Join
$A \bowtie_{\text{attr}_{1}=\text{attr}_{2}}B$
```
A [INNER] JOIN B ON <criterion>
```
There are sub-types of inner joins:
+ $\theta$-join: For general criterion $\theta$;
+ Equijoin: some equality criterion;
+ Natural Join: Equijoin over all common attributes;
+ Semijoin: inner join and project to attributes of the left relation.
###### Left Outer Join
$A{\LARGE⟕}_{\text{attr}_{1}=\text{attr}_{2}}B$
```
A LEFT [OUTER] JOIN B ON <criterion>
```
###### Right Outer Join
$A{\LARGE⟖}_{\text{attr}_{1}=\text{attr}_{2}}B$
```
A RIGHT [OUTER] JOIN B ON <criterion>
```
###### Full Outer Join
$A{\LARGE⟗}_{\text{attr}_{1}=\text{attr}_{2}}B$
```
A FULL [OUTER] JOIN B ON <criterion>
```
