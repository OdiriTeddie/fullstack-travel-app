const express = require("express");
const router = express.Router();

const {
  createSelectedPackage,
  getSelectedPackagesForUser,
  updateSelectedPackage,
  deleteSelectedPackage,
} = require("../controllers/selectedPackageController");

router.get("/", getSelectedPackagesForUser);
router.post("/", createSelectedPackage);
router.patch("/:id", updateSelectedPackage);
router.delete("/:id", deleteSelectedPackage);

module.exports = router;
