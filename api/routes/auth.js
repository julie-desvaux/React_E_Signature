const { signin, signout, signup } = require("../controllers/auth");
const router = require("express").Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/signout", signout);

module.exports = router;
