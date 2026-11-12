#notes 

Consider the following strings:
+ $S_{1}$: "The Power of Example: Anthropological Explorations in Persuasion, Evocation."
+ $S_{2}$: "The power of example : anthropological explorations in persuasion, evocation, and imitation"
+ $S_{3}$: "An artificial example about an ant, a rat, and a powerful person"

We would like to know *how similar* these titles are in terms of **content**:
+ For short strings, we *could* align and compare the strings;
+ For longer or very different strings, such as books, this would not work at all.

We can hence intuit that at document scale, **words** will be more important that characters. This raises some problems:
+ Firstly:
	+ Is `Power == power`?
	+ Is `Example == example`?
+ Then:
	+ Is `powerful == power`?
	+ Is `powerless == power`?
	+ Is `powerboat == power`?

The answer to this leads us to the concept of [[Text Tokenisation]].
See now: [[Text Tokenisation]].
