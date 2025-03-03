#definition 

> The **time complexity** of an algorithm can be expressed in terms of the number of basic operations used by the algorithm when the input has a particular size.
### Examples of Basic Operations
+ Addition
+ Multiplication
+ Comparison of 2 numbers
+ Swaps
+ Assignment of values to variables.
## Time Complexity Examples
### Evaluation of Polynomials
The polynomial $$f(x)=a_{n}x^n+a_{n-1}x^{n-1}+\dots+a_{2}x^2+a_{1}x+a_{0}$$
at a fixed value $x_{0}$ can be evaluated as follows:
```
fn polynomial
in x0, a0, ..., an real numbers
op fx
	power <- 1
	y <- a0
	for i <- 0 to n do
		power <- power * x0
		y <- a_i * power
	endfor
```
So $y=a_{n}x_{0}^n + a_{n-1}x_{0}^{n-1}+\dots+a_{2}x^2+a_{1}x_{0}+a_{0}$
If we use this procedure, we will need $2n$ multiplications and $n$ additions to evaluate a polynomial of degree $n$ at $x=x_{0}$.
### Sorting
The real numbers $a_{1},\dots,a_{n},n \ge2$ can be **sorted**, or *arranged in ascending order*, by the **insertion sort** algorithm
```
fn insertion_sort
in a1, ..., an real numbers, n >= 2
op those numbers sorted
	for j <- 2 to n do
		x <- a_j
		i <- j - 1
		while i > 0 and ai > x do
			a_i+1 <- a_i
			i <- i - 1
		endwhile
		a_i+1 <- x
	endfor
```
The **worst case** number of comparisons $a_{i}>x$ is: $$1+2+\dots+(n-1)=\sum_{i=1}^{n-1}i=\frac{n(n-1)}{2}$$
So if $a_{1}\le a_{2} \le\dots \le a_{n}$ then the number of comparisons $a_{i}>x$ is $n-1$.
