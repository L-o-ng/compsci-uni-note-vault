#notes 

All the concepts defined for discrete joint distribution functions are applicable to continuous random variables. Essentially, we replace the summations with integrals.
If we consider $X$ taking a value in $[a,b]$ and $Y$ in $[c,d]$ then $(X,Y)$ takes a value in $[a,b]\times[c,d]$. If the JPDF is $f_{XY}(x,y)$ then:
$$
P(a\leq X\leq b,c\leq Y\leq d)=\int _{a}^{b} \int _{c}^{d}f_{XY}(x,y) \, dy \, dx 
$$
This can be interpreted as the probability of lying in a small rectangle.
## JPDF Properties
Let $X,Y$ be 2 continuous random variables. The JPDF of $X,Y$ has the following properties:
1. $f_{XY}(x,y)\geq 0$;
2. $\int _{-\infty}^{+\infty}\int _{-\infty}^{+\infty}f_{XY}(x,y) \, dy \, dx=1$;
3. For any set $R$ in $\mathbb{R}^{2}$: $$P((X,Y)\in R)=\int \int _{R}f_{XY}(x,y) \, dy \,dx $$

