#notes 
$\newcommand{\Hilbert}{\mathcal{H}}$
Think of *quantum states* as linear superpositions of classical states. A qubit is the simplest non-trivial quantum state:
$$
\psi=\alpha \chi_{0}+\beta \chi_{1}
$$
where $\chi_{0}=\begin{pmatrix}1\\0\end{pmatrix}$ and $\chi_{1}=\begin{pmatrix}0\\1\end{pmatrix}$ and $\alpha,\beta \in \mathbb{C}$ satisfy $|\alpha|^{2}+|\beta|^{2}=1$.
We use **Dirac's bra-ket notation**:
$$
\array{
\ket{\psi} =\alpha \ket{0} +\beta \ket{1} \\
\ket{\psi} ^{\dagger}=\bra{\psi} =\alpha^{*}\bra{0} +\beta^{*}\bra{1} 
}
$$
So if $\psi=\alpha \chi_{0}+\beta \chi_{1}$ and $\phi=\delta \chi_{0}+\gamma \chi_{1}$ then:
$$
\langle\phi,\psi \rangle=\phi ^{\dagger}\psi=(\delta^{*},\gamma^{*})\cdot \begin{pmatrix}
\alpha \\
\beta
\end{pmatrix}=\alpha \delta^{*}+\beta \gamma^{*}=(\ket{\phi} )^{\dagger}\ket{\psi} =\langle\phi||\psi \rangle
$$
## Hilbert Spaces
In the quantum realm, classical states become elements for an orthonormal basis for a **Hilbert Space**. Quantum states are unit vectors within the Hilbert space. Measurement becomes an intrinsically statistical notion.
### Born's Rule
>Given a state $\ket{\psi}$ and an orthonormal basis $\{ \ket{\chi},\ket{\xi} \}$, the probability of measuring $\chi$ is $|\langle\chi\|\psi \rangle|^{2}$ and the probability of measuring $\xi$ is $|\langle\xi\|\psi \rangle|^{2}$.

Intuitively, choosing an orthonormal basis in a 2D Hilbert space can be likened to choosing 2 half planes to measure the probability of finding a particle in either.
## Quantum State Evolution
### Orthonormal Bases
If we measure the qubit in an orthonormal basis $\{ \ket{\psi},\ket{\xi} \}$, we have the transformation:
$$
\ket{\psi} \mapsto \ket{\phi} 
$$
where $\phi \in \{ \chi,\xi \}$ is the outcome of the measurement according to Born's Rule. This is called the *collapse* of the wavefunction.
### Unitary Matrices
A unitary matrix, also called a **quantum gate**, satisfies:
$$
UU^{\dagger}=I
$$
so they preserve the unitary modulus of the quantum state.
By definition, all quantum gates are invertible. This is not necessarily true for logic gates.
#### Example
$$
N=\begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}
$$
can be seen as a quantum analogue of negation, since $N\ket{0}=\ket{1},\quad N\ket{1}=\ket{0}$.
## Understanding Measurement
### Schrödinger's Cat 
>A cat is placed in a box with a vial of poison. Before the box is opened, the cat is in a superposition of the states ‘DEAD’ and ‘ALIVE’. It is only ‘DEAD’ OR ‘ALIVE’ once the box is opened.
### Many Worlds Interpretation
>All possible outcomes of measurements happen in different physical worlds.

---

Quantum systems may just be sensitive to interaction with the outside environment. This is called **decoherence** and is a big obstacle to building quantum computers.
## Multi-Particle Systems
The qubit $\ket{\psi}=\alpha \ket{0}+\beta \ket{1}$ describes a single particle, and lives in a 2D Hilbert space. We represent multi-particle systems with a new product.
### Tensor Product of Hilbert Spaces
Given two Hilbert spaces $\Hilbert_{1},\Hilbert_{2}$, their tensor product $\Hilbert_{1} \otimes\Hilbert_{2}$ is the space of finite linear combinations of symbols of the form $v \otimes w$ where $v \in \Hilbert_{1},w \in\Hilbert_{2}$. Their tensor product is *bilinear*; that is:
$$
(\lambda v_{1}+\mu w_{1})\otimes v_{2}=\lambda v_{1}\otimes v_{2}+\mu w_{1}\otimes v_{2}
$$
and:
$$
v_{1} \otimes(\lambda v_{2}+\mu w_{2})=\lambda v_{1}\otimes v_{2}+\mu v_{1}\otimes w_{2}
$$
for all $v_{1},w_{1} \in\Hilbert_{1},v_{2},w_{2} \in\Hilbert_{2},\lambda,\mu \in \mathbb{C}$.
### State Space
The state space of an $n$ qubit system is the $n^{\text{th}}$ tensor power of state spaces: $\Hilbert^{\otimes n}$.
So the state of an $n$ qubit system has the form:
$$
\ket{\psi} =\sum_{s \in \{ 0,1 \}^{n}} \alpha_{s}\ket{s}  
$$
with $\alpha_{s}\in \mathbb{C}$ and $\sum_{s}|\alpha _{s}|^{2}=1$.
#### Example
Consider the two-particle state:
$$
\ket{\psi} =\frac{1}{2}(\ket{00} +\ket{10} -\ket{01} -\ket{11} )
$$
We can write:
$$
\ket{\psi} =\left( \sqrt{ \frac{1}{2} }\ket{0} +\sqrt{ \frac{1}{2} }\ket{1}  \right)\otimes\left( \sqrt{ \frac{1}{2} }\ket{0} -\sqrt{ \frac{1}{2} }\ket{1}  \right)
$$
Here, $\ket{\psi}$ is said to be a *separable space*.
## Quantum Gates
### The Bell State
The Bell State is an example of a non-separable state. It cannot be written as the tensor product of two single-qubit states:
$$
\ket{\psi} =\sqrt{ \frac{1}{2} }(\ket{00} +\ket{11} )
$$
Most of the power of quantum information over classical comes from harnessing the Bell state. It encodes a correlation that cannot be simulated by classical information.
### The Hadamard Gate
$$
H=\sqrt{ \frac{1}{2} }\begin{pmatrix}
1 & 1  \\
1 & -1
\end{pmatrix}
$$
The Hadamard operator satisfies $H^{\dagger}=H^{-1}=H$.
### The control-NOT Gate
The CNOT gate acts on a 2-qubit system on the boolean basis as follows:
$$
\array{
\ket{00} \mapsto \ket{00} \\
\ket{01} \mapsto \ket{01} \\
\ket{10} \mapsto \ket{11} \\
\ket{11} \mapsto \ket{10} 
}
$$
 ---

