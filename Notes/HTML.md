#notes
## Common Syntax
\<!DOCTYPE> Document type  
\<HTML> Opening and closing tags of HTML Docs  
\<header> Header for a document or section  
\<body> Document's body  
\<p> Paragraphs  
\<br> Single line break  
\<a> Hyperlink  
\<form> HTML form for user input  
\<div> Section tags

## Structure
Everything (excluding the doctype declaration) should be enclosed within a HTML tag.
Typically, HTML tags have an opening tag and a closing tag:
+ \<tag open> content </tag close>  
Within the HTML tags you should have two main sections:
+ Head  
+ Body
## Header
Remember that from this point on, all content should be within the HTML tag. 
The header section is where you store information about the document.  
Header tags:
+ \<head> \</head> Opens and closes the header section  
+ \<title> \</title> Gives the webpage a title  
+ \<meta> Display meta data  
+ \<script> \</script> JavaScript goes here  
+ \<style> \</style> CSS goes here
## Body
The body defined by the tags \<body> \</body> is where the content of the webpage goes.
This information is processed by the browser and displayed to a user.
May be influenced by \<head> data.
### Tags
Block level tags \<p> \</p>:
+ Define blocks of content.  
+ Browser will add new lines above and below.
+ Default width/height automatically.
Inline level tags \<strong> \</strong>:
+ Semantics and organisation within block.
+ Not associated with new lines.
+ Must be nested inside a block level element.
Replaced tags \<img>:
+ Browser calculates dimensions and replaces with embedded or drawn objects.
+ Nesting as for inline tags.
+ Used for specific page elements such as images and form controls.
## Attributes
Name / Value pair, \<p attribute="value">Text\</p>  :
+ Specify additional properties and behaviour and are declared in the opening tag.
	+ \<div id=“sectionOne">Text\</div>
+ This includes self closing tags.
### Common Attributes
These attributes can be applied to any \<body> tag and are typically used to improve the framework for enhancements to the user experience.  
+ class - Associates an element with a CSS class  
+ id - Uniquely identifies element for CSS/scripting  
+ style - Provides inline CSS style rules for an element  
+ title - Describes an element and its content. Creates tool-tips in browsers & used by screen readers
## Lists
Lists make up a large part of HTML content. They are made up of 2 thing: 
+ The list type tag, \<listTypeTag>
+ The list element tag, \<listElement>
Or, more briefly, 
```
// use an unordered list for bulletpoints.
<ul>
	<li></li>
</ul>

// attributes include:
<ul type = "circle, square, disc, triangle"></ul>
<ul compact></ul> // deprecated
```

```
// use an ordered list for a numbered list.
<ol>
	<li></li>
</ol>

// attributes include:
<ol reversed></ol>
<ol start = 5></ol>
<ol type = "a"></ol> // possible types are a, A, i, I, 1
```

```
// A descritpion list displays information alongside bullet points.
<dl>
	<dt></dt>
	<dd></dd>
</dl>
```

Lists can be nested with the list element tag, \<li>\</li>
## Hyperlinks
A hyperlink can be written as: 
```
<a href = ""></a>
// for example,
<p>I am a link to <a href="www.google.com">google</a>.</p>
```
Make sure links are accessible. Do not: 
+ Randomly place links, as screen readers will not have context.
+ Exclude key words, as search features/engines will struggle to find them.
### Link to a Heading
```
<h2 id="head2"> Heading 2 </h2>
<p><a href="contacts.html#head2">To heading 2</a>!</p>
```
### Links to a File
This uses the same syntax. Use the path of the file as the link. The path must be relative to the location of the html file.
### Absolute vs Relative URLs
**Absolute URL**: Points to a location defined by its absolute location on the web, including protocol and domain name. An absolute URL will always point to the same location, no matter where it's used.
**Relative URL**: Points to a location that is relative to the file you are linking from, more like what we looked at in the previous section. Be careful with these links as changing the file location can make the link invalid.
### Attributes
```
<a href="doc.pdf" title="Link to document"></a> // gives context
<a href="doc.pdf" download="doc.pdf"></a> // provides download
```

## Special Characters
Entities are needed to input special characters into html.

| Character | Entity | Desc.          |
| --------- | ------ | -------------- |
| "         | \&quot | quotation mark |
| '         | \&apos | apostrophe     |
| &         | \&amp  | ampersand      |
| <         | \&lt   | less than      |
| >         | \&gt   | greater than   |
## Images
```
<img src="img.png" alt="desc"/>
// width and height are also possible attributes
```
## Tables
Tables have 3 main tags.
```
<table>
	<tr>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
<table>
```
## Forms
Forms are used for most user input in HTML.
```
<form>
	<label for="input1">
	<input id="input1" type="text"/> //Creates a text box
</form>
// Nesting forms can cause unpredictable behaviour
```
### Attributes
+ Autocomplete - Lets the browser autofill the element.
+ Action - Dictation how the form is processed - URL/PHP/JS
+ Method - HTTP method to submit the form - POST/GET
### Fieldset & Legend
The \<fieldset>\</fieldset> tag groups together forms.
The \<legend>\</legend> tag labels forms.
### Input Types
![[Possible Input Types.png]]
### Labels
The label tag gives a caption for an item, and are often used with form elements.
They are visually and programatically associated with the form they are ID-linked to, and increase the click window for the form element.
#### Attributes
+ button
+ input
+ meter
+ output
+ progress
+ select 
+ text
## Select 
Select is a control that allows for a selection of multiple objects.
```
<label for="pet-select">choose pet</label>
<select name="pets" id=pet-select>
	<option value="Dog">Dog</option>
	<option value="Cat">Cat</option>
</select>
```
## Text Area
This element is similar to the text feature, but can have multiple lines for larger user input.
## Button
`<button type="button">Button</button>` will perform an action when clicked.
`<input type="submit" value="submit button"/>` will call the action element of a form.
## Get & Post
+ These are ways of sending data, usually from forms.
	+ GET appends the data to the end of the URL.
	+ POST send the data to the server with environment variables.
		+ This is slightly more secure, as the user cannot see the data in the browser, but is not secure on its own.
## Style
[[CSS]] can be used to style a HTML page.
