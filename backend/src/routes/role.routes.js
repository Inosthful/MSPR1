const express = require("express");
const router = express.Router();

const roleController = require("../controllers/role.controller.js");
const roleController = require("../controllers/role.controller.js");
const { authJwt } = require("../middleware/authJwt.js");

//avoir les roles par type
router.get("/:role", roleController.getRoleByType);

// avoir tous les types de roles
router.get("/", roleController.getRoleTypeList);

module.exports = router;
//export default router
