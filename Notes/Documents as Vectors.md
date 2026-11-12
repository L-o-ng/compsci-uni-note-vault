#topic 
## Notes
+ [[Term Document Vectors]]
+ [[Cosine Similarity]]
+ [[Inverse Document Frequency]]

---

The goal of turning **documents** into **vectors** is to compare the contents of potentially *large* volumes of text *efficiently*.

Take for example: **newspaper articles**:
+ These generally vary in length;
+ They could have very *similar* content despite this;
+ Words in common could suggest meaningful similarities;
+ We can therefore forget about order and just model word counts;
+ We can use vocabulary $V$ to create **Term Frequency** *vectors*;
+ Instead of one list per document, we make one vector.

