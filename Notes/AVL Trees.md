#notes 

An AVL tree is a self-balancing [[Binary Search Tree]] with the following property:

>For each node $v$, the height of $v$'s children differ by at most 1.

We use the definition of height of a node and assume:
+ the height of `null` is 0 and a proper leaf is 1;
+ the height of a parent is equal to the max height of a child + 1;
+ the height of a non-empty tree is the height of its root - 1.
## Key Property
The *height* of an AVL tree storing $n$ keys is $O(\log n)$.
The standard BST operations are also $O(\log n)$.
However, insertion and deletion can violate the height balance property. We need an $O(\log n)$ method to restore balance. We can use [[Tree Rotations#Trinode Restructuring]].
## Insertion
 Consider the following tree, where 54 has just been inserted:
 ![[AVL Tree Insertion.png]]
 Height-balance is now violated. To restore it, there are 4 cases to check:
Let the node that needs rebalancing be $\alpha$.
**Single rotations**:
1) Insertion into *left* subtree of *left* child of $\alpha$; 1 right.
2) Insertion into the *right* subtree of the *right* child of $\alpha$; 1 left.
**Double rotations**:
3) Insertion into the *right* subtree of the *left* child of $\alpha$; left, then right.
4) Insertion into the *left* subtree of the *right* child of $\alpha$; right, then left.
### Post-Insertion Repair
Let $p$ be the inserted node. We need to find the nodes whose height changed. They must be on the path from $p$ up to the root.
#### Algorithm
1) Starting from $p$, go up towards the root, adjusting the heights of nodes on the path.
2) Look for the first (from $p$) node $z$ which is unbalanced - meaning the heights of its children differ by more than 1.
3) If no $z$ is found the tree is balanced.
4) If it is found, let $y,x$ be the child and grandchild of $z$ on the path to $p$.
5) Do trinode restructuring on $z-y-x$.
### Analysis
Insertion into an AVL tree is $O(\log n)$.
The repair procedure is $O(\log n)+O(1)$.
The worst-case runtime is therefore $O(\log n)$.
## Deletion
Consider the following deletion:
![[AVL Tree deletion.png]]
### Post-Deletion Repair
If $p$ is the parent of the deleted node, there may be unbalanced nodes on the path from $p$ to the root.
#### Algorithm
1) Let $z$ be the first unbalanced node on the path.
2) Let $y$ be the taller child of $z$ - meaning the one on the path.
3) Let $x$ be the taller child of $y$; or, if the children of $y$ have the same height, on the same left/right side as $y$.
4) Use trinode restructuring on $z-y-x$.
### Complexity
Deletion in an AVL tree is $O(\log n)$.
The repair procedure is $O(1)$ per level, on a height of $O(\log n)$.
So, the worst-case runtime is $O(\log n)$.
## Early Stop Condition
We can stop processing when:
+ We reach an ancestor whose height did not change;
+ The restructuring of a subtree results in the same height as before insertion/deletion.
We can store the old height of each node to detect these.
