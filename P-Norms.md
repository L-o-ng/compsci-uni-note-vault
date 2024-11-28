#definition 

Given $p \in \mathbb{R}^+$ we can define the *p-norm* $\ell_{p}$ on $\Bbb{R}^n$ as $$\Vert\mathbf{x}\Vert_{p}=\sqrt[p]{ \sum_{i}|x_{i}|^p }$$where: 
+ $\ell_{1}$ is the [[Manhattan Norm]]
+ $\ell_{2}$ is the [[Euclidean Norm]]

Different norms are often used in machine learning regularisation.
## P-Norms to the Limit
What happens if $p \to \infty$?
+ Large terms dominate, so $\ell_{\infty}$ is $$\array{\lim_{ p \to 0 } x^p=1\\ \lim_{ p \to 0 } \Vert\mathbf{x}\Vert_{p}=\infty}$$This is a norm.
+ But, assuming $0^0=0$, we can define $\ell_{0}$ as $$\Vert(x_{1},\dots,x_{n})\Vert_{0}=|x_{0}|^0+\dots+|x_{n}|^0$$ie. the number of locations in which $\mathbf{x}\ne 0$.
	+ This is commonly used (Hamming Distance), but is not a norm.


