#definition

Imagine a travelling salesman who, every day, wishes to compute the shortest tour of a given collection of cities.
## Demands
The *a priori* computation can always be quickly undertaken and any resulting tour is indeed the shortest tour.
## Abstraction
+ We are given a collection of cities and also the distance between any pair of cities.
+ We wish to find the length of the shortest tour of all the cities such that this tour visits every city exactly once and arrives back to where it started.
This problem is of a different nature to the previous problems; it would appear that not all solutions are **equal**. This is the basis of an [[Optimisation Problems|optimisation problem]].
## Solving the Problem
We can try a greedy approach:
+ Start at some city.
+ Iteratively move to the nearest unvisited city.
+ Output the resulting tour.
The tour is optimal in some cases, but not all!

We can also view it as an instance of [[Hamiltonian Cycles]].