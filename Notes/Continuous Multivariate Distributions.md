#notes 

To model the joint behaviour of more than 2 random variables, we can extend the concept of a joint distribution to more than 2 variables.

If $X_{1},X_{2},\dots,X_{n}$ are continuous random variables then the JPDF of $X_{1},\dots,X_{n}$ is the function $f(x_{1},x_{2},\dots,x_{n})$ such that for any $n$ intervals $[a_{1},b_{1}],\dots,[a_{n},b_{n}]$:
$$
\small P(a_{1}\leq X_{1}\leq b_{1},\dots,a_{n}\leq X_{n}\leq b_{n})=\int _{a_{1}}^{b_{1}}\dots \int _{a_{n}}^{b_{n}}f(x_{1},\dots,x_{n}) \, dx_{n}\dots  \, dx_{1} 
$$
## Marginals
We can obtain marginal distributions for subsets of the variables by integrating out the other variables.
Assume we have a JPDF $f(x,y,z,a,b)$ for $X,Y,Z,A,B$. Then the marginal distribution $f_{YA}$ on random variables $Y,A$ can be obtained via:
$$
f_{YA}(y,a)=\int _{x \in \mathbb{R}}\int _{z \in \mathbb{R}}\int _{b \in \mathbb{R}}f(x,y,z,a,b) \, db \, dz  \, dx
$$
