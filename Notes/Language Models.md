#notes 

> [!abstract] 
> Language is *infinitely flexible*. There is **compositionality** in the use of grammatical rules, and complex **semantic** rules, *common-sense reasoning*, etc.
> Our previous [[Documents as Vectors|vector encodings]] have been **one-hot** - starting from scratch, assuming all words are equally different.
> A better approach is to extract and use knowledge about how language works.

A **Language Model** is a probability distribution over sequences of words. It allows us to determine which sequences of words are *more*/*less* **valid**/**plausible**.
This makes it similar in a way to [[N-Grams]], but a language model can *also* **predict** the validity of previously **unattested** sequences.

