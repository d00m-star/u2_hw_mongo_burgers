// create 5 burgers (at least 3 should be beef)
db.burgers.insertMany([
  {
    protein: 'beef',
    toppings: ['lettuce', 'tomato', 'onion', 'mayo'],
    cheese: 'cheddar'
  },
  {
    protein: 'beef',
    toppings: ['lettuce', 'tomato', 'onion', 'ketchup'],
    cheese: 'american'
  },
  { protein: 'beef', toppings: ['onion', 'mustard'], cheese: 'pepperjack' },
  {
    protein: 'veggie',
    toppings: ['lettuce', 'onion', 'tomato', 'pickles', 'mustard'],
    cheese: 'cheddar'
  },
  { protein: 'bison', toppings: ['tomato', 'mayo'], cheese: 'gouda' }
])
// find all the burgers
db.burgers.find()
// show just the meat of each burger
db.burgers.find({}, { protein: 1 })
// show just the toppings of each burger
db.burgers.find({}, { toppings: 1 })
// show everything but the cheese
db.burgers.find({}, { cheese: 0 })
// find all the burgers with beef
db.burgers.find({ protein: 'beef' })
// find all the burgers that are not beef
db.burgers.find({ protein: { $ne: 'beef' } })
// find the first burger with cheese
db.burgers.findOne({}, { cheese: 1 })
// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.updateOne({ cheese: })
// find the burger you updated to have double cheese
// find and update all the beef burgers to be 'veggie'
db.burgers.updateMany({ protein: 'beef' }, { $set: { protein: 'veggie' } })
// delete one of your veggie burgers
db.burgers.deleteOne({ protein: 'veggie' })
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burgers.deleteMany({ protein: 'veggie' })
// drop the collection
//Expected Output
//true
db.burgers.drop()
// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()
//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'
db.burgers.updateMany({}, {$rename: { 'cheese': 'pumpkinSpice'}})
// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
db.burgers.updateMany({ protein: "beef"}, { $push: { toppings: "eggs" } })
//Add a price to each burger, start with $5.00 for each burger
db.burgers.updateMany({}, { $set: { price: "$4.99" }})