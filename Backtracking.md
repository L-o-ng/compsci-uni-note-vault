#notes 

See also: [[A Knight's Tour]]

**Backtracking** is a technique for problems with many *candidate* solutions but too many to try.
	For example: there are $6,670,903,752,021,072,936,960$ ways to fill in a Sudoku grid. Clearly this is too many to try.

## General Algorithm (Informal)
1) Do I have a solution?
2) No: Can I extend my solution by 1 step?
4) Yes: Do that. Do I have a solution now?
5) Yes: Done.
6) No: Try to extend again.
7) When I can't extend again, take a step back and try a different way.
8) If no other extensions are found, give up: No solution.
## General Algorithm (Formal)
```
extend_solution(current_solution)
	if current_solution is valid then
		if current solution is complete then
			return current_solution
		else
			for each extension of the current solution do
				extend_solution(extension)
			endfor
		endif
	endif
```
