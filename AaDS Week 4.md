#coursework 

1) Stack or Queue?
	1) Managing a waiting list: A queue, as the first person in should ideally be the first one out, in order to allow a fair waiting time for each person.
	2) Recording webpages for the back button: A stack makes more sense, as when the user presses back, the top item can be popped to restore the previous page.
	3) Scheduling jobs for a supercomputer: Assuming this is a waiting list for executing jobs from a client, and not CPU scheduling, a queue makes sense so jobs can be executed first-come-first-served.
	4) Maintaining an undo sequence: Each change can be pushed to the stack, and the top item popped when undo is pressed to restore the previous state.
2) 

| Operation    | Output              | Queue      |
| ------------ | ------------------- | ---------- |
| `enqueue(4)` |                     | 4          |
| `enqueue(6)` |                     | 4, 6       |
| `dequeue`    | 4                   | 6          |
| `enqueue(2)` |                     | 6, 2       |
| `dequeue`    | 6                   | 2          |
| `front`      | 2                   | 2          |
| `dequeue`    | 2                   |            |
| `dequeue`    | EmptyQueueException |            |
| `isEmpty`    | True                |            |
| `enqueue(1)` |                     | 1          |
| `enqueue(2)` |                     | 1, 2       |
| `size`       | 2                   | 1, 2       |
| `enqueue(6)` |                     | 1, 2, 6    |
| `enqueue(4)` |                     | 1, 2, 6, 4 |
| `dequeue`    | 1                   | 2, 6, 4    |
3) 

| Operation | Output              | Stack      |
| --------- | ------------------- | ---------- |
| `push(2)` |                     | 2          |
| `push(9)` |                     | 2, 9       |
| `push(8)` |                     | 2, 9, 8    |
| `pop`     | 8                   | 2, 9       |
| `pop`     | 9                   | 2          |
| `top`     | 2                   | 2          |
| `pop`     | 2                   |            |
| `pop`     | EmptyStackException |            |
| `isEmpty` | True                |            |
| `push(1)` |                     | 1          |
| `push(3)` |                     | 1, 3       |
| `push(5)` |                     | 1, 3, 5    |
| `size`    | 3                   | 1, 3, 5    |
| `push(2)` |                     | 1, 3, 5, 2 |
| `pop`     | 2                   | 1, 3, 5    |
4) Postfix Evaluation
```Postfix
Input: string p containing a postfix expression
Output: an integer evaluation of the expression
	stack s
	
	for i = 0 to p.length do
		if p[i] is an integer then
			s.push(p[i])
		else // p[i] must be an operator 
			operator o <- p[i]
			integer operand1 <- s.pop 
			integer operand2 <- s.pop 
			s.push(operand1 o operand2)
		endif
	endfor
	
	return s.pop 
```

5) Reordering lines
```
def is_balanced_parens(X)
	S = []
	for x in X:
		if x == '(':
			S.append(x)
		else:
			if x == ')':
				return False
			if S.pop() != '(':
				return False
	
	if S == []:
		return True
	else:
		return False
	
```