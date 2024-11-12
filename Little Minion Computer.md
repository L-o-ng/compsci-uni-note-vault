#notes 
The Little Minion Computer is a version of the Little Man Computer developed by MIT in 1965. It is a simplification of [[Von-Neumann Architecture]].
This LMC interestingly works in *decimal*.
![[LMC Diagram.png]]
## Essential Features
+ **Mailboxes** act as **memory**. Mailboxes each have a 2-digit address, giving 100 total mailboxes. Each mailbox contains a slip of paper with 3 digits on it.
+ The **Calculator** act as the **CPU**. It operates on 3-digit numbers. It can *add*, *subtract*, and has one *flag*.
+ The **2-Digit Counter** acts as the **Program Counter**. It has 2 buttons: 
	+ The first increments the counter by 1.
	+ The other is external, operated by *us* rather than the minion. This button resets the counter to 00.
+ The **Input and Output Trays** act as I/O for the LMC. The *user* can put slips of paper with 3 digits into the input tray, to be *read* when the little minion next looks at the tray.
  Likewise, the minion can *write* 3-digit notes and put them in the out tray, to be read by the user.
## Working
1) The little minion looks at the **2-digit counter** for a **mailbox** address (say xx).
2) The minion increments the **counter** by 1.
3) The minion goes to **mailbox** xx and reads the 3-digit number written there.
4) The minion takes the appropriate action depending on the written digits.
5) The cycle is repeated.
This is a simplification of the **fetch, decode, execute** cycle.
## Instruction Set
The 3-digit numbers the minion reads are split into **opcode** and **operand**.
The *first* digit is the opcode.
The *second and third* digits are the mailbox address.
### Opcodes
#### 5: LOAD 
+ $5\mathbf{xx}$ means: Go to mailbox $\mathbf{xx}$, read the number at that address, then go to the calculator and enter that number.
#### 3: STORE 
+ $3\mathbf{xx}$ means: Go to the calculator, note the 3-digit number displayed, then copy that into mailbox $\mathbf{xx}$.
#### 1: ADD 
+ $1\mathbf{xx}$ means: Go to mailbox $\mathbf{xx}$, read the 3-digit number stored there, then go to the calculator and add the number to the one on the calculator.
#### 2: SUBTRACT 
+ $2\mathbf{xx}$ means: Go to mailbox $\mathbf{xx}$, read the 3-digit number stored there, then go to the calculator and subtract the number from the number already on the calculator. If the number in the mailbox is larger than the number in the calculator, raise the **NEG** flag to indicate this.
#### 901/902: INPUT/OUTPUT
+ $901$ means **INPUT** or **READ**: Go to the **IN** tray, read the 3-digit number there, then enter that number into the calculator. The slip of paper in the **IN** tray is *removed*. If there are several slips, the minion takes the first one put there, and the others remain for future visits.
+ $902$ means **OUTPUT** or **PRINT**: Go to the calculator, read the 3-digit number, then go to the **OUT** tray and leave a slip of paper with that number on it.
#### 000: BREAK
+ $000$ tells the little minion to have a rest
## Extra Note
In the LMC, **all** actions pass through the calculator.
+ If you wanted to output the number stored in mailbox $\mathbf{xx}$, load it into the calculator with a load instruction, then output the content of the calculator.
## LMC Fetch Execute Cycle
This cycle is also known as the **instruction cycle**. There are 2 phases:
+ **Fetch**: The little minion finds the instruction to execute.
+ **Execute**: The little minion performs the work specified in the instruction.
### In Depth
+ **Fetch**: The minion goes to the counter, reads the address there, and increments it. It then goes to the mailbox with that address and reads the 3-digit number in the mailbox.
+ **Execute**: The minion carries out the instruction.

