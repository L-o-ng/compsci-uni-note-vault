#notes 

$$\boxed{\LARGE{\int_{a}^b f(u(x)) \frac{du}{dx}dx=\int_{u(a)}^{u(b)} f(u)du}}$$
## Examples
### Example 1
$$\array{
I=\int_{0}^{\pi/2}\exp(\sin x)\cos xdx \\
\text{Set }u(x)=\sin x\text{ then }du= \frac{du}{dx}dx=\cos xdx \\
\text{Endpoints at }u(0)=0,\space u\left( \frac{\pi}{2} \right)=1 \\
\text{So }I=\int_{0}^1 \exp(u)du=e^{ u }\Bigg|_{u=0}^{u=1}=e-1
}$$
### Example 2
$$\array{
I=\int_{0}^1 x^6\sqrt{ x^7+12 }\space dx\\
\text{Set }u(x)=x^7 + 12 \\
\text{So }du=7x^6dx\text{ so }x^6dx= \frac{1}{7}du \\
\text{Endpoints at }u(0)=12,\space u(1)=13 \\
\text{So }I=\int_{12}^{13} \frac{1}{7}u^{1/2}du=\frac{1}{7} \frac{2}{3} u ^{3/2} \Bigg|_{u=12}^{u=13}= \frac{2}{21}(13^{3/2}-12^{3/2})
}$$
### Example 3
$$\LARGE\array{
In=\int_{0}^1 (-\ln x)^n dx \\
\text{Let }u=-\ln x \implies x=e^{-u} \\
du=-\frac{1}{x}dx\text{ so }dx=-xdu=-e^{-u}du \\
\text{Enpoints at } \eqalign{
x=0 &\implies u=\infty \\
x=1 &\implies u=0
} \\
\text{So }In=-\int_{\infty}^0u^ne^{-u}du = \Gamma(n+1)
}$$
## Indefinite Examples
### Example 1
$$\array{
I=\int x^6\sqrt{ x^7+12 }\space dx \\
\dots=\frac{1}{7} \frac{2}{3}u^{3/2}+c \\
\text{NB: Don't leave as a function of }u\text{.}\\
=\frac{2}{21}(x^7+12)^{3/2}+c
}$$
