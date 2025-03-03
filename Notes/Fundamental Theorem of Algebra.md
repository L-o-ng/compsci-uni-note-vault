#notes 

See also: [[Polynomial Division]]

>Every algebraic equation of degree $n \ge 1, p(z)=0$ has at least one solution in $\mathbb{C}$.

## Consequence
If $w_{1}$ is a solution of $p(z)=0$ then:
	$p(z)=(z-w_{1})q(z), q(z)\text{ has degree }n-1$
But now $q(z)=0$ must also have a solution by this theorem.
So, let this solution $=w_{2}$
	$$\therefore q(z)=(z-w_{2})r(z),r(z)\text{ has degree }n-2$$
	$$\text{So }p(z)=(z-w_{1})(z-w_{2})r(z)$$
But $r(z)=0$ also has a solution by this theorem, $w_{3}$.
So: 
	$$p(z)=(z-w_{1})(z-w_{2})(z-w_{3})\dots(z-w_{n})a_{n}$$
### Corollaries of the Theorem
#### Corollary 1
Every polynomial $p(z)=a_{n}z^n+\dots+a_{0}$ can be **completely factorised** over $\mathbb{C}$, or can be written in the above form.
So, a degree $n$ polynomial has exactly $n$ roots in $\mathbb{C}$. When counted with multiplicities, roots can be repeated.
##### Comparing $\mathbf{\mathbb{R}}$ to $\mathbf{\mathbb{C}}$
+ $z^4=1$ has 2 real solutions, $z=\pm 1$, but 4 complex solutions: $z=\pm 1,\pm i$.
+ $az^2+bz+c=0$ has no real solutions if $b^2-4ac<0$ but has 2 solutions in $\mathbb{C}$.
+ $z^n=a$ has $n$ roots.
+ $z^6-2z^3+2=0$ has 6 solutions.
#### Corollary 2
Every real polynomial $p(x)=a_{n}x^n+\dots+a_{0}$ with real coefficients $a_{0},a_{1}\dots a_{n} \in \mathbb{R}$ can be completely factorised into linear and quadratic real factors.
##### Example
$$x^4-1=(x-1)(x+1)(x^2+1)$$
If complex, then $$z^4-1=(z-1)(z+1)(z-i)(z+i)$$
##### Proof
Consider the complex polynomial equation $p(z)=0$. [[Fundamental Theorem of Algebra#Corollary 1|Corollary 1]] says it can be factorised.
	Note that if $w_{1}$ is real then it is no problem. However, if $w_{1}$ is not real then $\overline{w}$ is also a root.
Why?
+ $$p(w_{1})=0\implies a_{n}w_{1}^n+a_{n-1}w_{1}^{n-1}+\dots+a_{0}=0$$
+ $$\implies \overline{a_{n}}\cdot \overline{w_{1}}^n+\dots+\overline{a_{0}}=0$$
+ $$\implies a_{n}\cdot \overline{w_{1}}^n+\dots+a_{0}=0\text{ since }a_{i}\in \mathbb{R}$$
+ $$\implies p(\overline{w_{1}})=0$$
But then $$(z-w_{1})(z-\overline{w_{1}})=z^2-(w_{1}+\overline{w_{1}})z+w_{1}\cdot \overline{w_{1}}$$
$$=z^2-2\Re(w_{1})z+|w_{1}|^2\text{, a real quadratic.}$$
## Sketch Proof of the Theorem
![[FToA proof part 1.png]]![[FToA proof part 2.png]]

