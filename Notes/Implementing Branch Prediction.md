#notes 
## Front-end
![[Implementing Branch Prediction.png]]
Upon hitting an **IF**, we must know two things before decode:
1. **Direction**: Whether or not the branch will be taken ([[Dynamic Branch Prediction|BHT]]);
2. **Target PC**: If taken, the location of the jump (*Branch Target Buffer*).
### Hit vs Miss
+ **BTB Hit, Predict Taken**: Redirect next fetch address to BTB Target PC;
+ **BTB Hit, Predict Not Taken**: Fetch fall-through PC (`PC + 4`);
+ **BTB Miss**: Fetch fall-through PC (`PC + 4`). If the branch is later resolved as Taken in the Execute phase, incur a pipeline redirect penalty.

==So this is how it basically works==.

