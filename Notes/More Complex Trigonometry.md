#notes 

## Proof 1
By one-line computations one can easily prove:
+ $$\cos^2z+\sin^2z=1\text{ for any complex }z$$
### The Proof
$$\left( \frac{e^{iz}+e^{-iz}}{2} \right)^2+\left( \frac{e^{iz}-e^{-iz}}{2i} \right)^2=\frac{1}{4}(e^{2iz}+2+e^{-2iz}-(e^{2iz}-2+e^{-2iz}))=1$$
## Proof 2
Similarly, we can prove that:
+ $$\cosh^2z-\sinh^2z=1$$
## Proof 3
We can also prove: 
+ $$\sin(z+w)=\sin z\cos w+\cos z\sin w\text{ for all complex }z,w$$
Similarly, $$\cos(z+w)=\dots,\space\sinh(z+w)=\dots$$
==All are the same!==
## Consequences
+ **Periodicity**: for any $n \in \mathbb{Z}$,
	+ $\sin(z+2\pi n)=\sin z$
	+ $\cos(z+2\pi n)=\cos z$
	+ $\sinh(z+2\pi in)=\sinh z$
	+ $\cosh(z+2\pi in)=\cosh z$
		+ These all follow from $e^{i(z+2\pi n)}=e^{iz}(e^{2\pi i})^n=e^{iz}$
		  or $e^{z+2\pi in}=e^z$
+ $\Re(\sin z)$ etc is easier to find:
	+ $$\begin{array} \\
\text{let }z=x+iy\text{ then }\sin z=\sin(x+iy) \\
\implies \sin x\cos(iy)+\cos x\sin(iy) \\
\implies \sin x\cosh y+\cos x(+i)\sinh y \\
\text{So }\Re(\sin z)=\sin x\cosh y
\end{array}$$
