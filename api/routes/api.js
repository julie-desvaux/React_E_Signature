const express = require("express");
const router = express.Router();

router.use("/user", require("./user.js"));
router.use("/auth", require("./auth.js"));
router.use("/signatures", require("./signature.js"));
router.use("/roles", require("./role.js"));

router.use("/", (_, res) => {
	res.json({ message: "Hello api" });
});

module.exports = router;
