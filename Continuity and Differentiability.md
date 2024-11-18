#notes 

## Definition
A function $f(x)$ is **continuous** at a point $x=a$ if $\lim_{ x \to a }f(x)$ exists *and* equals $f(a)$
	So, $f(a)$ must also be defined!
This intuitively means there must not be a **jump** in the graph.
### Examples
#### Continuous Functions
The following functions are continuous at every point in their domain and inverse.
+ $\sqrt{ x }$
+ $\sin x$
+ $\cos x$
+ $e^x$
+ $\ln |x|$
+ $|x|$
+ $\cosh x$
+ $\sinh x$
+ $$f(x)=\begin{cases}x\sin \frac{1}{x}&:x \ne 0 \\0 &: x=0\end{cases}$$
$\lim_{ x \to 0 }f(x)=\lim_{ x \to 0 }x\sin \frac{1}{x}=0=f(0)$ so this function is continuous at 0.
#### Non-Continuous Functions
+ $$f(x)=\begin{cases}x^2 &\text{if }x \ne 0 \\2 &\text{if }x = 0\end{cases}$$
  This is *not* continuous at $x=0$, but it *is* continuous everywhere else. In this case $\lim_{ x \to 0 }f(x)=0$ but $f(0)=2 \ne \lim_{ x \to 0 }f(x)$.
+ $$f(x)=\begin{cases}\sin \frac{1}{x} &\text{if }x \ne 0 \\0 &\text{at }x=0\end{cases}$$

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x)=sin(1/x)
```

This is **not** continuous since $\lim_{ x \to 0 }f(x)$ does not exist.
+ $$f(x)=\begin{cases}0 &\text{if }x=\frac{a}{b},\quad a,b \in \mathbb{Z} \\1 &\text{otherwise}\end{cases}$$
  Is not continuous anywhere!
