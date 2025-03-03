#notes 

A **compiler** translates a high-level program into machine code.

A more refined view, however, follows a step-by-step process:
1) Character Stream to Token Stream: the *lex* step involves a **lexical analyser** reading strings of symbols and converting them into basic syntactic components.
2) Token Stream to Parse Tree: the *syn* step involves a **syntax analyser**, or **parser** recognising the syntactic structure of the token stream and produces a **parse tree**, or **syntax tree**.
3) Parse Tree to Intermediate Code: the *trans* step, or **translation** phase flattens the tree into a linear sequence of intermediate code, often bytecode.
4) Intermediate Code to Machine Code: the *cg*, or **code generation** phase converts the intermediate code into assembly, which can be converted to machine code.
## Speeds
### Lexical Analysis
This step accounts for more than 50% of compile time:
+ Character handling is expensive and there are a large number of characters in a program compared to tokens.
#### Tokens
Tokens are almost always defined with [[Regular Expressions]].

