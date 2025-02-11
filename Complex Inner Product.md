#notes 
## Hermitian Conjugation
For a complex vector $\mathbf{v}$, the **Hermitian Conjugation** of $\mathbf{v}$, denoted $\mathbf{v}^{\dagger}$ is the conjugate transpose of the vector: $$\mathbf{v}^{\dagger}=\overline{(\mathbf{v}^{\top})}$$
A complex square matrix $A$ is a Hermitian matrix if it is equal to its own conjugate transpose:
$$
\array{&A=A^{\dagger}=\overline{A^{\top}} \\ \text{or} \\ &a_{i, j}=\overline{a_{j,i}}}
$$
For example, the matrix $A=\begin{pmatrix}1&2-i\\ 2+i&3\end{pmatrix}$ is a Hermitian matrix.
## Inner Product on $\Bbb{C}^{n}$
Considering vectors in $\Bbb{C}^{n}$ as column vectors, the **Hermitian Inner Product** is defined as:
$$
\langle\mathbf{u},\mathbf{v}\rangle=\mathbf{u}^{\dagger}\mathbf{v}
$$
### Examples
1) If the vectors $\mathbf{u},\mathbf{v}$ are real then this is the dot product.
2) For $\mathbf{u}=(1+i,5,3+2i),\mathbf{v}=(2,7,3+4i)$: $$\langle\mathbf{u},\mathbf{v}\rangle=\mathbf{u}^{\dagger}\mathbf{v}=2(1-i)+5(7)+(3-2i)(3+4i)=54+4i$$
