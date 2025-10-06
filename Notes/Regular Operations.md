#notes 
## Boolean Operations
+ Union: $A \cup B=\{ x|x \in A \text{ or }x \in B \}$
+ Intersection: $A \cap B = \{ x | x \in A \text{ and } x \in B \}$
+ Difference: $A \backslash B = \{ x | x \in A \text{ and }x \not\in B \}$
+ Complement: $\bar{A}=\Sigma^*\backslash A$
## Language Theory Specific
+ Concatenation: $A \circ B=\{ xy|x \in A \text{ and }y \in B \}$
	+ Conventionally, the concatenation symbol may be omitted; $R_{1}R_{2} \equiv R_{1} \circ R_{2}$
+ Star: $A^{*}=\{ x_{1}x_{2}\dots x_{k}|k\geq 0\text{ and }x_{i} \in A \forall i,1 \leq i \leq k \}$
	+ Alternatively, $A^{*}=\cup ^{\infty}_{i=0}A^{i}$

Parentheses may be omitted provided the precedence order is $*,\circ,cup$ highest to lowest.