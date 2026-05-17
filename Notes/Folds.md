#notes 

**Folds** process a data structure in some order and build a return value. Haskell provides a number of these in the standard prelude.
```foldr
foldr :: (a -> b -> b) -> b -> [a] -> b
foldr f z [] = z
foldr f z (x:xs) = x `f` (foldr f z xs)
```
![[Folds.png]]
```foldl
foldl :: (b -> a -> b) -> b -> [a] -> b
foldl f z [] = z
foldl f z (x:xs) = foldl f (z `f` x) xs -- tail recursive!
```
![[Folds 2.png]]
## Purpose
We can capture many linear recursive patterns cleanly with folds. If we have an efficient library implementation, we can apply optimisation to programs. We can write code for lists and trees identically. Many library functions are written using folds.
## Choosing
Generally `foldr` is the right choice:
+ It works even for infinite lists;
+ `foldr (:) [] == id`;
+ It can terminate early.

With `foldl`:
+ We cannot terminate early;
+ Does not work on infinite lists;
+ Usually best to use the strict version from `Data.List`: `foldl'`, noting the `'`.

Note also that the operations will lead to different results if `f` is not commutative.
## Type Class
`Foldable` means that if we can *combine* an `a` and `b` to produce a new `b`, then given a start value and container of `a`s, we can reduce it to a `b`:
```
class Foldable f where
	foldr :: (a -> b -> b) -> b -> f a -> b
	
data List a = Nil | Cons a (List a)
	deriving (Eq, Show)
	
instance Foldable List where
	foldr :: (a -> b -> b) -> b -> List a -> b
	foldr _ z Nil = z
	foldr binop z (Cons a tail) = a `binop` (foldr binop z tail)
```
