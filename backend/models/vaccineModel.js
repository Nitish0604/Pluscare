const mongoose = require("mongoose");

const vaccineSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subsriber",
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Doctor",
    },
    vaccineName:{
        type: String,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now(), 
    }
});

module.exports = mongoose.model("Vaccine",vaccineSchema);