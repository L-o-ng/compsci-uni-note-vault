#notes 

With [[Bucket Sort]], if the range of items is large, we need many buckets.
What if we ignored the values but looked "one level below"?
We can instead consider **decimal representation**!
## Idea
Have as many buckets as there are different digits; for base-10, have 10 buckets.
Repeatedly bucket-sort by the given digit.
The number of rounds depends on the values, but the number of buckets only depends on the digits.
### Example
![[Radix Sort Ex1.png]]
![[Radix Sort Ex2.png]]
## When Does Radix Sort Work?
Radix sort can be applied if the bucket sort phases are stable - meaning work done in previous passes isn't destroyed.
+ Suppose there are 2 elements whose first digit is the same: for example, 43 and 49.
+ If 43 occurs before 49 in the array prior to the sorting stage, 43 should occur before 49 in the resulting array.
## Analysis
If there is a fixed number $\mathbf{d}$ of bucket sort stages, then radix sort is $O(\mathbf{d}n)$, as there are $\mathbf{d}$ stages, each taking $O(n)$ time.
