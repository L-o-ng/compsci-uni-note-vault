#notes 

Let $M=(Q,\Sigma,\updelta,q_{0},F)$ be an NFA and $w=w_{1},w_{2},\dots,w_{n}$ be a word over $\Sigma \cup \{ \varepsilon \}$. This importantly means we can freely add $\varepsilon$ inside the actual word.
$M$ **accepts** $w$ if *there exists* a sequence of states $r_{0},r_{1},\dots,r_{n}$ satisfying the following conditions:
+ $r_{0}=q_{0}$;
+ $r_{i+1}\in \updelta(r_{i},w_{i+1})$ for every $i,0\leq i\leq n-1$;
+ $r_{n}\in F$.

More simply, we can say that unlike a [[Finite-State Automata|DFA]], we generally have many computational paths. The NFA accepts if ==at least one computation accepts==. The NFA rejects only if **all** the computations reject.
