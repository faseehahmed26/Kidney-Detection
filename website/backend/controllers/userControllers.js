const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Patient = require("../models/patModel");

// const { use } = require("../routes/userRoutes");
const generateToken = require("../utils/generateToken.js");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({ name, email, password, pic });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Error Occured");
  }
  //   res.json({
  //     name,
  //     email,
  //   });
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const patientDetails = asyncHandler(async (req, res) => {
  const {
    White_Blood_Cell,
    Blood_Urea,
    Blood_Glucose_Random,
    Serum_creatine,
    Packed_cell_volume,
    Albumin,
    Haemoglobin,
    Age,
    Sugar,
    Hypertension,
    Predicted,
  } = req.body;

  console.log(req.body);

  const wbcexits = await Patient.findOne({ White_Blood_Cell });

  if (wbcexits) {
    res.status(400);
    throw new Error("Patient Details Already Exists");
  }

  const patient = await Patient.create({
    White_Blood_Cell,
    Blood_Urea,
    Blood_Glucose_Random,
    Serum_creatine,
    Packed_cell_volume,
    Albumin,
    Haemoglobin,
    Age,
    Sugar,
    Hypertension,
    Predicted,
  });

  if (patient) {
    res.status(201).json({
      _id: patient.id,
      White_Blood_Cell: patient.White_Blood_Cell,
      Blood_Urea: patient.Blood_Urea,
      Blood_Glucose_Random: patient.Blood_Glucose_Random,
      Serum_creatine: patient.Serum_creatine,
      Packed_cell_volume: patient.Packed_cell_volume,
      Albumin: patient.Albumin,
      Haemoglobin: patient.Haemoglobin,
      Age: patient.Age,
      Sugar: patient.Sugar,
      Hypertension: patient.Hypertension,
      Predicted: patient.Predicted,
      token: generateToken(patient._id),
    });
  } else {
    res.status(401);
    throw new Error("Error Occured");
  }
  //   res.json({
  //     name,
  //     email,
  //   });
});

module.exports = { registerUser, authUser, patientDetails };
