#notes 
## The Sum Rule
> Theorem: 
> If $f_{1}(x)$ is $O(g_{1}(x))$ *and* $f_{2}(x)$ is $O(g_{2}(x))$ then $f_{1}(x)+f_{2}(x)$ is $O(\operatorname{max}\{ |g_{1}(x)|,|g_{2}(x)| \})$.

>Proof: 
>	Let $C_{i}$ and $k_{i}$ be witness pairs for $f_{i}(x)$ is $O(g_{i}(x))$ for $i=1,2$.
>	Let $k=\operatorname{max}\{ k_{1},k_{2} \}$ and $C=C_{1}+C_{2}$. Then for $x>k$ we have $$\small{|f_{1}(x)+f_{2}(x)|\le |f_{1}(x)|+|f_{2}(x)| \le C_{1}\cdot|g_{1}(x)|+C_{2}\cdot |g_{2}(x)| \le C \cdot \operatorname{max}\{ |g_{1}(x)|,|g_{2}(x)| \}}$$
>	The last inequality holds because: $$\small{C_{1}y_{1}+C_{2}y_{2} \le C_{1} \operatorname{max}\{ y_{1}, y_{2} \}+C_{2}\operatorname{max}\{ y_{1},y_{2} \}=(C_{1}+C_{2})\operatorname{max}\{ y_{1},y_{2} \}=C \operatorname{max}\{ y_{1},y_{2} \}}$$
### Corollary
If $f_{1}(x)$ is $O(g(x))$ and $f_{2}(x)$ is $O(g(x))$ then $f_{1}(x)+f_{2}(x)$ is also $O(g(x))$.
## The Product Rule
>Theorem:
>If $f_{1}(x)$ is $O(g_{1}(x))$ and $f_{2}(x)$ is $O(g_{2}(x))$ then $f_{1}(x)\cdot f_{2}(x)$ is $O(g_{1}(x)\cdot g_{2}(x))$.

>Proof:
>	Let $C_{i}$ and $k_{i}$ be witness pairs for $f_{i}(x)$ is $O(g_{i}(x))$ for $i=1,2$.
>	Let $k=\operatorname{max}\{ k_{1},k_{2} \}$ and $C=C_{1} \cdot C_{2}$. Then for $x>k$ we have $$\small{|f_{1}(x)\cdot f_{2}(x)|=|f_{1}(x)|\cdot |f_{2}(x)| \le C_{1} \cdot |g_{1}(x)|\cdot C_{2} \cdot |g_{2}(x)|=C \cdot |g_{1}(x)\cdot g_{2}(x)|}$$
>	hence proving the theorem.
## Example
Let $a_{0},a_{1},\dots a_{n}$ be real numbers,
$f(x)=a_{n}\cdot x^n+a_{n-1}\cdot x^{n-1}+\dots+a_{1}\cdot x+a_{0}$. Then $$f(x)=O(x^n)$$
>Proof:
>	For each $0 \le k \le n,\quad x^k=O(x^n)$.
>	Then, we observe that for any constant $a, a\cdot x^k=O(x^n)$.
>	By the sum rule, $f(x)=O(x^n)$.

