#notes 
## Attributes
An attribute is a **name-value pair** with descriptive or identifying information about an element. It is placed inside the start tag of the element, with the value enclosed in quotes.
```
<book price = “95”, currency = “USD”>  <-- here
	<title> Database System Concepts </title>  
	<year> 2006 </year>  
</book>
```
An attribute can only appear once in a tag, but subelements can use the same name.
Attributes are also unordered.
```
<project name = “databases”>  
	<researcher name = “John Smith”>  
	…  
	</researcher>  
</project>
```
Attributes simply extend the name in the tree.
![[XML Syntax.png]]
### Use
Typically, attributes should be avoided in preference of subelements.
They:
+ Cannot contain multiple values;
+ Cannot describe structure;
+ Are more difficult to manipulate with code;
+ Are not easily expandable;
+ Are not easy to test against a document type definition.

They are used normally for metadata, such as Ids.
## ID, IDREF
Some attributes can be declared as of type:
+ **ID**, used as an identifier;
+ **IDREF**, used as a **pointer** to an element.

If an attribute is declared as *IDREF*, its value **must** be equal to an ID attribute elsewhere.
```
<person id = “o555”>  
	<name> Jane </name>  
</person>
  
<person id = “o456” children-idrefs = “o123 o555”>  
	<name> Mary </name>  
</person>  

<person id = “o123” mother-idref = “o456”>  
	<name> John </name>  
</person>
```
## Comments
Comments are enclosed in `<!-- ... -->` and can contain any data except the string `--`.
## CDATA
This is character data, containing any text. It is not parsed.
## Entity Reference
We can refer to reserved symbols and special characters by starting with an `&` and ending with a `;`. In a browser, the reference `&...;` will be replaced by its content `...`.

