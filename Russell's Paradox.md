#notes 

During the late 1800s and early 1900s, there was an effort to completely formalize mathematics and the notion of a mathematical proof.

Gottlob Frege, a German mathematician, had attempted to show that all of mathematics grew out of logic - he developed first-order predicate logic in this way. 
His intention was to show that there was:
+ A set of axioms.
+ A set of unambiguous logical rule.
+ All true mathematical statements expressible in his logic could be inferred from these axioms and using these rules.

Bertrand Russel, a British philosopher, devised **Russel's Paradox**.
In Frege's system, you could define certain sets of objects. Russel showed that the set $R$ could be defined: 
$$
R=\{ A\text{ is a set }A \not\in A \}
$$
The paradox arises when you consider if $R \not\in R$:
+ If $R \not\in R$ then $R$ satisfies the premise to be in $R$, so $R \in R$.
+ If $R \in R$ then $R$ satisfies the premise to be in $R$, so $R \not\in R$.
