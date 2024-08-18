const express = require('express')
const mongoose= require('mongoose');
const app = express();


// moongoose connect 

mongoose
  .connect("mongodb://localhost/school")
  .then(() => console.log("connected with DB"))
  .catch((err) => console.log(err));



app.listen(8080,()=>{
    console.log(`App is listening on port 8080`);
})