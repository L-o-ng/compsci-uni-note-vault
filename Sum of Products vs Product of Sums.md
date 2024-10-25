#definition 

These refer to 2 different ways to represent any boolean expression.
## Sum of Products
Every boolean expression can be written as minterms ORed together.
$$(A\cdot B\cdot C)+(A\cdot \overline{B}\cdot \overline{C})+(\overline{A}\cdot B\cdot C)$$
![[Sum of Products circuit.png]]
## Product of Sums
Every boolean expression can also be written as maxterms ANDed together.
$$(\overline{A}+\overline{B}+\overline{C})\cdot(A+B+C)\cdot(A+B+\overline{C})$$
