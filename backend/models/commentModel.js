const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    content: { type: String, required: true },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});


module.exports = mongoose.model("Comment", commentSchema);
