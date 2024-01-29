const mongoose = require("mongoose");

const userLoginSchema = new mongoose.Schema({
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
        ref: "Subscriber",
    }
});

module.exports = mongoose.model("UserLogin",userLoginSchema);