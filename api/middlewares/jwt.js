const jwt = require("jsonwebtoken");

function jwt_verify(req, res, next) {
	console.log("----------------------- jwt_verify -----------------------------");
	try {
		const data = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
		req.cookies.jwtData = data;
		next();
	} catch (err) {
		return res.status(401).json({
			message: "Your token is not valid",
		});
	}
}

module.exports = { jwt_verify };
