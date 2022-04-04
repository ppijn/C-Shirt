import bodyParser from "body-parser";
import express from 'express';
import fs from 'fs'

const app = express();
const port = 4000;

// Set ejs in als template engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {

	// fs.readFile('index.ejs', 'utf8', function (err, data) {
	//   if (err) throw err;
	//   let info = JSON.parse(data);

  		res.render('index'
      //, {
  			//eerder_opgeslagen_data: info
  		//})
      )

	});

  app.get('/my-list', (req, res) => {

    // fs.readFile('index.ejs', 'utf8', function (err, data) {
    //   if (err) throw err;
    //   let info = JSON.parse(data);
  
        res.render('my-list'
        //, {
          //eerder_opgeslagen_data: info
        //})
        )
  
    });

    app.get('/shopping-bag', (req, res) => {

      // fs.readFile('index.ejs', 'utf8', function (err, data) {
      //   if (err) throw err;
      //   let info = JSON.parse(data);
    
          res.render('shopping-bag'
          //, {
            //eerder_opgeslagen_data: info
          //})
          )
    
      });
    
  
  


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

app.post('/my-list', (req, res) => {
	console.log(req.body)

  const shirtInfo = {
    MainColor: req.body.color,
    CollarColor: req.body.collar,
    TextInput: req.body.customtext,
    ShirtSize: req.body.sizes
  }

	// userInput = JSON.stringify(req.body.naam)

	// fs.writeFile('informatie.json', userInput, 'utf8', cb => {
	// 	console.log('werk dan');
	// });


	// vertaalDataNaarSpaans(userInput);

	res.render('my-list'
  //, {
		//gebruikersnaam: userInput
  )
	})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});