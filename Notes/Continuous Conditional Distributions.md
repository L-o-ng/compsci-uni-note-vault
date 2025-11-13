#notes 

Let $X,Y$ be 2 continuous random variables with JPDF $f_{XY}(x,y)$. Assume $f_{X}(x)>0$ so $X=x$ is possible. Then:
$$
f_{Y|X=x}(y)=\frac{f_{XY}(x,y)}{f_{X}(x)}
$$
And similarly for $f_{Y}(y)>0$:
$$
f_{X|Y=y}(x)=\frac{f_{XY}(x,y)}{f_{Y}(y)}
$$
## Properties
This is a proper PDF, so the PDF properties apply:
1. $\int f_{Y|X=x}(y)\,dy=1$;
2. For any set $B \in \mathbb{R}$: $$P(Y \in B|X=x)= \int _{B}f_{Y|X=x}(y) \, dy $$
