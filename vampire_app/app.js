// 1. Require your node modules
const mongoose = require('mongoose');
const db = mongoose.connection;

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire');
const VampireData = require('./populateVampires');

// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/vampire', { useNewUrlParser: true });

// 4. Open your mongoose connection
db.on('error', (err) => {
	console.log(err, ' this is the error message');
});

db.on('connected', () => {
	console.log('vampire_app is connected to mongodb');
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(VampireData,(err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
  });

// ### Add some new vampire data

Vampire.create({
	name:'Stout',
	hair_color: 'black',
	eye_color:'brown',
	dob:new Date(2015, 11, 24, 8, 32),
	loves: ['bunnies', 'bones'],
	location: 'Denver, Colorado, US',
	gender: 'm',
	victims:2,
}, (err, vampire) => {
	if (err) {
		console.log(err);
	} else {
		console.log(vampire);
	};
});

Vampire.create({
	name: 'Bailey',
	hair_color: 'black',
	eye_color: 'brown',
	dob:new Date(2007, 2, 24, 5, 25),
	loves: ['food', 'sleeping'],
	location: 'Denver, Colorado, US',
	gender:'f',
	victims: 10,
}, (err, vampire) => {
	if (err) {
		console.log(err);
	} else {
		console.log(vampire);
	};
});

Vampire.create({
	name: 'James',
	hair_color: 'brown',
	eye_color: 'green',
	dob: new Date(1987, 1, 3, 3, 21),
	loves: ['video games', 'movies'],
	location: 'Denver, Colorado, US',
	gender:'m',
	victims: 5,
}, (err, vampire) => {
	if (err) {
		console.log(err);
	} else {
		console.log(vampire);
	};
});

Vampire.create({
	name: 'Amanda',
	hair_color: 'blonde',
	eye_color: 'blue',
	dob: new Date(1987, 10, 4, 6, 26),
	loves: ['snowboarding', 'paddleboarding'],
	location: 'Denver, Colorado, US',
	gender: 'f',
	victims: 8,
}, (err, vampire) => {
	if (err) {
		console.log(err);
	} else {
		console.log(vampire);
	};
});

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
