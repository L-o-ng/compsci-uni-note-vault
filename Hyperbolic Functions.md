#notes 

For any $x \in \mathbb{R}$ we define:
+ Hyperbolic Sin: $$\sinh x=\frac{e^x-e^{-x}}{2}$$
+ Hyperbolic Cos: $$\cosh x=\frac{e^x+e^{-x}}{2}$$
## Plots
### sinh
```functionplot
---
title: 
xLabel: X
yLabel: Y
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x) = E^x/2
g(x) = -E^-x/2
sinh(x) = (E^x-E^-x)/2
```
### cosh

```functionplot
---
title: 
xLabel: X
yLabel: Y
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x)=E^x/2
g(x)=E^-x/2
cosh(x)=(E^x+E^-x)/2
```
## Properties
For bullets 3 and 4 see [[Odd and Even Functions]]
+ $\sinh{0}=0$
+ $\cosh 0=1$
+ $\sinh(-x)=-\sinh(x)$
+ $\cosh(-x)=\cosh x$
+ $\cosh x+\sinh x=e^x$
+ $\cosh x-\sinh x=e^{-x}$
+ $\cosh^2x-\sinh^2x=1$
+ $\cosh(x\pm y)=\cosh x\cosh y \pm \sinh x\sinh y$
+ $\sinh(x \pm y)=\sinh x\cosh y \pm \cosh x\sinh y$
+ $\cosh 2x=\cosh^2x+\sinh^2x$
+ $\sinh 2x=2\sinh x\cosh x$
All similar to [[Main Trigonometric Functions]], but **not** the same!

## Inverses
See [[Inverse Hyperbolic Functions]].

## See also
+ $$\tanh=\frac{\sinh}{\cosh}$$
+ $$\operatorname{cosech}=\frac{1}{\sinh}$$
+ $$\operatorname{sech}=\frac{1}{\cosh}$$
## $\tanh$

```functionplot
---
title: tanh
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
tanh(x) = ((E^x-E^-x)/2)/((E^x+E^-x)/2)
```

