#coursework 

1) Q
	1) Prove if $f(x)=k\cdot g(x)\text{ then }f^\prime(x)=k\cdot g^\prime(x)$
		1) $$f^\prime(x)=\lim_{ h \to 0 } \frac{kg(x+h)-kg(x)}{h}=k\lim_{ h \to 0 }\frac{g(x+h)-g(x)}{h}=k\cdot g(x) $$
	2) Prove if $f(x)=g(x)+h(x)\text{ then }f^\prime(x)=g^\prime(x)+h^\prime(x)$
		1) $$\array{f^\prime(x)=\lim_{ h \to 0 }\frac{g(x+h)+h(x+h)-g(x)-h(x)}{h}\\=\lim_{ h \to 0 }\frac{g(x+h)-g(x)}{h} + \frac{h(x+h)-h(x)}{h}=g^\prime(x)+h^\prime(x)}$$
2) Q
	1) $f(x)=(x^2+3x-2)(1-\cos 2x)$
		1) $$f^\prime(x)=(1-\cos 2x)(2x+3)+(x^2+3x-2)(2\sin 2x)$$
	2) $f(x)=\cos 2x$
		1) $$f^\prime(x)=-2\sin 2x$$
	3) $f(x)=\cos^3 2x$
		1) $$f^\prime(x)=-6\sin 2x \cos^2 2x$$
	4) $f(x)=\frac{x^2+3x+7}{x^4+1}$
		1) $$f^\prime(x)=\frac{-2x^5-9x^4-7x^3+2x+2}{x^8+2x^4+1}$$
	5) $y=\frac{\sin(1+x^2)}{x^4+2x^2+6}$
		1) $$\frac{dy}{dx}=\frac{(x^4+2x^2+6)(2x\cos(1+x^2))-(\sin(1+x^2))(4x^3+4x)}{(x^4+2x^2+6)^2}$$
	6) $h(x)=\frac{\sin x+2\cos x}{\sin x-2\cos x}$
		1) $$h^\prime(x)=\frac{(\sin x-2\cos x)(\cos x-2\sin x)-(\sin x+2\cos x)(\cos x+2\sin x)}{(\sin x-2\cos x)^2}$$
3) Let $f(x)=\sin(\cos(\sin((x^3-2x)^5)))$
	1) Find functions $g,h,i,j,k$ such that $f(x)=kjihg(x)\forall x$
		1) $$\array{g(x)=x^3-2x\\ h(x)=x^5\\ i(x)=\sin x\\ j(x)=\cos x\\ k(x)=\sin x}$$
	2) Compute $\frac{dg}{dx}$
		1) $$\frac{dg}{dx}=3x^2-2$$
	3) Find $\frac{dh}{dx}$
		1) $$\frac{dh}{dx}=5(3x^2-2)(x^3-2x)^4$$
	4) Find $\frac{di}{dx}$
		1) $$\frac{di}{dx}=5(3x^2-2)(x^3-2x)^4\cos((x^3-2x)^5)$$
	5) Find $\frac{dj}{dx}$
		1) $$\frac{dj}{dx}=-5(3x^2-2)(x^3-2x)^4\cos((x^3-2x)^5)\sin(\sin((x^3-2x)^5))$$
	6) Find $\frac{dk}{dx}$
		1) $$\frac{dk}{dx}=-5(3x^2-2)(x^3-2x)^4\cos((x^3-2x)^5)\sin(\sin((x^3-2x)^5))\cos(\cos(\sin((x^3-2x)^5)))$$
4) Let $f(x,y)=x^2-2y^3+3xy-2x$
	1) Compute $f_{x}\text{ and }f_{y}\text{ and }\nabla f$
		1) $$\array{f_{x}=2x+3y-2\\ f_{y}=-6y^2+3x\\\nabla f=\begin{bmatrix}2x+3y-2 \\-6y^2+3x\end{bmatrix}}$$
	2) Compute $f_{x}(-1,1)\text{ and }f_{y}(-1,1)$
		1) $$\array{f_{x}(-1,1)=2(-1)+3(1)-2=-1\\f_{y}(-1,1)=-6(-1)^2+3(1)=-3}$$
	3) Compute the directional derivative of $f$ at $(-1,1)$ in the direction $\overrightarrow{v}=\begin{bmatrix}1 / \sqrt{ 2 }\\-1/\sqrt{ 2 }\end{bmatrix}$
		1) $$\lim_{ h \to 0 }\frac{f\left( -1 + \frac{h}{\sqrt{ 2 }},1-\frac{h}{\sqrt{ 2 }} \right)-f(-1, 1)}{h} $$$$=\lim_{ h \to 0 } \frac{\left( -1+\frac{h}{\sqrt{ 2 }} \right)^2-2\left( 1-\frac{h}{\sqrt{ 2 }} \right)^3+3\left( -1+\frac{h}{\sqrt{ 2 }} \right)\left( 1-\frac{h}{\sqrt{ 2 }} \right)-((-1)^2-2(1)^3+3(1)(-1)-2(-1))}{h}$$
Even Symbolab can't figure this out :(




