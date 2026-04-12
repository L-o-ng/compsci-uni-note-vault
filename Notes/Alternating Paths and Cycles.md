#notes 

Let $G=(V, E)$ be a graph and $M$ be a [[The Matching Problem|Matching]] in $G$.
Let $P=(v_{0},v_{1},\dots,v_{k})$ be a simple path with edges $e_{1}=v_{0}v_{1}, e_{2}=v_{1}v_{2},\dots,e_{k}=v_{k-1}v_{k}$. 
Then, $P$ is an $M$-alternating path if the edges $e_{1},e_{2},\dots,e_{k}$ are **alternating** in $M$ and in $E \setminus M$.
![[Matchings 2 Alternating Paths.png]]
$P$ is an $M$-*augmenting* path if $P$ is $M$-alternating and neither $v_{0}$ not $v_{k}$ is *covered* by $M$. So, $M=\{ e_{2},e_{4},\dots,e_{k-1} \}$, so $k$ is **odd** in an augmenting path.

Similarly, a **cycle** $C$ in $G$ is an $M$-alternating cycle if its edges alternate between belonging to $M$ and $E\setminus M$.
A vertex $u$ is **matched** by $M$ if it is the *end vertex* of an edge in $M$; otherwise, $u$ is *unmatched* by $M$.
For two sets $A,B$, the **symmetric difference** is the set:
$$
A \otimes B = (A\setminus B)\cup(B\setminus A)
$$
For example: 
$$
\begin{align}
S_{1}&=\{ 4,5,7,8 \} \\
S_{2}&=\{ 2,4,8,9 \} \\
S_{1}\otimes S_{2}&=\{ 2,5,7,9 \}
\end{align}
$$
It takes the **unique** items **only**.
## Lemma
Let $G$ be a graph with a matching $M$ and an $M$-alternating path $P=(v_{0},v_{1},\dots,v_{k})$. If each of the endpoints $v_{0},v_{k}$ of $P$ is:
+ either **unmatched** by $M$;
+ or **matched** by $M \cap P$;

then $M \otimes P$ is another matching in $G$.
## Corollary
If $P$ is an $M$-augmenting path, then in this new matching $M \otimes P$:
+ $|M \otimes P|=|M|+1$;
+ All the matched nodes in $M$ remain matched;
+ Two additional vertices $v_{0},v_{k}$ become **matched** in $M \otimes P$;

So [[Augmenting Paths|augmentation]] of $M$ is replacing $M$ with $M \otimes P$.
