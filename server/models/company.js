const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  description: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  logo: { type: String, required: false, default: "" },
  locations: {
    type: [String],
    required: false,
    default: ["Gothenburg"],
  },
  jobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

module.exports = mongoose.model("Company", companySchema);
