#notes 

Q: What is $M(n)=\sum_{k=1}^{n}k^2$?
A:
$\frac{n(2n+1)(n+1)}{6}=Q(n)$

See [[Summations#Sums and Sigma Notation|Summation formula]] for $M(n$).
## Testing the formula
| n   | Q(n) | M(n)                                   |
| --- | ---- | -------------------------------------- |
| 0   | 0    | $\sum_{k=0}^{0}k^2=0^2=0$              |
| 1   | 1    | $\sum_{k=0}^{1}k^2=0^2+1^2=1$          |
| 2   | 5    | $\sum_{k=0}^{2}k^2=0^2+1^2+2^2=5$      |
| 3   | 14   | $\sum_{k=0}^{3}k^2=0^2+1^2+2^2+3^2=14$ |
## Mathematical Proof that $M(n)=Q(n)\text{ for all }n\in\mathbb{N}$

1) **Suppose** $M(n)=Q(n)$ for some unspecified value of $n$.
2) Now look at the **next** value, $n+1$.
3) $M(n+1)=\sum_{k=0}^{n+1}k^2=\sum_{k=0}^nk^2+(n+1)^2=M(n)+(n+1)^2=Q(n)+(n+1)^2\text{ by assuption}$
4) So this = $\frac{n(2n+1)(n+1)}{6}+(n+1)^2=\frac{n+1}{6}[n(2n+1)+6(2+1)]$
5) $=>\frac{n+1}{6}(2n^2+7n+6)$
6) $=>Q(n+1)=\frac{(n+1)(2(n+1)+1)(n+1+1)}{6}$
7) So $M(n+1)=Q(n+1)$
In short, if $M(n)=Q(n)$ then $M(n+1)=Q(n+1)$ for any n.
Therefore, we know that if $M(3)=Q(3)$ then $M(4)=Q(4)$ and so on.
$\therefore M(n)=Q(n)\text{ for all }n\in\mathbb{N}$.

## General Template for Proof by Induction
We want to prove some claim: $f(n)=g(n)\text{ for all }n\in\mathbb{N}$.
1) Show that $f(0)=g(0)$ or $f(1)=g(1)$ (or the first $n$ that makes sense).
2) Show that $\text{for any }n\in\mathbb{N}\text{, if }f(n)=g(n)\text{ then }f(n+1)=g(n+1)$.
3) The claim follows by induction.
