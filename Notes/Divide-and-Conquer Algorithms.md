#notes 

Many algorithms are [[Recursion|Recursive]]. At each level of recursion, we:
1. **Divide** the problem into a number of sub-problems;
2. **Conquer** the sub-problems by solving them, either recursively, or straightforward if the problem sizes are small enough;
3. **Combine** the solutions for the sub-problems into a solution for the original problem.

A natural way to calculate the running time of a divide and conquer algorithm is to look at its [[Recurrences|Recurrence Relations]]: the (in)equalities that describe a function in terms of the same function on smaller input values.