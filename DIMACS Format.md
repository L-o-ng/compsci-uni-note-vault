#notes 

The *Centre for Discrete Mathematics and Theoretical Computer Science* format is a simple text format for representing clause-sets. It is the standard format for most of today's SAT-Solvers.
## Syntax
+ Variables are indicated as positive integer, negative literals by a negative integer.
+ Any line starting with `c` is a comment.
+ At the top of the file is a line of the form `p cnf N M`, where:
	+ `N` is the number of the largest variable;
	+ `M` is the total number of clauses in the clause-set.
+ Clauses are separated by a `0`.
## Example
The clause-set $F=\{ \{ u,\bar{v},\bar{y} \},\{ \bar{u},z \},\{ \bar{v},\bar{w} \},\{ w,\bar{x} \},\{ x,y,\bar{z} \} \}$ written in DIMACS format looks as follows:
```
c This is an example
c The following is satiable
c
p cnf 6 5
1 -2 -5 0
-1 6 0
-2 -3 0
3 -4 0
-4 5 -6 0
```
