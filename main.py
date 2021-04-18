from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS
import pickle
import json

app = Flask(__name__)
api = Api(app)
CORS(app)
irismodel = pickle.load(open("iris_model.pkl", "rb"))


class Root(Resource):
    def get(self):
        return {'response': 'API is running'}


class PredictIris(Resource):
    def get(self, petal_values):
        data = request.get_json()
        datas = json.loads(data['petal_values'])
        # print("petal values:", datas)
        # print(type(datas[0][0]))
        # irismodel = pickle.load(open("iris_model.pkl", "rb"))
        predicted_result = irismodel.predict(datas)
        # print("predicted result:", predicted_result)

        return jsonify({'response': predicted_result[0]})


api.add_resource(Root, '/')
api.add_resource(PredictIris, '/predict/<string:petal_values>',
                 endpoint='predict')

if __name__ == '__main__':
    app.run(debug=True)
