const { addSignature, getSignature } = require("../controllers/signature");
const { jwt_verify } = require("../middlewares/jwt");
const router = require("express").Router();

router.post("/", jwt_verify, addSignature);
router.get("/", jwt_verify, getSignature);

module.exports = router;
