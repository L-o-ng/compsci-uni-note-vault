#notes 

![[Tree Rotation.png]]
## Assumptions
1) Left rotation on `x`: right child is not `null`.
2) Right rotation on `y`: left child is not `null`.

This operation is *local*; it modifies a constant number of parent-child links, so is $O(1)$.
A combination of rotations can provide re-balancing. A compound operation on a parent-child-grandchild triple is called a **trinode restructuring**.
The operation largely depends on whether the child and grandchild are on the same side.
## Trinode Restructuring
![[Trinode Restructuring 1.png]]
![[Trinode Restructuring 2.png]]
This operation is still $O(1)$.

