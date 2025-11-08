#notes 

The master theorem allows you to solve recurrences of the form $$
T(n)=aT\left( \frac{n}{b} \right)+f(n)
$$for **constants** $a \geq 1\text{ and }b > 1$. For example, [[Merge Sort]] uses $a=2,b=2,f(n)=a^{\prime}n$.
There are 3 cases: 
+ If $f(n)=O(n^{\log_{b}(a)-\epsilon})$ for some $\epsilon>0$ **then** $T(n)=\Theta(n^{\log_{b}a})$.
+ If $f(n)=\Theta(n^{\log_{b}(a)}\cdot \log^kn)$ with $k>0$ **then** $T(n)=\Theta(n^{\log_{b}a}\cdot \log^{k+1}n)$
+ If $f(n)=\Omega (n^{\log_{b}(a)=\epsilon})$ for some constant $\epsilon>0$ **and** if $af\left( \frac{n}{b} \right)\leq cf(n)$ for some constant $c<1$ and all $n$ large enough, **then** $T(n)=\Theta(f(n))$.

See [[Analysing QuickSort]], [[Randomised Quicksort]], and [[AaDS Week 10]] for examples.