require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// import des routes
const productRoutes = require("./server/products");


// initialisation du server express
const app = express();

// Middleware
app.use(cors()); // gestion du cross domain
app.use(morgan("combined")); // logger
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello api blackball')
})

app.use(`/${process.env.API_ROOT}/products`, productRoutes);

// run le server en ecoute sur un port specifique
app.listen(process.env.PORT || 8080, () => {
  console.log("Server started on " + process.env.PORT);
});
