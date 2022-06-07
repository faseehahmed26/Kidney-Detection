# from crypt import methods
from flask import Flask, render_template, jsonify, make_response, request
import flask
# from flask_restplus import Api, Resource, fields
from flask_cors import CORS

import pickle
import numpy as np
# from PIL import Image
import json
import warnings
warnings.simplefilter("ignore")

app = Flask(__name__)
CORS(app, support_credentials=True)

# flask_app = Flask(__name__)
# app = Api(app = flask_app,
# 		  version = "1.0",
# 		  title = "Iris Plant identifier",
# 		  description = "Predict the type of iris plant")

# name_space = app.namespace('prediction', description='Prediction APIs')


def predict(values):
    if len(values) == 10:
        model = pickle.load(open('models/model_final.pkl', 'rb'))
        values = np.asarray(values)
        print(values)
        return model.predict(values.reshape(1, -1))[0]


def options():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response


@app.route("/prediction/", methods=['POST', 'GET'])
def prediction():
    try:

        formData = request.json
        print(formData)
        # data = [val for val in formData.values()]
        # print(data)
        data = [float(i) for i in formData]
        print(data)
        prediction = predict(data)

        types = {0: "/NPredict",
                    1: "/YPredict"}
        print(types[prediction])
        print(prediction)
        response = options()
        response = jsonify({
            "statusCode": 200,
            "status": "Prediction made",
            "predicted": str(prediction),
            "result": str(types[prediction])

        })

        print(response)

        response.headers.add('Access-Control-Allow-Origin', '*')

        return response
    except Exception as error:
        return jsonify({
            "statusCode": 500,
            "status": "Could not make prediction",
            "error": str(error)
        })


if __name__ == '__main__':
    app.run(debug=True)
