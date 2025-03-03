#notes 

Induction is a method of analysing recursive algorithms.
## Method
In short, the process is the art of guessing the solution followed by the maths of verification of the base case(s) and step.
Consider recurrence for [[Merge Sort]] as derived in [[Recurrences]]:
$$T(n) \le \begin{cases}
d & \text{if }n \leq c\text{, for constants }c,d > 0 \\
\underbrace{2\cdot T\left( \frac{n}{2} \right)}_{\text{Recursions}}+\underbrace{a\cdot n}_{merging} & \text{otherwise}
\end{cases}$$
### Guessing
Intuitively, this looks like $T(n)=O(n\log_{2}n)$
However, you can derive this by starting big and reducing the upper bound:
+ If $O(n^4)$ works, try $O(n^3)$.
+ Try $O(n^2)$.
+ Try $O(n)$.
+ If it doesn't work, go back up to $O(n\log n)$
### Verification
$$\array{
\text{Claim: }T(u)\leq \alpha n\log_{2}n, n\geq 2,\text{ for }\alpha=\operatorname{max}\left\{  \frac{d}{2},a  \right\} \\ \\
\text{Proof: } \\
\array{

\eqalign{
\text{Base: } \\
2 \le n \le c : \\
d &\le \alpha \cdot n\log_{2}n \\
\alpha\cdot n\log_{2}n &\ge 2\alpha\log_{2}2 = 2\alpha \ge d \\
\text{Satisfied if }\alpha \ge \frac{d}{2}
}
&
\eqalign{
&\text{Inductive Step: } \\
\text{Assume }&T(n^\prime)\le \alpha n^\prime\log_{2}n^\prime\text{ for }n^\prime<n \\
T(n) &\le 2T\left( \frac{n}{2} \right)+an \\
&\le 2\alpha  \frac{n}{2}\log_{2} \frac{n}{2}+an \\
&\le \alpha n\log_{2} \frac{n}{2}+an \\
&= \alpha n(\log_{2}n-\log_{2}2)+an \\
&=\alpha n\log_{2}n-\alpha n+an \le \alpha n\log_{2}n \\
&\text{This equality holds for }\alpha \ge a 
}
} \\
\implies \text{Choose }\alpha=\operatorname{max}\left\{  \frac{d}{2},a  \right\}, \text{then the proof works.}\quad \Box \\
\text{Thus, }T(n)\text{ is }O(n\log n)
}$$


