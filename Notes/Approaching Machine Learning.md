#notes 
## Steps
### Step 1 - Problem Framing
We surmise that we need data to train a model and obtain a measure of success.
### Step 2 - Data Preparation
We need to construct and transform data into a good training set. The model can only be as good as the data we give it, so its effectiveness can be directly determined by the quality of the dataset.
### Step 3 - Algorithm Selection
![[Machine Learning Algorithm Examples.png]]
### Step 4 - Model Training
Data preparation and model selection are important here - a machine learning engineer normally spends far more time in step 2 that step 4.
The training data is used to incrementally improve the model's performance.
#### Linear Regression Model
We can abstract a problem such as telling between 2 drinks as a set of straight line graphs $y=b+wx$, where:
+ $y$ is our dependent variable, the label, and our output;
+ $b,w$ are the bias and weight, respectively, and are the parameters that determine the position of the line;
+ $x$ is the feature, our input and independent variable.

Training aims to find a specific pair of $b,w$ values so that the line can be positioned well enough to be able to divide drinks into 2 groups. Training is done **iteratively** - in each iteration, $b,w$ values are updated, performance calculated, and compared with the last iteration in order to calculate the next values of $b,w$. This process stops when new $b,w$ values have very little effect on the performance.
### Step 5 - Model Testing
The next step is to evaluate performance using a **test set**. This aims to see if the trained model is accurate for previously unseen data.
### Step 6 - Hyperparameter Tuning
We now check if there is any way to improve the training process to further improve the model. Where $b,w$ are normal parameters, we could consider the *learning rate* of the training process a **hyperparameter**. Tuning these values is an experimental procedure.
### Step 7 - Inference/Prediction
This step is where the model sees general use.