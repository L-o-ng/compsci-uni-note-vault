#notes 

For "nice" functions the derivative is well defined: the function is continuous.

## Niceness
We could have a perfectly valid function with a kink in it:
$$f(x)=\begin{cases}
2-x&:x<1\\
x^2&:x\ge1
\end{cases}$$
We write $\lim_{h \to 0^+}$ for the right hand limit.
We write $\lim_{ h \to 0^- }$ for the left hand limit.

Then the derivative is $2+h\text{ when }h>0$ by first principles.
But when $h<0$, the derivative is $-1$.
These values are contradictory and so the derivative does not exist.
## Continuity
A function $f:\mathbb{R}\to \mathbb{R}$ is said to be continuous at $x=a$ if:
1) $\lim_{ x \to a^- }=\lim_{ x \to a^+ }=L$
2) $f(a)=L$
Or, there cannot be a jump in value of $f(x)\text{ at }x=a$ - it is continuous.

