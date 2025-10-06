#notes 

The [[Finite State Machine|DFA]] $M$ *recognises* the language $L$ if $L=\{ w|M \text{ accepts }w \}$.
A language is called *regular* if some DFA recognises it.
## Regular Expressions
A regular expression (RE) $R$ **defines** a regular language $L$. We shall eventually prove that $RE \equiv DFA$. todo!
This definition is inductive, which means there are initial REs, and new REs can be obtained from old ones by [[Regular Operations]].
### Definition
RE $R$ is a regular expression over the alphabet $\Sigma$ if $R$ is:
1. $a\text{ for some }a \in \Sigma$;
2. $\varepsilon$;
3. $\emptyset$;
4. $(R_{1}\cup R_{2})$ where $R_{1},R_{2}$ are REs;
5. $(R_{1}\circ R_{2})$ where $R_{1},R_{2}$ are REs;
6. $(R_{1}^{*})$ where $R_{1}$ is an RE.







See also: [[Regular Expressions]]