We can therefore build the Bell state with the following circuit:
![[Bell State circuit.png]]
## Deutsch-Jozsa Algorithm
Let $f:\{ 0,1 \}\mapsto \{ 0,1 \}$ be one of the following boolean functions:

|      | $f_{00}$ | $f_{01}$ | $f_{10}$ | $f_{11}$ |
| ---- | ------ | ------ | ------ | ------ |
| $f(0)$ | $0$      | $0$      | $1$      | $1$      |
| $f(1)$ | $0$      | $1$      | $0$      | $1$      |
That is, $f$ is either *constant* or *balanced*.
Classically, we need *two* calls to $f$ to determine whether it is constant or balanced. In Quantum, we need only **one**!

>Given a boolean function on $n$ bits that is promised to be constant or balanced, there is a quantum algorithm to tell whether $f$ is constant or balanced using only one call to $f$.
### Case $n=1$
Let $U_{f}$ be the following quantum gate: for $x,y \in \{ 0,1 \}$
$$
U_{f}\ket{x} \ket{y} =\ket{x} \ket{y \otimes f(x)} 
$$
Note that:
$$
U_{f}\ket{x} \otimes \sqrt{ \frac{1}{2} }(\ket{0} -\ket{1} )=(-1)^{f(x)}\ket{x} \otimes \sqrt{ \frac{1}{2} }(\ket{0} -\ket{1} )
$$
The following circuit determines whether $f$ is constant or balanced:
![[Deutsch-Josza Algorithm Circuit.png]]
## Quantum Teleportation
![[Quantum Teleportation Circuit.png]]
Romeo and Juliet are a sweet couple in XVth century Verona but their parents want them to break up before they head to University. Juliet will be going to Oxbridge but Romeo will head to Durham. Their bond, however, has been fortified to a point that they share a Bell state:
$$
\ket{\psi} =\sqrt{ \frac{1}{2} }(\ket{00} +\ket{11} )
$$
and they plan to discuss their feelings unbeknownst to their parents before deciding whether to break up or not.
Their parents hire an investigator, Eavesdropping Eve, who is rather old fashioned and knows nothing about quantum communication, so she has access only to Romeo and Juliet’s classical communications.

At the start of Michaelmas, Juliet's feelings for Romeo are encoded in the quantum state:
$$
\ket{\xi} =\alpha \ket{0} +\beta \ket{1} 
$$
where 1 is love and 0 is hate.
Her goal is to communicate $\xi$ to Romeo exchanging only classical information with him. She can now use quantum teleportation:

>Quantum teleportation is a protocol that transfers a quantum state to any geographical location requiring the parties to exchange only classical information, so that observers are unable to observer $\xi$.
### Achieving Quantum Teleportation
1) Juliet entangles $\ket{\xi}$ with the Bell state she shares with Romeo: $$\ket{\psi_{1}}=\ket{\xi} \otimes \ket{\psi} =\sqrt{ \frac{1}{2} }\alpha \ket{0} (\ket{00}+\ket{11}  )+\sqrt{ \frac{1}{2} }+\beta \ket{1} (\ket{00} +\ket{11} ) $$
2) Juliet applies the CNOT gate to her particle in the Bell pair conditional on $\xi$; namely:$$\operatorname{CNOT \ket{\psi_{1}} }=\sqrt{ \frac{1}{2} }\alpha \ket{0} (\ket{00} +\ket{11} )+\sqrt{ \frac{1}{2} }\beta \ket{1} (\ket{10} +\ket{01} )$$
3) Finally, Juliet acts on her feelings state with the Hadamard operator to obtain: $$H\hat{C}\ket{\psi_{1}} =\frac{1}{2}\alpha(\ket{0} +\ket{1} )(\ket{00} +\ket{11} )+\frac{1}{2}\beta(\ket{0} -\ket{1} )(\ket{10} +\ket{01} )$$
	1) Or equivalently, by regrouping, the state:$$\ket{\psi_{2}} =\eqalign{&\frac{1}{2}\ket{00} (\alpha \ket{0} +\beta \ket{1} ) \\ +&\frac{1}{2}\ket{10} (\alpha \ket{0} -\beta \ket{1} ) \\ +&\frac{1}{2}\ket{01} (\alpha \ket{0} +\beta \ket{1} ) \\ +&\frac{1}{2}\ket{11} (\alpha \ket{0} -\beta \ket{1} )}$$
4) $$\begin{matrix}\text{Alice's Measurement} & \text{Instructions to Bob} \\ 00 & \text{Keep your state as is} \\ 10 & \text{Act on it with }Z \\ 01 & \text{Act on it with NOT} \\ 11 & \text{Act on it with NOT and then }Z\end{matrix}$$
Eve now has no idea what the quantum information os, and so no idea what Juliet's feelings are.
