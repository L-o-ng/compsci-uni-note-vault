#notes

## Definitions
+ **Factorial** - $n!=n(n-1)(n-2)...2\cdot1\text{ for }n\in\mathbb{N}$
	+ NB: $0!=1$
+ **Binomial Coefficient** - $(^n_k)=\frac{n!}{k!(n-k)!}\text{ for }n,k\in\mathbb{N},n\ge k$
	+ Coefficients follow Pascal's Triangle.
	+ There is a left-right symmetry: $$(^n_{n-k})=\frac{n!}{(n-k)!(n-(n-k))!}=\frac{n!}{(n-k)!k!}=(^n_k)$$

## Proof of Pascal's triangle addition
**Claim** - $(^{n+1}_k)=(^n_{k-1})+(^n_k)$ or any number on the triangle is the sum of the 2 numbers above it.

1) $RHS=\frac{n!}{(k-1)!(n-k+1)!}+\frac{n!}{k!(n-k)!}$
2) $=\underbrace{\frac{n!}{k!(n-k+1)!}(k+(n-k+1))}_{\text{Using k!=k(k-1)!, and (n-k+1)!=(n-k+1)(n-k)!}}$
3) $=\frac{n!}{k!(n-k+1)!}(n+1)=\frac{(n+1)!}{k!(n-k+1)!}=(^{n+1}_k)=LHS$

## What is $(a+b)^n$ expanded?

| n=1 | $(a+b)^1=1a+1b$                         |
| --- | --------------------------------------- |
| n=2 | $(a+b)^2=1a^2+2ab+1b^2$                 |
| n=3 | $(a+b)^3=1a^3+3a^2b+3ab^2+b^3$          |
| n=4 | $(a+b)^4=1a^4+4a^3b+6a^2b^2+4ab^3+1b^4$ |
Or generally, for any interger $n\ge1$,
$$(a+b)^n=\sum_{k=0}^n(^n_k)a^{n-k}b^k$$
### Proof
Use [[Proof by Induction]]:
1) It is true for $n=0$: $(a+b)^0=1$, $\sum_{k=0}^0(^0_k)a^{0-k}b^k=(^0_0)a^0b^0=1$
2) To check, for $n=1$, $(a+b)^1=a+b$, $\sum_{k=0}^1(^1_k)a^{1-k}b^k=(^1_0)a^{1-0}b^0+(^1_1)a^0b^1=a+b$
3) Now assume that the theorem holds for some $n$, it also holds for $n+1$.
4) Consider the LHS for $n+1$: $$(a+b)^{n+1}=(a+b)(a+b)^n=(a+b)\underbrace{\sum_{k=0}^n(^n_k)a^{n-k}b^k}_{\text{By assumption}}$$
5) $$=\sum_{k=0}^n(^n_k)a^{n-k+1}b^k+\underbrace{\sum_{k=0}^{n}(^n_k)a^{n-k}b^{k+1}}_{\text{now let j=k+1}}$$
6) $$=\space\shortparallel+\underbrace{\sum_{j=1}^{n+1}(^n_{j-1})a^{n-j+1}b^j}_{\text{now let j=k}}$$
7) $$=\space\shortparallel+\sum_{k=1}^{n+1}(^n_{k-1})a^{n-k+1}b^k$$
8) Combining the 2 summations, $$\sum_{k=0}^{n+1}[(^n_k)+(^n_{k-1})]a^{n-k+1}b^k$$
9) $$=\sum_{k=0}^{n+1}(^{n+1}_k)a^{n+1-k}b^k$$
10) = RHS, therefore by induction the theorem holds for all $n\in\mathbb{N}$.
