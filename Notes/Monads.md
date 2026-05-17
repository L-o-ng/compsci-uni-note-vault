#notes 

A **monad** is a [[Functors|Functor]] with additional structure. We can consider it as an *abstract* datatype for *actions*. They can be used to structure and compose computations.
Essentially, they are a standard programming interface for data and control structures.
## Formally,
```
class Applicative m => Monad m where
	(>>=) :: m a -> (a -> m b) -> m b
	(>>) :: m a -> m b -> m b
	return :: a -> m a
```
Here:
+ `return`:
	+ wraps a value in a context, giving the monadic value `m a`;
	+ ` = pure`;
	+ This is not like return in typical programming languages, and does not end function execution.
+ Bind operator `>>=`:
	+ Composes two actions, passing any value produced by the first as an argument to the second;
	+ Definition contains instance-dependent implementation of additional actions.
+ Bind operator `>>` without value passing.
## Laws
**Monads** must fulfil *laws* to behave properly:
+ Left identity: `return a >>= f <=> f a`;
	+ Wrapping a value in a context and binding it to a function is the same as applying the function to the extracted value;
+ Right identity: `m >>= return <=> m`;
	+ Taking a monadic value and binding it to return leaves the monadic value unchanged.
+ Associativity: `(m >>= (\x -> g x)) >>= (\y -> h y) <=> m >>= (\x -> g x >>= (\y -> h y))`.
## `Maybe`
`Maybe` is a monad which represents computations that can fail by not returning a value:
```
data Maybe a = Just a | Nothing

instance Monad Maybe where
	Nothing >>= f = Nothing
	Just x >>= f = f x
	return x = Just x
```
## Examples
### Safe Division
Suppose we introduce expressions made up of integers and the division sign: `div 5 (div 29 11)`.
We would like to evaluate those expressions. We can do this as follows:
```
data Expr = Val Int | Div Expr Expr 
eval :: Expr -> Int 
eval (Val n) = n
eval (Div x y) = div (eval x) (eval y)
```
This has the problem of division by zero however. We should instead work with `Maybe Int`s. We can then perform the evaluation as follows:
```
safediv :: Int -> Int -> Maybe Int
safediv _ 0 = Nothing
safediv n p = Just (n `div` p)

safeeval : Expr -> Maybe Int 
safeeval (Val n) = Just n
safeeval (Div x y) = safeeval x >>= \n ->
											safeeval y >>= \p ->
											safediv n p
```
Here, `safeeval Div x y` first evaluates `x` and calls its result `n`, then evaluates `y` and calls its result `p`, and finally combines the two results by applying `safediv`.
#### `do`
We can use `do` notation to write this in a more elegant way:
```
mx1 >>= \n1 ->
mx2 >>= \n2 ->
f n1 n2
-- rewrites to
do n1 <- mx1
	n2 <- mx2
	f n1 n2
```
This can be used for any monad.
### List
The list type is another monad:
```
instance Monad [] where
	xs >>= f = [y | x <- xs, y <- f x]
```
That is, `xs >>= f` applies the function `f` to each of the results in the list `xs`, collecting all the values in a list.
### Composition
The `IO` type is another monad. This allows us to perform sequences of actions with input/output strings of characters:
```
stringToNum :: String -> IO Int 
stringToNum s = return (read s)

inc :: Int -> IO Int 
inc x = return (x + 1)

main :: IO ()
main = getLine >>= stringToNum >>= inc >>= print 
-- equivalently:
main :: IO ()
main = do
	input <- getLine
	num <- stringToNum input 
	result <- inc num 
	print result 
```


