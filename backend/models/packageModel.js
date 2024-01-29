const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema ({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:  "Subscriber",
    },
    packageName: {
        type: String,
        required: true,
    },
    packageDuration: {
        type: String,
        required: true,
    },
    packageAmount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Package",packageSchema);