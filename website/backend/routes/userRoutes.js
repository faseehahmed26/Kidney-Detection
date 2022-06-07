const express = require("express");
const {
  registerUser,
  authUser,
  patientDetails,
} = require("../controllers/userControllers.js");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/patientDetails").post(patientDetails);

module.exports = router;
