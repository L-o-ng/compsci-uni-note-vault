#notes 

A finite, first-order Markov chain consists of:
+ A **domain** $D$ of $m>1$ states $\{ s_{1},\dots,s_{m} \}$;
+ An *initial* distribution: $p(s_{1}),\dots,p(s_{m})$;
+ An $m\times m$ **transition matrix** $M=(M_{st})$: the probability of moving to state $t$ given the chain is currently in state $s$.

See [[The Markov Property]].

Here, we have:
+ $D=\{ A,C,G,T \}$;
+ $p(A)$ is the probability that $A$ is the first letter of a sequence;
+ $m_{AG}$ is the probability that $G$ follows $A$.
## Matrix View and Stationary Behaviour
$M=(m_{st})$ is a **stochastic** matrix: every row sums to 1.
If we write the initial distribution as a row vector $u$, then the distribution after $n$ steps is $uM^{n}$.
A distribution $\pi$ is **stationary** if $\pi M=\pi$.
Under *mild* conditions (irreducible, aperiodic), $uM^{n}$ converges to a unique stationary distribution regardless of the starting point.
### Example
![[Markov Chains in Bioinformatics.png]]
![[Markov Chains in Bioinformatics-1.png]]
![[Markov Chains in Bioinformatics-2.png]]
Thus we obtain the stationary distribution:
$$
\pi=\begin{matrix}
0.25 & 0.30 & 0.25 & 0.20
\end{matrix}
$$
where $\pi M=\pi$.

