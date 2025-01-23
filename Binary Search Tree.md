#notes 

A **binary search tree** is a tree in which no node has more than 2 children, and one additional property:

>You must build and maintain the tree such that it is true for **every** node $v$ of the tree that:
>	**All** elements in its *left* subtree are smaller than $v$.
>	**All** elements in its *right* subtree are larger than $v$.

Operations that modify the tree must not destroy this property.
## As a Class
```
class Node {
	constructor (data) {
		self.left <- NULL
		self.right <- NULL
		self.data <- data
	}
}
```

So we can create a tree as an association of nodes.
## Operations
See [[Tree Traversal]]
### In-Order Traversal
By definition, everything on the left of a node is smaller and on the right is bigger.
In order traversal recurses left, then outputs, then recurses right.
This means:
1) The entire left subtree is printed;
2) Then the node itself;
3) Then the right subtree.
### Insertion
1) Start at the root;
2) If match, return;
3) If the new key is smaller than the current node, insert on left;
4) Otherwise, insert on right.
```
fn insert
in self: Node, data
op inserts new key into tree.
	if data < self.data then
		if self.left is NULL then
			self.left <- Node(data)
		else
			self.left.insert(data)
		endif
	else
		if self.right is NULL then
			self.right <- Node(data)
		else
			self.right.insert(data)
		endif
	endif
```
### Search
1) Start at the root;
2) If match, return;
3) If search term is smaller than the key, go left;
4) Otherwise, go right.
```
fn search
in self: Node, data
op Node containing data
	if data < self.data then
		if self.left is NULL then
			return NULL
		endif
		return self.left.search(data)
	else if data > self.data then
		if self.right is NULL then
			return NULL
		endif
		return self.right.search(data)
	else
		return self
	endif
```
### Deletion
1) Lookup the element we wish to remove. If that returns `NULL` then we're done;
2) Otherwise, we have 3 cases to consider:
	1) If a node is a leaf, we can remove it;
	2) If a node has one child only, then we can remove and replace it with that one child;
	3) If a node has 2 children:
		1) Find the smallest node bigger than it:
			1) Take 1 step right down the tree;
			2) Repeatedly go left until a leaf is found.
		2) Copy the node to be deleted's data into that leaf
## Complexity
Operations are still $O(n)$ in the worst case, but are actually $O(\log n)$ in the average case.
This worst case can be avoided by using balanced trees.
