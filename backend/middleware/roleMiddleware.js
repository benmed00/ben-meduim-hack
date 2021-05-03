const auth = require("../authentification/authMiddleware");

function authorize(role) {


    return [
        auth,
        (req, res, next) => {
            if (role && req.user.role !== role) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            next();
        },
    ];
}

module.exports = authorize;
