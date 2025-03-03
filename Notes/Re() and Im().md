#notes

These functions are performed on [[Complex Numbers]].
For more functions, see [[Arg()]].
## Definitions
Let $z=x+iy \in \mathbb{C}$ then we define:
+ $\Re(z)=x$, or the "real part" of $z$.
+ $\Im(z)=y$, or the "imaginary part" of $z$.
+ $|z|=\sqrt{ x^2+y^2 }$, or the [[Modulus|modulus]] of $z$.
+ $\overline{z}=x-iy$, or the complex conjugate of $z$, sometimes called $z^*$.

## Real and Imaginary Axis
If $\Im(z)=0\text{ ie }z=x+0i$ then $z$ is called real.
The $x\text{-axis}$ is called real.

If $\Re(z)=0\text{ ie }z=yi$ then $z$ is called purely imaginary.
The $y\text{-axis}$ is called the imaginary axis.

Note that in the complex plane: 
+ $\Re(z)$ is the $x$ coordinate of $z$.
+ $\Im(z)$ is the y coordinate of $z$.
+ $|z|$ is the distance between $0$ and $z$.
+ $\overline{z}$ is the reflection in the real axis.
## Further Properties
Here, $z=x+iy\text{ and }w=u+iv$.
+ $\Re(z)=\frac{1}{2}(z+\overline{z})$
+ $\Im(z)=\frac{1}{2i}(z-\overline{z})$
+ $z \cdot \overline{z}=|z|^2$
	+ $z\cdot \overline{z}$ is therefore always real and positive.
	+ **However**, $z^2$ is **not**.
		+ Say $z=3+4i$ then $|z|^2=z\cdot \overline{z}=3^2+4^2=25$.
		+ But $z^2=3^2+24i+16i^2=-7+24i$
+ $\overline{z+w}=\overline{z}+\overline{w}$
+ $\overline{zw}=\overline{z}\cdot\overline{w}$
+ $|zw|=|z||w|$
	+ See [[Complex Numbers Examples]] Q5 for an example.
## Computing $\frac{z}{w}$
Generally, we write: $$\frac{z}{w}=\frac{z}{w} \frac{\overline{w}}{\overline{w}}=\frac{z \overline{w}}{w \overline{w}}=\frac{z \overline{w}}{|w|^2},\text{ a real denominator}$$
So $\mathbb{C}$ division has changed $\mathbb{R}$ division.
### Example
$$\array{\text{Compute }\Re\left( \frac{2-i}{2+3i} \right)\text{ and }\Im\left( \frac{2-i}{2+3i} \right)\\\frac{2-i}{2+3i}=\frac{(2-i)(2-3i)}{2^2+3^2}=\frac{1}{13} - \frac{8}{13}i\\\text{So }\Re\left( \frac{2-i}{2+3i} \right)= \frac{1}{13}\text{ and }\Im\left( \frac{2-i}{2+3i} \right)= -\frac{8}{13}}\LaTeX\heartsuit$$
## Further Further Properties
+ $$|\overline{z}|=|z|$$
+ $$|\frac{1}{w}|=\frac{1}{|w|}$$Put $1=z$ to obtain the next:
+ $$|\frac{z}{w}|=\frac{|z|}{|w|}$$
+ $$\overline{(\frac{z}{w})}=\frac{\overline{z}}{\overline{w}}$$
+ 