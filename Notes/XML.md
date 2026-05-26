#notes 

**XML**, or *Extended Markup Language*, is one of the main languages for [[Types of Data|Semi-Structured Data]]. It describes the **content** of data.

```
<bibliography>  
	<book>  
		<title> Foundations of Databases </title>  
		<author> Abiteboul </author>  
		<author> Hull </author>  
		<author> Vianu </author>  
		<publisher> Addison Wesley </publisher>  
		<year> 1995 </year>  
	</book>  
	…  
</bibliography>
```
## Graphs
XML data has a directed tree structure: order matters!
![[XML.png]]
+ Internal nodes are **elements**;
+ Leaves are *raw* data;
+ We also have a document node and a root node.

As a result, querying traverses this tree, and so loses the declarative nature.
## Schema
XML is *self-describing*. It has no schema: only the relative position of the elements in the tree matter.
The schema is essentially discovered from the data:
+ So instead of `person(name, phone)`;
+ We have `<person>`, `<name>`, `<phone>` as part of the data, possibly repeated many times.

XML is much more **flexible** as a result.
## Advantages
Since XML is just syntax for data, we can *translate* **any** data to XML, ship it over the web, and input it into any application.
+ **Simplicity**: It is a relatively simple, standard, human-legible language;
+ **Extensibility**: Users can define their own tags;
+ **Platform and Vendor Independent**: Works on all platforms and alphabets;
+ **Separation**: It is a write-once, publish anywhere language.
## Validation
We can impose a more rigorous structure to our data. In particular, we can define:
+ Permissible element names;
+ Which elements can appear in combination;
+ How elements can be nested;
+ What attributes go with each element type.

We can do this in two ways:
A [[Document Type Definition]]:
+ Is a concrete set of rules for elements and attributes;
+ Allows seamless data exchange between documents with the same DTD;
+ Is appropriate for *specific* applications;
+ Is provided as an extra file or embedded into the XML.

An **XML Schema**:
+ Is more powerful than a DTD;
+ Allows more complex structures.
### Well-Formed Documents
A well-formed document has:
+ A single root element;
+ Matching, properly nested tags;
+ An initial declaration: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`, where standalone suggests the presence of a DTD, with `yes` indicating none.
### Type-Valid Documents
This is stronger:
+ It must be well-formed;
+ Elements and attributes must follow the structure defined by the DTD.
### Schema-Valid Documents
This is much like a type-valid document, but instead using an XML schema.