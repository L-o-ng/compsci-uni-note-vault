#notes 

We define $$A(x)=\int_{a}^x f(s)ds$$so $A(x)$ is an [[Anti-Derivative]] of $f(x)$
	ie. $A^\prime(x)=f(x)$.
## Proof
We want to prove $A^\prime(x)=f(x)$:
$$\eqalign{
A^\prime(x) &= \lim_{ h \to 0 } \frac{A(x+h)-A(x)}{h} \\
&= \lim_{ h \to 0 } \frac{\int_{a}^{x+h}f(s)ds-\int_{a}^x f(s)ds}{h} \\
&= \lim_{ h \to 0 } \left[ \int_{x}^{x+h}f(s)ds \right] \frac{1}{h} \\
&= \lim_{ h \to 0 } \lim_{ N \to \infty } \sum_{k=1}^N wf(x+kw) \frac{1}{h} \quad \quad \text{With }w=\frac{x+h-x}{N}=\frac{h}{N} \\
&= \lim_{ h \to 0 } \lim_{ N \to \infty } \sum_{k=1}^N \frac{f\left( x+ \frac{kh}{w} \right)}{N} \\
\text{By swapping limits,}\quad&=\lim_{ N \to \infty } \lim_{ h \to 0 } \sum_{k=1}^N \frac{f\left( x+ \frac{kh}{w} \right)}{N} \\
&=\lim_{ N \to \infty }\sum_{k=1}^N \underbrace{\frac{f(x)}{N}}_{\Tiny\text{Continuous at }f\text{ by M1}} \\
&=\lim_{ N \to \infty } f(x) = f(x)\text{ so }\underline{A^\prime(x)=f(x)}
}$$
## Consequence of the Theorem
$$\int_{a}^b f(t)dt=F(b)-F(a)\text{ for any anti-derivative }F\text{ of }f.$$
### Proof of Consequence
$$\eqalign{
\int_{a}^b f(s) &= A(b) \\
&=F(b)+c \quad \quad \text{Since anti-derivatives differ at mst by a constant} \\
\text{But then put }b=a, \quad &=0 \\
&=F(a)+c \text{ so }c=F(a)
}$$
