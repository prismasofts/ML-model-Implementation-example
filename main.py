from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import pickle
import json

app = Flask(__name__)
api = Api(app)
CORS(app, support_credentials=True)

irismodel = pickle.load(open("iris_model.pkl", "rb"))


class Root(Resource):
    def get(self):
        return {'response': 'API is running'}


class PredictIris(Resource):
    def post(self):
        data = request.get_json()
        print("data", data['sl'])
        sl = data['sl']
        sw = data['sw']
        pl = data['pl']
        pw = data['pw']
        predictData = [[sl, sw, pl, pw]]
        print("predictData:", predictData)
        predicted_result = irismodel.predict(predictData)
        print("predicted result:", predicted_result)
        return jsonify({'data': predicted_result[0]})


api.add_resource(Root, '/')
api.add_resource(PredictIris, '/predict',
                 endpoint='predict')

if __name__ == '__main__':
    app.run(debug=True)
