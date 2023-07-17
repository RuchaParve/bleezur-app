from flask import Flask, request, jsonify,json
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_pymongo import PyMongo

#Conection to mongo dp
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://ruchaparve76:rucha76@cluster0.nk2hmnn.mongodb.net/customer?retryWrites=true&w=majority"
mongo = PyMongo(app)


#adding profile
@app.route("/addProfile/", methods=["POST"])
def add_profile():
    _json = request.json
	# validate the received values
    if _json and request.method == 'POST':
		#do not save password as a plain text
		# save details
        id = mongo.db.customer_profiles.insert_one(_json)
        resp = jsonify('User added successfully!')
        resp.status_code = 200
        return resp
    else:
        return not_found()
    
#get profiles by id
@app.route("/getProfile/<id>")
def user(id):
	user = mongo.db.customer_profiles.find_one({'_id': ObjectId(id)})
	resp = dumps(user)
	return resp
    
#get all profiles
@app.route('/getProfiles')
def users():
    documents = mongo.db.customer_profiles.find()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response)

#errorhandler for 404 error 
@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found: ' + request.url,
    }
    resp = jsonify(message)
    resp.status_code = 404

    return resp
 
if __name__=="__main__":
    app.run(debug=True)