#notes 

Given an observed $x=(x_{1},\dots,x_{L})$. we want to compute the state path $s^*$ that maximises the probability $p(s|x)$.

Since $p(s|x)=\frac{p(s,x)}{p(x)}$ and $p(x)$ does not depend on $s$, this is the same as maximising the joint probability $p(s,x)$:
$$
\LARGE{
\eqalign{
s^{*}&=\operatorname{argmax}_{s_{1},\dots,s_{L}}\{ p(s_{1},\dots,s_{L};x_{1},\dots,x_{L}) \} \\
&=\operatorname{argmax}_{s_{1},\dots,s_{L}}\left\{  \prod_{i=1}^{L} m_{s_{(i-1)},s_{i}}\cdot e_{s_{i}}(x_{i})  \right\}
}
}
$$
## Viterbi's Key Quantity
For position $i=1,\dots,L$ and each state $l$, we define:
> [!definition] 
> $v_{l}(i)$ is the probability of the single most probable path through positions 1 to $i$ that ends in state $l$, jointly with emitting $x_{1},\dots,x_{i}$.

Because of [[The Markov Property]], $v_{l}(i)$ can be built from the $v_{k}(i-1)$ values for the previous position:
$$
v_{l}(i)=e_{l}(x_{i})\max_{k}[v_{k}(i-1)m_{kl}]
$$
## Forward Calculation
1. Add the prior estimates of $p(s_{1}=l)$ uniformly or by standard frequency;
2. Set $v_{l}(1)=e_{l}(x_{1})p(s_{1}=l)$ for each state $l$;
3. For $i=2,\dots,L$:
	1. For each state $l,v_{l}(i)=e_{l}(x_{i})\max_{k}[v_{k}(i-1)m_{kl}]$;
	2. And $\operatorname{prev}_{l}(i)=\operatorname{argmax}_{k}[v_{k}(i-1)m_{kl}]$.

The result is the optimal probability, $\max_{k}v_{k}(L)$. We recover $s ^{*}$ by tracing back through $\operatorname{prev}$.
## Practicalities
Multiplying probabilities quickly underflows floating point numbers.
In practice, Viterbi's algorithm works in log-space:
$$
\log v_{l}(i)=\log e_{l}(x_{i})+\max_{k}[\log v_{k}(i-1)+\log m_{kl}]
$$
$\max$ is unaffected since $\log$ is monotonic.

This gives time $O(m^{2}L)$ for each of $L$ positions and $m$ states, a max over $m$ predecessors; and space $O(mL)$ for traceback, or $O(m)$ if only the final probability is needed.
## Example
![[Viterbi's Algorithm.png]]
![[Viterbi's Algorithm-2.png]]
![[Viterbi's Algorithm-1.png]]
