import bodyParser from "body-parser";
import express from 'express';


const http = require('http');
const express = require("express");
const { read } = require('fs');
const app = express();
const port = 4000;

// Set ejs in als template engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {

	fs.readFile('informatie.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  let info = JSON.parse(data);

  		res.render('home', {
  			eerder_opgeslagen_data: info
  		})

	});
})

app.get('/user/:id', (req, res) => {

	let input = req.params.id

	if(req.params.id) {
		if(req.params.id === 'robert') {
			input = 'nee doe maar niet';
		}
	}

	res.render('home', {
		persoon: input
	})
})

app.post('/', (req, res) => {
	console.log(req.body)

	userInput = JSON.stringify(req.body.naam)

	fs.writeFile('informatie.json', userInput, 'utf8', cb => {
		console.log('werk dan');
	});


	// vertaalDataNaarSpaans(userInput);

	res.render('home', {
		gebruikersnaam: userInput
	})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});