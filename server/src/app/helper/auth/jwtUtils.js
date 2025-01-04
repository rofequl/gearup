const fs = require("fs"),
    path = require("path"),
    jsonwebtoken = require("jsonwebtoken"),
    {models} = require('../../models'),
    {refreshToken} = require("./loginInfo");

const PRI_KEY = fs.readFileSync(path.join(__dirname, "keypair", "id_rsa_priv.pem"), "utf8");
const PUB_KEY = fs.readFileSync(path.join(__dirname, "keypair", "id_rsa_pub.pem"), "utf8");

function issueJWT(user, refreshKey) {
    const id = user.id;
    const expiresIn = "5m";
    const payload = {
        sub: id,
        ref: refreshKey,
    };
    const signedToken = jsonwebtoken.sign(payload, PRI_KEY, {expiresIn, algorithm: "RS256"});
    return {
        token: "Bearer " + signedToken,
        expires: expiresIn,
    };
}

async function authMiddleware(req, res, next) {
    if (!req.get("Authorization")) return res.status(401).json({
        error: "Not authenticated!",
        message: "Authorization token required"
    });
    const tokenParts = req.headers.authorization.split(" ");
    if (tokenParts[0] === "Bearer" && tokenParts[1].match(/\S+\.\S+\.\S+/) !== null) {
        const decodedToken = await jsonwebtoken.decode(tokenParts[1], {complete: true});
        const userLog = await models.LoginInfo.findOne({
            where: {refreshKey: decodedToken.payload.ref, userId: decodedToken.payload.sub},
            attributes: ['id']
        });
        if (userLog && userLog.id) {
            jsonwebtoken.verify(tokenParts[1], PUB_KEY, {
                algorithms: ["RS256"],
                maxAge: "5m"
            }, async function (err, decoded) {
                if (err) {
                    if (err.message === "jwt expired") return res.status(403).json({
                        error: "Token expired",
                        message: "Your token has been expired"
                    })
                    else return res.status(403).json({error: "Not authenticated!", message: "Bearer token invalid"})
                } else {
                    const user = await models.User.findOne({
                        where: {id: decoded.sub},
                        include: [{
                            model: models.Role,
                            attributes: ['name'],
                            include: [
                                {
                                    model: models.Permission,
                                    attributes: ['id'],
                                    through: {attributes: []}
                                }
                            ]
                        }]
                    })
                    if (user && user.id) {
                        // Extract permission IDs under each role
                        req.user = user.toJSON();
                        req.refreshToken = decoded.ref;
                        next();
                    } else return res.status(403).json({
                        error: "Not authenticated!",
                        message: "Bearer token invalid"
                    });
                }
            });
        } else return res.status(403).json({error: "Not authenticated!", message: "Bearer token invalid"});
    } else return res.status(403).json({error: "Not authenticated!", message: "Bearer token invalid"});
}

async function JWTRefresh(req, res) {
    if (!req.get("Authorization")) return res.status(401).json({
        error: "Not authenticated!",
        message: "Authorization token required"
    });
    const tokenParts = req.headers.authorization.split(" ");
    if (tokenParts[0] === "Bearer" && tokenParts[1].match(/\S+\.\S+\.\S+/) !== null) {
        jsonwebtoken.verify(tokenParts[1], PUB_KEY, {
            algorithms: ["RS256"],
            maxAge: "5m"
        }, async function (err) {
            if (err && err.message === "jwt expired") {
                const decodedToken = jsonwebtoken.decode(tokenParts[1], {complete: true});
                if (!decodedToken) return res.status(403).json({
                    error: "Not authenticated!",
                    message: "Bearer token invalid"
                });
                const refresh = await refreshToken(decodedToken);
                if (!refresh) return res.status(403).json({
                    error: "Not authenticated!",
                    message: "Bearer token invalid"
                });
                else {
                    const tokenObject = issueJWT(refresh.user, refresh.refreshKey);
                    res.status(200).json({success: true, token: tokenObject.token, expiresIn: tokenObject.expires});
                }
            } else res.status(200).json({success: true, message: 'Valid token can\'t be refresh!'});
        })
    } else return res.status(403).json({error: "Not authenticated!", message: "Bearer token invalid"});
}

module.exports.issueJWT = issueJWT;
module.exports.authMiddleware = authMiddleware;
module.exports.JWTRefresh = JWTRefresh;