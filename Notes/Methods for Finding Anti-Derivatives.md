#notes 

## Method 1: Guess
You can verify a guess by computing its derivative.
## Method 2: Integration By Parts
$$\array{
& \text{The product rule says: } \\
& \frac{d}{dx}u(x)v(x)=u^\prime(x)v(x)+u(x)v^\prime(x) \\
& \therefore \int(u^\prime v + v^\prime u)dx = uv+c \\
& \therefore \text{ integration by parts: }
\begin{cases}
\int u(x)v^\prime(x)dx=u(x)v(x)-\int u^\prime(x)v(x)dx &: \text{indefinite} \\
\int_{a}^b u(x)v^\prime(x) dx = u(x)v(x)|_{a}^b-\int_{a}^b u^\prime(x)v(x) dx &: \text{definite}
\end{cases}
}$$
