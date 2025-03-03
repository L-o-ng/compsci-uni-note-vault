#definition 

Matrices $A,B$ are similar if and only if they represent the same linear operator $f:\Bbb{R}^{n}\to \Bbb{R}^{n}$, possibly in different bases.

Let $T:\Bbb{R}^{n}\to \Bbb{R}^{n}$ be a linear operator and $S=\{ \mathbf{v}_{1},\dots,\mathbf{v}_{n} \}$ in a basis in $\Bbb{R}^{n}$.
Let $[T]_{S}$ be the $n\times n$ matrix $[T]_{S}=[(T(\mathbf{v}_{1}))_{S}|(T(\mathbf{v}_{2}))_{S}|\dots|(T(\mathbf{v}_{n}))_{S}]$, whose columns are the coordinate vectors of vectors $T(\mathbf{v}_{i})$ in basis $S$.
This matrix is called the **matrix of T in S**.
We also say that the matrix $[T]_{S}$ represents $T$ in basis $S$.
If $S$ is the standard basis of $\Bbb{R}^{n}$ then $[T]_{S}$ is the standard matrix of $T$.

>Matrices $A,B$ are similar if and only if there is a linear operator $T:\Bbb{R}^{n}\to \Bbb{R}^{n}$ and 2 bases, $S,S'$ of $\Bbb{R}^{n}$ such that $A=[T]_{S}$ and $B=[T]_{S}$.

