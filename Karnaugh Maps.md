#notes 

A **Karnaugh** **Map** is a more systematic way to simplify a boolean formula.
Note that the key to simplifying a [[Boolean Algebra|boolean expression]] is spotting terms of the form: $PA+P \overline{A}$ since this = $P$.
A *Karnaugh* *map* is a graphical way of representing an equation to make spotting these terms easier.
## How they work
![[Karnaugh map.png]]
Each cell represents a [[Sum of Products vs Product of Sums|minterm]] and has a zero or one depending on the value of $Y$ corresponding to that minterm. The **Sum of Products** form is given by adding the *minterms* corresponding to 1s.

The order of *minterms* is such that each cell differs in the **negation of exactly one variable** from its neighbours, including wrap-around.

### Simplifying
![[K-map simplification.png]]
Rather than writing out the full Sum of Products, we can circle neighbouring 1s, and use the single reduced implicant for both 1s in the circle.
#### Example
For the above map,
+ **Full Sum of Products**: $Y=\overline{A}\cdot\overline{B}\cdot\overline{C}+\overline{A}\cdot \overline{B}\cdot C$
+ **Reduced**: $Y=\overline{A}\cdot \overline{B}$
## In General
1) Create the map so that neighbouring terms differ in the negation of 1 variable, including wrap-around.
2) Circle *exactly all* **ones** in the map using ==as few circles as possible==, and making each circle ==as large as possible==.
3) Each circle must span a rectangular block that is a **power of 2** in *each* dimension.
4) Read off the implicants circled.
If a boolean expression is **minimal** then it is the sum of **prime** **implicants**: implicants that cannot be combined with each-other.
Here, each circle represents an *implicant*. The largest possible circles represent *prime implicants*.
## Examples
### Example 1
![[K-map example 1.png]]
### Example 2 with Wrap-Around
![[K-map example 2.png]]
## Usage
K-maps are often used to simplify **7-segment display drivers**.
![[7-segment display driver.png]]
There are 4 binary inputs that identify 10 outputs, each a number on the display.

![[K-map for 7 segment display.png]]
There are some unspecified inputs in the simplification:
![[K-map display simplification.png]]
We can assume they are 1s to further simplify the circuit.
![[K-map display simplified.png]]
## Product of Sums Minimisation
1) The creation of the K-map is the exact same process.
2) Circle the **zeroes** in the map by the same rules.
	1) You group 0s to ==produce minimum sum terms== instead of 1s for minimum products.
	2) Each cell corresponds to a sum term that is false in that cell.
### Example
NB - the red line points to $A+\overline{B}+C$
![[PoS minimisation example.png]]
