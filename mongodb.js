var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongo.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db("mydb");
	var myobj = [{name: "Ravi", work: "Student", gpa: "7.5"},
				 {name: "John", work: "Student", gpa: "9.2"},
				 {name: "Rick", work: "Officer", gpa: "8.8"}];
	dbo.collection("customers").insertMany(myobj, function(err, res){
		if(err) throw err;
		console.log(res);
		db.close();
	});
});