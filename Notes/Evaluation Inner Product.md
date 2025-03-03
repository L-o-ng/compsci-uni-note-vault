#notes 

We can fix *distinct* points $x_{0},x_{1},\dots,x_{n}\in \Bbb{R}$ called **sample points**.
For vectors $\mathbf{p}=p(x),\mathbf{q}=q(x) \in \Bbb{P}_{n}$ we define:
$$
\langle\mathbf{p},\mathbf{q}\rangle=p(x_{0})q(x_{0})+p(x_{1})q(x_{1})+\dots+p(x_{n})q(x_{n})
$$
This inner product on $\Bbb{P}_{n}$ is called the **evaluation inner product** at $x_{0},x_{1},\dots,x_{n}$.
Note that: 
+ It is easy to see that one can identify each vector $\mathbf{p}=p(x)\in \Bbb{P}_{n}$ with the corresponding vector $(p(x_{0}),p(x_{1}),\dots,p(x_{n})\in \Bbb{R}^{n+1})$;
+ Then, the evaluation inner product on $\Bbb{P}_{n}$ is the dot product in $\Bbb{R}^{n+1}$;
+ There is one subtlety: we need to check that $\langle\mathbf{p},\mathbf{p}\rangle=0\iff \mathbf{p}=0$. This holds because:$$\langle\mathbf{p},\mathbf{p}\rangle=[p(x_{0})]^{2}+[p(x_{1})]^{2}+\dots+[p(x_{n})]^{2}=0 \implies p(x_{0})=p(x_{1})=\dots=p(x_{n})=0\implies \mathbf{p}=0$$
+ The last implication follows from the [[Fundamental Theorem of Algebra]].
## Example
Consider $\Bbb{P}_{2}$ with evaluation inner product at $x_{0}=-2,x_{1}=0,x_{2}=2$:
$$
\langle\mathbf{p},\mathbf{q}\rangle=p(-2)q(-2)+p(0)q(0)+p(2)q(2)
$$
Consider 2 vectors $\mathbf{p}=x^{2},\mathbf{q}=x+1$. Then:
$$
\eqalign{
\|\mathbf{p}\| &= \sqrt{ \langle\mathbf{p},\mathbf{q}\rangle } \\
&=\sqrt{ [p(-2)]^{2}+[p(0)]^{2}+[p(2)]^{2} } \\
&=\sqrt{ 4^{2}+0^{2}+4^{2} }=4\sqrt{ 2 } \\
\langle\mathbf{p},\mathbf{q}\rangle&=8
}
$$
If we normalise $\mathbf{p}$, we get vector $\mathbf{p}'=\frac{1}{\|\mathbf{p}\|}\mathbf{p}= \frac{1}{4\sqrt{ 2 }}x^{2} \in \Bbb{P}_{2}$.
