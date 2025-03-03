#notes 

For $\frac{0}{0}$ cases, we have L'Hopital's Theorem. Note that this **only** works when method 1 gives $\frac{0}{0}$, and gives a misleading wrong answer otherwise.
## Definition
Suppose $f(x)\text{ and }g(x)$ are $\underbrace{\text{continuously differentiable}}_{\small\text{ie derivatives exist and are continuous near }a}$ at $x=a$.
Suppose also that $\lim_{ x \to a }\frac{f^\prime(x)}{g^\prime(x)}$ exists, and that $f(a)=g(a)=0$.
Then $$\lim_{ x \to a } \frac{f(a)}{g(a)}=\lim_{ z \to a } \frac{f^\prime(x)}{f^\prime(x)}$$
## Examples
### Example 1
$$\eqalign{
\lim_{ x \to 0 } \frac{\sin x}{x} &= \frac{0}{0} \\
\implies f(x)\sin x \text{ so }f^\prime(x)=\cos x \\
\implies g(x)=x \text{ so }g^\prime(x)=1 \\
\therefore &=\lim_{ x \to 0 } \frac{\cos x}{1}=1
}$$
### Example 2
$$\eqalign{
\lim_{ x \to 0 } \frac{\sinh^2(3x)}{\sin^2(x)} &= \lim_{ x \to 0 } \frac{6\sinh(3x)\cosh(3x)}{2\sin x\cos x} \\
&=\lim_{ x \to 0 } \frac{3\sinh(6x)}{\sin(2x)} \\
&=\lim_{ x \to 0 } \frac{18\cosh(6x)}{2\cos(2x)} \\
&=9
}$$
### Example 3
$$\eqalign{
\lim_{ x \to 1 } \frac{x^2+x-2}{2x^2+5x-3} &= \begin{cases}
\underbrace{\frac{2x+1}{4x+5}=\frac{3}{9}}_{\text{This is wrong!}}  \\
\frac{1^2+1-2}{2\cdot 1^2+5\cdot 1-3}=\frac{0}{4}=0\text{ By method 1}
\end{cases}
}$$
### Example 4
$$\lim_{ x \to 1 } \frac{x^2+x-2}{2x^2-5x+3}=\begin{cases}
\lim_{ x \to 1 } \frac{2x+1}{4x-5}=\frac{3}{-1}=-3 \text{ By L'Hopital} \\
\lim_{ x \to 1 } \frac{(x-1)(x+2)}{(x-1)(2x-3)}=\frac{3}{-1}=-3 \text{ By method 2}
\end{cases}$$
## Proof
$$\large \array{
&\text{Let }f(a)=g(a)=0 \\
&\eqalign{
\lim_{ x \to a } \frac{f^\prime(x)}{g^\prime(x)}&=\lim_{ x \to a } \frac{\lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}}{\lim_{ h \to 0 } \frac{g(x+h)-g(x)}{h}} \\
&=\lim_{ x \to a } \lim_{ h \to o } \frac{f(x+h)-f(x)}{g(x+h)-g(x)} \\
&=\lim_{ h \to 0 } \lim_{ x \to a } \frac{f(x+h)-f(x)}{g(x+h)-g(x)} \\
&=\lim_{ h \to 0 } \frac{f(a+h)-f(a)}{g(a+h)-g(a)} \\
&=\lim_{ h \to 0 } \frac{f(a+h)}{g(a+h)} \\
&=\lim_{ x \to a } \frac{f(x)}{g(x)}}
}$$
Swapping the order of limits is potentially problematic, so this is not quite a rigorous proof.
This swapping is only OK when $f,g$ are continuously differentiable at $a$.