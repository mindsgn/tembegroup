const express = require('express')
var port = process.env.PORT || 3000;
const app = express()

app.get('/', (req, res) => {
  res.send('works');
})

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
