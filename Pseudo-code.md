#notes 

Description of algorithms can be done with generic pseudo-code. There are no very strict rules.

## Typical Framework
```
Algorithm: Foo
Input: numbers
Output: text
Code: ...
```

## Variables
```
integer i
float f
char c
string s
```
==Explicitly declare useful variables==

### Assignment
```
integer i = 0
string s := "test string"
char c <- 'a'
```
Any can be used, but the arrow is typical for pseudo-code.
Declaration can be separate from assignment, or can be done all on one line, even with multiple variables.

## Arithmetic
```
volume = length * width * height
z=(x+1)*y/(a-b)
```
Parentheses for grouping, and common arithmetic symbols are used.
AND, OR, NOT represent logical operations.

## Output
```
print x
print "Hello World"
print "Value of z is ", z
```
This is the syntax for output. Notice the comma for concatenation. ==+ may also be used==.

## Selection
```
if <condition> then
	<statement>
	<statement>
end if
```
Conditions can include comparisons, in which case the common comparison operators are used: 
``<, >, <=, >=, ==, !=

For example, 
```
if x != 0 then
	z = y / x
end if
```

The 'else' keyword can be used in place of mutually-exclusive boolean conditions.
```
if <condition> then
	<statement>
	<statement>
else
	<statement>
end if
```

And selection statements can of course be nested.

## For Loops
```
integer sum = 0
for i = 1 to 10 do
	sum = sum + i
end for
print sum
```

is equivalent to $\sum_{i=1}^{10}i$.

You can also iterate over collections: 
```
for value in {val1, val2, ...} do
	statement
end for
```
For example, 
```
integer sum = 0
for prime in {2, 3, 5, 7, 11} do
	sum = sum + prime
end for
```

You can also increment by non-1 values: 
```
for i = 0 to 9; i += 2 do
	print i
end for
```
