#notes 

+ $\sinh(\operatorname{arcsinh}x)=x$ for all $x \in \mathbb{R}$
+ $\cosh(\operatorname{arcosh}x)=x$ and $\operatorname{arcosh}x \ge 0$ for all $x \ge 1$

## An Expression for arcsinhx
1) Let $y=\operatorname{arcsinh}x$
2) Then, $\sinh y=x$
3) So $\frac{1}{2}(e^y-e^{-y})=x$
4) Multiplying by $2e^y$, $e^{2y}-1=2xe^y$
5) $\implies e^{2y}-2xe^y-1=0$
6) Let $z=e^y \implies z^2-2xz-1=0$
7) So $e^y=z=x \pm \sqrt{ x^2+1 }$
8) $\sqrt{ x^2+1 }\gt x\text{ so }x-\sqrt{ x^2+1 }\lt0\text{ so this cannot equal }e^y \gt 0 \therefore\text{take the root}$
9) $e^y=x+\sqrt{ x^2+1 }$
10) $y=\ln(x+\sqrt{ x^2+1 })=\operatorname{arcsinh}x$
## And for arcoshx
1) Notice $\cosh 1=$$\frac{e^1+e^{-1}}{2}=\frac{e+\frac{1}{e}}{2}$
2) So $\operatorname{arcosh}\left( \frac{e+\frac{1}{e}}{2} \right)=1$
