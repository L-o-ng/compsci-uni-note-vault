#notes 

**XPath** is a declarative query language for XML.
It has simple syntax for addressing parts of an XML document.
It treats a document as a logical ordered tree with nodes:
+ Root;
+ Elements;
+ Attributes;
+ Text.

A location path is composed by a series of steps joined with `/`.
![[XPath.png]]
```
<bib>
	<book>
		<publisher> Addison-Wesley </publisher>
		<author> Serge Abiteboul </author>
		<author> <firstName> Rick </firstName>
						 <lastName> Hull </lastName>
		</author>
		<author> Victor Vianu </author>
		<title> Foundations of Databases </title>
		<year> 1995 </year>
	</book>

	<book price=“55”>
		<publisher> Freeman </publisher>
		<author> Jeffrey D. Ullman </author>
		<title> Principles of Database and Knowledge Base Systems </title>
		<year> 1998 </year>
	</book>
</bib>
```
## Basic Navigation
### Simple Expressions
+ `/bib/book/year`:
  ```
  <year> 1995 </year>
  <year> 1998 </year>
  ```
+ `/bib/paper/year`:
  `Empty`
### Restricted Kleene Closure
+ `//author`: find **any** node with tag `author`
```
  <author> Serge Abiteboul </author>
  <author> <firstName> Rick </firstName>
					<lastName> Hull </lastName>
	</author>
	<author> Victor Vianu </author>
	<author> Jeffrey D. Ullman </author>
```
+ `/bib/book//firstName`
  `<firstName> Rick </firstName>`
#### Logic
In mathematical logic:
+ Let $V_{0}=V$ be a set of strings, including the empty string $\varepsilon$;
+ Define recursively: $V_{i+1}=\{ uw|u \in V_{i}\text{ and }w \in V \}$;
+ The Kleene Closure on $V$ is: $$V^{*}=\bigcup_{i\geq 0}V_{i}=V_{0}\cup V_{1}\cup V_{2}\cup V_{3}\cup\dots$$
Thus we find the set of all possible strings obtained by concatenations of strings in $V$.
### Wildcards
+ `/bib/book/author/*`: Matches any **element**; no `text()`;
+ `//book/*`.
### Attributes
+ `/bib/book/@price`: Here the `@` matches attributes.
	+ `@price` means that the `price` must be an attribute.
	+ `@*` matches any attribute.
### Predicates
We can add a **predicate**, or boolean condition, after a tag. We then follow only the subset of paths whose tags satisfy the predicate.
+ `//book[@price="55"]`;
+ `/bib/book/author[firstName]`: Or where there exists a first name subelement;
+ `/StarMovieData/Celebrity[//City="Malibu"]/Name`: Go to all celebrity nodes, keep those with at least one home in Malibu, and then list their names.
+ `/bib//book[@price="55"][//firstName|publisher="Freeman"]`
	+ Note that predicates are satisfied in order: we satisfy the first, then try the second on those. We can therefore only swap if the predicates are independent.
## Axes and Positional Navigation
Our form of a query is: `/step1/step2/step3/.../stepn`.
Each of these steps consists of:
+ A **basis**;
+ A list of **predicates**.

A **basis** consists of:
+ An **axis** (the direction in which the navigation proceeds from the current node);
+ A *node test* (the type of node we navigate to).

So far, we have only navigated to a child or attribute, but we can do more.
+ `child` - the default axis;
+ `parent`;
+ `attribute`;
+ `self`;
+ `descendant`;
+ `descendant-or-self`;
+ `ancestor`;
+ `ancestor-or-self`;
+ `following-sibling`;
+ `preceding-sibling`;
+ `following` - Nodes after the current node in the document order.;
+ `preceding` - As above for nodes before.
### Syntax
We *prefix* a tag or attribute with an axis name and double colon:
+ `/bib/book/@price` = `/child::bib/child::book/attribute::price`;
+ `//book/*` = `/descendant-or-self::book/child::*`.
### Positional Predicates
The order of elements matters in XML. We can select a subelement using the predicate format `[position()=i]`, where `i` is the position of the desired subelement within the element, ==indexed from 1==.

So, `//author[position()=2]` lists the second author of an element.
We can be more succinct: `/bib/book/author[2]`.

An important note is that we always count positions on the specified axis. For a reverse axis, we count in the reverse document order. So, `.../ancestor::*[position()=1]/...` = `.../parent::*/...`.
### Nesting Predicates
We can nest predicates: `/bib/book/author[firstName][address[//zip][city]]/lastName`.
This finds all authors who have:
+ A subelement `firstName`;
+ A subelement `address` with:
	+ A `zip` as a descendant;
	+ A `city` as a child.

And returns the `lastName`.
## Functions
We have some basic functions:
+ `text()` matches the text value;
+ `name()` returns the tag name.

So we have `/bib/book/author/text()`, which returns:
```
Serge Abiteboul
Victor Vianu
Jeffrey D. Ullman
```
Note that `Rick Hull` does not appear as he has text within subelements, and not in his `author` element.

Also consider: `/bib/*[name()="book"]` = `/bib//book`.






