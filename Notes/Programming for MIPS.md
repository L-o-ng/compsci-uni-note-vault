#notes 
## Functions
MIPS functions have *arguments* and a *return value*.
### Call and Return
According to MIPS conventions, when a function is called: 
+ The *caller* places the arguments into the registers `$a0`-`$a3`
+ The return value is placed into the registers `$v0`-`$v1`
+ The saved registers `$s0`-`$s7` are *not* modified by the callee.
## Input
The `syscall` instruction suspends execution to provide an OS service.

```
li        $v0, 5      # load syscall code 5
syscall
move      $t0, $v0    # move syscall result returned to $v0 to temp
```
### Key `syscall` Codes

| Service       | Code | Arguments       | Result          |
| ------------- | ---- | --------------- | --------------- |
| print integer | 1    | `$a0` = integer | -               |
| print string  | 4    | `$a0` = string  | -               |
| read integer  | 5    | -               | `$v0` = integer |
| exit          | 10   | -               | -               |
