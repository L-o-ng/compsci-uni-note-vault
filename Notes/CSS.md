#notes #homework-needed 

Plain websites look bad!
CSS can add style to a page, but it needs to balance information and purpose against noise.
## Where?
CSS lives within the \<style>\</style> tag in the head of the html. It can either all go there, or a link to a separate style sheet can be inserted.
+ Inline, the style attribute can be used to quickly style something, but can make for hard to read code.
+ Internal CSS goes in the head.
+ External style sheets are linked to the current page with a link tag in the head, like `<link rel="stylesheet" type="text/css" href="style.css"/>`. Multiple style sheets can be linked to the same page.
## Basic Syntax
![[CSS Syntax.png]]
## Selectors
+ Tag matches all instances of the tag, such as every \<p>\</p>.
+ Class matches tags containing this `class` attribute.
+ Id matches the unique tag with this `id` attribute.
These can be combined for specific matches.
They are usually combined with \<div> and \<span> to build a framework for display.
### Classes
Tags can have the `class` attribute to have them join that class.
In the CSS, a class can be referred to by using a dot. For example, a class called `special` can be matched with `.special`, and a paragraph of the special class as `p.special`
### ID
ID identifies a unique element in the page. A `#` in the CSS indicates an ID.
### Syntax Examples
![[Syntax CSS Examples.png]]
## Units
CSS supports many types of measurement for elements.
+ Absolute units are calculated independent of page content and browser defaults. This includes `px`, `pt`, `mm`.
+ Relative units are calculated proportionally against other page content or browser default, like `%`, `em`, `ex`, or for text, `small`, `large`, `x-large`.
## Colour
RBG or hex codes can be used to identify colour.
## Pseudo-classes
These are selectors for the special status of some elements, like links.
```
a {}
a:hover {}
a:active {}
a:visited {}
```

