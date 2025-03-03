#notes 

Given vectors $\mathbf{v}_{1},\dots,\mathbf{v}_{n}$ and scalars $a_{1},\dots,a_{n}$, we can form a linear combination:
$$a_{1}\mathbf{v}_{1}+\dots+{a}_{n}\mathbf{v}_{n}$$
Or alternatively, using [[Summations]],
$$\sum_{i=1}^na_{i}\mathbf{v}_{i}$$
## Span
The set of all linear combinations of a set of vectors is called its *span*.
+ If the field is infinite then the span will be infinite for a non-empty set.
### Spanning Set
A set of vectors $S$ is a *spanning* *set* for a vector space $(F,V)$ if $span(S)=V$
Or, more simply, $S$ spans $V$.

## Linear (In)dependence
A set of vectors $S=\{ \mathbf{s_{1},\dots,\mathbf{s}_{n}} \}$ is *linearly dependent* if there exists a linear combination: $$\sum^{i=1}_{n}a_{i}\mathbf{s}_{i}\text{ and }\exists i.a_{i}\ne{0}$$
Or, we can write at least one of them as a linear combination of the others.
A set of vectors is *linearly independent* if it is not linearly dependent.