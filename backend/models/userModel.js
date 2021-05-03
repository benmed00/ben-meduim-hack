const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
