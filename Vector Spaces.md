#notes 

Related: [[Linear Combinations]]

A **vector** **space** is a mathematical structure, so includes sets, operations, and axioms.

It has 2 sets: $F$, the scalars, and $V$, the vectors.
$V$ forms a commutative group under addition.
$F$ forms a field under a different kind of addition.
$F \times V \to V$ is known as scalar multiplication.

## Notation
+ We write vector variables in bold: $\mathbf{u},\mathbf{v}\in V$
+ Alternatives are $\overline{v}, \underline{v}, \overrightarrow{v}$
+ Write scalars plain $a,b \in F$
+ Vectors in $\Bbb{R}^3$ as row $(1,-2,0)$ or column, $\left( \begin{array}{c} 1\\-2\\0\end{array} \right)$
## Axioms
+ Commutative group and field axioms for vectors and scalars respectively.
+ $a(b\mathbf{v})=(ab)\mathbf{v}$
+ $1\mathbf{v}=\mathbf{v}$
+ $a(\mathbf{u}+\mathbf{v})=a\mathbf{u}+a\mathbf{v}$
+ $(a+b)\mathbf{v}=a\mathbf{v}+b\mathbf{v}$
+ [[Mathematics for Computer Science#Important|The Textbook]] Only covers vectors over $\mathbb{R}$.
## Examples
+ $\mathbb{R}^3 = \mathbb{R}\times \mathbb{R}\times \mathbb{R}$ over $\mathbb{R}$.
	+ Vectors in $\mathbb{R}^3$, scalars in $\mathbb{R}$.
+ $\mathbb{Z}_{2}^8$ over $\mathbb{Z}_{2}$, or in other words, bytes over binary.
+ Polynomials over $\mathbb{R}$.
## Basis of a Vector Space
A subset $S$ of a vector space $V$ is a *basis* for $V$ if $S$ spans $V$ and $S$ is linearly independent.
+ In other words, $S$ is the smallest spanning set we can find for $V$.
The standard basis for $\mathbb{R}^3$ is $\{ (1,0,0),(0,1,0),(0,0,1) \}$
+ This is sometimes written $\{ \hat{\mathbf{i}},\hat{\mathbf{j}},\hat{\mathbf{k}} \}$
## Dimension of a Vector Space
The *dimension* of a vector space is the cardinality of its basis.
+ The dimension of $\mathbb{R}^3$ is 3.
+ The dimension of $\mathbb{Z}_{2}^8$ is 8.
We can prove that the dimension is well defined: it is the same however you calculate - meaning all basis sets for a vector space are the same size.
Dimensions can be infinite.
