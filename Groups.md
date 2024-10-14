#notes 

A ==Group== is made up of a set $G$, a *binary* operation $\star$, and some axioms.
$\star$ is an abstract operation, just like $f$ or $x$ are abstract functions and values.
## Axioms
+ $\star$ is *closed* on $G$, ie: $\star:G\times G\to G$.
+ $\star$ is *associative* , ie: $\text{for all }a,b,c\text{ in }G;a\star(b\star c)=(a\star b) \star c$.
+ There exists an *identity* element $e\in G$, ie: $\forall a\in G:a\star e=e\star a=a$.
+ $\star$ has an *inverse* element, ie: $\forall a\in G.\exists b\in G:a\star b=b\star a=e$.
## Examples
+ The real numbers with the + operation.
+ The integers with the + operation.
+ **Symmetries**.
Anything we know about groups in general we know about all these groups.
==For example, identity is unique==
### Proof that identity in groups is unique
Identity is unique.
Consider $e_1 \star e_2=e_2\text{ because }e_2\text{ is identity.}$
$=> e_1\star e_2=e_1$
So, $e_1=e_1\star e_2=e_2$.

## Finite Groups
It is common in CS to study finite sets like bits.
In general we can study $Z_n$ modulo (clock) arithmetic.
### $Z_4$
For X=a, Y=b, a+b,

|     | 0   | 1   | 2   | 3   |
| --- | --- | --- | --- | --- |
| 0   | 0   | 1   | 2   | 3   |
| 1   | 1   | 2   | 3   | 0   |
| 2   | 2   | 3   | 0   | 1   |
| 3   | 3   | 0   | 1   | 2   |
