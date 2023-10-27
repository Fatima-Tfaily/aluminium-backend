const { imageUploader } = require("../extra/imageUploader");
const Cabinet = require("../models/Cabinets");

const getAllCabinets = async (req, res) => {
  try {
    const cabinets = await Cabinet.find({});
    res.status(200).json({
      success: true,
      message: "Data retrieved successfully",
      data: cabinets,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to get data",
      error: error,
    });
  }
};

const addCabinet = async (req, res) => {
  try {
    const imageURL = await imageUploader(req);
    const cabinet = await Cabinet.create({
      ...req.body,
      image: imageURL,
    });
    res.status(200).json({
      success: true,
      message: "Cabinet added successfully",
      data: cabinet,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Cabinet not added successfully",
      error: error,
    });
  }
};

const deleteCabinet = async (req, res) => {
  try {
    await Cabinet.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: "Cabinet deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error occurred while deleting the Cabinet",
      error: error,
    });
  }
};

module.exports = {
  getAllCabinets,
  addCabinet,
  deleteCabinet,
};
