#notes 

Let $X,Y$ be 2 discrete random variables taking values in the range $R,S$ respectively, with JPMF $f_{XY}(x,y)$. Assume $f_{X}(x)>0$ (meaning $X=x$) is possible. Then:
$$
f_{Y|X=x}(y)=P(Y=y|X=x)= \frac{P(X=x,Y=y)}{P(X=x)}=\frac{f_{XY}(x,y)}{f_{X}(x)}
$$
Similarly, if $f_{Y}(y)>0$:
$$
f_{X|Y=y}(x)=P(X=x|Y=y)= \frac{P(X=x,Y=y)}{P(Y=y)}=\frac{f_{XY}(x,y)}{f_{Y}(y)}
$$
## Properties
The conditional PMF is a proper PMF, so the following properties of a PMF apply:
1. $\sum_{y \in Y}f_{Y|X=x}(y)=1$;
2. For any set $B$: $$P(Y \in B|X=x)=\sum_{y \in B}f_{Y|X=x}(y) $$
