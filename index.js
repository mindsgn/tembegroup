const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

var port = process.env.PORT || 3000;
const app = express();

//const db = require('./models/index.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/new', (req, res) => {
  db.auth.findOrCreate({where: {phone:req.body.phone}})
  .then(response => {
    res.json({ success: true, message: "user registered" });
    console.log(response)
  }).catch(error => {
    res.json({ success: false, message: "phone exist or is invalid" });
    console.log(error)
  });
})

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
