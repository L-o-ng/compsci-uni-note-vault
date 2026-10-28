#notes 

Given $x$, we compute $p(x)$ to be the sum over all state paths $s$ of $p(x,s)$: the total probability over every path, not just the best one.

We define $F_{l}(i)=p(x_{1},\dots,x_{i};S_{i}=l)$ as the probability of seeing $x_{1},\dots,x_{i}$ and the hidden state at position $i$ is $l$.
We use the same recursive structure as [[Viterbi's Algorithm]], but sum instead of max:
$$
F_{l}(i)=e_{l}(x_{i})\sum_{k}F_{k}(i-1)\cdot m_{kl} 
$$
We initialise $F_{0}(0)=1,F_{k}(0)=0$ for $k! =0$, set $m_{0l}$ appropriately.
This results in $p(x)=\sum_{k}F_{k}(L)$.
## Example
![[The Forward Algorithm.png]]
![[The Forward Algorithm-1.png]]
![[The Forward Algorithm-2.png]]
![[The Forward Algorithm-3.png]]
