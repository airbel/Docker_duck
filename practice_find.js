function theOneFine(){
    var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("guigui");
    dbo.collection("people").find({}).toArray(function(err, result) {
      if (err) throw err;

      result.forEach((element,i) => {
        console.log(result[i].name);
      });

      db.close();
    });
  });
  }

  theOneFine() //找資料