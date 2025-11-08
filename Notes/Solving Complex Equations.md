#notes
## 1$^{\mathbf{st}}$ Degree Equations
todo!
## 2$^{\mathbf{nd}}$ Degree Equations
todo!
### Example
Q: Solve $z^6-2z^3+2=0$
A: Note that this is a quadratic in $z^3$.
$$\array{\text{Let }w=z^3\text{ so }w^2-2w+2=0\\\text{Discriminant: }b^2-4ac=4-4\cdot 1\cdot 2, -4<0\\ \therefore w=\frac{-b \pm i\sqrt{ 4ac-b^2 }}{2a}=\frac{2 \pm i\sqrt{ 4 }}{2}=1 \pm i=z^3\\\text{Now }z^3=1 + i\text{ or }z^3=1-i\\\text{Both are now in the form }z^n=a\text{ so}\\\text{Step 1: Polar) }1+i=\sqrt{ 2 }e^{\frac{\pi i}{4}}\text{ or }1-i=\sqrt{ 2 }e^{-\frac{\pi i}{4}}\\\text{So }r^3e^{3i\theta}=\sqrt{ 2 }e^{\frac{\pi i}{4}+2\pi ki}\text{ or }r^3e^{3i\theta}=\sqrt{ 2 }e^{-\frac{\pi i}{4}+2\pi ki}\\ \implies r=2^{1/6}\\\text{And }\theta=\frac{\pi}{12}+\frac{2\pi k}{3}\text{ or }- \frac{\pi}{12}+\frac{2\pi k}{3}\text{ for }k \in \mathbb{Z}\\ \text{With unique solutions for }k=0,1,2.\\\text{So we get 6 solutions: }\\ 2^{1/6}e^{\pm i \frac{\pi}{12}},2^{1/6}e^{\pm 3\frac{\pi i}{4}},2^{1/6}e^{\pm \frac{7\pi i}{12}}}$$
### Solving with Complex Coefficients
Start by completing the square in the normal way:
$$(2az+b)^2=b^2-4ac$$
Now solve by letting $$w=2az+b \implies w^2=\underbrace{b^2-4ac}_{\text{Write in polar rep.}}$$
## Equations of the form $\mathbf{z^n=1}$
todo!
## Equations of the form $\mathbf{z^n=a}$
todo!
### General Solution
$$\array{zk=\sqrt[n]{ p } \cdot e^{i(\frac{\chi}{2}+\frac{2\pi k}{n})}\\ k=0,\dots,n}$$
### Example
Q: Solve $z^4=1+\sqrt{ 3 }i$
A:
1) Polar form:$$\array{\text{Let }z=re^{i\theta}\\1+\sqrt{ 3 }i=?\\|1+\sqrt{ 3 }i|=2\\\arg(1+\sqrt{ 3 }i)=\frac{\pi}{3}\\\text{So }1+\sqrt{ 3 }i=2e^{i \frac{\pi}{3}}}$$
2) The equation becomes: $$\underbrace{r^4e^{4i\theta}}_{=z^4}=2e^{i \frac{\pi}{3}}$$
3) Find modulus and $\arg$ of the 2 equations, but for angles, remember $+2\pi k,k \in \mathbb{Z}$ $$\array{\text{Modulus }r^4=2 \implies r=\sqrt[4]{ 2 }\\\text{Arguement }4\theta=\frac{\pi}{3}+2\pi k \implies \theta=\frac{\pi}{12}+\frac{\pi k}{2},k \in \mathbb{Z}\\\text{So the general solution is }z=re^{i\theta}=\sqrt[4]{ 2 }e^{i(\frac{\pi}{12}+\frac{\pi k}{2})}}$$
4) This looks like it has infinite solutions, but only 4 are distinct:
![[Distinct solutions of example complex equation.png]]
