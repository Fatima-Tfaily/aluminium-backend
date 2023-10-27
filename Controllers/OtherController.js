const { imageUploader } = require("../extra/imageUploader");
const Other = require("../models/Other");

const getAllOther = async (req, res) => {
  try {
    const others = await Other.find({});
    res.status(200).json({
      success: true,
      message: "Data retrieved successfully",
      data: others,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to get data",
      error: error,
    });
  }
};

const addOther = async (req, res) => {
  try {
    const imageURL = await imageUploader(req);

    const other = await Other.create({
      ...req.body,
      image: imageURL,
    });
    res.status(200).json({
      success: true,
      message: "Other added successfully",
      data: other,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Other not added successfully",
      error: error,
    });
  }
};

const deleteOther = async (req, res) => {
  try {
    const other = await Other.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: "Other deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error occured while deleting the other",
      error: error,
    });
  }
};

module.exports = {
  getAllOther,
  addOther,
  deleteOther,
};
