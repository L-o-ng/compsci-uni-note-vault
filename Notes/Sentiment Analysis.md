#notes 

**Sentiment Analysis** is a classic text classification task in [[Machine Learning]]: Given a *piece of text*, predict whether it is **positive**; **negative**; or sometimes, **neutral**.

![[Sentiment Analysis.png]]

There exist some common approaches:
+ [[Better Vector Representations#Continuous Bag Of Words|Text as a Bag of Words Document]] - 1 document produces 1 [[Inverse Document Frequency|TF-IDF Vector]]:
	+ This is trivial to apply classical ML techniques to;
	+ There is one obvious limitation:
		+ Consider the strings: `I hate sci-fi but I love this one.` and `I love sci-fi but I hate this one`;
		+ These have identical representations in a TF-IDF vector.
+ [[N-Grams]] - we can capture some contextual content:
	+ Using 2-grams, we obtain `I usually`, `usually hate`, `hate sci-fi`, etc instead of terms:
		+ `love this` may correlate with good reviews and `hate this` vice versa;
		+ `usually hate` suggests a contrasting statement;
	+ This cannot deal with more complex content, but is better than a bag of words;
	+ We usually limit features to **common** N-grams in the corpus.
+ **Neural Networks** - these treat the input as a sequence, and so can use information on word order.

