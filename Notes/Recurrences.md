#topic 

To find a recurrence relation, we can follow this process:
Note that many recursive algorithms are actually *hybrids* between iterative and recursive processes.
Start by looking at the **recursive** portion of the algorithm.
+ For example, with [[Merge Sort]], we: 
	1) split the input of size `n` into 2 halves of size `n/2` each;
	2) independently recurse into each half;
	3) merge the resulting sorted sequences.
This will normally give a **recurrence**, often trivially, as with our example: $$T(n) \le \begin{cases}
d & \text{if }n \leq c\text{, for constants }c,d > 0 \\
\underbrace{2\cdot T\left( \frac{n}{2} \right)}_{\text{Recursions}}+\underbrace{a\cdot n}_{merging} & \text{otherwise}
\end{cases}$$
## Notes
+ [[Induction]] 
+ [[Master Theorem]]
+ [[Analysing QuickSort]]
+ [[Randomised Quicksort]]
+ 