#notes 
## Pre-Order Traversal
This traversal method visits the root *first*.
```
fn preorder
in x, a node
op each element in the tree
	if x != NULL then 
		output x.key
		preorder(x.left)
		preorder(x.right)
	endif
```
## In-Order Traversal
This traversal method visits the root in the *middle*.
```
fn inorder
in x, a node
op each element in the tree
	if x != NULL then
		inorder(x.left)
		output x.key
		inorder(x.right)
	endif
```
## Post-Order Traversal
This traversal method visits the root *last*.
```
fn postorder
in x, a node
op each element in the tree
	if x != NULL then
		postorder(x.left)
		postorder(x.right)
		output x.key
	endif
```
