#notes 

> A symmetry of an object is a transformation which leaves the object unchanged.
## Examples
### A Graph
Consider the graph of $\cos x$: 

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x)=cos(x)
```
It is symmetric under reflection $x \to -x$, *and* translation $x \to x+2\pi$
### Shapes
#### Circle
A circle is symmetric under an arbitrary rotation about its centre. It has **continuous symmetry** in this way.
#### Hexagon
A rotation by $\frac{\pi}{3}, \frac{2\pi}{3}, \frac{3\pi}{3}, \dots$ is a symmetry: it leaves the hexagon *unchanged*.
Also, reflection in different axis gives symmetry.
#### Equilateral Triangle
![[Group Theory Equilateral Triangle Symmetries.png]]
What symmetries does this triangle have?
+ $r=(_{3}\overset{1}{\triangle}_{2})={}_{2}\overset{3}{\triangle}_{1}$
+ $r^2=\text{rotation by } \frac{4\pi}{3}\text{ clockwise}=r\text{ twice}, r(r(_{3}\overset{1}{\triangle}_{2}))=r^2(_{3}\overset{1}{\triangle}_{2})={}_{1}\overset{2}{\triangle}_{3}$
+ $r^3=\text{identity transformation}=id$
+ $s=\text{Reflection in }A_{s}, \quad s(_{3}\overset{1}{\triangle}_{2})={}_{2}\overset{1}{\triangle}_{3}$
+ $t=\text{Reflection in }A_{t},\quad t(_{3}\overset{1}{\triangle}_{2})={}_{3}\overset{2}{\triangle}_{1}$
+ $u=\text{Reflection in }A_{u},\quad u(_{3}\overset{1}{\triangle}_{2})={}_{1}\overset{3}{\triangle}_{2}$
So we have found 6 symmetries of the triangle.
All 6 transformations can be generated from just $s,r$; for example: $$rs(_{3}\overset{1}{\triangle}_{2})=r(_{2}\overset{1}{\triangle}_{3})={}_{3}\overset{2}{\triangle}_{1}=t$$The group of symmetries of the equilateral triangle is: $$(id, r, s, r^2, \underbrace{rs}_{t}, \underbrace{sr}_{u})$$
