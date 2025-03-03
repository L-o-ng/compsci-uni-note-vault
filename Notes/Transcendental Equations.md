#notes

**Transcendental** means *not polynomial*.
## Examples
### Example 1
Q: Solve $e^z=-1$
A: The method is similar to $z^n=a$. Write in polar forms, then equate modulus and argument of either side ($+2\pi k$ to argument for $k \in \mathbb{Z}$)
But here, Cartesian $z \to\text{ polar rep. }e^z$
$$\text{Let }z=\underbrace{x+iy}_{\text{Cartesian}}\text{ then }e^z=e^xe^{iy}$$$$-1 = e^{i\pi}$$$$\text{So }e^z=-1\text{ becomes }e^xe^{iy}=e^{i\pi}$$$$\text{Modulus: }e^x=1\implies x=0$$$$\text{arg: }y=\pi+2\pi k$$$$\text{So }z=\pi i(1+2k)\text{ for }k \in \mathbb{Z}, \text{infinite solutions!}$$
### Example 2
Q: Solve $e^z=0$
A: $$\text{Set }z=x+iy\text{ then }e^xe^{iy}=0$$$$\text{Modulus: }e^x=0, \text{ no solutions}$$$$\text{So }e^z=0\text{ has no solutions}$$
___
Unlike algebraic equations according to the [[Fundamental Theorem of Algebra]], the number of solutions to a transcendental equation is not *a priori* determined!

NB: We will get questions involving $e^z=a$, but perhaps disguised:
### Example 3
Q: Solve $e^{2z}+2e^z-3=0$
A: $$(e^z+3)(e^z-1)=0$$$$\therefore e^z=-3 \text{ or }e^z=1$$$$\array{\text{Let }z=x+iy,-3=3e^{i\pi}\\ \text{So }e^xe^{iy}=3e^{i\pi+2\pi ki}\\ e^x=3\implies x=\ln 3\\ y=\pi+2\pi k\\ \text{So }z=x+iy=\ln 3 +i\pi(1+2k)}\space\text{ or }\space\array{e^xe^{iy}=e^0\\ \text{So }x=0\\ y=2\pi k \\ \\ z=2\pi ki}$$
### Example 4
Q: Solve $\cos z=\sin z$ for complex $z$.
A: $$\Large{\array{
\frac{e^{iz}+e^{-iz}}{2}=\frac{e^{iz}-e^{-iz}}{2i} \\
\times 2i = i(e^{iz}+e^{-iz})=e^{iz}-e^{-iz} \\
(i-1)e^{iz}=-(i+1)e^{-iz} \\
\times \frac{e^{iz}}{1-i} = e^{2iz}= \frac{1+i}{1-i} \\
\text{So we need to solve }e^{2iz}=e^{-2y}e^{2ix} = e^{i\pi/2} \\
\begin{align}
\implies\text{Modulus}&: e^{-2y}=1 \implies y=0 \\
\implies\text{Arguement}&: 2x=\frac{\pi}{2}+2\pi k \implies x=\frac{\pi}{4}+\pi k
\end{align} \\
\text{So solution is }z=x+iy=\frac{\pi}{4}+\pi k
}}$$
