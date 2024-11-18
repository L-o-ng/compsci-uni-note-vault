#notes 

Suppose that $\lim_{ x \to a }f(x)=L$ and $\lim_{ x \to a }g(x)=M$, then:
1) $$\large{\lim_{ x \to a }(f(x)+g(x))=L+M=\lim_{ x \to a }f(x)+\lim_{ x \to a }g(x)}$$
2) $$\lim_{ x \to a } f(x)g(x)=LM=(\lim_{ x \to a } f(x))(\lim_{ x \to a } g(x))$$
3) $$\lim_{ x \to a } \frac{f(x)}{g(x)}=\frac{L}{M}\text{, provided }M \ne 0$$
## Examples
### Example 1
$$\Large{\begin{align}
\lim_{ x \to 0 } \frac{\tan x}{x}&=\lim_{ x \to 0 } \frac{\sin x}{x\cos x} \\
&=\lim_{ x \to 0 } \left( \frac{\sin x}{x} \right)\cdot\left( \frac{1}{\cos x} \right) \\
&=\left( \lim_{ x \to 0 } \frac{\sin x}{x} \right)\left( \lim_{ x \to 0 } \frac{1}{\cos x} \right) \\
&=1\cdot 1  \\
&= \underline{1}
\end{align}}$$
### Example 2
$$\Large{\begin{align}
\lim_{ x \to 0 } \frac{1-\cos2x}{x^2} &= \lim_{ x \to 0 } \frac{2\sin^2x}{x^2} \\
&= 2\left( \lim_{ x \to 0 } \frac{\sin x}{x} \right)^2 \\
&=2\cdot 1^2 \\
&=\underline{2}
\end{align}}$$
