#definition 

For a sequence of random states $X_{1},X_{2},\dots,X_{n}$: a Markov chain assigns:
$$
P(x_{1},\dots,x_{n})=p(x_{1})\prod_{i=2}^{n} m_{x_{i-1}x_{i}}
$$

The **Memoryless Property** states that:
> [!definition] 
> The distribution of $X_{i}$, given all previous states, depends **only** on $X_{i-1}$: $$P(X_{i}=x_{i}|X_{1}=x_{1},\dots,X_{i-1}=x_{i-1})=P(X_{i}=x_{i}|X_{i-1}=x_{i-1})$$

