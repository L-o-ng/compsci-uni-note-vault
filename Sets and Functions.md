#notes 

A set is an *unordered* collection of distinct objects or **elements**.
We use capital letters to represent sets and lowercase letters for their elements.
## Syntax
+ **{}** denotes a set.
+ **()** denotes a tuple.
+ $\in$ represents set membership.
+ $\notin$ represents not belonging to a set.
+ | or : means "such that".
+ |A| means the cardinality of set A: the number of items within it.

### Intersect, Union, Exclusion
Let A, B be sets.
#### Union
$A \cup B = \set{x:x\in A\text{ or }x\in B}$
#### Intersection
$A\cap B = \set{x:x\in A \text{ and }x\in B}$
#### Inclusion-Exclusion Principles
If A and B are finite sets, 
$|A\cup B = |A| + |B| - |A\cap B|$
### Subsets
Let A, B be sets.
If A is a **subset** of B ($A\subseteq B$), every member of A is present in B.
If A is a **proper subset** of B ($A\subset B$), every member of $A$ is preset in $B$, but $A\ne B$, 
or $\text{there is an element }b\in B\text{ such that }b\notin A$
### Key Sets
#### The Empty Set
Represented by $\emptyset$
Contains no elements.
#### Natural Numbers
Represented by $\mathbb{N}$.
Contains non-negative integers.
See [[Foundations#Assumed Knowledge|Standard Sets]]
#### Integers
Represented by $\mathbb{Z}$.
Contains all whole numbers
See [[Foundations#Assumed Knowledge|Standard Sets]]
#### Rational Numbers
Represented by $\mathbb{Q}$.
Mathematically, $\mathbb{Q}=\set{\frac{m}{n}:m,n\in\mathbb{z},n\neq0}$
See [[Foundations#Assumed Knowledge|Standard Sets]]
#### Real Numbers
Represented by $\mathbb{R}$.
Includes all numbers including those with infinite decimal expansion, like $\pi$
#### Complex Numbers
Represented by $\mathbb{C}$
Made up of numbers with an imaginary component.
$\mathbb{C}=\set{a+bi:a,b\in\mathbb{R}}$
### Intervals
Closed Interval: \[a, b] = $\set{x\in\mathbb{R}:a\le x\le b}$
Open Interval: (a, b) = $\set{x\in\mathbb{R}:a\lt x\lt b}$
Half-open Interval: \[a, b) = $\set{x\in\mathbb{R}:a\le x\lt b}$
To infinity: \[a, $\infty$], note that this uses a half open set.
On a graph, a closed bound is represented by a filled dot, and an open bound a circle.
An interval is represented by a line connecting 2 bounds.
### New notation
+ **Set Minus** - $A\backslash B=\set{a:a\in A,a\notin B}$, or the set of the elements of $A$ that are not n $B$.
+ **Powerset** - $\mathcal{P}(A)=\set{A^\prime:A^\prime\subseteq A}$, or the set of all subsets of $A$.
+ **Cartesian Product of $A$ and $B$** - The set of all ordered pairs with first element from A and second from B; $A\times B=\set{(a,b):a\in A, b\in B}$. Note that $(a,b)$ denotes an ordered pair.
+ **\[n]** - In Computer Science, this commonly represents $\set{1, 2, 3, 4, ..., n}$.

## Functions
A function of $f:A\to B$ is an assignment of a unique element of B to **every** element of A.
+ $f:\mathbb{N}\to\mathbb{N}$, where $f(n)=n^2+3$.
+ $f:\wp(\mathbb{N})\backslash\emptyset\to\mathbb{N}\text{ where }f(S)=\text{ the minimal element of }S$.

## Tuples
Tuples are **ordered**.
Changing the order of their elements is significant.



