#notes 

A DTD is used to give structure to [[XML]] data.
## Structure
```
<!DOCTYPE root_name [  
	<!ELEMENT elem_name (subElem1, subElem2, …)>  
	… more elements …  
]>
```
In DTD, an element is declared by:
+ Its name/tag;
+ The sequence of the names of its sub-elements.
### Subelements
These:
+ Are declared by their names;
+ Appear nested within the element;
+ Appear in XML in the order specified;
+ Commas can be omitted to allow arbitrary order.

They have multiplicity:
+ `*`: 0 or more;
+ `+`: 1 or more;
+ `?`: 0 or 1.

We also have `|` for 'or'.
We also have `#PCDATA` for text.
### Attributes
Attribute list declarations identify:
+ Which elements may have which attributes;
+ What values they can hold;
+ Their type.

```
<!DOCTYPE Bars [  
	<!ELEMENT BARS (BAR* MANUFACTURER*)>  
	<!ELEMENT BAR (NAME, BEER+)>  
	<!ELEMENT NAME (#PCDATA)>  
	<!ELEMENT MANUFACTURER (ADDRESS)>  
		<!ATTLIST MANUFACTURER name ID>  
	<!ELEMENT ADDRESS (#PCDATA)>  
	<!ELEMENT BEER (NAME, PRICE)>  
		<!ATTLIST BEER manuf IDREF>  
	<!ELEMENT PRICE (#PCDATA)>  
]>
```
## Supplying a DTD 
We can simply embed it into the file, or specify where it can be found:
```  
<?XML VERSION = "1.0" STANDALONE = "no"?>  
<!DOCTYPE Bars SYSTEM "bar.dtd">
```
## Example
```
<!DOCTYPE DurhamPUBS [  
	<!ELEMENT DurhamPUBS (PUB*)>  
	<!ELEMENT PUB (NAME,(BEER | VODKA)+, ADDRESS?)>  
	<!ELEMENT NAME (#PCDATA)>  
	<!ELEMENT BEER (NAME, PRICE)>  
	<!ELEMENT VODKA (NAME, PRICE)>  
	<!ELEMENT PRICE (#PCDATA)>  
	<!ELEMENT ADDRESS (#PCDATA)>  
]>
```
