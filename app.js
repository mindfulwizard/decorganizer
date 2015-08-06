var express = require ('express');
var multer  = require('multer')
var upload = multer({ dest: 'public/pics/' })
var app = express();
var fs = require('fs');

app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules'));

app.post('/file/post', upload.single('file'), function (req, res, next) {
	  console.log('working');

	 /** When using the "single"
      data come in "req.file" regardless of the attribute "name". **/
	var tmp_path = req.file.path;

  	/** The original name of the uploaded file
      stored in the variable "originalname". **/
  	var target_path = 'public/pics/' + req.file.originalname;

	/** A better way to copy the uploaded file. **/
	var src = fs.createReadStream(tmp_path);
	var dest = fs.createWriteStream(target_path);
	src.pipe(dest);
	// src.on('end', function() { res.render('complete'); });
	// src.on('error', function(err) { res.render('error'); });

	res.sendStatus(200);
})

app.listen(3000, function() {
	console.log('Server running');
});




// var chunks = []
//   	var busboy = new Busboy({ headers: req.headers });
//     busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
//       console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
//       file.on('data', function(data) {
//       	chunks.push(data)
//         console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
//       });
//       file.on('end', function() {
//       	fs.writeFile('./foo', Buffer.concat(chunks), function(err, results) {

//       	})
//         console.log('File [' + fieldname + '] Finished');
//       });
//     });
//     busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
//       console.log('Field [' + fieldname + ']: value: ' + inspect(val));
//     });
//     busboy.on('finish', function() {
//       console.log('Done parsing form!');
//       console.log('body: ', req.body);
//       res.writeHead(303, { Connection: 'close', Location: '/' });
//       res.end();
//     });
//     req.pipe(busboy);