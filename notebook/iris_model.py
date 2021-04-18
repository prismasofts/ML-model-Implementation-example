import pickle
import numpy as np
import pandas as pd
from sklearn import metrics
from sklearn.neighbors import KNeighborsClassifier

data = pd.read_csv('Iris.csv')
X = data.drop(['Id', 'Species'], axis=1)
y = data['Species']

knn = KNeighborsClassifier(n_neighbors=9)
knn.fit(X, y)

prediction = knn.predict([[6, 3, 4, 2]])
# print(
#     "prediction for ('SepalLengthCm,SepalWidthCm,PetalLengthCm,PetalWidthCm')([[3, 3, 2, 2]])", prediction)
pickle.dump(knn, open("iris_model.pkl", "wb"))
