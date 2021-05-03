const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const articleSchema = mongoose.Schema({
    name: { type: String, required: true },
    reference: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    draft: { type: String },
    createdAt: { type: Date },
    updateAt: { type: Date },
});

articleSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Article", articleSchema);
