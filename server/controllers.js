import user from "./model.js";

// add data
export const saveData = async (req, res) => {
  try {
    const { name, email, phone, hobbies } = req.body;

    if (!(name, email, phone, hobbies)) {
      res.status(400).json({
        message: "All feild is required",
      });
    }

    const existsEmail = await user.findOne({ email });
    if (existsEmail) {
      res.send("Email is already exists");
    }
    const data = await user.create({ name, email, phone, hobbies });

    if (!data) {
      res.status(400).json({
        message: "Data is not saved, Try again",
      });
    }
    res.status(200).json({
      success: "true",
      message: "Data is saved successfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      success: "false",
      message: "Error in save data",
      error,
    });
  }
};

// get single data
export const getSingleData = async (req, res) => {
  try {
    const data = await user.findById(req.params.id);

    res.status(200).json({
      success: true,
      message: "single data is get successfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// get all data
export const getAllData = async (req, res) => {
  try {
    const data = await user.find();
    if (!data) {
      res.send("data is didn't get successfully");
    }
    res.status(200).json({
      success: true,
      message: "data is get successfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "error in get All data",
      error,
    });
  }
};

// update data
export const updateData = async (req, res) => {
  try {
    const { name, email, phone, hobbies } = req.body;
    // const { id } = req.params;

    const data = await user.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        phone,
        hobbies,
      },
      { new: true }
    );
    if (!data) {
      res.send("Data is not updated");
    }
    res.status(200).json({
      success: true,
      message: "Data is updated successfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// delete data
export const deleteData = async (req, res) => {
  try {
    const data = await user.findByIdAndDelete(req.params.id);
    if (!data) {
      res.send("data is not delete");
    }
    res.status(200).json({
      success: true,
      message: "Data is deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
