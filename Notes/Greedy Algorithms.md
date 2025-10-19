#notes 

In an [[Optimisation Problems|Optimisation Problem]], we are looking for a solution that optimises some value. In such a problem, every solution has a *value*. An **optimal** solution is a solution with optimal value. There can be many such solutions. Our task is to find any one of them.
Any algorithm for an optimisation problem, such as the [[The Knapsack Problem]], goes through a sequence of steps. At each step, there is a set of **choices**, from which we must choose. A **greedy algorithm** is an algorithm that makes in every step the choice that ==looks to be the best at the given moment==.

Greedy algorithms do not always lead to optimal solutions, such as in the case of the [[The Knapsack Problem#Variant 1 - The 0-1 Knapsack]]. Problems such as finding [[Minimum Spanning Trees]], shortest path algorithms, or data compression can be optimally solved by a greedy algorithm.