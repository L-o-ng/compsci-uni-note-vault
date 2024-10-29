#notes

The form: $$z=r(\cos \theta+i\sin \theta)$$is called the **polar** representation of $z$.
It tells you immediately what $|z|$ and $\arg(z)$, or $r$ and $\theta$ are.
## Examples
Q: $$\text{Write: }\array{z_{1}=1=\sqrt{ 3 }i\\z_{2}=17\left( \sin\left( \frac{\pi}{4}\right)+i\cos\left( \frac{\pi}{4} \right) \right)\\z_{3}=-7}\text{ in polar representation.}$$
A: Find $|z|,\arg(z)$ and then write it in the form.
1) $$\array{z_{1}=1-\sqrt{ 3 }\implies \array{|z_{1}|=\sqrt{1^2+\sqrt{ 3 }^2}=2\\arg(z_{1})=-\frac{\pi}{3}}\\\text{So }z_{1}=2\left( \cos\left( -\frac{\pi}{3} \right)+i\sin\left( -\frac{\pi}{3} \right) \right)}$$
2) $$\array{z_{2}=17\left( \sin \frac{\pi}{4}+i\cos \frac{\pi}{4} \right)\\|z_{2}|=\sqrt{ 17\sin^2\frac{\pi}{4}+17\cos^2\frac{\pi}{4} }=17\\\arg(z)=\frac{\pi}{4}\\\text{So }z_{2}=17\left( \cos \frac{\pi}{4}+i\sin \frac{\pi}{4} \right)\\\text{NB: You cannot usually swap these!}}$$
3) $$\array{z_{3}=-7+0i\\r=|z|=7\\\arg(z)=\theta=\pi\\\text{So }z_{3}=7(\cos \pi+i\sin \pi)}$$
## What is $\arg(zw)$?
Use polar representation: $$\array{z=r(\cos \theta+i\sin \theta)\\w=\rho(\cos \chi+i\sin \chi)\\\text{Then: }zw=r \rho (\cos \theta+i\sin \theta)(\cos \chi+i\sin \chi)\\\implies r \rho(\cos \theta \cos \chi-\sin \theta \sin \chi+i(\sin \theta \cos \chi+\cos \theta \sin \chi))\\\implies r \rho(\cos(\theta+\chi)+i\sin(\theta+\chi))\\\text{So we see: }|zw|=r \rho=|z||w|\\\arg(zw)=\theta+\chi=\arg(z)+\arg(w)\\\text{So }\mathbf{\arg(zw)=\arg(z)+\arg(w)}}$$
## De Moivre's Theorem
For any integer $n \ge 1$:
$$(\cos \theta+i\sin \theta)^n=\cos(n \theta)+i\sin(n \theta)$$
### Proof
Prove by [[Proof by Induction|induction]]:
$$\array{\text{Clearly true for }n=1\\\text{Assume true for some }n\\\text{Then the next case is }(\cos \theta + i\sin \theta)^{n+1}=(\cos \theta+i\sin \theta)(\cos \theta+i\sin \theta)^n\\\implies(\cos \theta+i\sin \theta)(\cos n \theta+i\sin n \theta)\\\implies \cos \theta \cos n \theta-\sin \theta \sin n \theta+i(\sin \theta \cos n \theta+\cos \theta \sin n \theta)\\\implies \cos(n\theta + \theta)+i\sin(n\theta+\theta)\\\implies \cos((n+1)\theta)+i\sin((n+1)\theta)\\\text{So the theorem is true.}}$$
## Applications
### Computing $z^n$ Quickly
$$\array{(1+i)^{10}=\left( \underbrace{\sqrt{ 2 }\left( \cos \frac{\pi}{4} +i\sin \frac{\pi}{4}\right)}_{\text{Polar representation}} \right)^{10}\\\implies (\sqrt{ 2 })^{10}\left( \cos \frac{\pi}{4}+i\sin \frac{\pi}{4} \right)^{10}\\\implies 2^5\underbrace{\left( \cos\left( \frac{10\pi}{4} \right)+i\sin\left( \frac{10\pi}{4} \right) \right)}_{\text{By De Moivre's Theorem}}\\\implies 32\left( \cos \frac{\pi}{2}+i\sin \frac{\pi}{2} \right)\\=32i }$$
### Proving Trigonometric Identities
For example, writing $\cos 3\theta$ as a polynomial in $\cos \theta$:
$$\array{\cos 3\theta+i\sin 3\theta=(\cos \theta +i\sin \theta)^3\\=\cos^3\theta+3\cos^2\theta i\sin \theta+3\cos \theta(i\sin \theta)^2+(i\sin \theta)^3\text{, By binomial theorem}\\=\cos^3\theta-3\cos \theta \sin^2\theta+i(3\cos^2\theta \sin \theta-\sin^3\theta)\\\text{So }\cos 3\theta=\cos^3\theta-3\cos \theta \sin^2\theta\\=4\cos^3\theta-3\cos \theta}$$
