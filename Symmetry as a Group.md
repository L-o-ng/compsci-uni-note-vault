#notes 

The 6 symmetries of the equilateral triangle discussed in [[Symmetries]] form a **group**, known as the *Dihedral Group*, $D_{3}$.
It satisfies the following properties:
+ If I do 1 transformation, then another, I get a *third* transformation.
+ There is an *identity transformation*, $Id$, that satisfies $rId=r=Idr$.
+ Every element of $D_{3}$ has an *inverse*: something we compose with to get the **identity**.
Now see [[Groups]] for a formal definition.
Or, in more plain English,
## Groups
### Roughly,
A group is a collection of things where we can combine 2 of them to get a third. There is always an "identity thing", and each thing has an "inverse thing".
### Formally,
A group $G$ consists of a set of elements $\{ x,y,\dots \}$ and a binary operation $\bullet$, and satisfies the axioms of group theory:
1) **Closure** - for any 2 elements $x,y \in G$, $x\bullet y \in G$.
2) **Associativity** - for any $x,y,z \in G$, we have $x \bullet (y \bullet z) = (x \bullet y) \bullet z$.
3) **Identity** - There exists an identity element $e \in G$ such that $e \bullet x=x \bullet e=x$ for any $x \in G$.
4) **Inverses** - For every $x \in G$, there exists an inverse $y$ such that $y \bullet x = x \bullet y = e$.
## Examples
+ Integers under addition. Note that integers under multiplication does *not* form a group.
+ Rational numbers under addition **and** multiplication.
+ $\Bbb{R}, \Bbb{C}$ under addition.
### The Circle Group
The set of complex numbers $z \in \Bbb{C}$ with $|z|=1$ is a group under multiplication.
#### Proof
1) Closure: If $|z|=1,|w|=1\text{, then }|zw|=1\text{, since }|zw|=|z||w|=1\times 1=1$
2) Associativity: True for all complex numbers.
3) Identity: 1 is in the group since $|1|=1$ and $z\times 1=1\times z=z\space\forall z$
4) Inverse: For every $z$ with $|z|=1$, $\frac{1}{z}\times z=z\times \frac{1}{z}=1$, and $\frac{|1}{z}|= \frac{1}{|z|}= \frac{1}{1}=1$ so is in the group.
This is known as the **circle group**.
$$
S^\prime=\{ z \in \Bbb{C}:|z|=1 \}=\{ e^{ i\theta }:0\leq \theta<2\pi \}
$$
Interestingly, it looks like the addition of angles:
$$
e^{ i\theta_{1} }e^{ i\theta_{2} }=e^{ i(\theta_{1}\theta_{2}) }
$$
