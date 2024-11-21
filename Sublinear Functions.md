#notes 

A function is called **sublinear** if it grows slower than any linear function. With [[Little-o Notation]] we can make this definition very precise.
## Definition
>A function $f(x)$ is called **sublinear** if $f(x)$ is $o(x)$, so if $\lim_{ x \to \infty } \frac{f(x)}{x}=0$.

### Examples
#### Example 1
The function $f(x)=\frac{100}{\log(x)}$ is sublinear, since: $$\lim_{ x \to \infty } \frac{f(x)}{x}=\lim_{ x \to \infty } \frac{100}{x\log x}=0$$
#### Example 2
$f(x)=\frac{1}{2}x$ is not sublinear because: $$\lim_{ x \to \infty } \frac{f(x)}{x}=\lim_{ x \to \infty } \frac{\frac{1}{2}x}{x}=\frac{1}{2}$$
#### Example 3
The function $f(x)=\sqrt[3]{ x^2 }$ is sublinear, since: $$\lim_{ x \to \infty } \frac{f(x)}{x}=\lim_{ x \to \infty } \frac{x^{\frac{2}{3}}}{x}=\lim_{ x \to \infty } x^{-\frac{1}{3}}=0$$
