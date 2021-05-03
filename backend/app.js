const express = require("express");
const bodyParser = require("body-parser");

const tagRoutes = require("./routes/tagRoute");
const userRoutes = require("./routes/userRoute");
const articleRoutes = require("./routes/articleRoute");
const reactionRoutes = require("./routes/reactionRoute");
const commentRoutes = require("./routes/commentRoute");
const authRoutes = require("./authentification/authRoute");

/* MongoDb Connection *******************************************************************************/
const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://benyakoub:29802452@cluster0.2lsrr.mongodb.net/hacktohire?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
    });
/* ****************************************************************************************************/

const app = express();

// Headers
app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

// parse the request(s) body
app.use(bodyParser.json());

// manage the route compared to app /
app.use("/api/article", articleRoutes);
app.use("/api/user", userRoutes);
app.use("/api/tag", tagRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/reaction", reactionRoutes);
app.use("/api/auth", authRoutes);

// Export the app to be used in server
module.exports = app;