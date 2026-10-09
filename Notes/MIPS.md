#notes 

See also: [[Programming for MIPS]]

MIPS stands for **Microprocessor without Interlocked Pipeline Stages**. It is used in silicon graphics, Nintendo consoles, Cisco, etc.
## Design
### Principles
+ Simplicity favours regularity.
+ Make the common case fast.
+ Smaller is faster.
+ Good design demands good compromises.
### Architecture
MIPS is based on a 32-bit processor: 
+ It has 32-bit words.
+ There are about 110 instructions in its instruction set.
+ There are 32 general purpose registers.
![[MIPS Register Allocation Chart.png]]
## Example
In this example, it is assumed that:
+ 4Gb memory has $2^{32}$ memory locations - so the address bus is 32 bits wide.
+ words are 4 bytes long - so the data bus is 32 bits wide.
+ When we request the contents of a memory address $m$, the contents of addresses $m, m+1, m+2,m+3$ are returned.
+ There is a 32-bit register named `$zero`, which always holds 0, and general purpose registers `$s1,$s2,...,$s7`.
### Assembly
`lw $s1, ($s2)` : `$s1` takes the value of the memory location held in `$s2`.
`addi $s1, $s2, x` : `$s1` takes the value of `$s2` + `x`.
`beq $s1, $s2, m` : if `$s1 = $s2` then go to memory location `m`.
`slt $s1, $s2, $s3` : if  `$s2 < $s3` then `$s1` takes the value 1, else 0.
`j m` : jump to memory location `m`.
### I-Type Instructions
An **I-Type** instruction has the following format:
+ 6-bit opcode.
+ 5-bit Rs.
+ 5-bit Rd.
+ 16-bit address.
Where:
+ opcode is the instruction code.
+ Rs is the source register.
+ Rd is the destination register.
+ address is a memory address or constant.
#### Example
`addi $s3, $s3, 1` in machine code is `0010000 10011 10100 0000000000101000`
`beq $s3, $s4, 40` is `000100 10011 10100 0000000000101000`
`lw $s1, ($s2)` is `100011 10001 10010 0000000000000000`
### R-Type Instructions
An **R-Type** instruction has the following format:
+ 6-bit opcode
+ 5-bit Rs1
+ 5-bit Rs2
+ 5-bit Rd
+ 5-bit shift 
+ 6-bit funct
Where:
+ shift is a shift amount for shift instructions.
+ funct is a supplement for opcode for some instructions.
#### Example
`slt $s6, $s1, $s5` in machine code is `000000 10110 10001 10101 00000 101010`
### J-Type Instructions
A **J-Type** operation has the following format:
+ 6-bit opcode
+ 26-bit address
Where:
+ address is the memory location to jump to.
#### Example
`j 8` in machine code is `000010 00000000000000000000001000`.
# Advanced
![[MIPS.png]]
Here, the first [[Adder]] is to executed instructions in sequence, and the second for [[#J-Type Instructions]].
## Logic Design Convention
+ *Combinational* logic vs *Sequential* logic;
+ **Control Signals**: Signals used for multiplexor selection/driving operation of functional units;
+ **Data Signals**: contain information that is operated on by a functional unit.
## Building a Single Cycle Datapath
![[MIPS-1.png]]
![[MIPS-2.png]]
### ALU Control

| ALU Control Lines | Function         |
| ----------------- | ---------------- |
| `0000`              | `AND`              |
| `0001`              | `OR`               |
| `0010`              | `add`              |
| `0110`              | `subtract`         |
| `0111`              | `set on less than` |
| `1100`              | `NOR`              |

| Opcode | ALUOp | Operation        | Funct Field | ALU Action       | ALU Control Input |
| ------ | ----- | ---------------- | ----------- | ---------------- | ----------------- |
| `LW`     | `00`    | `Load Word`        | `XXXXXX`      | `add`              | `0010`              |
| `SW`     | `00`    | `Store Word`       | `XXXXXX`      | `add`              | `0010`              |
| `BEQ`    | `01`    | `Branch Equal`     | `XXXXXX`      | `subtract`         | `0110`              |
| `R-Type` | `10`    | `add`              | `100000`      | `add`              | `0010`              |
| `R-Type` | `10`    | `subtract`         | `100010`      | `subtract`         | `0110`              |
| `R-Type` | `10`    | `AND`              | `100100`      | `AND`              | `0000`              |
| `R-Type` | `10`    | `OR`               | `100101`      | `OR`               | `0001`              |
| `R-Type` | `10`    | `Set on less than` | `101010`      | `Set on less than` | `0111`              |

### Instruction Classes
See [[#I-Type Instructions]], [[#R-Type Instructions]], [[#J-Type Instructions]].
### Overview
![[MIPS-3.png]]
![[MIPS-4.png]]
## Performance
$$
t_{\text{pipelined}}=\frac{t_{\text{nonpipelined}}}{p}
$$
where $p$ is the number of pipeline stages.

| Instruction Class | Fetch | Read  | ALU   | Data Access | Write | Total Time |
| ----------------- | ----- | ----- | ----- | ----------- | ----- | ---------- |
| `lw`                | `200ps` | `100ps` | `200ps` | `200ps`       | `100ps` | `800ps`      |
| `sw`                | `200ps` | `100ps` | `200ps` | `200ps`       |       | `700ps`      |
| `R-type`            | `200ps` | `100ps` | `200ps` |             | `100ps` | `600ps`      |
| `beq`               | `200ps` | `100ps` | `200ps` |             |       | `500ps`      |
![[MIPS-5.png]]
Here we perform register writes first then all register reads, to avoid conflicts within the cycle.