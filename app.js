var express = require('express');
var app = express()
app.get('/'function(req,res){
	res.send('hello world')
});
app.listen(4000,function(){
	console.log('app is listening at port 4000')
})