#topic 
## Relevant Notes
+ [[Time Complexity]]
+ [[Worst Case Time Complexity]]
+ [[Average Case Time Complexity]]
+ [[Big-O Notation]]
+ [[Sum and Product Rules for Big-O Notation]]
+ [[Big-Omega Notation]]
+ [[Same Order Growth Rates]]
+ [[Little-o Notation]]
+ [[Sublinear Functions]]
+ [[Little-omega Notation]]
## Space Complexity
The **space complexity** of an algorithm is expressed in terms of the memory required by the algorithm for an input of a particular size.
## General Rules
### Rule 1
$$\text{If }f_{1}(x)\text{ is }o(g(x))\text{ and }f_{2}(x)\text{ is }o(g(x))\text{, then }f_{1}(x)+f_{2}(x)\text{ is }o(g(x))$$
### Rule 2
$$\text{If }f_{1}(x)\text{ is }O(g(x))\text{ and }f_{2}(x)\text{ is }o(g(x))\text{, then}f_{1}(x)+f_{2}(x)\text{ is }O(g(x))$$
### Rule 3
$$\text{If }f_{1}(x)\text{ is }\theta(g(x))\text{ and }f_{2}(x)\text{ is }o(g(x))\text{, then }f_{1}(x)+f_{2}(x)\text{ is }\theta(g(x))$$
## Summary
For $g:\mathbb{N}\to \mathbb{N}$:$$\begin{matrix}
\le &: O(g) &= \{ f:\mathbb{N}\to \mathbb{N}|\exists C,k>0:f(n)\le C\cdot g(n)\forall n \ge k \} \\
\ge &: \Omega(g) &=\{ f:\mathbb{N}\to \mathbb{N}|\exists C,k > 0:f(n) \ge C\cdot g(n)\forall n \ge k \} \\
= &: \Theta(g) &= O(g)\cap \Omega(g) \\
< &: o(g) &= \{ f:\mathbb{N} \to \mathbb{N}|\forall C>0\exists k>0:C\cdot f(n)<g(n)\forall n \ge k \} \\
> &: \omega(g) &= \{ f:\mathbb{N}\to \mathbb{N}|\forall C>0\exists k>0:C\cdot g(n) < f(n)\forall n \ge k \}
\end{matrix}$$

