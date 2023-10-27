const { imageUploader } = require("../extra/imageUploader");
const Facade = require("../models/BedRooms");

const getAllFacades = async (req, res) => {
  try {
    const facades = await Facade.find({});
    res.status(200).json({
      success: true,
      message: "Data retrieved successfully",
      data: facades,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to get data",
      error: error,
    });
  }
};

const addFacade = async (req, res) => {
  try {
    const imageURL = await imageUploader(req);

    const facade = await Facade.create({
      ...req.body,
      image: imageURL,
    });
    res.status(200).json({
      success: true,
      message: "Facade added successfully",
      data: facade,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Facade not added successfully",
      error: error,
    });
  }
};

const deleteFacade = async (req, res) => {
  try {
    const facade = await Facade.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: "Facade deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error occured while deleting the facade",
      error: error,
    });
  }
};

module.exports = {
  getAllFacades,
  addFacade,
  deleteFacade,
};
