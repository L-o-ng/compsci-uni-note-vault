#notes

For $x \in \mathbb{R}$ we define: $$\exp x=e^x=\sum_{n=0}^\infty \frac{x^n}{n!}$$
So, for example: 
$e^0=1$
$e^1=e=1+1+\frac{1^2}{2}+\frac{1^3}{6}+\dots=1+1+\frac{1}{2}+\frac{1}{6}+\frac{1}{24}+\dots \approx 2.7182818\dots$

## Exponential Rules
**Claim 1** - $e^xe^y=e^{x+y}$
**Proof** - $$\exp(x+y)=\sum_{n=0}^\infty \frac{1}{n!}(x+y)^n=\sum_{n=0}^\infty \frac{1}{n!}\sum_{k=0}^n(^n_{k})x^ky^{n-k}$$
$$=\sum_{n=0}^\infty \sum_{k=0}^n \frac{1}{k!(n-k)!}x^ky^{n-k}$$
Note that, $$\sum_{n=0}^\infty \sum_{k=0}^nf(n,k)=\sum_{k=0}^\infty \sum_{n=k}^\infty f(n,k), 0\le k \le n$$
So, $$=\sum_{k=0}^\infty \sum_{n=k}^\infty \frac{1}{k!(n-k)!}x^ky^{n-k}$$
Now let $m=n-k$
$$=\sum_{k=0}^\infty \sum_{m=0}^\infty \frac{1}{k!} \frac{1}{m!}x^ky^m=\sum_{k=0}^\infty \frac{x^k}{k!}\sum_{m=0}^\infty \frac{y^m}{m!}=\exp x\exp y$$
So, $$e^{x+y}=e^xe^y$$
Therefore, $1=e^0=e^{x-x}=e^xe^{-x}$ so $\mathbf{e^{-x}=\frac{1}{e^x}}$
## Logarithms
For $x \ge 0$ we define $\ln x$ such that $\exp(\ln x)=x$
In other words, $\ln$ is the inverse of $\exp$.
Also, $\ln(\exp x)=x$ for all $x \in \mathbb{R}$
### Plot
```functionplot
---
title: 
xLabel: X
yLabel: Y
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x)=E^x
g(x)=log(x)
```
### Logarithm Laws
+ $\ln{1}=0$
+ $\ln(xy)=\ln x+\ln y$
+ $\ln \frac{1}{x}=-\ln x$
+ $\ln x^n=n\ln x,n \in \mathbb{N}$
#### Proofs
1) Use $\exp 0=1$
2) $$\ln x+\ln y=\ln(\exp(\ln x+\ln y))=\ln(\exp(\ln x)\exp(\ln y))=\ln(xy)$$
3) Proved from 2 by putting $y=\frac{1}{x}$
4) Do 2 $n$ times with $y=x$.
## Definition
For any real $x \gt 0$ and any real $c$ we define: $$x^c=\exp(c\ln x)$$
### Properties
+ $\ln x^c=c\ln x$
+ $(x^c)^d=\exp(d\ln x^c)=\exp(dc\ln x)=x^{cd}$
+ $x^cx^d=\exp(c\ln x)\exp(d\ln x)=\exp(c\ln x+d\ln x)=\exp((c+d)\ln x)=x^{c+d}$
	+ so $x^cx^d=x^{c+d}$

## Do the Definitions Agree?
Do the 2 definitions of $\exp$ agree when $c=n \in \mathbb{N}$?
$$x^n=\exp(n\ln x)=\exp(\underbrace{\ln x+\ln x+\ln x}_{\text{n times}})$$
$$=\exp(\ln x)\exp(\ln x)\dots \exp(\ln x)$$
$$=\underbrace{x\times x\times x\times x\times\dots \times x\times x\times x}_{\text{n times}}$$
So it does agree.

## More Observations
+ $x^1=x$
+ $x^0=1$
+ $x^{\frac{1}{2}}=\sqrt{ x }$

