#notes 

A tree whose elements have at most 2 children is called a binary tree. Since each element can have only 2 children, we name the the left and right child.

A rooted tree has one node, known as the root, which is designated as the topmost node. All other nodes in the tree are descendants of the root.
## Notes
+ [[Arithmetic Expressions on a Binary Tree]]
+ [[Storing Data on a Binary Tree]]
+ 
## Formally
> A (rooted) binary tree is a finite set of nodes which are either empty or consists of a root and 2 disjoint binary trees - left subtree and right subtree.
> 	There is one entry point: the **root**.
> 		This is parentless.
> 	Every node has **at most** two children.
> 		Each non-root node has a unique parent drawn above it or each node's children are drawn right below it.
> 	Each child node is labeled as being either left-child or right-child.
> 	Childless nodes are called *leaves*.
## Properties
1) Every node excluding the root is connected by a directed edge from exactly one other node.
2) An edge is the link from one node to another.
3) Siblings are two nodes with the same parent.
4) Path length is the number of *edges* that must be traversed to get from one node to the next.
5) The **size** of a binary tree is the number of *nodes* in it.
6) The depth of a node is the path length from the root.
7) The depth of a binary tree is the depth of its deepest node.
### Lemma
>Let $T$ be a rooted binary tree of height $h$. Then:
>	$T$ has at most $2^{h+1}-1$ nodes
>	$T$ has at most $2^{h}$ leaves.
#### Proof
>The maximum number of nodes in a complete tree of height $h$ is given by:$$1+2+2^{2}+\dots+2^{h}=2^{h+1}-1$$
>The second statement follows by induction on $h$. Case $h=0$ is obvious. Consider the left and right subtrees of $T$. Then, each of them has height $\leq h-1$ and by induction, $\leq_{2}^{h-1}$ leaves. Then $T$ has at most $2^{h-1}+2^{h-1}=2^{h}$ leaves.

