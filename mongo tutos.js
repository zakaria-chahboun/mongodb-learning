use mydb // mydb is name of database : if exist then call it, if not create it
db // show current database

// create a new Table (collection), "mytable" is a name of collection :: inside "insert" is a "json" data (documents)
db.mytable.insert(
{
    "title": "c++ lerning",
    "price": 150,
    "date": "22-04-2017"
}
)
db.mytable.insert(
{
    "title": "javascript tutoriel",
    "price": 90,
    "date": "25-06-2017"
}
)
db.mytable.insert(
{
    "title": "python course",
    "price": 52,
    "date": "10-08-2014"
}
)
db.mytable.insert(
{
    "title": "java course",
    "price": 78,
    "date": "10-08-2014"
}
)
db.mytable.insert({
        "_id" : ObjectId("58fb79d46b49e4c50fa84d77"),
        "title" : "csharp beginners",
        "price" : 28,
        "date" : "25-03-2016",
        "locations" : [
                "usa",
                "tunis",
                "japon"
        ]
})
// ect....

db.mytable.find() // to show informations into collection
db.mytable.find().pretty() // its the same but for the beautiful view (json format)

show collections // show all tables (collections) in your db

db.mytable.remove({"_id" : ObjectId("58fb369e6d6cb27e28852806")}) // to remove an item in collection with "_id"

// update an item
db.mytable.update({"_id" : ObjectId("58fb2eb36d6cb27e28852805")},
{
"title" : "javascript-5 tutoriel",
"price" : "95",
"date" : "01-08-2018"
})

// search $gt > ,$gte >= ,$lt < , $lte <= , $ne != , $eq == , $in , $nin not in,
db.mytable.find({price:{$lt:90}}).pretty() // give me price < 90
db.mytable.find({price:{$gte:90}}).pretty() // give me price >= 90
db.mytable.find({price:{$in:[90,150,180]}}).pretty() // give me price in this values 90,15,180

// search $and, $or :: into $and:[  ] we put group {} of values
//for example price between 200 and 50
db.mytable.find({
	$and:[
			{"price":{$lte:200}},
			{"price":{$gte:50}}
		]
}).pretty()
// equivalent to :
db.mytable.find({price:{$lt:200,$gte:50}}).pretty()

// The $all operator selects the documents where the value of a field is an array
// that contains all the specified elements (Equivalent to $and Operation)
db.mytable.find({locations: { $all: [ "usa" , "japon" ] }}).pretty()

// search $regex, $options :: $options:'i' == upper or lower :)
db.mytable.find({title:{$regex:'java.*',$options:'i'}}).pretty() // find in "title" text contain "java.*"
db.mytable.find({title:{$regex:'^j.*l$',$options:'i'}}).pretty() // start with 'j' and terminate with 'l'

// index data "sort"
// give me collections thats have a "price" > 60 and sort it by "name" croissant
db.mytable.find({price:{$gt:60}}).sort({name:1}).pretty()
// give me collections thats have a "price" > 60 and sort it by "name" croissant and "price" descending
// in this case the compiler sort data in first step by "name" 
// and in second step by "price" the collections have the same "price"
db.mytable.find({price:{$gt:60}}).sort({name:1,price:-1}).pretty()

/*
by : zakaria chahboun | 2017
-ZAKI-


https://www.mongodb.com/compare/mongodb-mysql
*/
