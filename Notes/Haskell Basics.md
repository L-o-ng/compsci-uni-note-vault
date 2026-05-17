#notes 

**Haskell** is a *strongly*, *statically typed* language. Every well-formed expression has exactly one type, and these are known at **compile** time.
## Some Definitions
+ *Static Typing* - type safety is checked at translation time;
+ *Dynamic Typing* - type safety is checked at runtime;
+ *Duck Typing* - types are just tried - valid if it works;
+ *Explicit Annotation* - All variables are annotated with type;
+ *Type Inference* - Translator infers types based on operations.
+ *Strong Typing* - Translator will not allow implicit type conversions;
+ *Weak Typing* - Translator will convert types to make operations work.
## Currying
Almost all expressions in Haskell are written in **curried** form:
```
-- uncurried
add :: (Int, Int) -> Int 
add (x,y) = x + y
-- curried
add' :: Int -> Int -> Int
add' :: x y = x + y
```
> [!important]
> `->` is **right associative**; function *application* is **left associative**.
## Examples
### Typing
```
not :: Bool -> Bool 
and :: [Bool] -> Bool 
add :: (Int, Int) -> Int
```
Note that the first two expressions are unary types, and `add` is a binary type.
### Factorial
```
fac :: Int -> Int
fac 1 = 1
fac n = n * fac (n - 1)
```
See here that `Int -> Int` is also a type.
