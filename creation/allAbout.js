/**
 -----create a server --
 * const express = require("express");
    const app = express();

    app.listen(8080,async () => {
  console.log(`App is listening on port 8080`);
  await connetDB();
});

* ---- Connect to mongoose win async await ----

 const mongoose= require('mongoose);

const connetDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/school");
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is not connected");
    console.log(error.message);
    process.exit(1);
  }

  app.listen(8080,async () => {
  console.log(`App is listening on port 8080`);
  await connetDB();
});


 */
