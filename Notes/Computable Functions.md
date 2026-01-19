#notes 

+ A **Total Function** $f:\Sigma^{*}\to \Sigma^{*}$ is *computable* if there is a TM $\mathscr{F}$ such that on any input $x \in \Sigma^{*}$, $\mathscr{F}$ produces $f(x)$ as the output.
+ A **Partial Function** $g:\Sigma^{*}\to \Sigma^{*}$ is *partially computable* if there is a TM $\mathscr{G}$ such that on any input $x \in \operatorname{dom}(g)$, $\mathscr{G}$ produces $g(x)$ as the output and if $x \not\in \operatorname{dom}(g)$, $\mathscr{G}$ does not terminate.
## Proposition
A language set $S \subseteq \Sigma^{*}$ is [[Turing Languages|Turing Recognisable]] if and only if it is:
+ The domain of a partially computable function;
+ The range of a computable function;
+ The range of a partially computable function.

