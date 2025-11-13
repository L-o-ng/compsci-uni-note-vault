#notes 

[[Probability of Multiple Events|Previously]], we introduced $P(A\cap B)$ as the probability of *intersection* of 2 events. Let these events be described by the random variables $X$ with value $x$ and $Y$ with $y$. Now we can write:
$$
P(A\cap B)=P(\{ X=x \}\cap \{ Y=y \})=P(X=x,Y=y)
$$
This is referred to as the **joint probability** of $X$ and $Y$.
If $X,Y$ are jointly distributed random variables:
+ **Discrete**: defined with a Joint PMF;
+ **Continuous**: defined with a Joint PDF;
+ **Both**: defined with a Joint CDF.
## Discrete Bivariate Joint Distribution
The PMF of a single variable $X$ describes how much probability mass is placed on each possible $X$ value. The **joint** PMF describes how much mass is placed on each pair $(x,y)$.
### Formal Notion
>If $X,Y$ are discrete random variables, then the function given by: $$f(x,y)=P(X=x,Y=y)$$for each pair of values $(x,y)$ within the range of $X,Y$ is called the **joint probability distribution**, or joint PMF, of $X$ and $Y$.

We can extend this to the joint CDF as follows:
>If $X,Y$ are discrete random variables, the joint CDF is the function given by: $$\small F(x,y)=P(X\leq x,Y\leq y)=\sum_{s\leq x}\sum_{t\leq y} f(s,t)\text{ for }-\infty<x,y<+\infty$$
### Properties
Let $X,Y$ be 2 discrete random variables taking values in the range $R,S$ respectively. The joint PMF of $X,Y$ has the following properties:
1. $f_{XY}(x,y)\geq 0$;
2. $\sum_{x \in R}\sum_{y \in S}f_{XY}(x,y)=1$;
3. $f_{XY}(x,y)=P(X=x,Y=y)\equiv P(\{ X=x \}\cap \{ Y=y \})$.

