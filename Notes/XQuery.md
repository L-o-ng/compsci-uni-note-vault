#notes 

**XQuery** is a query language for [[XML]] that is based on [[XPath]], and is similar to [[Querying with SQL|SQL]].
However, unlike the familiar `SELECT ... FROM ... WHERE ...` of SQL, we instead have `FLWR`, or *flower* expressions:
```
FOR ...
LET ...
WHERE ...
RETURN ...
```
+ `FOR` lists variable bindings to individual nodes;
+ `LET` lists bindings to collections of nodes;
+ `WHERE` lists conditions;
+ `RETURN` specifies the result.
## `FOR` vs `LET`
`FOR` binds node variables: it is thus iteration over many values.
So, `FOR $S IN /STAFFLIST/STAFF` returns **many** variables `$S` - one for each `STAFF` element.

`LET` binds *collection* variables: so one value consisting of a **list** of values.
So, `LET $S := /STAFFLIST/STAFF` returns one list `$S` containing all `STAFF` elements.

So, consider:
```
FOR $x IN doc("bib.xml")/bib/book
RETURN <result> { $x } </result>
---
<result> <book> ... </book> </result>
<result> <book> ... </book> </result>
<result> <book> ... </book> </result>
```
vs:
```
LET $x := doc("bib.xml")/bib/book
RETURN <result> { $x } </result>
---
<result>
	<book> ... </book>
	<book> ... </book>
	<book> ... </book>
</result>
```

Collections can be ordered or unordered:
+ `/bib/book/author`;
+ `distinct-values(/bib/book/author)`.
## `WHERE`
We provide one or more *conditions* to restrict the returned elements.
For variables bound by `FOR`:
+ Single elements;
+ Typically used in **scalar** predicates: `$S/Salary > 10000`.

For variables bound by `LET`:
+ List of elements;
+ Typically used in list-oriented predicates such as: `avg($S/SALARY) > 10000`.
## Double Iterations
```
Find book titles by the co-authors of database theory
FOR $x IN bib/book[title/text()="Database Theory"]/author
		$y IN bib/book[author/text()=$x/text()]/title
RETURN <answer> { $y/text() } </answer>
```
The answer may contain duplicates. We can constrain `$y` to unique values with the `distinct-values()` function.
## Nesting
```
For each author of a book by Morgan Kaufmann, list all books he/she published
FOR $a IN distinct-values(doc("bib.xml")/bib/book[publisher=“Morgan Kaufmann”]/author)
RETURN
	<result>
		{ $a,
			FOR $t IN doc("bib.xml")/bib/book [author = $a] / title
			RETURN $t
		}
	</result>
```
## Aggregate Functions
Here, `count()` is an aggregate function that returns the number of elements.
```
Find all publishers with more than 100 books
<big_publishers>
	FOR $p IN distinct-values(doc("bib.xml")//publisher)
	LET $b := doc("bib.xml")/book[publisher = $p]
	WHERE count($b) > 100
	RETURN { $p }
</big_publishers>
```
Here, `avg()` is an aggregate function that returns the average of elements.
```
Find books with price larger than the average
LET $a := avg(doc("bib.xml")/bib/book/price)
FOR $b IN doc("bib.xml")/bib/book
WHERE $b/price > $a
RETURN { $b }
```

Other aggregate functions include: `min()`, `max()`, `sum()`...
Other functions include: `string-length()`, `empty()`, `exists()`...
## Joins
Similarly to SQL, we can join two XML documents.
```
List staff along with the address of the branch they are working in
FOR $S IN doc(“staff_list.xml") // Staff
		$B IN doc(“branch.xml") // Branch
WHERE $S/branchNo = $B/branchNo
RETURN <staff-branch>
				{$S, $B/Address}
			 </staff-branch>
```
## Ordering
```
List each branch office and the staff who work at the branch
<branch_list>
FOR $B IN distinct-values(doc(“staff_list.xml") // @branchNo)
ORDER BY $B
RETURN
	<BRANCH>
		{$B/text()}
		FOR $S IN doc(“staff_list.xml")//Staff
		WHERE $S/@branchNo = $B
		ORDER BY $S/staffNo
		RETURN $S/staffNo, $S/Name, $S/Position, $S/Salary
	</BRANCH>
</branch_list>
```
## If, Then, Else
```
List the editor of each Journal paper and the first author of all other papers
FOR $h IN doc(“bibliography.xml") // papers
ORDER BY $h/title
RETURN <holding>
				{ IF $h/@type = "Journal"
						THEN $h/editor
					ELSE $h/author[1]
				}
			 </holding>
```
## Existential Quantifiers ($\exists$)
```
List the titles of the books that have at least 1 chapter containing “sailing” and having less than 40 pages
FOR $b IN doc(“bibliography.xml") // book
WHERE SOME $p IN $b//chapter SATISFIES (contains($p, "sailing") AND $p / length < 40)
RETURN {$b/title}
```
## Universal Quantifiers ($\forall$)
```
List the titles of the books, in which all chapters contain “sailing” and have less than 40 pages
FOR $b IN doc(“bibliography.xml") // book
WHERE EVERY $p IN $b//chapter SATISFIES (contains($p, "sailing") AND $p / length < 40)
RETURN {$b/title}
```
## User-Defined Functions
We can define a function and use it elsewhere. For example, we make a function to return the staff at a given branch:
```
DEFINE FUNCTION StaffAtBranch ( $BranchNo )
{
	FOR $S IN doc(“staff_list.xml")//STAFF
	WHERE $S/@BranchNo = $BranchNo
	ORDER BY $S/StaffNo
	RETURN $S/StaffNo, $S/Name, $S/Position, $S/Salary
}
```
Then our query in [[#Ordering]] becomes:
```
<branch_list>
FOR $B IN distinct-values(doc(“staff_list.xml") // @branchNo)
ORDER BY $B
RETURN
	<BRANCH>
		{$B/text()}
		StaffAtBranch ( $B )
	</BRANCH>
</branch_list>
```

---
## General Examples
```
Find all book titles published after 1995
FOR $x IN doc("bib.xml")/bib/book
WHERE $x/year > 1995
RETURN { $x/title }
```
```
Find all IDs of staff working at branch B005 with salary more than 15000
FOR $S IN doc("staff_list.xml")//STAFF
WHERE $S/SALARY > 15000 AND $S/@branchNo = "B005"
RETURN <answer> { $S/STAFFNO/text() } </answer> 
```

