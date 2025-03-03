#linker 

## Notes
+ See [[Complex Numbers Examples]] for examples.
+ See [[Re() and Im()]] for further notes and identities.
+ Also see [[Solving Complex Equations]]
+ See [[Functions of a Complex Variable]]
+ See [[Transcendental Equations]]

To every point $(x,y)$ in the plane we associate a **complex number** $x+iy,(x,y \in \mathbb{R})$
+ $\mathbb{C}$ = Set of all complex numbers.
+ $(x,y)$ plane = Complex plane, or Argand plane.
![[Complex Plane.png]]
## Operations
For $\mathbb{C}$, we have $+,-,\times,\textdiv$.
==Addition and Subtraction work as expected:==
$$(3+4i)+(-6+2i)=3-6+4i+2i=-3+(4+2)i=-3+6i$$
Multiplication also works as expected, except for 1 new rule:
$$i^2=-1$$
For example, 
+ $(1+i)(2+i)=2+3i-1=\underline{1+3i}$
+ $(3-i)(4+2i)=12-4i+6i+(-i)(2i)=12+2i-2i^2=\underline{14+2i}$
+ $(1+i)^3=(1+i)^2(1+i)=2i(1+i)=2i+2i^2=\underline{-2+2i}$

Complex numbers tend to be named $z$ or $w$.
So we write: 
+ $$\array{z=x+iy\\w=u+iv}$$
So in equations,
+ $$\array{z+w=(x+iy)+(u+iv)=\underline{x+u+i(y+v)}\\zw=(x+iy)(u+iv)=\underline{xu+iyu+ixv-yv}}$$
## Division
1) By a real number: $$\frac{a+bi}{c}=\frac{a}{c}+\frac{b}{c}i$$
2) By a complex number: $$\array{\frac{1-2i}{3+4i}=\frac{1-2i}{3+4i}\times \frac{3-4i}{3-4i}\\=\frac{(1-2i)(3-4i)}{(3+4i)(3-4i)}\\=\frac{3-6i-4i+8i^2}{9+12i-12i-16i^2}\\=\frac{-5-10i}{25}\\ \implies \frac{1-2i}{3+4i}=\underline{-\frac{1}{5}-\frac{2}{5}i}}$$
So we can divide by **any** complex number except 0.

