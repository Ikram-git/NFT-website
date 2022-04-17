const mongoose = require("mongoose");

const Deal = new mongoose.Schema(
    {
        buyer:{type: String, required: true},
        seller:{type: String, required: true},
        artId: {type: String, required: true},
        price: {type: Number, required: true}
    },
    { timestamps: true }
);


module.exports = mongoose.model("Deal", Deal);