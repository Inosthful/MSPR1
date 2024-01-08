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
const fiveRoutes = require("./src/routes/five.routes.js");

//import des reservations routes
const reservationRoutes = require("./src/routes/reservation.routes.js");

//import des localisations routes
const localisationRoutes = require("./src/routes/localisation.routes.js");

//import des terrains routes
const terrainRoutes = require("./src/routes/terrain.routes.js");

//import des durées routes
const dureereservationRoutes = require("./src/routes/dureereservation.routes.js");

//import typeterrain
const typeterrainRoutes = require("./src/routes/typeterrain.routes.js");

//creation des users
app.use("/api/v1/user", userRoutes);

//creation des fives
app.use("/api/v1/five", fiveRoutes);

//creation des reservations
app.use("/api/v1/reservation", reservationRoutes);

//creation des localisations
app.use("/api/v1/localisation", localisationRoutes);

//creation des terrains
app.use("/api/v1/terrain", terrainRoutes);

//creation des durées
app.use("/api/v1/dureereservation", dureereservationRoutes);

//creation des types
app.use("/api/v1/typeterrain", typeterrainRoutes);

//creation desimages
app.use("/images", express.static("images"));

//lecture du port
app.listen(port, () => {
  console.log("Express Server is running on port :", port);
});
