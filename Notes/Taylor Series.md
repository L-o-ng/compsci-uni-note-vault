#notes 

Consider the [[Generalised Power Series]] form. We know that this is a power series; we can show that this is generic; or that any appropriately differentiable function $f(x)$ has a power series representation. This is called its **Taylor Series**.

A *Taylor Series* is built up by progressively refined polynomial approximations of $f(x)$ near a point $x=a$. The Taylor series is useful because in the interval of convergence, the polynomial partial sums will provide a useful approximation to $f(x)$, which are usually much easier to work with than $f(x)$ itself.
## Finding a Taylor Series
For a function $y=f(x)$ we can plot its graph in the $(x-y)$-plane. We want to approximate the graph by something simple. The simplest graph is a line. We can then approximate the graph of $f$ at a **point** $a$ by taking the tangent at $a$. The slope of this tangent line is of course $f'(x)$ and the equation for this line is: (See [[Linear Approximations]])
$$
y=f(a)+f'(a)(x-a)
$$
This is a first approximation of $f$ and is called the *First Taylor Polynomial*, or $p_{1}(x)$.

The Taylor polynomials are approximations to $f(x)$, which are good near the base point $a$. We will often consider $a=0$ for simplicity, but this is not always the case.
### Error
We can find the error:
$$
f(x)-p_{1}(x)=f(x)-f(a)-f'(a)(x-a)=(x-a)\underbrace{ \left( \frac{f(x)-f(a)}{x-a}-f'(a) \right) }_{ \to 0\text{ as }x \to a }
$$
So, as we approach the point $x=a$, the error tends to 0.
## Higher Order Taylor Series
We can reduce the error by finding higher Taylor polynomials $p_{2}(x),p_{3}(x),\dots$ such that for each $n$:
$$
\frac{f(x)-p_{n}(x)}{(x-a)^{n}}\to 0 \text{ as }x \to a
$$
We can write $f(x)=f(a)+\int _{a}^{x}f'(y) \, dy$ and use a first order approximation for $f'(y)$:
$$
f'(y) \approx f'(a)+(y-a)f''(a)
$$
Integrating this gives:
$$
\eqalign{
f(x)=f(a)+\int _{a}^{x}f'(y) \, dy &\approx \int _{a}^{x}[f'(a)+(y-a)f''(a)] \, dy \\ &= f(a)+(x-a)f'(a)+ \frac{1}{2}(x-a)^{2}f''(a)
}  
$$
So the second order Taylor polynomial is:
$$
p_{2}(x)=f(a)+(x-a)f'(a)+ \frac{1}{2}(x-a)^{2}f''(a)
$$
This is a better approximation since it also matches the second derivative of $f(x)$ at $a$.
## In General
We can generalise to find that the ***Taylor Polynomial of degree*** $N$ for $f(x)$ about $x=a$ is:
$$
 \boxed{ p_{N,a}(x)=f(a)+(x-a)f'(a)+ \frac{1}{2}(x-a)^{2}f''(a)+\frac{1}{3!}(x-a)^{3}f'''(a)\dots+\frac{1}{N!}(x-a)^{N}f^{N}(x)}
$$
We can also write:
$$
P_{N,a}(x)=\sum_{n=0}^{N} \frac{(x-a)^{n}}{n!}f^{n}(a)
$$
Note that $0! =1$.
## Examples
### Example 1
For $f(x)=e^{ x }, f'=f''=\dots=e^{ x }$, so we obtain:
$$
p_{n,0}(x)=1+x+\frac{1}{2}x^{2}+\frac{1}{3!}x^{3}+\dots+\frac{1}{n!}x^{n}
$$
### Example 2
For $f(x)=\sin x, f'=\cos x, f''=-\sin x,f'''=-\cos x$ so we obtain:
$$
p_{3,0}(x)=\sin 0+\cos (0)x-\frac{1}{2}\sin(0)x^{2}-\frac{1}{3!}\cos(0)x^{3}=x-\frac{1}{3!}x^{3}
$$
Note that since $\sin x$ is an odd function, we only get odd powers in the Taylor polynomial.
### Example 3
For $f(x)=\ln x, f'(x)=\frac{1}{x}, f''(x)=-\frac{1}{x^{2}},f'''(x)=\frac{2}{x^{3}},f^{(4)}=-\frac{6}{x^{4}}, etc$. We can calculate $p_{4,1}(x)=-6$, so we obtain:
$$
\eqalign{
p_{4,1}(x)&=f(1)+(x-1)f'(1)+\frac{1}{2}(x-1)^{2}f''(1)+\frac{1}{3!}(x-1)^{3}f'''(1)+\frac{1}{4!}(x-1)^{4}f^{(4)}(1) \\
&= (x-1)-\frac{1}{2}(x-1)^{2}+\frac{1}{3}(x-1)^{3}-\frac{1}{4}(x-1)^{4}
}
$$
We cannot define a polynomial approximation to $\ln x$ at $x=0$ as it is not differentiable there.
### Example 4: Special Case
Consider a case where $f(x)$ is itself a polynomial: suppose $f(x)=x^{2}+2x+1$ and $a=0$. Then:
$$
\begin{matrix}
\eqalign{
f(a)&=1 \\
f'(a)&=2 \\
f''(a)&=2 \\
f'''(a)&=0 \\
\dots&=0 \\
\dots&=0
} &
\eqalign{
\dots& \\
p_{1}(x)=1+2x& \\
p_{2}(x)=1+2x+\frac{2x^{2}}{2}=f(x)& \\
p_{3}(x)=p_{2}(x)& \\
\vdots& \\
p_{N}(x)=p_{2}(x)
}
\end{matrix}
$$
In general, the $N$-th Taylor polynomial of a polynomial function $f(x)$ of degree $n$ will eventually (for $N \geq n$) be the polynomial $f(x)$ itself.

