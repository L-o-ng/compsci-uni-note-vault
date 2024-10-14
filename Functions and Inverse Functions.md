#notes #incomplete 

A **function** $f$ associates a **value** $f(x)$ to every number $x$ in its **domain**.
## Examples
+ $f(x)=x^2$
	+ domain: $\mathbb{R}$
+ $f(x)=\frac{1}{x}$
	+ domain: $\mathbb{R}\backslash\{0\}$
+ $f(n)=n!$
	+ domain: $\mathbb{N}$
+ $f(x)=\left\{\begin{array}-x+2&:0\le x\le2\\\text{-}1&:2\lt x\lt4\end{array}\right.$
	+ domain: $0\le x\lt4$
+ $f(x)=\left\{\begin{array}{l@{}l}1&:\text{if }x\text{ is rational }=\frac{p}{q}\text{ for }p,q\in\mathbb{N},q\ne0\\0&:\text{otherwise}\end{array}\right.$
## Inverse Functions
For a function $f(x)$, we can define **an** inverse function, $f^{-1}(x)$, such that:$$f(f^{-1}(x))=x$$
So, $f(f^{-1}(y))=y$ so if we solve $f(x)=y$ for $x$, then $x=f^{-1}(y)$.
**Practically, to find $f^{-1}(x)$, just solve for x, $y=f(x)$.**
The plot of the inverse is obtained by reflecting the plot of $y=f(x)$ across $y=x$, since we are swapping $x$ and $y$.
### Example
Q: If $f(x)=\frac{1}{3x+4}$, what is $f^{-1}(x)$?
A:
1) Solve $y=\frac{1}{3x+4}$ for $x$.
2) $\implies3x+4=\frac{1}{y}$
3) $x=\frac{1}{3}(\frac{1}{y}-4)=\frac{1-4y}{3y}$
4) So $f^{-1}(x)=\frac{1-4x}{3x}$
## Square Root
We can now define $\sqrt{x}$ as **the** inverse of $x^2$ that is also positive.
+ **Definition** - For every $x\ge0$, $\sqrt{x}$ is the **unique**, **non-negative number** such that $(\sqrt{x})^2=x$.

### Graph
![[Graph of square root.png]]
Note, 
+ $\sqrt{x}\ge0$ always.
+ $\sqrt{x}$ not defined when $x\lt0$.
### Example
Q: What is $\sqrt{2}$?
A: 
1) A number $y\ge0:y^2=2$.
2) Use trial and error to hone in.
