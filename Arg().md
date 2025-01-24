#notes

See [[Polar Representation]] for an alternative way of expressing a complex number.

For a complex number $z$, we define the argument of $z$, denoted $\arg(z)$ as the *angle* between the $x\text{-axis}$ and the line between $0\text{ and }z$ anticlockwise.
+ Clockwise angles count as negative angles.
![[Arg function diagram.png]]
**We usually try to pick $\textcolor{cyan}{\mathbf{-\pi<\arg(z)<\pi}}$**
## Examples
+ $\arg(1+i)=\frac{\pi}{4}$
+ $\arg(3)=0$
+ $\arg(-3)=\pi$
## New names
We now have new names for standard trigonometric objects:
+ $x=\Re(z)$
+ $y=\Im(z)$
+ $r=|z|$
+ $\theta=\arg(z)$
Also, we know that:
+ $\array{x=r\cos \theta\\y=r\sin \theta}$
+ $r=\sqrt{ x^2+y^2 }$
+ $\tan \theta=\frac{y}{x}$
So:
+ $$\Re(z)=|z|\cos(\arg(z))$$
+ $$\Im(z)=|z|\sin(\arg(z))$$
+ $$|z|=\sqrt{ \Re(z)^2+\Im(z)^2 }$$
+ $$\tan(arg(z))=\frac{\Im(z)}{\Re(z)}$$
## A note on $\tan \theta=\frac{y}{x}$
This equation is **subtle**.
It determines $\theta$ only partially because $\tan(\theta+\pi)=\tan \theta$
Therefore, ==draw a picture to see what theta really is!==
![[Arg tan equation graph.png]]
## More Examples
1) $arg(\overline{z})=-\arg(z)$
2) $\arg(-z)=\pi+\arg(z)$
3) $\arg(rz),r \in \mathbb{R}=\array{\arg(z)&:r>0\\\pi+\arg(z) &:r<0\\undefined &: r=0}$