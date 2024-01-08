const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

dotenv.config();

//creer l'app express
const app = express();

//server
const port = process.env.PORT || 8087;
//app.use(cors())
// ---------------Autorisation des rêquetes-----------//

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
// wait
//parse request data content type application/x-ww-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse request data content type application/json
app.use(bodyParser.json());

//root
app.get("/", (req, res) => {
  res.send("Hello world");
});

//import des utilisateurs routes
const userRoutes = require("./src/routes/user.routes.js");

//import des fives routes
const annonceRoutes = require("./src/routes/annonce.routes.js");

//import des reservations routes
const roleRoute = require("./src/routes/role.routes.js");

//creation des users
app.use("/api/v1/user", userRoutes);

//creation des annonces
app.use("/api/v1/annonce", annonceRoutes);

//creation des roles
app.use("/api/v1/role", roleRoutes);

//creation desimages
app.use("/images", express.static("images"));

//lecture du port
app.listen(port, () => {
  console.log("Express Server is running on port :", port);
});
