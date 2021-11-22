function theOneFine(dbed,collect){
    var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbed);
    dbo.collection(collect).find({}).toArray(function(err, result) {
      if (err) throw err;

      result.forEach((element,i) => {
        console.log(result[i].name);
      });

      db.close();
    });
  });
  }

  //theOneFine("資料庫","資料夾")
// theOneFine("guigui","people")
  // 對資料庫 guigui 的 people資料夾 查看所有資料!
  // 5行 {useUnifiedTopology: true} 要對應方案修正，不然怪怪的
  //  有些是{ useNewUrlParser: true }

  function insertData (dbed,collect,name,birthday){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db(dbed);
      var myobj = { "name": name, "birthday": birthday };
      dbo.collection(collect).insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
  }

  // insertData("資料庫","資料夾","名子","生日")
//insertData("guigui","people","小鴨鴨","1995/02/15")
  // 對資料庫 guigui 的 people資料夾 增加一筆'小鴨鴨'!
  // 5行 {useUnifiedTopology: true} 要對應方案修正，不然怪怪的
  // 有些是{ useNewUrlParser: true }


  function fineLimit(dbed,collect,Limit){
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbed);
    dbo.collection(collect).find().limit(Limit).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}

  //fineLimit("資料庫","資料夾",查詢幾筆資料只能數字)
// fineLimit(dbed,collect,3);
  //對資料庫 guigui 的 people資料夾 增加一筆'小鴨鴨'!
  //5行 {useUnifiedTopology: true} 要對應方案修正，不然怪怪的
  //有些是{ useNewUrlParser: true }