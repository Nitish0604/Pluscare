const mongoose = require("mongoose");

const vaccineSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subsriber",
    },
    user:{
        type: String,
        required:true,
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