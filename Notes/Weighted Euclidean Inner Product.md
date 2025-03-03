#notes 

Let $w_{1},\dots,w_{n} \in \Bbb{R}$ be arbitrary positive numbers, called *weights*.
The **Weighted Euclidean Inner Product** with weights $w_{1},\dots,w_{n}$ on $\Bbb{R}^{n}$ is defined as follows:

>For vectors $\mathbf{u}=(u_{1},\dots,u_{n}),\space \mathbf{v}=(v_{1},\dots,v_{n})$:$$\langle\mathbf{u},\mathbf{v}\rangle=w_{1}u_{1}v_{1}+w_{2}u_{2}v_{2}+\dots+w_{n}u_{n}v_{n}$$

It is easy to check that all four axioms of inner product are satisfied. If all $w_{i}=1$, this becomes the standard dot product.
## Examples
Consider $\Bbb{R}^{2}$ equipped with the weighted Euclidean inner product with weights $w_{1}=3,w_{2}=2$; ie, define $\langle\mathbf{u},\mathbf{v}\rangle=3u_{1}v_{1}+2u_{2}v_{2}$:
+ The norm of $\mathbf{e}_{1}=(1,0)$ is $\|\mathbf{e}_{1}\|=\sqrt{ \langle \mathbf{e}_{1},\mathbf{e}_{2}\rangle }=\sqrt{ 3\cdot 1^{2}+2\cdot 0^{2} }=\sqrt{ 3 }$
+ $\mathbf{u}=(1,-3)$ and $\mathbf{v}=(2,1)$ are **orthogonal**: $\langle\mathbf{u},\mathbf{v}\rangle=3\times 1\times 2+ 2\times(-3) \times 1=0$.
Note that ==norm, distance, and orthogonality depend on the choice of inner product==!
