// var express = require ('express');
// var multer  = require('multer')
// var upload = multer({ dest: 'public/pics/' })
// var app = express();
// var fs = require('fs');
// //var Images = require('./Images');

// //app.use(express.static('public'));
// app.use(express.static(__dirname + '/node_modules'));

// var fileNames = [];

// app.post('/file/post', upload.single('file'), function (req, res, next) {
// 	  console.log('working');

// 	 /** When using the "single"
//       data come in "req.file" regardless of the attribute "name". **/
// 	var tmp_path = req.file.path;

//   	//The original name of the uploaded file
//     //stored in the variable "originalname". 
//   	var target_path = 'public/pics/' + req.file.originalname;

//   	fileNames.push(req.file.originalname);
//   	res.json(fileNames);

// 	/** A better way to copy the uploaded file. **/
// 	var src = fs.createReadStream(tmp_path);
// 	var dest = fs.createWriteStream(target_path);
// 	src.pipe(dest);

// 	// src.on('end', function() { res.render('complete'); });
// 	// src.on('error', function(err) { res.render('error'); });

// 	res.sendStatus(200);
// });

// app.get('/img', function(req, res, next) {
// 	res.json(fileNames);
// });

// app.listen(3000, function() {
// 	console.log('Server running');
// });
