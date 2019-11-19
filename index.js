require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
// import des routes
const productRoutes = require("./server/products");

// initialisation du server express
const app = express();

// Middleware
app.use(cors()); // gestion du cross domain
app.use(morgan("combined")); // logger
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
mongoose.set("useCreateIndex", true);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-zcylk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.once("open", () =>
  console.log("Db connection established successfully")
);
// ROUTES
app.get("/", (req, res) => {
  res.send("Hello api blackball");
});

app.use(`/${process.env.API_ROOT}/products`, productRoutes);

// run le server en ecoute sur un port specifique
app.listen(process.env.PORT || 8080, () => {
  console.log("Server started on " + process.env.PORT);
});
