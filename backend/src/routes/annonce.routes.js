const express = require("express");
const router = express.Router();
const { authJwt } = require("../middleware/authJwt.js");

const annonceController = require("../controllers/annonce.controller.js");

//avoir tous les annonces
router.get("/", annonceController.getAnnonceList);

//avoir les annonces par id
router.get("/:idAnnonce", annonceController.getAnnonceByID);

//avoir les annonces par titre
router.get("/:TitreAnnonce", annonceController.getAnnonceByTITLE);

//avoir des nouveaux annonces
router.post("/", annonceController.createNewAnnonce);

//suppression annonce par id
router.delete("/:idAnnonce", annonceController.deleteAnnonce);

//suppression annonce par titre
router.delete("/:TitreAnnonce", annonceController.deleteAnnonce2);

module.exports = router;
//export default router
