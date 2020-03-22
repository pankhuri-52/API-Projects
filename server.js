var express = require('express')                //necessary modules required
var path = require('path')
var app = express()

//body parser and database connectivity
app.use(express.static(path.join(__dirname,'public')));  // changed public to nothing

app.use(express.urlencoded({extended: true}));
app.use(express.json());

  app.use(function (req, res, next) {
    next()
  })

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var ansdb = 'mongodb://localhost/Data_Structures'; //changed NGOs to Data_Strcutures

mongoose.connect(ansdb);

mongoose.connection.on('error',(err) => {
  console.log('DB connection Error');
})

mongoose.connection.on('connected',(err) => {
    useNewUrlParser: true;
   console.log('DB connected');
 })

 //Schemas Defined
 var ansSchema = new mongoose.Schema({
    name:String,
    url:String,
})

var ans = mongoose.model('solutions', ansSchema);

app.post('/findAns',function(req,res)      //Find Answer Request 
{
  console.log(req.body)
  ans.find({
    name: req.body.question
  })
  
  .then(data =>
    {
      if(data.length>0)
      {
         console.log(data);
         res.send(data);
          //  var obj=JSON.parse(data);
          //  console.log(obj.url);
          //  res.send(obj.url);
      }
      else{
        res.send("0");
      }
  })
  .catch(err => {
    res.send(err)
  })
})

//Server Running Confirmation
app.listen(3000,function()
{
  console.log("Running on port 3000");
});
