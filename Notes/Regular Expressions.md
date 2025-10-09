#definition 

See also: Regular Languages  todo! Relink once Y2 is large enough

>A **regular expression** over some alphabet $\sum$ (finite set of symbols):
>	Any $a \in \sum$ is a regular expression.
>	$\emptyset$ and $\epsilon$ are regular expressions.
>	If $\omega$ and $\omega^\prime$ are regular expressions then so are:
>		$(\omega \omega^\prime)$
>		$(\omega|\omega^\prime)$
>		$(\omega^*)$

Every regular expression denotes a set of strings, or language, over $\sum$.
+ $a, \emptyset,\text{ and }\epsilon$ denote the sets of strings $\{a\},\{\},\text{ and }\{\epsilon\}$.
+ If $\omega$ and $\omega^\prime$ denote the sets of strings $R$ and $S$ then:
	+ $(\omega \omega^\prime)$ denotes $\{ xy:x \in R,y \in S\}$
	+ $(\omega|\omega^\prime)$ denotes $R \cup S$
	+ $(w^*)$ denotes $\{ x_{1}x_{2}\dots x_{n}:n \ge 0,x_{1},x_{2},\dots,x_{n} \in R \}$

## A Theorem
>A set of strings is denoted by a regular expression if and only if it is accepted by a [[Finite State Machine]] - such sets of strings are called the regular languages.
