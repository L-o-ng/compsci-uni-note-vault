#notes 

We have seen some [[Recursion in Haskell|Naturally Recursive Functions]]. We will now look at some **higher order functions** in the standard library that capture many of these patterns.
>[!definition]
>A function that does at least one of:
> + Take one or more functions as arguments;
> + Returns a function as its result.

Due to [[Haskell Basics#Currying|Currying]], every function of more than one argument is higher-order in Haskell.
## Examples
### Linear Recursive Functions on Lists
`map` applies a function to all elements in a list:
```
map :: (a -> b) -> [a] -> [b]
map _ [] = []
map f xs = [f x | x <- xs]
```

`filter` selects elements from a list that satisfy a predicate:
```
filter :: (a -> Bool) -> [a] -> [a]
filter _ [] = []
filter p xs = [x | x <- xs, p x]
```
