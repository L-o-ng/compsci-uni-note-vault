#notes 

It is often tedious to write out brackets and explicit variables names. We can use **function composition** to simplify this:
$$
(f \circ g)(x) = f(g(x))
$$
In *Haskell*, we use the `(.)` operator:
```
(.) :: (b -> c) -> (a -> b) -> (a -> c)
f . g = \x -> f (g x)
-- example
odd a = not (even a)
odd = not . even
```
This is useful for writing compositions of functions to be passed to other [[Higher Order Functions in Haskell|Higher Order Functions]], and removes the need to write out [[Lambda Calculus|Lambda Expressions]]. This is called **point-free style**.

