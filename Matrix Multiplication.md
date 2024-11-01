#notes 

Given matrices $A \in \mathbb{R}^{m \times n}\text{ and } B \in \mathbb{R}^{n \times k}$,
+ The elements of $c_{ij}$ of the product $C=AB \in \mathbb{R}^{m \times k}$ are: $$c_{ij}=\sum_{l=1}^na_{il}b_{lj}\text{ for }1 \le i \le m, 1 \le j \le k$$
## Example
$$\begin{bmatrix}
1 & 2 & 3 \\
3 & 2 & 1
\end{bmatrix}
\begin{bmatrix}
0 & 2 \\
1 & -1 \\
0 & 1
\end{bmatrix}=
\begin{bmatrix}
1\cdot 0+2 \cdot 1+3\cdot 0 & 1\cdot 2+2\cdot -1+3\cdot 1 \\
3\cdot 0+2\cdot 1 + 1\cdot 0 & 3\cdot 2 + 2\cdot -1 +1\cdot 1
\end{bmatrix}
=\begin{bmatrix}
2 & 3 \\
2 & 5
\end{bmatrix}$$
