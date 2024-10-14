#notes 

[[Transistors]] are used to build gates for the [[CPU]].
They take 0/1 inputs and produce 0/1 outputs, representing the presence of voltage.

## Fundamental gates
+ **NOT**
	+ Input X, output Z
	+ Z = 1 if and only if X = 0.
+ **AND**
	+ Input X, Y, output Z
	+ Z = 1 if and only if X, Y = 1.
+ **OR**
	+ Input X, Y, output Z
	+ Z = 0 if and only if X, Y = 0.

## A Binary World
If we are given *any* function $f(X_1, X_2,...,X_n):\{0,1\}^n\to\{0,1\}$, then using only fundamental gates we can build a circuit that computes $f$.