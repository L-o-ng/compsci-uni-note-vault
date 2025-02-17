#coursework 

1) Write matrices for the following linear transformations:
	1) Scaling by a factor of 3.
		1) $$\begin{pmatrix}3 & 0 \\0 & 3\end{pmatrix}$$
	2) Reflection across $x=y$.
		2) $$\begin{pmatrix}0 & 1 \\1 & 0\end{pmatrix}$$
	3) Rotation clockwise by $90\degree$.
		1) $$\begin{pmatrix}0 & 1 \\-1 & 0\end{pmatrix}$$
2) For each pair, find the product and say if it commutes.
	4) $AB$
		2) $$\begin{pmatrix}0 & 3 \\ 3 & 0\end{pmatrix}$$
		   This is commutative.
	5) $AC$
		3) $$\begin{pmatrix}0 & 3 \\-3 & 0\end{pmatrix}$$
		   This is commutative.
	6) $BC$
		4) $$\begin{pmatrix}-1 & 0 \\0 & 1\end{pmatrix}$$
		   This is not commutative.
3) Consider the following matrices:$$\eqalign{A&=\begin{pmatrix}0 & 1 & 2 \\2 & 3 & 4 \\3 & 4 & 5\end{pmatrix} \\ B&=\begin{pmatrix}0 & 1 \\2 & 3 \\3 & 4\end{pmatrix} \\ C&=\begin{pmatrix}0 & 1 & 2 \\1 & 2 & 3 \\2 & 3 & 4 \\3 & 4 & 5 \\4 & 5 & 6\end{pmatrix}}$$And the vector:$$\mathbf{v}=\begin{pmatrix}1 \\0 \\-1\end{pmatrix}$$
	1) For each matrix, state the dimension of the domain and the codomain of the linear map it represents.
		1) $$\array{\operatorname{domain}(A) \subset \Bbb{R}^{3}\\ \operatorname{codomain}(A) \subset \Bbb{R}^{3}\\ \\ \operatorname{domain}(B) \subset \Bbb{R}^{2}\\ \operatorname{codomain}(B) \subset \Bbb{R}^{3}\\ \\ \operatorname{domain}(C) \subset \Bbb{R}^{3}\\ \operatorname{codomain}(C) \subset \Bbb{R}^{5}}$$
	2) Which matrices can operate on $\mathbf{v}$?
		2) $A,C$
	3) Which products $X,Y \in \{ A,B,C \}$ can operate on $\mathbf{v}$?
		1) $CA$
4) Does matrix multiplication on $\Bbb{R}^{n}$ form a group?
	1) Yes: it is closed, it is associative, there exists the inverse matrix for all $n$, and all matrices in $\Bbb{R}^{n}$ have an inverse.
