
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
console.log("ready");

const fruitSchema =  new mongoose.Schema({
  name : String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit =  mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name:"apple",
  rating:7,
  review: "pretty solid fruit."
});
//fruit.save();
const personSchema =  new mongoose.Schema({
  name:String,
  age:Number
});

const Person = mongoose.model("Person",personSchema);

const person = new Person({
  name: "jamal",
  age: 98
});

//person.save();

const kiwi = new Fruit({
  name: "kiwi",
  score: 1,
  review: "bad"
});

const peach = new Fruit({
name: "peach",
  score: 1,
  review: "bad"
});

const banana = new Fruit({
  name: "banana",
  score: 10,
  review: "the best fruit."
});

const newItems = [kiwi,peach,banana];

// Fruit.insertMany(newItems) 
//   .then(function(){
//     console.log("succesully saved all the fruits to fruitsDB");
//   })
//   .catch(function (err){
//     console.log(err);
//   });

// Fruit.find().then((fruits) => {
//   fruits.forEach(function(fruit){
//     console.log(fruit.name);
//   })
// }) 
// .catch(function (err){
//   console.log(err);
// });

// Person.updateOne({name:"jamal", name:"cemal"}).then(function(){
//   console.log("Succesfully update name");
// })
// .catch(function(err){
//   console.log(err);
// });

Person.deleteOne({_id:"64d4172edce026eb2fc23429"}).then(function(){
  console.log("Succesfully deleted");
})
.catch(function(err){
  console.log(err);
});