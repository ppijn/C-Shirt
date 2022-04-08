import bodyParser from "body-parser";
import express from 'express';
import fs from 'fs';

// const { v4: uuidv4 } = ('uuid');
const app = express();
const port = process.env.PORT || 4000;

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

  		res.render('index.ejs', {
  		// eerder_opgeslagen_data: info
  		})
});

app.get('/my-list', (req, res) => {
   
    // fs.readFile('index.ejs', 'utf8', function (err, data) 
    //   if (err) throw err;
    //   let info = JSON.parse(data);
  
        res.render('./my-list', {
          shirtInfo: shirtInfo
        })
});

app.post('/my-list', (req, res) => {
      console.log(req.body)
    
      const shirtInfo = {
        MainColor: req.body.color,
        CollarColor: req.body.collar,
        TextInput: req.body.customtext,
        ShirtSize: req.body.sizes
      };

      let data = JSON.stringify(shirtInfo);

      fs.writeFile('shirt.json', data , 'utf8', cb => {
        console.log('werkt dit?');
      })

      // shirtInfo.id = uuidv4()
      console.log('design data', shirtInfo)
      res.render('my-list', {
        shirtInfo: shirtInfo
      }) 
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
// app.get('/user/:id', (req, res) => {

// 	let input = req.params.id

// 	if(req.params.id) {
// 		if(req.params.id === 'robert') {
// 			input = 'nee doe maar niet';
// 		}
// 	}

// 	res.render('home', {
// 		persoon: input
// 	})
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});