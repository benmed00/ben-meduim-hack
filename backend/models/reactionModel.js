const mongoose = require("mongoose");

const reactionSchema = mongoose.Schema({
    type: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});


module.exports = mongoose.model("Reaction", reactionSchema);
