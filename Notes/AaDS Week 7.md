#coursework 
1)  Logarithm Questions:
	1) Evaluate the following logarithms:
		1) $\log_{4}64=3$
		2) $\log_{64}4=\frac{1}{3}$
		3) $\log_{16}64=\frac{3}{2}$
		4) $\log_{9}27=\frac{3}{2}$
		5) $\log_{8}16=\frac{4}{3}$
	2) Prove $f(x)=a^x$ and $g(x)=\log_{a}x$ are inverses of each-other.
		1) $$\large \eqalign{
		   fg(x)&=a^{\log_{a}x} \\
		   &=x \\
		   gf(x)&=\log_{a}a^x \\
		   &= x\log_{a}a \\
		   &=x\cdot 1 \\
		   &= x
		   }$$

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x)=E^x
g(x)=log(x)
h(x)=x
```
1) Express each of the following as natural logarithms:
		1) $\log_{5}42 = \frac{\ln 42}{\ln 5}$
		2) $\frac{5}{\log_{2}10} = \frac{5\ln 2}{\ln 10}$
		3) $\log_{3}\sqrt{ e }= \frac{1}{2}\ln 3$
	2) Use logarithm laws to simplify:
		1) $\log_{2}xy-\log_{2}x^2=\log_{2} y-\log_{2} x$
		2) $\log_{2}\frac{8x^2}{y}+\log_{2}2xy=4+3\log y$
		3) $\log_{3}9xy^2-\log_{3}27xy=\log y-1$
		4) $\log_{4}(xy)^3-\log_{4}xy=2\log x+2\log y$
		5) $\log_{3}9x^4-\log_{3}3x^2=1+2\log x$
	3) Prove $a^{\log_{b}(n)}=n^{\log_{b}(a)}$
		1) $$\large \eqalign {
		   LHS&=a^{\log_{b}n} \\
		   &=e^{\ln(a^{\log_{b}n})} \\
		   &=e^{\log_{b}n \ln a} \\
		   &=e^{\frac{\ln n}{\ln b}\ln a} \\
		   &=e^{\frac{\ln a}{\ln b}\ln n} \\
		   &=e^{\log_{b}a\ln n} \\
		   &=e^{\ln(n^{\log_{b}a})} \\
		   &=n^{\log_{b}a}=RHS
		   }$$
	4) Solve for $x$:
		1) $100=50e^{-x}\implies x=-\ln 2$
		2) $\frac{1}{4}=5^{2x-1}\implies x=\frac{1}{2}\log_{5} \frac{1}{4}+ \frac{1}{2}$
		3) $\ln(2x+5)=0\implies x=-2$
		4) $\log_{x}6=\frac{1}{3}\implies x=216$
2) 