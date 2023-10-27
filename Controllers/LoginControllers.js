const Login = require("../models/Login");

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const login = await Login.findOne({ email });
    if (!login) {
      res
        .status(401)
        .json({ success: false, message: "Invalid admin credentials" });
      return;
    }
    if (password === login.password) {
      res
        .status(200)
        .json({ success: true, message: "Admin login successful" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid admin credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const addEmail = async (req, res) => {
  const { email, password } = req.body;

  try {
    const login = new Login({ email, password });
    await login.save();
    res.status(201).json({
      success: true,
      message: "Login added successfully",
      data: login,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Login not added successfully",
      error: error.message,
    });
  }
};

module.exports = {
  adminLogin,
  addEmail,
};
