const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const tagSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});

tagSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Tag", tagSchema);
