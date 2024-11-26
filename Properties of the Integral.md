#notes 

+ Swapping $b$ and $a$ gives $$\int_{b}^af(x)dx=-\int_{a}^b f(x)dx$$
+ $$\int_{a}^af(x)dx=0\quad \quad \left( w=\frac{b-a}{N}=0\text{ in this case} \right)$$
+ The integral does not depend on $x$; it is a dummy variable: $$\int_{a}^b f(x)dx=\int_{a}^b f(s)ds$$
+ We can split an integral into pieces: $$\int_{a}^b f(x)dx=\int_{a}^c f(x)dx+\int_{c}^b f(x)dx$$
## Example
Q: Use the [[Integration in Theory#Definition 2|Riemann Sum]] definition to show that $$\int_{a}^b 2xdx=b^2-a^2$$
A: $$\eqalign{
\int_{a}^b 2xdx &= \lim_{ N \to \infty } \sum_{k=1}^N w\cdot \underbrace{2(a+kw)}_{\Tiny\array{f(x)=2x \\ \implies f(a+kw)=2(a+kw)}} \\
&=\lim_{ N \to \infty } \left( 2awN+2aw^2\cdot \frac{N(N+1)}{2} \right) \\
w=\frac{b-a}{N} \text{ so } &=\lim_{ N \to \infty } \left( 2a \frac{b-a}{N}N+2 \frac{(b-a)^2}{N^2}\cdot \frac{N(N+1)}{2} \right) \\
&=\lim_{ N \to \infty } \left( 2a(b-a)+\frac{2(b-a)^2}{2}\cdot \left( 1+\frac{1}{w} \right) \right) \\
&= 2a(ba)+(b-a)^2\times 1 \quad (\text{by COLT}) \\
&= (b-a)(b-a+2a) \\
&= (b-a)(b+a) \\
&=b^2-a^2
}$$

