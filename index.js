const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoutes = require("./routes/product.route");

const app = express();

app.use(express.json()); // middleware that allow to pass as json in post request
app.use(express.urlencoded({ extended: false })); // to pass data as form url

// routes
app.use("/api/products/", productRoutes);

app.get("/", (req, res) => {
  res.send("hello karthi node api with nodemon");
});

mongoose
  .connect(
    "mongodb+srv://karthikeyan2434:h3cNMLbVH08azTTN@backenddb.6oyslzb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(5000, () => {
      console.log("server started successfully on port 5000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
