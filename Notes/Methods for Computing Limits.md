#notes 

For method 5, see [[Calculus of Limits Theorem]]
For method 6, see [[Changing Variables in Limits]]
For a final method, see [[L'Hopital's Rule]]
## Method 1
If **nothing special happens**, then the limit is just the function value.
ie: 
+ No infinities
+ No specially defined points
### Examples
#### Example 1
$$\large \array{\lim_{ x \to 3 } \underbrace{\frac{2x^2+3}{7x-1}}_{\tiny\text{Nothing special}} \\ f(3)=\underline{\frac{21}{20}}}$$

#### Example 2
$$\large \array{\lim_{ x \to 0 } x\sin \frac{1}{x}, f(x)=0\sin \frac{1}{0}\implies\text{Something special is happening!}}$$
#### Example 3
$$\large \array{\lim_{ x \to b } x\sin \frac{1}{x} \text{ for }b \ne 0 \\ =b\sin \frac{1}{b}\text{ because nothing special is happening.}}$$
## Method 2
If method 1 gives $\frac{0}{0}$, try to cancel common factors until method 1 does work
### Examples
#### Example 1
$$\lim_{ x \to 1 } \frac{x^2+x-2}{x^2+2x-3}\implies \frac{1^2+1-2}{1^2+2-3}=\frac{0}{0}$$
However, we can write: $$\lim_{ x \to 1 } \frac{(x-1)(x+2)}{(x-1)(x+3)}=\lim_{ x \to 1 } \frac{x+2}{x+3}=\frac{3}{4}$$
#### Example 2
$$\lim_{ x \to 0 } \frac{\sin2x}{\sin x}: \text{Method 1 gives } \frac{0}{0}$$
So use $\sin 2x=2\sin x\cos x$
$$\lim_{ x \to 0 } \frac{2\sin x\cos x}{\sin x}=\lim_{ x \to 0 } 2\cos x=2$$

#### Example 3
$$\lim_{ x \to 0 } x\sin \frac{1}{x}: \text{The above example methods don't apply...}$$
Use the [[Pinching Theorem]] with $f(x)=|x|, g(x)=-|x|$
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
h(x)=x*sin(1/x)
f(x)= abs(x)
g(x)=-abs(x)
```
Indeed, for all $x \ne 0$, $-1 \le \sin \frac{1}{x} \le 1$, so $-|x|\le x\sin \frac{1}{x} \le |x|$
Also, $\lim_{ x \to 0 }\pm|x|=0$ so $\lim_{ x \to 0 }x\sin \frac{1}{x}=0$ by the pinching theorem.
##### In Practice
In questions, it is fine to write the following: 
$$\large \array{
-1 \le \sin \frac{1}{x} \le 1\\
\implies \underbrace{-|x|}_{\text{=0}} \le x\sin \frac{1}{x} \le \underbrace{|x|}_{\text{=0}} \therefore \underbrace{x\sin \frac{1}{x}\to 0 \text{ as } x \to 0}_{\text{by the pinching theorem}}
}$$
## Method 3
Use $\lim_{ x \to 0 }\frac{\sin x}{x}=1$ to find similar results.
### Proof
Geometrically with the [[Pinching Theorem]]:
![[Limits method 3 proof.png]]
$$\begin{align}
\text{Let's set }OP&=OA=1 \\
\text{Then }QA&=\tan x  \\
PR&=\sin x  \\
\text{Area }\vartriangle OAP&=\frac{1}{2} 1\sin x \\
\text{But sector area } OAP &=\frac{x}{2\pi}\times \pi 1^2=\frac{x}{2} \\
\text{Area } \vartriangle OAP=\frac{1}{2} \tan x
\end{align}$$
Geometrically we see that for $0<x< \frac{\pi}{2}$, $$\frac{1}{2}\sin x < \frac{x}{2} < \frac{1}{2}\tan x$$$$\underbrace{\times \frac{2}{\sin x}}_{\sin x>0\text{ in range}}\implies 1 < \frac{x}{\sin x} < \frac{\tan x}{\sin x} = \frac{1}{\cos x}$$$$\implies 1 > \frac{\sin x}{x}>\cos x\text{ (invert)}$$
$$\text{This is true for both }0<x< \frac{\pi}{2} \text{ and }-\frac{\pi}{2}<x<0\text{ as all functions are even.}$$
Now use the pinching theorem, as $x \to 0, \cos x \to 1$
$$\therefore \frac{\sin x}{x} \to 1 \text{ as }x \to 0$$
![[Limits method 3 proof 2.png]]

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x)=sin(x) / x
g(x) = 1/x
h(x) = -1/x
```
