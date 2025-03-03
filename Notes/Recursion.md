#notes 

See also: [[Backtracking]]

A **recursive** algorithm calls itself to do part of its work.
## Requirements
A recursive algorithm must: 
+ Have a *base case*.
+ Change its *state* and move towards the base case.
+ Call *itself*.
## Memoization
>Storing the result of a computation so that it can be subsequently retrieved without repeating the computation is called **memoization**.

[[Hash Tables]] are a good choice of data structure to implement this.

