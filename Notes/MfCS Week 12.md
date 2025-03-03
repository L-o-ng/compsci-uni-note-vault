#coursework 

1) Find the elementary matrices $E$ for the following equations:
	1) $EA=B$
		1) $$\begin{pmatrix}1 & 0 & 0 \\0 & 1 & 0 \\-2 & 0 & 1\end{pmatrix}$$
	2) $EB=A$
		1) $$\begin{pmatrix}1 & 0 & 0 \\0 & 1 & 0 \\2 & 0 & 1\end{pmatrix}$$
	3) $EA=C$
		1) $$\begin{pmatrix}\frac{1}{2} & 0 & 0 \\0 & 1 & 0 \\0 & 0 & 1\end{pmatrix}$$
	4) $EC=A$
		1) $$\begin{pmatrix}2 & 0 & 0 \\0 & 1 & 0 \\0 & 0 & 1\end{pmatrix}$$
	5) $EB=D$
		1) $$\begin{pmatrix}1 & 0 & 0 \\0 & 1 & 1 \\0 & 0 & 1\end{pmatrix}$$
	6) $ED=B$
		1) $$\begin{pmatrix}1 & 0 & 0 \\0 & 1 & -1 \\0 & 0 & 1\end{pmatrix}$$
	7) $EC=F$
		1) $$\begin{pmatrix}0 & 0 & 1 \\0 & 1 & 0 \\1 & 0 & 0\end{pmatrix}$$
	8) $EF=C$
		1) $$\begin{pmatrix}0 & 0 & 1 \\0 & 1 & 0 \\1 & 0 & 0\end{pmatrix}$$
2) Consider a matrix $A$ that can be $LU$-decomposed. If $U$ is the result of elementary matrices $E_{1},E_{2},\dots,E_{k}$ being applied to $A$, then what is $L$ equal to in terms of these elementary matrices and why?
	1) $L=(E_{1}^{-1},E_{2}^{-1},\dots,E_{k}^{-1})(I)$.
3) Solve $A\mathbf{x}=\mathbf{b}$ with $A=\begin{pmatrix}3&-6&-3\\2&0&6\\-4&7&4\end{pmatrix},\mathbf{b}=\begin{pmatrix}-3\\-22\\3\end{pmatrix}$
	1) $$\begin{array} \\ \text{By Gaussian Elimination and compunding }E^{-1}\text{ steps, } \\ A=LU=\begin{pmatrix} 3 & 0 & 0 \\ 2 & 4 & 0 \\ -4 & -1 & 2 \end{pmatrix}\begin{pmatrix} 1 & -2 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix} \\ \text{So }A\mathbf{x}=\mathbf{b}\text{ becomes:} \\ \begin{pmatrix} 3 & 0 & 0 \\ 2 & 4 & 0 \\ -4 & -1 & 2 \end{pmatrix}\underbrace{ \begin{pmatrix} 1 & -2 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} x_{1} \\ x_{2} \\ x_{3} \end{pmatrix} }_{ =y }=\begin{pmatrix} -3 \\ -22 \\ 3 \end{pmatrix} \\ \text{So we have: } \\ \begin{pmatrix} 3 & 0 & 0 \\ 2 & 4 & 0 \\ -4 & -1 & 2 \end{pmatrix}\begin{pmatrix} y_{1} \\ y_{2} \\ y_{3} \end{pmatrix}=\begin{pmatrix} -3 \\ -22 \\ 3 \end{pmatrix} \\ \text{This gives: } \mathbf{y}=\begin{pmatrix} -1 \\ -5 \\ -3 \end{pmatrix} \\ \text{Back-substituting for }\mathbf{x}, \text{we obtain: } \\ \begin{pmatrix}1 & -2 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix}x_{1} \\ x_{2} \\ x_{3} \end{pmatrix}=\begin{pmatrix}-1 \\ -5 \\ -3 \end{pmatrix} \\ \text{Solving for }\mathbf{x}, \text{ we obtain:} \\ \mathbf{x}=\begin{pmatrix}-2 \\ 1 \\ -3\end{pmatrix}\end{array}$$
4) 