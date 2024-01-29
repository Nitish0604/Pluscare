const mongoose = require("mongoose");

const doctorLoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: Number,
        required: true,
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    }
});

module.exports = mongoose.model("DoctorLogin",doctorLoginSchema);