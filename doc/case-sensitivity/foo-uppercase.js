var express = require('express');

var Foo = express();

foO.get('/', function(req, res){
  res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
  FOO.listen(3000);
  console.log('Express started on port 3000');
}