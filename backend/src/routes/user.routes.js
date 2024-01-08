const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");
const { authJwt } = require("../middleware/authJwt.js");

//signup utilisateur
router.post("/signup", userController.signUp);

//login utilisateur
router.post("/login", userController.login);

//avoir tous les utilisateurs
router.get("/", authJwt, userController.getUserList);

//avoir les utilisateurs par id
router.get("/:iduser", authJwt, userController.getUserByID);

//avoir les utilisateurs par nom
router.get("/nomUser", authJwt, userController.getUserByName);

//avoir les utilisateurs par mail
router.get("/emailUser", authJwt, userController.getUserByEmail);

//avoir des nouveaux utilisateurs
router.post("/", authJwt, userController.createNewUser);

//MAJ utilisateur
router.put("/:iduser", authJwt, userController.updateUser);

//suppression utilisateur
router.delete("/:iduser", authJwt, userController.deleteUser);

module.exports = router;
//export default router
