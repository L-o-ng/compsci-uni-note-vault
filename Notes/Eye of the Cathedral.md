#coursework 
## Global Stuff
### Room Parser
Static class that on awake() looks through a folder of room defs and instantiates them into room classes.
### 
## Worldgen
### World
Array of [[#Tiles]].
$$
\boxed{
\begin{matrix*}[l]
\text{class } World \\
\hline
- \text{map: List<Tile>} \\
- \text{start: int} \\
\hline
+\text{get} \\
+\text{set} \\
+\text{init}(\text{seed: int}) \\
+\text{etc}
\end{matrix*}
}
$$
### Room
Class, preset array of [[#Tiles]].
$$
\boxed{
\begin{matrix*}[l]
\text{class } Room \\
\hline
-\text{layout: List<Tile>} \\
\hline
+\text{get}(\text{rotated: bool})
\end{matrix*}
}
$$
### Tiles
Abstract class.
$$
\boxed{
\begin{matrix*}[l]
\text{class } Tile \\
\hline
-\text{id: String} \\
-\text{items: List<Items>} \\
-\text{creature: Entity?} \\
\hline
+\text{get, set, etc}
\end{matrix*}
}
$$
## Entities
### Item
Similar to [[Into The Maze]]: item definition, item instance.
### Player
### Enemy

