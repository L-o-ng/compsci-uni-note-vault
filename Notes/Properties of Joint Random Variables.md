#notes 
## Independence
Let $X$ and $Y$ be two random variables (if discrete, with values in $R$ and $S$ respectively; if continuous, with values in $\mathbb{R}$). We say $X$ and $Y$ are independent if one of the following equivalent statements holds:
$$
\begin{align}
\bullet\quad & f_X(x) f_Y(y) = f_{X,Y}(x,y)
\\[4pt]
\bullet\quad & f_{Y \mid X=x}(y) = f_Y(y)
\quad\text{with } f_X(x) > 0
\\[4pt]
\bullet\quad & f_{X \mid Y=y}(x) = f_X(x)
\quad\text{with } f_Y(y) > 0
\\[4pt]
\bullet\quad & P(X \in A,\, Y \in B) = P(X \in A)\, P(Y \in B)
\quad\text{for any sets } A, B
\end{align}
$$
## Mean/Variance
If you have two random variables described by a joint distribution you can always compute the mean, or expected value, of a function of one variable via the marginal distribution.

For simplicity, consider only discrete random variables. As always, the standard deviations are the square roots of their respective variances.

Suppose $X$ and $Y$ are discrete random variables (taking values in $R$ and $S$ respectively).  
Let $f_{X,Y}(x,y)$ be the probability mass function and $f_X(x)$ and $f_Y(y)$ be the marginal probability mass functions of $X$ and $Y$.  
We have:
$$
\begin{align}
\bullet\quad & E(X) = \mu_X = \sum_{x \in R} x\, f_X(x)
\\[6pt]
\bullet\quad & E(Y) = \mu_Y = \sum_{y \in S} y\, f_Y(y)
\\[10pt]
\bullet\quad & V(X) = \sum_{x \in R} x^2 f_X(x) - (E(X))^2
\\[6pt]
\bullet\quad & V(Y) = \sum_{y \in S} y^2 f_Y(y) - (E(Y))^2
\end{align}
$$
### Properties
For any random variables $X$ and $Y$ and constants $a$, $b$, and $c$:
$$
\begin{align}
\bullet\quad & E(a) = a
\\[6pt]
\bullet\quad & E(X + Y) = \mu_X + \mu_Y
\\[6pt]
\bullet\quad & E(aX + bY) = a\mu_X + b\mu_Y
\\[10pt]
\bullet\quad & E(h(X,Y)) = \sum_x \sum_y h(x,y)\, f_{X,Y}(x,y)
\\[10pt]
\bullet\quad & V(X) = E(X^2) - \mu_X^2
\\[6pt]
\bullet\quad & V(X+Y) = \sigma_X^2 + \sigma_Y^2 + 2\sigma_{XY}
\\[6pt]
\bullet\quad & V(aX + bY + c) = a^2\sigma_X^2 + b^2\sigma_Y^2 + 2ab\sigma_{XY}
\end{align}
$$

## Covariance
When dealing with two random variables, one of the main items of interest is how closely they are associated. The covariance measures the strength of the linear relationship between two variables (e.g., height and weight).  
Let $X$ and $Y$ be random variables with means $\mu_X$ and $\mu_Y$. The covariance between them is defined as follows:
$$
\small \begin{align}
\bullet\quad & \operatorname{cov}(X,Y) = \sigma_{XY} = E[XY] - E[X]E[Y]
\\[8pt]
\bullet\quad & \operatorname{cov}(X,Y) = E[(X - \mu_X)(Y - \mu_Y)]
\quad\text{where } \mu_X = E(X),\ \mu_Y = E(Y)
\end{align}
$$
### Properties
For any random variables $X$ and $Y$ and constants $a$, $b$, and $c$.
$$
\begin{align}
\bullet\quad & \operatorname{Cov}(aX + b,\, cY + d) = ac\,\operatorname{Cov}(X,Y)
\\[8pt]
\bullet\quad & \operatorname{Cov}(X_1 + X_2,\, Y) 
= \operatorname{Cov}(X_1,Y) + \operatorname{Cov}(X_2,Y)
\\[8pt]
\bullet\quad & \operatorname{Cov}(X,X) = V(X)
\end{align}
$$

If $X$ and $Y$ are independent then $\operatorname{Cov}(X,Y) = 0$.  
Note that the converse does not necessarily hold.
