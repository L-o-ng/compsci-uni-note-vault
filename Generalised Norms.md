#definition 

Given a [[Vector Spaces|Vector Space]] $X$, a function $d:X \to \mathbb{R}$ is a *norm* if it satisfies the following:
+ Triangle Inequality; $$d(\mathbf{x}+\mathbf{y})\le d(\mathbf{x})\forall \mathbf{x},\mathbf{y} \in X$$
+ Absolute Homogeneity; $$d(s\mathbf{x})=|s|d(\mathbf{x})\forall \mathbf{x}\in X,\text{ and scalars }s$$
+ Positive Definite; $$\text{If }d(\mathbf{x})=0\text{ then }\mathbf{x}=0$$
## Provable Properties of Norms
+ $$\array{
\underline{d(0)=0} \\
\text{Consider Absolute Homogeneity, }s=0 \\
d(0\mathbf{x})=|0|d(\mathbf{x})=0, 0\mathbf{x}=0 \\
\implies d(0)=0
}$$
+ $$\array{
  \underline{d(\mathbf{x}) \ge 0\forall \mathbf{x} \in X} \\
  \text{Consider }\mathbf{0}=\mathbf{x}-\mathbf{x} \\
  \text{So }d(\mathbf{0})=d(\mathbf{x}+-\mathbf{x}) \ge & d(\mathbf{x})+d(-\mathbf{x})\\ &=d()
  }$$todo!