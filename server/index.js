const express = require('express');
let app = express();
app.use(express.static(__dirname + '/../client'));


// will need a get request to the database in order to retreive video info.




let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});