#notes #homework-needed 

A function $f(z)$ takes a complex number $z$ and outputs a complex number $f(z)$.
## Examples
$$f(z)=z^2+3z^3\text{ has input }z\text{ and output }z^2+3z^3$$
## New Functions
### Exponential Definition
For any complex $z$, we define:
$$\exp(z)=\sum_{n=0}^\infty \frac{z^n}{n!}=e^z$$
As with $z=x$ and $z=i\theta$ we have that: $$e^0=1,\space e^ze^w=e^{z+w}$$
#### General Example
Let $z=x+iy$
Then $$e^z=e^{x+iy}=e^xe^{iy}=e^x(\cos y+i\sin y)$$
##### Practical Example
$$e^\left( 1+i \frac{\pi}{4} \right)=e^1e^{i \frac{\pi}{4}}=e\left( \cos \frac{\pi}{4}+i\sin \frac{\pi}{4} \right)=\frac{e}{\sqrt{ 2 }}(1+i)$$
#### Functions of Complex Exponentials
Q: What are $\Re(e^z),\Im(e^z),|e^z|,\operatorname{arg(e^z)}$ ?
A: $$\begin{matrix}
\Re(e^z)=e^x\cos y=e^{\Re(z)}\cos(\Im(z)) \\
\Im(e^z)=e^x\sin y=e^{\Re(z)}\sin(\Im(z)) \\
|e^z|=e^x \\
\operatorname{arg}(e^z)=y=\Im(z) \text{ Only defined mod }2\pi
\end{matrix}$$
##### Further Definitions
$$\overline{e^z}=e^x(\cos y+i\sin y)=e^x(\cos y-i\sin y)=\overline{e^xe^{iy}}=e^xe^{-iy}=e^{x-iy}=e^{\overline{z}}$$
### Trigonometric Definitions
Recall the 2 main [[Further Trigonometric Identities]].
todo!

#### Further Definitions
Q: In terms of $\Re(z)$ and $\Im(z)$, what are $\Re(\sin z)$ and $|\cosh z|$
A:
$$\begin{matrix}
\text{Let }z=x+iy, \text{then } \sin z &=\frac{e^{i(x+iy)}-e^{-i(x+iy)}}{2i} \\
&=-\frac{i}{2}(e^{ix}e^{-y}-e^{-ix}e^y) \\
&=-\frac{i}{2}((\cos x+i\sin x)e^{-y}-(\cos x-i\sin x)e^y) \\
&=-\frac{i}{2}
\end{matrix}$$
todo!
