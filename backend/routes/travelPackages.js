const express = require("express");
const router = express.Router();

const {
  getAllTravelPackages,
  getTravelPackage,
  createTravelPackage,
  updateTravelPackage,
  deleteTravelPackage,
} = require("../controllers/travelPackagesController");

router.get("/", getAllTravelPackages);
router.post("/", createTravelPackage);
router.get("/:packageName", getTravelPackage);
router.patch("/:packageName", updateTravelPackage);
router.delete("/:packageName", deleteTravelPackage);

module.exports = router;
