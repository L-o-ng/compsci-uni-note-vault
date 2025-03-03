#notes

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
Using these, we define for any complex $z$:
$$\LARGE\begin{array} \\
\cos z=\frac{e^{iz}+e^{-iz}}{2} \\
\sin z=\frac{e^{iz}-e^{-iz}}{2i} \\
\cosh z=\frac{e^z+e^{-z}}{2} \\
\sinh z=\frac{e^z-e^{-z}}{2}
\end{array}$$
Notice that: 
+ $$\cosh(iz)=\cos z$$
+ $$\cos(iz)=\cosh z$$
+ $$\sinh(iz)=\frac{e^{iz}-e^{-iz}}{2}=i\sin z$$
+ $$\sin(iz)=i\sinh z$$
Now see [[More Complex Trigonometry]]
#### Further Definitions
Q: In terms of $\Re(z)$ and $\Im(z)$, what are $\Re(\sin z)$ and $|\cosh z|$
A:
$$\begin{align}
\text{Let }z=x+iy, \text{then } \sin z &=\frac{e^{i(x+iy)}-e^{-i(x+iy)}}{2i} \\
&=-\frac{i}{2}(e^{ix}e^{-y}-e^{-ix}e^y) \\
&=-\frac{i}{2}((\cos x+i\sin x)e^{-y}-(\cos x-i\sin x)e^y) \\
&=-\frac{i}{2}\cos xe^{-y}+\frac{1}{2}\sin xe^{-y}+\frac{i}{2}\cos xe^y+\frac{1}{2}\sin xe^y \\ 

\text{So }\Re(\sin z)=\sin x\cdot \frac{e^y+e^{-y}}{2}=\sin x\cosh y \\
\text{So, in general, }\underline{\Re(\sin z)=\sin \Re(z)\cosh \Im(z)}
\end{align}$$
$$\begin{align} \\
|\cosh z|^2 &=\cosh z \cdot\overline{\cosh z}=\frac{e^z+e^{-z}}{2}\cdot \overline{\frac{e^z+e^{-z}}{2}} \\
&=\frac{1}{4}(e^z+e^{-z})(e^{\overline{z}}+e^{-\overline{z}}) \\
&=\frac{1}{4}(e^{z+\overline{z}}+e^{-z+\overline{z}}+e^{z-\overline{z}}+e^{-(z+\overline{z})}) \\
&=\frac{1}{2}\left( \frac{e^{z+\overline{z}}+e^{-(z+\overline{z})}}{2} \right)+\frac{1}{2}\left( \frac{e^{z-\overline{z}}+e^{-(z-\overline{z})}}{2} \right) \\
&=\frac{1}{2}\left( \frac{e^{2\Re(z)}+e^{-2\Re(z)}}{2} \right)+\frac{1}{2}\left( \frac{e^{2i \Im(z)}+e^{-2i \Im(z)}}{2} \right) \\
&=\frac{1}{2}\cosh(2\Re(z))+\frac{1}{2}\cos(2\Im(z)) \\
\therefore |\cosh z|=\sqrt{ \frac{1}{2}\cosh(2x)+\frac{1}{2}\cos(2y) }
\end{align}$$
