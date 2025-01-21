#notes 

+ [[Quick Select]] is singly recursive, so there is less work in each iteration than [[Median of Medians]].
+ Quick Select can have more iterations that median of medians, if the pivot is bad.
In practice, the choice of algorithm is circumstantial:
+ Randomised quick select is often used, because the chance a pivot that causes $O(n^{2})$ behaviour is rare.
+ Median of Medians tends to be used in environments where guaranteed speed is absolutely necessary.

