#notes 

An **adversary**:
+ Is a second algorithm intercepting access to input;
+ Gives answers so that there is always consistent input;
	+ This means an adversary can never be caught *cheating*.
+ Ensures that the original algorithm does not have enough *information* to make a decision for *as long as possible*;
	+ In other words, it dynamically constructs a bad/worst-case input.
+ Does not know what the original algorithm will do in the future;
	+ It must therefore work for **any** original algorithm.
Design a good adversary to obtain a good **lower bound**.
## Examples
### Finding the Max
We want to find the max element in an unsorted array.
In an array of size $n$, we can do this with $n-1$ comparisons. This is the same setup as with [[Sorting Trees and Decision Trees]] - only **comparisons** are relevant.

>**Any** comparison-based algorithm for this problem requires at least $n-1$ comparisons in the worst case.
>Proof: after $\leq n-2$ comparisons, $\geq2$ elements are never lost. The adversary can make any the max and be consistent. So there is not enough information for the algorithm to make a decision. Therefore the algorithm needs to make at least $n-1$ comparisons.
#### Adversary Strategy
The only relevant information for the algorithm is how many elements lost the $\geq 1$ comparison. As soon as $n-1$ elements lost (at least once), the algorithm can make a decision - max is the one that has never lost.
We can assume each index $i$ has a status, $N$ - never lost; or $L$ - lost; initially all indices have status $N$. After each comparison, there can be status changes $N \to L$.

The adversary's goal is to delay these $n\to L$ changes as much as possible.
#### Designing the Strategy
The strategy can be represented as a **status table**, with the number of bits of new relevant information.
When the algorithm asks to compare $i:j$, reply as follows:

| $\text{Status for }i,j$ | $\text{Adversary Reply}$ | $\text{New Status}$ | $\text{New Information}$ |
| ----------------------- | ------------------------ | ------------------- | ------------------------ |
| $N:N$                   | $a_i>a_j$                | $N:L$               | $1$                      |
| $N:L$                   | $a_i>a_j$                | $\text{No Change}$  | $0$                      |
| $L:N$                   | $a_i<a_j$                | $\text{No Change}$  | $0$                      |
| $L:L$                   | $\text{Consistent}$      | $\text{No Change}$  | $0$                      |
One comparison gives $\leq 1$ bits of new relevant information.
In total, the algorithm needs $n-1$ bits of information to make a decision.
Hence $\geq n-1$ comparisons are necessary.