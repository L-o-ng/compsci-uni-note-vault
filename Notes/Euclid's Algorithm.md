#notes 

The first ever non-trivial algorithm ever devised was **Euclid's Algorithm** in 300BC.

```
fn Euclid's Algorithm
in positive integers m,n where m >= n
op greatest common divisor of m and n
	if n = 0 then
		output m
	else
		m' <- n
		n' <- m mod n
		m <- m'
		n <- n'
		repeat 
	endif
```

## Issues
We haven't proved that the algorithm does what it says it does.
We cannot yet say whether it always halts, or if it can be trivially turned into a python program, or if we indeed can, if it will have the same properties when translated.

**Program Correctness**, or whether an algorithm does what we think; and **Analysis of Algorithms**, or knowing exactly how long something will take and how much memory it will use, are 2 fundamental problems in computer science.

2 Methods of solving these are:
+ **Formal Methods**: mathematically proving algorithms.
+ **Software Testing**: systematically studying algorithms to establish capibility.
