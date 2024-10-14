#notes 
## Sums and Sigma Notation
Q: What is M=1 + 2 + 3 + ... + 99 + 100 ?

A: 
$\text{M also = 100 + 99 + 98 + ... + 2 + 1.}$
$\therefore2M=101 + 101 + 101 + ... + 101 \text{ ,100 times}$
$\therefore 101\times100$
$\therefore M=5050$
$$\text{In general, }M(n)=\frac{n(n+1)}{2}$$
Q: $1^2+2^2 + ...+n^2$
A:
This can be written as:
$\sum_{k=1}^{n}k^2$
or more generally, 
$\sum_{k=a}^{b}f(k)=f(a)+f(a+1)+...+f(b)\text{ for }a,b\in\mathbb{Z},b>a$
### Properties of $\sum$
#### Independence of the label
k (from [[Foundations#Sums and Sigma Notation|Sigma Notation]]) is known as a "dummy variable". It acts as a counter between a and b and is needed for a good definition, but does not appear in calculation.
#### We can peel off terms
$\sum_{k=n}^{b}f(k)=\sum_{k=n}^{b-1}f(k) + f(b)$

Similarly for a < c < b,
$\sum_{k=n}^{b}f(k) = \sum_{k=n}^{c}f(k)+\sum_{k=c+1}^{b}f(k)$

And as an example,
$\sum_{k=1}^{100}2 = 200$
#### We can shift the label
$\sum_{k=0}^{10}f(k) = f(0) + f(1) +...+ f(10)$
Which is also equal to:
$\sum_{l=55}^{65}f(l-55)$

Generally,
$\sum_{m=a}^{a+10}f(m-a)=\sum_{l=0}^{10}f(l)$

## Uses
+ [[Proof by Induction]]
+ 