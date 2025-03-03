#notes 

We will develop a general algorithm for integrating *any* rational function, ie $$\int \frac{p(x)}{q(x)}dx,\space p,q\text{ are polynomials}$$
## Steps
### 1: Polynomial Division
If our $\int \frac{p(x)}{q(x)}dx$ integral has $\operatorname{degree }(p(x)) \ge \operatorname{degree}(q(x))$, an **improper rational function**, we need polynomial division.
Here, $$\frac{p(x)}{q(x)}=s(x)+ \frac{r(x)}{q(x)}$$In other words, we write $p(x)=q(x)s(x)+r(x)$.
### 2: Factorise $q(x)$
Factorise $q(x)$ into linear or quadratic (if $b^2-4ac < 0$) real factors.
We can **always** do this over the reals by the [[Fundamental Theorem of Algebra]].
Generally, $$\small q(x)=c(x-w_{1})^{\mu_{1}}(x-w_{2})^{\mu_{2}}\dots(x-w_{n})^{\mu_{n}}\times(x^2+b_{1}x+c_{1})^{v_{1}}(x^2b_{2}x+c_{2})^{v_{2}}\dots(x^2+b_{m}x+c_{m})^{v_{m}}$$
### 3: Partial Fractions
Write an ansatz of the form: $$\frac{r(x)}{q(x)}=\sum_{i=1}^n\sum _{m_{i}=1}^{\mu_{i}} \frac{A_{ij}}{(x-w_{i})^{\mu _{i}}}+\sum_{i=1}^m \sum_{n_{i}}^{v_{i}} \frac{B_{ij}x+C_{ij}}{(x^2+v_{i}x+c_{i})^{n_{i}}}$$
Or more simply, if you have $(x-w)^\mu$ in $q(x)$ you need: $$\frac{A}{x-w} + \frac{B}{(x-w)^2} + \dots + \frac{D}{(x-w)^\mu}$$
### 4: Integrate 
Key Integrals: $$\eqalign{
\int \frac{dx}{x-a} &= \ln |x-a| + c \\
\int \frac{dx}{(x-a)^n} &= \frac{1}{(1-n)} \frac{1}{(x-a)^{n-1}} + c, \quad n>1 \\
\int \frac{x}{x^2+a^2}dx &= \frac{1}{2}\ln(x^2+a^2) + c \\
\int \frac{1}{x^2+a^2}dx &= \frac{1}{a}\arctan \frac{x}{a}+c
}$$
## Full Example
$$\array{Q: \text{Integrate }\boxed{I=\int \frac{3x^3+5x+1}{x^3-1}dx} \\ \\
A: \\ \eqalign{\text{Step 1: Polynomial Division:} \quad & 3x^3+5x^2+1 = (x^3-1)3+5x^2+4 \\ \text{So }\quad & I=\int \left( 3+\frac{5x^2+4}{x^3-1}\right)dx=3x+\int \frac{5x^2+4}{x^3-1}dx \\ \\ \text{Step 2: Factorize } x^3-1\text{:}\quad &x-1\text{ is a factor since }1\text{ is a root of }x^3-1=0 \\ \text{So }\quad & x^3-1=(x-1)(x^2+x+1) \\ \text{So }\quad & I=3x + \int \frac{5x^2+4}{(x-1)(x^2+x+1)} \\ \\ \text{Step 3: Partial Fractions: }\quad & \frac{5x^2+4}{(x-1)(x^2+x+1)}=\frac{Ax+B}{x^2+x+1}+\frac{C}{x-1} \\ \text{Cover Up Rule: }\quad & C= \frac{5\cdot 1^2+4}{1^2+1+1}= \frac{9}{3} = 3 \\ \text{Now }\quad & 5x^2+4 = (Ax+B)(x-1)+3(x^2+x+1) \\ & 5x^2 + 4 = Ax^2+Bx-Ax-B+3x^2+3x+3 \\
\text{Coeff }x^2\text{:}\quad & 5=A+3 \implies A=2 \\ \text{Coeff }x\text{:}\quad & 0=B-A+3\implies B=A-3=2-3=-1 \\ \text{Coeff }x^0\text{:}\quad & 4=-B+3 \space\checkmark \\ \text{So}\quad & \boxed{I=3x + \int \frac{2x-1}{x^2+x+1}dx+\int \frac{3}{x-1}dx} \\ \\ \text{Step 4: Integrate: }\quad & \eqalign{
I&=3x + \int \frac{\overbrace{2x+1}^\text{Derivative of denominator}-2}{x^2+x+1}dx + 3\ln |x-1| \\ &=3x+3\ln |x-1| + \int \frac{2x+1}{x^2+x+1}dx-2\int \frac{dx}{x^2+x+1} \\ &= 3x+3\ln |x-1| + \int \frac{du}{u} - 2 \int \frac{dx}{\underbrace{\left(x+ \frac{1}{2} \right)^2+ \frac{3}{4}}_{\text{Complete the square}} } \\ &=3x+3\ln |x-1|+\ln |x^2+x+1|-2 \int \frac{du}{u^2 + \frac{3}{4}}\\ &=\small\underline{3x+3\ln|x-1|+\ln|x^2+x+1|-\frac{2}{\sqrt{\frac{3}{4}}}\arctan\left( \frac{x + \frac{1}{2}}{\sqrt{ \frac{3}{4} }} \right) + c}}}}$$