#linker 

With [[Searching Algorithms]], we assumed that:
+ The input is *sorted*, and;
+ We are looking for the *position* of an element of given *value*.

A **selecting algorithm** assumes the following:
+ The input is **unsorted**;
+ We are looking for the *value* of the $i$-th smallest element in the input.

A trivial solution is to sort the input in say $O(n\log n)$ time, then return the leftmost element.
However, there may be faster solutions.
## Notes
+ [[Quick Select]]
+ [[Median of Medians]]
+ [[Quick Select vs Median of Medians]]
+ 