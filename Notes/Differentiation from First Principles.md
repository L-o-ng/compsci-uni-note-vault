#notes 

Consider $$\lim_{ h \to 0 }\frac{f(x+h)-f(x)}{h}$$If this limit exists: 
+ It is called the derivative of $f(x)$ and is noted $\frac{df}{dx}$ or $f^\prime(x)$.
+ The function is said to be differentiable at $x$.
---
The derivative measures the slope of a function.
![[First-Principles1.gif]]
## Examples
### Example 1
Q: Derivative of $x^2$ as a limit.
A: $$\eqalign{
\frac{d}{dx}x^2&=\lim_{ h \to 0 } \frac{(x+h)^2-x^2}{h}\\
&=\lim_{ h \to 0 } \frac{x^2+2xh+h^2-x^2}{h}\\
&=\lim_{ h \to 0 } 2x+h \\
&=2x 
}$$
### Example 2
Q: Derivative of $x^n$ as a limit.
A: As above but using [[The Binomial Theorem]].
$$(x+h)^n=x^n+nx^{n-1}h+\dots$$
$$\therefore\frac{d}{dx}x^n=nx^{n-1}$$

And so on: we know all these key derivatives.
## Claim
$$\text{If }f^\prime(x)=0\forall x\text{ then }f(x)=c,\text{ the constant function, for some }c \in \mathbb{R}$$
