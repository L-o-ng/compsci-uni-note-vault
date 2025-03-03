#notes 

**Automatic Differentiation** is useful for **automating** the differentiation of functions so its use in optimising **machine learning** is fast and unaided.
Where *symbolic differentiation* generates a combinatorial explosion of terms, and *numerical differentiation* is inaccurate for systems as large as a neural network, **automatic differentiation is efficient and exact**.
## How It Works
Suppose we have a function $e(f(g(h(x))))$:
$$\text{Chain Rule: } \frac{de}{dx} = \frac{de}{df} \frac{df}{dx} = \frac{de}{df} \frac{df}{dg} \frac{dg}{dx} = \frac{de}{df} \frac{df}{dg} \frac{dg}{dh} \frac{dh}{dx}$$
As long as each function is simple, working from the inside, giving one step at a time, is not a problem!
## Steps
### Creating a Computation Graph from Atomic Operations
![[Automatic Differentiation Step 1.png]]
### Evaluating the Function with a Forward Pass
![[Automatic Differentiation Step 2.png]]
### Computing Partial Derivatives of Atomic Functions
![[Automatic Differentiation Step 3.png]]
Note that since $v$ is a function, more attention is necessary when differentiating each atomic function. Also note the special notation: $$\dot{v}_{j}= \frac{\partial v_{j}}{\partial \mathbf{x}}$$
### Evaluating the Derivative
We can compute $\frac{\partial y}{\partial x_{i}}$ by setting $x_{i}=1,\text{ others}=0$:
![[Automatic Differentiation Step 4.png]]
### Evaluating the Directional Derivative
For example, in direction $(2,1)$:
![[Automatic Differentiation Step 5.png]]
Note that the values for $v_{\leq 0}$ can be obtained from the forward primal trace.
Compute the unit vector by dividing each element in the vector by the magnitude to obtain a directional vector.
## Forward Mode vs Reverse Mode 
When $f:\Bbb{R}^n \to \Bbb{R}$, one pass can compute the directional derivative.
However, forward mode requires $n$ passes to compute the full gradient $\nabla f$.
**Reverse Mode** can compute $\nabla f$ in one pass!
## Reverse Mode 
Reverse mode has special notation: $$\overline{v_{i}}=\frac{\partial y}{\partial v_{i}}$$
### Computation
#### Method
We start with the last function: $v_{n}=y$. This means $\overline{v_{n}}=\frac{\partial y}{\partial v_{n}}=1$. We now work backwards through the previous computations, adding in the contribution of each variable as it occurs using the chain rule.
#### Example
![[Automatic Differentiation Reverse Mode.png]]
##### Explanation
![[Automatic Differentiation Reverse Mode Explanation.png]]
