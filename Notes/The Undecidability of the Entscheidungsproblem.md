#notes 

See first: [[First-Order Logic]]
>Is there an algorithm that, given any first-order logic statement, can decide in finite time whether it is universally valid?

This is Turing's proof that there is no algorithm. This was the proof that killed Hilbert's programme to mechanically decide all of mathematics from axioms.
## Encoding Strings
Given a finite alphabet $\Gamma$, we introduce a constant symbol $\varepsilon$ (the empty string) and function symbols $s_{a}:\Gamma^{*}\to \Gamma^{*}$ for every $a \in \Gamma$, with the intended meaning $S_{a}(x)=ax$ ($a$ concatenated with $x$). We add the following axioms:
$$
\begin{align}
&s_{a}(x)\neq\varepsilon \forall a  \\
&(x=\varepsilon)\vee \exists y \bigvee_{a \in \Sigma}x=s_{a}(y) \\
&(s_{a}(x)=s_{a}(y))\to(x=y)\forall a  \\
&s_{a}(x)\neq s_{b}(y)\forall a,b, \space a \neq b
\end{align}
$$
We think of a string $w_{1}\dots w_{n} \in \Gamma^{*}$ as $s_{w_{1}}(\dots s_{w_{n}}(\varepsilon)\dots)$.
## Encoding a [[The Turing Machine|Turing Machine]]
For every state $p \in Q$ of the TM, we introduce a **relation symbol** $R_{p}(x,y)$ to denote the configuration where the TM is in state $p$; the tape content is $x^{R}y$ - $x$ reversed and concatenated with y; and the head points onto the first symbol of $y$.
The following formulae define a single step of the TM, where $\sqcup$ is the blank symbol and $p \not\in \{ q_{\text{accept}},q_{\text{reject}} \}$:
$$
\tiny
\begin{align}

R_{p}(x,y)\land(\exists y'y=s_{a}(y'))\to R_{q}(s_{b}(x),y')\quad&\forall p,q,a,b :\updelta(p,a)=(q,b,R) \\
R_{p}(x,\varepsilon)\to R_{q}(s_{b}(x),\varepsilon)\quad&\forall p,q,b:\updelta(p,\sqcup)=(q,b,R) \\
R_{p}(x,y)\land(\exists x'\, x=s_{c}(x'))\land(\exists y'\, y=s_{a}(y'))\to R_{q}(x',s_{c}(s_{b}(y')))\quad&\forall p,q,a,b,c:\updelta(p,a)=(q,b,L) \\
R_{p}(\varepsilon,y)\land(\exists y'\, y=s_{a}(y'))\to R_{q}(\varepsilon,s_{b}(y'))\quad&\forall p,q,a,b:\updelta(p,a)=(q,b,L) \\
R_{p}(\varepsilon,\varepsilon)\to R_{q}(\varepsilon,s_{b}(\varepsilon))\quad&\forall p,q,b:\updelta(p,\sqcup)=(q,b,L)
\end{align}
$$
## The Entscheidungsproblem is Undecidable
For a TM $\mathscr{M}$ and an input $w=w_{1}\dots w_{n}$, we create a first-order formula $\Phi$ stating that the conjunction of all formulae above for all $x,y$ and the formula stating that the initial configuration is **reachable**.
So:
$$
R_{q_{0}}(\varepsilon,s_{w_{1}}(\dots s_{w_{n}}(\varepsilon)\dots))
$$
implies:
$$
\exists x,y(R_{q_{\text{accept}}}(x,y)\lor R_{q_{\text{reject}}}(x,y))
$$
The formula $\Phi$ is **valid** if and only if $\mathscr{M}$ terminates on $w$.

Note that the domain may contain anything apart from all finite strings over $\Gamma$. Irrespective, to satisfy $\Phi$ for a correctly encoded computation, we must set the predicate $R$ to *true* on all configurations reachable from the initial.
We may set $R$ to *false* elsewhere to create a model which falsifies $\Phi$ whenever $\mathscr{M}$ doesn't terminate on $w$.

Therefore, if first-order validity were decidable, we could decide [[The Halting Problem]], and so we find a contradiction. Therefore, the entscheidungsproblem is undecidable.