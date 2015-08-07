// var chalk = require('chalk');
// var Promise = require('bluebird');

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/27017');
// var db = mongoose.connection;

// //require('./models');

// var startDbPromise = new Promise(function (resolve, reject) {
//     db.on('open', resolve);
//     db.on('error', reject);
// });

// console.log(chalk.yellow('Opening connection to MongoDB . . .'));
// startDbPromise.then(function () {
//     console.log(chalk.green('MongoDB connection opened!'));
// });

// module.exports = startDbPromise;