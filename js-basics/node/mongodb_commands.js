use harryKart

// Inserting data in database

db.items.insertOne({name:"samsung 30s", price:22000, rating:4.5, qty:233, sold:98})

db.items.insertMany([{name:"samsung 30s", price:22000, rating:4.5, qty:233, sold:98},{name:"moto 30s", price:29000, rating:3.5, qty:133, sold:598},{name:"realme 80s", price:129000, rating:2.3, qty:633, sold:98, isBig:true}])

// searching for data in mongodb

db.items.find({rating:3.5})
db.items.find({rating:{$gte:3.5}})
db.items.find({rating:{$gte:3.5},price:{$gt:4000}}) 
db.items.find(
                {
                $or:[
                        {rating:{$gte:3.5}},
                        {price:{$gt:4000}}
                    ]
                }
            ) 

// deleting data from mongodb

db.items.deleteOne({price:22000}) //will delete first entry in case multidocument match

db.items.deleteMany({price:22000})

// Updating data in mongodb

db.items.updateOne({name:"moto 30s"}, {$set: {price:2}})
db.items.updateMany({name:"moto 30s"}, {$set: {price:3,rating:1}})
