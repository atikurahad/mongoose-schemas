const express = require("express");
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");

//mongoose connect
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Products");
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is not connected");
    console.log(error.message);
    process.exit(1);
  }
};

//mongoose model
const productsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: Number,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//mongoose products model
const Product = mongoose.model("Products", productsSchema);

app.listen(PORT, async () => {
  console.log(`App is listening on port 8080}`);
  await connectDB();
});

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/products",async (req, res) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });
    const productData =await newProduct.save();

    res.status(201).send(productData);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
