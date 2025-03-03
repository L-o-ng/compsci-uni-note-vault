#notes 

See also: [[Methods for Computing Limits]]

Consider: $$f(X)=\begin{dcases}
x^2 &\text{if }x \ne 0 \\
2 &\text{if }x = 0
\end{dcases}$$
Q: What is $\lim_{ x \to 3 }f(x)$?
A: 9

Q: What is $\lim_{ x \to 0 }f(x)$
A: 0; even though $f(0)=2$!

The limit described the *behaviour* of $f(x)$ as $x$ approaches a point, say $a$. It does not care what *actually* happens at $a$.
**If** $f(x)$ approaches a definite value, say $L$, as $x$ approaches $a$, we say that:
+ The limit exists.
+ We write: $$\lim_{ x \to a } f(x)=L, \text{We can also write this as }f(x)\to L \text{ as }x \to a$$
## Examples
1) $\lim_{ x \to 2 }x^2=4$
2) $\lim_{ x \to 0 }|x|=0$
3) $$\lim_{ x \to 1 }\begin{cases}
x + 2 &\text{if }x \ge 1 \\
x - 2 &\text{if }x < 1
\end{cases}\quad\text{: Does not exist}$$
## Definition
Q: What is $\lim_{ x \to a }f(x)=L$ mathematically.

Roughly speaking, we want $f(x)$ to be "boxed in", so: $$|f(x)-L|<\epsilon$$whenever we take $x$ close to $a$, so $0<|x-a|<\updelta$, without considering $x=a$ exactly.
This "boxing in" should work for ==any== $\epsilon$ however small.
### Precise Definition.
Consider a function $f(x)$, and $a, L \in \mathbb{R}$:
If, for every $\epsilon>0$, there exists a $\updelta>0$ such that: $$|f(x)-L|<\epsilon\text{ for all }x\text{ with }0<|x-a|<\updelta$$then we say $L$ is the **limit** of $f(x)$ as $x$ approaches $a$: $\lim_{ x \to a }f(x)=L$
