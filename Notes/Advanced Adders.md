#notes 
## Ripple Carry Adders
By chaining together full adders, we can add larger numbers.
![[Ripple Carry Adder.png]]
### Speed
A $k$-bit ripple adder takes $3+2(k-1)=2k-1$ gate delays to calculate $c_{out}$. A 32-bit adder takes 65 gate delays! There is a faster way:
## Carry Lookahead Adders
See also: [[MSI Chip 74x283]]
See also: [[Generation and Propagation in a CLA]]

A carry occurs if it is **generated** or if there is carry in and it is **propagated**: $C_{out}=G(A,B)+P(A,B)\cdot C_{in}$
![[Carry-Lookahead Adder.png]]
![[Carry-Lookahead Adder 2.png]]
### Speed
We can compute **every** $P_{i}$ and $G_{i}$ in one gate delay.
So we can compute $C_{out}$ and all intermediate carries in 3 gate delays, one each for: 
+ $P_{i}$
+ $G_{i}$
+ AND layer
+ OR layer
And hence the full sum in 4 delays!
### Partial Full Adders
![[Partial Full Adder.png]]
### Adding n-bit numbers
We could now create a Carry-Lookahead Adder that adds n-bit numbers in constant gate delay.
It would however require $2^n$ gates and gates taking order $n$ inputs.
This is obviously impractical for large n values.
#### Solution 1: Chaining Carry-Lookahead Adders
![[Chaining CLAs.png]]
#### Solution 2: 2-Level Carry-Lookahead Adders
Rather than letting the carry ripple through the CLAs, we can pre-compute whether it would be generated or propagated ([[Generation and Propagation in a CLA]]) by each CLA.
![[2-level CLA.png]]
We now have a 16-bit 2-level CLA.
##### Speed
+ 1 gate delay computes the first bit level $G$s and $P$s.
+ 2 gate delays compute the second level $G$s and $P$s.
+ 2 gate delays compute carries across the whole system.
+ 1 gate delay computes sums across the whole system.
This totals to **6 gate delays**, where a standard 16-bit ripple carry adder would take 33.
###### Importantly,
These 16-bit adders could now be chained to give an n-bit adder with gate delay $$2\left( \frac{n}{16} \right)+4$$
##### Carry rules
A 4-bit CLA like this propagates if all bits propagate: $$P=P_{4}p_{3}p_{2}p_{1}$$
It generates if any bit generates **and** all subsequent propagate: $$G=g_{4}+p_{4}g_{3}+p_{4}p_{3}g_{2}+p_{4}p_{3}p_{2}g_{1}$$
