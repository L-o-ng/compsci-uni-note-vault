#coursework 

1) 
```
Fn: fold
Input: integer N
Output: sum of digits in N
	n <- N as string
	if length of n = 1 then
		return N
	else 
		return n[0] as integer + fold(n[1:] as integer)
	endif
```

```
def DigitSum(n):
	ns = str(n)
	if len(ns) == 1:
		return n
	else:
		return int(ns[0]) + DigitSum(int(ns[1:]))
print(DigitSum(1234)) # 10
```

2) Consider the numbers $K_{n}$ defined by: $$K_{n}=\begin{dcases}n & \text{for }n \le 3\\K_{n-1}+2K_{n-2}+3K_{n-3} & \text{for }n \ge 4\end{dcases}$$
	1) $K_{8}=293$
	2) 

```
fn k_sum
in integer n
op integer K_n
	if n <= 3 then
		return n
	else 
		return k_sum(n - 1) + 2 * k_sum(n - 2) + 3 * k_sum(n - 3)
	endif
```
```
fn k_sum
in integer n
op integer K_n
	k <- array 0, n + 1 times
	k[0] <- 0
	k[1] <- 1
	k[2] <- 2
	k[3] <- 3
	for i <- 4 to n + 1 do 
		k[i] <- k[i - 1] + 2 * k[i - 2] + 3 * k[i - 3]
	endfor
	return k[n]
```