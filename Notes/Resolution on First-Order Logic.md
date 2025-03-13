#notes 

Resolution is not only a proof system for [[Propositional Logic]], but it is a sound and complete proof system for first-order logic too:
+ If $\Sigma$ is a set of first-order formulae and $\phi$ is a first-order formula such that for every interpretation $M,M \vDash \Sigma \implies M \vDash \phi$ then the proof system will answer "yes" - it satisfies **completeness**.
+ If the proof system answers "yes" on input ($\Sigma,\phi$) then for every interpretation $M,M \vDash \Sigma \implies M \vDash \phi$ - it satisfies **soundness**.

