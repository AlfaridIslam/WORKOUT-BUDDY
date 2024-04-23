const jwt = require("jsonwebtoken");


// it will create a token with expiry date w.r.t id
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {
        expiresIn:"3d"
    });
}

module.exports = createToken;