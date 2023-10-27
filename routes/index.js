const express = require("express");
const router = express.Router();

const {
  getAllKitchen,
  addKitchen,
  deleteKitchen,
} = require("../Controllers/KitchenControllers");
const {
  getAllCabinets,
  addCabinet,
  deleteCabinet,
} = require("../Controllers/CabinetsControllers");
const {
  getAllFacades,
  addFacade,
  deleteFacade,
} = require("../Controllers/RoomsControllers");
const {
  getAllOther,
  addOther,
  deleteOther,
} = require("../Controllers/OtherController");
const { adminLogin, addEmail } = require("../Controllers/LoginControllers");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.post("/login/add", adminLogin);
router.post("/login/addEmail", addEmail);

// Kitchen routes
router.get("/kitchen/getAll", getAllKitchen);
router.post("/kitchen/add", upload.single("image"), addKitchen);
router.delete("/kitchen/delete/:ID", deleteKitchen);

// Cabinets routes
router.get("/cabinets/getAll", getAllCabinets);
router.post("/cabinets/add", upload.single("image"), addCabinet);
router.delete("/cabinets/delete/:ID", deleteCabinet);

// Rooms routes
router.get("/facade/getAll", getAllFacades);
router.post("/facade/add", upload.single("image"), addFacade);
router.delete("/facade/delete/:ID", deleteFacade);

// Other routes
router.get("/other/getAll", getAllOther);
router.post("/other/add", upload.single("image"), addOther);
router.delete("/other/delete/:ID", deleteOther);

module.exports = router;
