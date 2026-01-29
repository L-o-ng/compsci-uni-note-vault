#notes 

We have some material being transferred in a network from a **source** to a **sink**. The source *produces* material at a *steady rate*, and the sink consumes material at the **same** rate.
We also have that:
+ **Edges** have a given *capacity*;
+ **Vertices** other than the source/sink are *junctions*:
	+ Material flows through them without *collecting*;
	+ The entering rate equals the exiting rate - **flow conservation**.

We wish to solve [[The Maximum Flow Problem]].
![[Flow Network.png]]
+ Single numbers on the edge denote edge capacities;
+ Pairs $x/y$ denote $f(u,v) / c(u,v)$. 
## Formal Definition
+ $G=(V,E)$ is a directed [[Graph Theory|Graph]];
+ We have two distinguished vertices: **source** $s$, and **sink** $t$;
+ Each *edge* $(u,v)\in E$ has a non-negative **capacity** $c(u,v)\geq 0$;
+ If $(u,v)\not\in E$, we assume $c(u,v)=0$.

We assume that every vertex lies on some path from $s$ to $t$: for each $v \in V$, there is a *path* $s \to v \to t$. This implies $G$ is **connected**, and so $|E|\geq |V|-1$.
## More Definitions
### Flow
A **flow** in $G$ is a real-valued function $f:V\times V \to \mathbb{R}$ that satisfies the tree properties below. Here, $f(u,v)$ is a **flow** from $u$ to $v$. It can have a positive, negative, or 0 value.
#### Capacity Constraint
For all $u,v \in V$, we require $f(u,v)\leq c(u,v)$. Flow from one vertex to another must not exceed the given capacity.
#### Skew Symmetry
For all $u,v \in V$, we require $f(u,v)=-f(u,v)$. Flow from $u$ to $v$ is the negative of flow in the reverse direction.
#### Flow Conservation
For all $u \in V-\{ s,t \}$, we require: 
$$
\sum_{v \in V}^{} f(u,v)=0
$$
The total flow into/out of a vertex is 0, excluding the source and sink.
We can rewrite this as $\forall v \in V-\{ s,t \}:\sum_{u \in V}^{}f(u,v)=0$.
### Total Positive Flow
The **total positive flow** entering $v$ is:
$$
\sum_{u \in V:f(u,v)>0} f(u,v) 
$$
The total positive flow *leaving* vertex $u$ is:
$$
\sum_{v \in V:f(u,v)>0}f(u,v)
$$
### Total Net Flow
The **total net flow** at $v$ is:
$$
\small
\text{Total Positive Flow leaving }v - \text{Total Positive Flow entering }v
$$
### Flow Value
The **value** of flow $f$ is defined as the ==total flow leaving the source==:
$$
|f|=\sum_{v \in V} f(s,v)
$$
Note that here, $|\cdot|$ does not mean absolute value/cardinality.
## Example
We are producing hockey pucks:
1. We have a factory at Vancouver and warehouse at Winnipeg;
2. Space on trucks is leased to ship from sink to source;
3. Trucks have a limited capacity;
4. Trucks take specified routes between cities;
5. They can ship $\leq c(u,v)$ items per day from cities $u$ to $v$;
6. The goal is to find the largest number $p$ of items per day that can be shipped.
![[Example Flow Network.png]]
### Cancellation
Shipments seem to be modelled well by flows. However, there is one difference. Suppose 8 crates per day are shipped from Edmonton to Calgary, and 3 crates per day the other way. We **cannot** represent this with a flow: **skew-symmetry** is violated.
However, this strategy is *pointless*: why ship 8 there and 3 back, instead of just shipping 5 there? In effect, 3 of the 8 crates are **cancelled**.
We can now represent this with a flow: $f(Ed, Ca)=5;f(Ca,Ed)=-5$.
## Technical Tools
### Implicit Summation
Let $X,Y \subseteq V$. Then:
$$
f(X,Y)=\sum_{x \in X} \sum_{y \in Y}f(x,y)
$$
For example, flow conservation $\sum_{v \in V}f(u,v)=0 \forall u \in V-\{ s,t \}$ becomes:
$$
f(u,V)=0\forall u \in V-\{ s,t \}
$$
### Identities
1. For all $X \subseteq V$, we have $f(X,X)=0$, because $f(u,v)$ and $f(v,u)=-f(u,v)$ cancel each other;
2. For all $X,Y \subseteq V$ we have $f(X,Y)=-f(Y,X)$ - a generalisation of $f(X,X)=0$ by the same reasoning;
3. For all $X,Y,Z \subseteq V$ with $X \cap Y=\emptyset$ we have: $$\begin{align}f(X \cup Y,Z)&=f(X,Z)+f(Y,Z) \\ f(Z,X \cup Y) &=f(Z,X) + f(Z,Y)\end{align}$$Split summation into two: one over $X$, one over $Y$.
## Applications of Flow Networks
+ [[The Dancing Party Problem]]
+ [[Maximum Bipartite Matching]]

---

See now: [[The Ford-Fulkerson Method]], [[The Edmonds-Karp Algorithm]]