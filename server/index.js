
const authRoute = require("./routes/auth.js");
const productsRoute = require("./routes/products.js");
const cartRoute = require("./routes/cart.js");
const bodyParser = require("body-parser");

require("dotenv").config()
const express = require("express")
const mongoose  = require("mongoose")
const app = express()

const cors = require("cors");


//middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());


app.use((err, req, res, next) => {
  const errorMessage = err.message || "something went wrong";
  const errorStatus = err.status || 500;
  return res.status(errorStatus).json({ message: errorMessage });
});


// //routes
app.use("/auth", authRoute);
app.use("/products", productsRoute);
app.use("/cart", cartRoute);

// app.use("/users", userRoute);
// app.use("/hotels", hotelsRoute);

mongoose.connect(process.env.connectionString).then(()=>{
  app.listen(port,console.log(`app starts running on port ${port}`))
}).catch((error)=>console.log(error))


// connecting to databas
const port = process.env.port || 3001
