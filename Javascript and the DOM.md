#notes 

The **DOM** is the **Document Object Model**.
	It is the internal representation of the browser page.
	We can read its contents with [[Javascript]].
	A script can change the contents of the *DOM* to dynamically change the page's content.

## Identifying Parts of the Page
### getElementByID

```
const element = document.getElementById(id);
```
### querySelector
+ Select an item with a CSS selector.
+ First matching element is selected.
+ You can also use `querySelectorAll`, using `for` and `foreach` to iterate.
## Listening for Events
Browsers produce **events** as users interact with the page.
	For example, `click`, `keypress`, `focus`, `submit`, etc.
You can use `addEventListener` to attach a function to an element or event.
### Waiting for the DOM to be Loaded
JavaScript is often included in the \<head>.
DOM elements, however, are *not* defined when \<head> code is executed.
You can use the `DOMContentLoaded` event to listen for the element's definition.

*Handlers* are often **anonymous** functions: 
+ Function expression
```
document.addEventListener("DOMContentLoaded", function() {
	// code to be executed on button load inside this anonymous function.
});
```
+ Arrow function expression
## Manipulating the DOM
You can: 
+ Change the contents of an element with the `innerHTML` property.
+ Create new elements with `createElement`
+ Add/remove elements with `append` and `remove`
+ Change attributes with `setAttribute`
+ Update classes by add/remove on `classList`


