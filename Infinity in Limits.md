#notes 

$$\large \array{
\begin{align}
\lim_{ x \to \infty } f(x) &: \text{Behaviour for large positive }x\text{: replace} |x-a|<\updelta\text{ with } x > \frac{1}{\updelta}\text{ in definition.} \\
\lim_{ x \to \infty } f(x) &: \text{Behaviour for large negative }x\text{: the same, but with } x < -\frac{1}{\updelta}
\end{align}
}$$
## Examples
1) $$\lim_{ x \to \infty } \frac{1}{x}=0$$
2) $$\lim_{ x \to \infty } e^x=0$$
3) $$\lim_{ x \to \infty } x^{-c}=0 \text{ for }c>0$$
4) $$\lim_{ x \to \infty } \frac{1}{\ln x}=0, \text{etc.}$$
5) $$\LARGE{\lim_{ x \to \infty } \frac{2x^2-7x+2}{3x^2+4}=\underbrace{\lim_{ x \to \infty } \frac{2- \frac{7}{x} + \frac{2}{x^2}}{3+ \frac{4}{x^2}}}_{\text{Using }\lim_{ x \to \infty } \frac{1}{x^2}=0}=\frac{2}{3}}$$
6) $$\Large{\lim_{ x \to \infty } \frac{\cos x}{x}=0\text{ by pinching theorem}}$$
### Proof

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x) = 1/x
g(x) = -1/x
h(x) = cos(x) / x
```
$$\array{
-1 \le \cos x \le 1 \\
\therefore \text{for }x \to 0 \\
-\frac{1}{x} \le \frac{\cos x}{x} \le \frac{1}{x} \\
\therefore \text{by pinching theorem}\\
\frac{\cos x}{x} \to 0 \text{ as } x \to \infty
}$$
## Harder Example
$$\lim_{ x \to 0 } \frac{e^x-1}{x}=1$$
### Proof
$$\Large{\begin{align}
&\lim_{ x \to 0 } \frac{\left( 1 + x + \frac{x^2}{2}+\frac{x^3}{3!}+\dots \right)-1}{x} \\
&=\lim_{ x \to 0 } \left( 1 + \frac{x}{2} + \frac{x^2}{3!}+ \frac{x^3}{4!} + \dots \right) \\
&= 1
\end{align}}$$
