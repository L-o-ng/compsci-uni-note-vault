#notes

![[Trig function Triangle.png]]
Suppose the endpoint has coordinates $(a,b)$: 
We **define**: 
+ $\cos{\theta}=\frac{a}{r}$
+ $\sin{\theta}=\frac{b}{r}$
$a, b$ can be negative.
## Observations
If $\theta = 0$ then $a=r,b=0$ so $\cos{0}=1,\sin{0}=0$
Similarly, $\cos{\frac{\pi}{2}}=0,\sin{\frac{\pi}{2}}=1$

[[Pythagoras' Theorem]] says $a^2+b^2=c^2$
+ So, $r^2\cos^2\theta+r^2\sin^2\theta=r^2$
+ $\cos^2\theta+\sin^2\theta=1$
![[Even and Odd Trig function.png]]
![[More trig observations.png]]
## Specific Values

|        | 0   | $\frac{\pi}{6}$        | $\frac{\pi}{4}$      | $\frac{\pi}{3}$        | $\frac{\pi}{2}$ |
| ------ | --- | ---------------------- | -------------------- | ---------------------- | --------------- |
| $\sin$ | 0   | $\frac{1}{2}$          | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{ 3 }}{2}$ | 1               |
| $\cos$ | 1   | $\frac{\sqrt{ 3 }}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$          | 0               |
### Proofs
![[Proofs of trig values.png]]
## Plots of Trigonometric Functions

```functionplot
---
title: 
xLabel: X
yLabel: Y
bounds: [0,6.28,-2,2]
disableZoom: false
grid: true
---
f(x)=sin(x)
g(x)=cos(x)
```
## Addition Formulae
+ $\cos(\alpha\pm\theta)=\cos\alpha\cos\theta\mp\sin\alpha\sin\theta$
+ $\sin(\alpha+\gamma)=\cos\alpha\sin\gamma+\sin\alpha\cos\gamma$
## Example Questions
Q: What is $\sin\left( \frac{19\pi}{6} \right)$?
A: $\sin\left( \frac{19\pi}{6} \right)=\sin\left( 2\pi+\frac{7\pi}{6} \right)=\sin\left( \frac{7\pi}{6} \right)=\sin\left( \pi+\frac{\pi}{6} \right)=-\sin\left( \frac{\pi}{6} \right)=-\frac{1}{2}$

Q: Plot $\sin x+\cos x$
A: 
Let $\sin x+\cos x=R\sin(x+a)$ for some $R,a$.
$=R\sin x\cos a+R\cos x\sin a$
$\therefore$ $R\cos a=1,R\sin a\implies R^2\cos^2a+R^2\sin^2a=R^2=1^2+1^2=2\implies R=\sqrt{ 2 },a=\frac{\pi}{4}$
So $\sin x+\cos x=\sqrt{ 2 }\sin\left( x+\frac{\pi}{4} \right)$ which is plottable.

Q: Find all $x$ such that $\cos x=\frac{\sqrt{ 2 }}{2}$
A: 

```functionplot
---
title: 
xLabel: X
yLabel: Y
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x)=cos(x)
g(x)=sqrt(2)/2
```


So generally for all solutions, $\left\{  \pm\frac{\pi}{4}+2\pi n:n\in\mathbb{Z}  \right\}$

## Other Functions
+ [[More Trigonometric Functions]]
+ [[Inverse Trigonometric Functions]]
