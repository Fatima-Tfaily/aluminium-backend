const { imageUploader } = require("../extra/imageUploader");
const Kitchen = require("../models/Kitchen"); // Use consistent capitalization

const getAllKitchen = async (req, res) => {
  try {
    const kitchens = await Kitchen.find({});
    res.status(200).json({
      success: true,
      message: "Data retrieved successfully",
      data: kitchens,
    });
  } catch (error) {
    console.error("Error in getAllKitchen:", error); // Log the error
    res.status(500).json({
      success: false,
      message: "Unable to get data",
      error: error,
    });
  }
};

const addKitchen = async (req, res) => {
  try {
    const imageURL = await imageUploader(req);

    const kitchen = await Kitchen.create({
      ...req.body,
      image: imageURL,
    });
    res.status(201).json({
      // Use 201 Created status for successful POST requests
      success: true,
      message: "Kitchen added successfully",
      data: kitchen,
    });
  } catch (error) {
    console.error("Error in addKitchen:", error); // Log the error
    res.status(400).json({
      success: false,
      message: "Kitchen not added successfully",
      error: error,
    });
  }
};

const deleteKitchen = async (req, res) => {
  try {
    await Kitchen.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: "Kitchen deleted successfully",
    });
  } catch (error) {
    console.error("Error in deleteKitchen:", error); // Log the error
    res.status(400).json({
      success: false,
      message: "Error occurred while deleting the kitchen",
      error: error,
    });
  }
};

module.exports = {
  getAllKitchen,
  addKitchen,
  deleteKitchen,
};
