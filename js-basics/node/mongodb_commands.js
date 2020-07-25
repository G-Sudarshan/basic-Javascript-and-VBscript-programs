//Inserting data in database
use harryKart
db.items.insertOne({name:"samsung 30s", price:22000, rating:4.5, qty:233, sold:98})

db.items.insertMany([{name:"samsung 30s", price:22000, rating:4.5, qty:233, sold:98},{name:"moto 30s", price:29000, rating:3.5, qty:133, sold:598},{name:"realme 80s", price:129000, rating:2.3, qty:633, sold:98, isBig:true}])