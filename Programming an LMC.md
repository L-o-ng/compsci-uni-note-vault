#notes 

See Also: [[Little Minion Computer]]
## Instruction Set

| Mnemonic | Code | Description           |
| -------- | ---- | --------------------- |
| ADD      | 1xx  | Add                   |
| SUB      | 2xx  | Subtract              |
| STO      | 3xx  | Store                 |
| LDA      | 5xx  | Load                  |
| BR       | 6xx  | Branch                |
| BRZ      | 7xx  | Branch on zero        |
| BRP      | 8xx  | Branch on positive    |
| IN       | 901  | Input                 |
| OUT      | 902  | Output                |
| HLT      | 000  | Halt                  |
| DAT      |      | Data storage location |
## Multiplication and Division
The LMC does not natively support these elementary operations. They have to be implemented with addition and subtraction.
## Robustness
When we add numbers whose sum exceeds 999, the calculator overflows. There is **no** overflow flag.
### Handling Overflow
When we add $a$ and $b$, the calculator holds $a+b$  normally and $a+b-1000$ otherwise.
If after adding $a$ and $b$, we subtract $b$ (or indeed $a$) from the result, the calculator holds $(a+b)-b=a$ if there was no overflow, and $(a+b-1000)-b=a-1000$ if there was overflow. That is, we get a NEG flag in the second case only: now we can test for overflow!