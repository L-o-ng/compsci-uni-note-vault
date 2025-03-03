#notes 
## Inner Product on the Space $C[a,b]$
$C[a,b]$ consists of all functions that are continuous on the interval $[a,b]$.
The operations within are defined point-wise: if $\mathbf{f}=f(x),\mathbf{g}=g(x)$ then:
$$
(\mathbf{f}+\mathbf{g})=f(x)+g(x),\quad(k\mathbf{f})(x)=kf(x)
$$
Also note that any function continuous on $[a,b]$ is integrable on $[a,b]$.
So, for $\mathbf{f}=f(x),\mathbf{g}=g(x)\in C[a,b]$, we define:
$$
\langle\mathbf{f},\mathbf{g}\rangle=\int _{a}^{b}f(x)g(x) \, dx
$$
This defines an inner product on $C[a,b]$.
Note that each polynomial is a continuous function, so $\Bbb{P}_{n}$ is a subspace of $C[a,b]$ and this inner product works on $\Bbb{P}_{n}$ too.
### Example
Consider $\Bbb{P}_{2}$ or $C[-1,1]$ with inner product:
$$
\langle\mathbf{f},\mathbf{g}\rangle=\int _{-1}^{1}f(x)g(x) \, dx 
$$
Consider two vectors $\mathbf{p}=x,\mathbf{q}=x^{2}$. Then:
$$
\eqalign{
\|\mathbf{p}\|&=\sqrt{ \langle\mathbf{p},\mathbf{p}\rangle }=\sqrt{ \int _{-1}^{1}x x \, dx  }=\sqrt{ \int _{-1}^{1}x^{2} \, dx  }=\sqrt{ \frac{2}{3} } \\
\|\mathbf{q}\|&=\sqrt{ \langle\mathbf{q},\mathbf{q}\rangle }=\sqrt{ \int_{-1}^{1}x^{2}x^{2}\, dx}=\sqrt{ \int _{-1}^{1}x^{4} \, dx  }=\sqrt{ \frac{2}{5} } \\
\langle\mathbf{p},\mathbf{q}\rangle&=\int _{-1}^{1}x x^{2} \, dx =\int _{-1}^{1}x^{3} \, dx =0
}
$$
