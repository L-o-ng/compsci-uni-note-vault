#notes 

A string $w$ over a finite alphabet can be encoded by a single number $[w]$, and so can a TM $[\langle \mathscr{M} \rangle]$, which we shorten to $[\mathscr{M}]$. 
A configuration of a TM $\mathscr{M}$ can be encoded as a single number $[q,i,w]$ via a [[Primitive Recursive Functions|Primitive Recursive Function]] $[q,i,w]=C(q,i,w)$.
Moreover, if a configuration $q,i,w$ yields a configuration $q',i',w'$, then the function $\operatorname{Step}([q,i,w])=[q',i',w']$ is primitive recursive.

Finally, the step-counter function can be defined as:
$$
\begin{align}
\operatorname{SC}([\mathscr{M}],[w],0) &= [q_{\text{start}},0,w] \\
\operatorname{SC}([\mathscr{M}],[w],t+1) &= \operatorname{Step(\operatorname{SC}([\mathscr{M}],[w],t))}
\end{align}
$$

