#notes 

A function of $f:A\to B$ is an assignment of a unique element of B to **every** element of A.
+ $f:\mathbb{N}\to\mathbb{N}$, where $f(n)=n^2+3$.
+ $f:\wp(\mathbb{N})\backslash\emptyset\to\mathbb{N}\text{ where }f(S)=\text{ the minimal element of }S$.
## Definitions
For a [[Functions and Inverse Functions|function]] $f:A\to B$,
+ $A$ is called the **domain** of $f$.
+ $B$ is the **co-domain** of $f$.
+ If $f(a)=b$ then $b$ is the **image** of $a$.
+ The **pre-image** of $b$ is the set $\set{a:f(a)=b}$
+ The **image** or **range** of $f$ is the set of images of elements of $A$: $range(f)=\set{b\in{B}:\exists{a}\in{A},f(a)=b}$
## Function Composition
Suppose $f:A\to B$ and $g:B\to C$ are functions.
We can define the composition of $g$ and $f$ as $g\circ f:A\to C$ or $gf:A\to C$ where $g\circ f(x)=g(f(x))$.

## Injections, Surjections, and Bijections
![[injections surjections bijections.png]]
### Examples
1) $f:\mathbb{N}\to\mathbb{N}$, where $f(x)=x+1$ is injective but not surjective as nothing maps to 0.
2) $f:\mathbb{Z}\to\mathbb{Z}$, where $f(x)=x+1$ is bijective.
3) $f:\mathbb{Z}\to\mathbb{N}$, where $f(x)=x^2+1$ is neither injective nor surjective.
4) $f:\mathbb{R}\to\mathbb{R}$, where $f(x)=x^3+1$ is bijective.
5) $f:\mathbb{R}\to\mathbb{R}$, where $f(x)=x^3+x^2$ is surjective but not injective as $f(0)=f(-1)=0$.
## Inverse Functions
Consider seeing [[Functions and Inverse Functions#Inverse Functions|Inverse Functions]] for more detail.

Consider a function $f:A\to B$.
The **inverse** **function** $f^{-1}:B\to A$, if it *exists*, is the function such that if $f(a)=b$ then $f^{-1}(b)=a$.

### Existence of the Inverse Function
When does $f^{-1}$ exist?
+ $f$ must be **injective**, or 1 to 1.
	+ This is because if $f(a_{1})=f(a_{2})=b$, then we cannot define $f^{-1}(b)$ to be both $a_{1}$ and $a_{2}$.
+ $f$ must be **surjective**, or onto.
	+ This is because if $\exists b:\forall a\in A,f(a)\ne b$, then we cannot define $f^{-1}(b)$ at all.
+ Therefore, $f$ must be bijective.
### Finding the Inverse Function
See [[Functions and Inverse Functions#Inverse Functions|Finding the Inverse Function]].
