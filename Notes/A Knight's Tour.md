#definition 

This describes a problem where a **knight** must move around a chessboard such that **each** square is visited **exactly once**.
![[A knights tour.png]]
## Solving the Problem
### Partial Solution
A list of squares in the order they are visited.
### When is it Valid?
+ No squares visited >1 time.
+ Knight has not jumped off the board
### When is it Complete?
When every square is visited: 64 items in the list.
## Using the [[Backtracking#General Algorithm (Formal)|General Algorithm]]
```
extend_solution(current_solution)
	if new move is to unvisited square on the board then
		if every square has been visited then
			return current_solution
		else
			for each of eight possible moves do
				extend_solution(with move added)
			endfor
		endif
	endif
```

## Improving the Algorithm
Rather than having a list of moves made, it is easier to maintain an $8 \times 8$ array recording when each square was visited.
We can then use a counter to record how many squares were visited.32
