#notes 
## Pure Literals
A literal $x$ of a clause-set $F$ is a **pure literal** of $F$ if some clauses of $F$ contain $x$ but no clause of $F$ contains $\bar{x}$. 
For example:
$$
F=\{ \{ x,y \},\{ \bar{y},\bar{z} \},\{ z,x \},\{ u,\bar{z} \} \}
$$
Here, $x,u$ are *pure literals* of $F$.

Let $F'$ be the clause-set obtained from $F$ by removing all clauses that contain pure literals: then $F,F'$ are equisatisfiable. We say that $F'$ is obtained from $F$ by **pure literal elimination**. For example consider the clause-set $F$ above. We obtain:
$$
F'=\{ \{ \bar{y},\bar{z} \} \}
$$
Now $\bar{y},\bar{z}$ are pure literals of $F'$, and we can apply pure literal elimination again, obtaining $\emptyset$.

For a clause-set $F$ we denote by $\operatorname{PL}(F)$ the smallest clause-set that can be obtained from $F$ by repeated applications of pure literal elimination. In the above example, we have $\operatorname{PL}(F)=\emptyset$. Note that $F,\operatorname{PL}(F)$ are always equisatisfiable.
## Unit Propagation
When a clause-set $F$ contains a unit clause $\{ l \}$, we can obtain by **unit propagation** the clause-set $F[l=1]$ from $F$. In that case, $F,F[l=1]$ are equisatisfiable. We write $\operatorname{UP}(F)$ for the clause-set obtained from $F$ by applying unit propagation as often as possible. Note that $F,\operatorname{UP}(F)$ are always equisatisfiable.
### Example
Let $F=\{ \{ x,y \},\{ \bar{y} \},\{ z,\bar{x},v \} \}$.
+ From $F$ we obtain by unit propagation the clause-set $F'=\{ \{ x \},\{ z,\bar{x},v \} \}$.
+ With a second step of unit propagation we obtain from $F'$ the clause-set $F''=\{ \{ z,v \} \}$.
Consequently, $\operatorname{UP}(F)=\{ \{ z,v \} \}$.
## Order
>For any clause-set $F$, we have $\operatorname{UP(PL(UP}(F)))=\operatorname{PL(UP}(F))$.

>There is a clause-set $F$ such that $\operatorname{PL(UP(PL}(F))) \neq \operatorname{UP(PL}(F))$.

For this reason, we compute $\operatorname{UP}$ first, then $\operatorname{PL}$.
## DPLL Algorithm
```
fn DPLL
in F
op "sat" or "unsat"
	F <- UP(F)
	F <- PL(F)
	if var(F) = emptyset then
		if F = emptyset then
			exit(sat)
		else 
			exit(unsat)
		endif
	else 
		choose x in var(F) // x is the branching variable
		if A(F[x = 0]) = sat then
			exit(sat)
		else if A(F[x = 1]) = sat then 
			exit(sat)
		else
			exit(unsat)
		endif
	endif
```
## Well-Known Algorithms
+ Grasp (Marques-Silva & Sakallah 1996);
+ Relsat (Bayardo Jr. & Schrag 1997);
+ chaff (Moskewicz et al 2001), zChaff (Zhang 2001);
+ Minisat (Een & Sörensson 2003);
+ RSat (Pipatsrisawat & Darwiche 2007);
+ Glucose (Audemard & Simon 2009);
+ CryptoMiniSat (Soos 2010);
+ Lingeling, PicoSAT (Biere 2010).
Many are available for free and are continually improved.
### Key Improvements
A combination of **branching heuristics** with:
+ Clause Learning;
+ Non-Chronological Backtracking;
+ Restart Strategies;
+ Implementation of Propagation.
See also: [SatLive](www.satlive.org) :(

