#linker 

Suppose we have $n$ numbers in an array $A[1\dots n]$, and the numbers are sorted and pairwise distinct.
Also, assume we have a number $x$ that is equal to one of the $n$ numbers above; that is: 
$$
\exists i \in \{ 1,\dots,n \}:x=A[i]
$$
So, for example, 
$$
n=8 \quad A[1\dots8]=\{ 2,3,5,7,11,13,17,19 \},\quad x=17
$$
The goal is to devise an algorithm that finds the position $p$ of $x$ in $A$.
## Notes
+ [[Trivial Search]]
+ [[Binary Search]]
