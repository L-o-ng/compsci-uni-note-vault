#notes 

>[!abstract]
>A flat list approach to a scene means that relationships are non-existant:
> + Moving a car requires individually translating its parts;
> + Spinning a wheel while driving requires complex trigonometry.
>
> A **scene graph** adds this hierarchy to our world.

A **scene graph** is a hierarchical data structure: specifically a [[Graph Theory|directed acyclic graph]], used to organise and manage the objects in a 3D scene. Every element in the scene is represented as a node in this tree.

Each node stores its transform **relative** to its parent. This is its *local transformation*. The final position in the scene is its **world** transformation.
## Transforms
![[Concatenating Transforms.png]]
We calculate a node's final world position by multiplying matrices up the hierarchy:
$$
M_{\text{node-world}}=M_{\text{parent-world}}\times M_{\text{local}}
$$
This is recursive and expands up to the root. Real engines also optimise this to avoid recalculation.
This allows us to link objects: children move along with their parents.

