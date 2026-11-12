#notes 

See first: [[Semantic Similarity]], [[Language Models]].

Predicting missing words relies on an understanding of language. We can use this to create **better vectorisations** using easily generated data.
![[Better Vector Representations.png]]
## Word-Word Co-occurrence Matrix
![[Better Vector Representations-1.png]]
Input text: ==I like playing football. I enjoy sports. Do I enjoy football?==
We define the **context** of a word as 1 previous and 1 following word in a sentence. There are many possible *variations* of this ([[Inverse Document Frequency|TF-IDF]] instead of [[Term Document Vectors|TF]]).
## Sparse and Dense Word Vectors
Using word-word co-occurrences will give vectors that are:
+ High-dimensional;
+ Sparse.

There are many ways we could reduce the dimensionality of these vectors:
+ [[Principal Component Analysis]];
+ Singular Value Decomposition;
+ Many other decomposition techniques: [[Matrix Decomposition]].

Empirically, denser vectors work better than sparse vectors for many tasks.
## Better Representations
### Continuous Bag Of Words
![[Better Vector Representations-2.png]]
We choose a context size $c$ (for example, $c=2$), and a desired dimensionality $N$ (typically $N \ll |V|$).
### Skip-Gram
![[Better Vector Representations-3.png]]
Instead of predicting a word from context, we predict the context from the word.
### word2vec
After training a model:
+ The (smaller) embedded space contains *enough information* to do well on a task;
+ Averaging of words forces **related** words to have similar embeddings in $h$;
+ Denser word vectors have *more desirable properties* than 1-hot;

We can compare vectors by cosine similarity (unlike 1-hot, as it would be 0):
For example, cosine similarity to `japan`:
![[Better Vector Representations-4.png]]
We can project into 2D after applying [[Principal Component Analysis]]:
![[Better Vector Representations-5.png]]
![[Better Vector Representations-6.png]]
#### Embedding Properties
![[Better Vector Representations-7.png]]
Embeddings can capture relational meaning:
+ `e_king - e_man + e_woman ~= e_queen`;
+ `e_Paris - e_France + e_Italy ~= e_Rome`.
#### Analogies
![[Better Vector Representations-8.png]]
Vector algebra sometimes fits with analogical reasoning; for example:
```
brother ~= son
sister  ~= y

e_son - e_brother + e_sister = e_y
max_[x in V](similarity(e_y, e_x)) => x = daughter
```
#### Biases
Embeddings reflect cultural biases: 
```
e_man - e_woman ~= e_computer_programmer - e_homemaker 
```
+ Male names are associated with maths whilst female names are associated with the arts;
+ Words for specific ethnicities are associated with various stereotypes;
+ Embeddings for adjectives pertaining to `competence` are biased in favour of men, but this is slowly decreasing.

Hence, embeddings can be used as a historical tool to study bias or change.
## Even Better Vector Representations
**Contextualised word vectors** are an even better representation:
![[Better Vector Representations-9.png]]
There is some semantic **overlap**, but the words have different meanings, connotations, and *contexts*. This improves on word2vec methods, as they always represent the same token with an identical vector.
Examples of this method include:
+ ELMO;
+ BERT;
+ GPT-2.

