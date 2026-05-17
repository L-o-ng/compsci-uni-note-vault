#notes 

See [[Recursion]]

---

When we write a *recursive* function, we must:
1. Define the type;
2. Enumerate the cases;
3. Define the base cases;
4. Define the reduction of other cases to simpler ones;
5. Generalise and simplify.
## Types of Recursion
### Linear Recursion
The recursive call references itself once.
### Multiple Recursion
The recursive call references itself multiple times.
### Direct Recursion
The function calls itself recursively.
### Multiple Recursion
Multiple functions call each other recursively
## Tail Recursion
A function is **tail recursive** if the last result of a recursive call is the result of the function itself.
More loosely: the *last* thing a tail recursive function does is call itself with new arguments or return a value.

These are useful as they have a trivial translation into *loops*. They are optimised automatically
 by some compilers.
## Examples
### Tail Recursion
Not tail-recursive:
```
product :: Num a => [a] -> a
product [] = 1
product (x:xs) = x * product xs
```
Tail Recursive:
```
product :: Num a => [a] -> a
product xs = loop xs 1
	where loop [] n = n
				loop (x:xs) n = loop xs (x * n)
```
### Mutual Tail Recursion
```
even 0 = True
even n = odd (n-1)
odd 0 = False
odd n = even (n-1)

odd 4
==> even 3
==> odd 2
==> even 1
==> odd 0
==> False
```
