const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const patSchema = mongoose.Schema(
  {
    White_Blood_Cell: {
      type: Number,
      required: true,
    },
    Blood_Urea: {
      type: Number,

      required: true,
    },
    Blood_Glucose_Random: {
      type: Number,

      required: true,
    },
    Serum_creatine: {
      type: Number,

      required: true,
    },
    Packed_cell_volume: {
      type: Number,

      required: true,
    },
    Albumin: {
      type: Number,

      required: true,
    },
    Haemoglobin: {
      type: Number,

      required: true,
    },
    Age: {
      type: Number,

      required: true,
    },
    Sugar: {
      type: Number,
      required: true,
    },
    Hypertension: {
      type: Number,
      required: true,
    },
    Predicted: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.methods.matchPassword = async function(enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // will encrypt password everytime its saved
// userSchema.pre("save", async function(next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

const Patient = mongoose.model("Patient", patSchema);

// export default User;
module.exports = Patient;
