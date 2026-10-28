#notes 

We want, for each $i,k:p(S_{i}=k|x)$.
We define $B_{l}(i)=p(x_{i+1},\dots,x_{L}|S_{i}=l)$ as the probability of seeing $x_{i+1},\dots,x_{L}$ and the hidden state at site $i$ is $l$.

We work recursively backwards from the end of the sequence:
$$
B_{l}(i)=\sum_{k}m_{lk}\cdot e_{k}(x_{i+1})\cdot B_{k}(i+1)
$$
We initialise $B_{l}(L)=1$ for every state $l$, then compute $i=L-1,L-2,\dots,1$.

