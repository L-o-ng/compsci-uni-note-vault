#notes 

Javascript can be linked to a [[HTML]] document with a \<script> tag, specifying the path under the `src` attribute.
It is usually placed in the `head` or right at the end of the `html`.
## Syntax
Javascript is: 
+ Whitespace tolerant.
+ Case-sensitive.
+ Block-structured with braces.
+ Dynamically-typed
### Semantics
+ Semicolons at the end of lines can be inferred.
+ `use strict` is good practice, but not absolutely required.
+ Use `require` for modules in nodejs.
### Odd Syntax
+ **Truthy** and **Falsy**
	+ Some data types can represent boolean values. The following are *falsy*:
		+ `false`
		+ `undefined`
		+ `null`
		+ `0`
		+ `NaN` - Not a Number
		+ `""`, the empty string
+ **var** vs **let**
	+ Both keywords declare variables. However, whilst `let` is predictable and follows normal practice, `var` has some interesting behaviour:
		+ `var` hoists declaration above assignment, so `y = 5; var y` works.
		+ `var` allows variable shadowing.
+ Function parameters are **untyped**.
	+ The `typeof` function can help work around this.