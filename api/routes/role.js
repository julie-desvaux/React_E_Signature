const { getRole, addRole, updateRole, deleteRole } = require("../controllers/role");
const { jwt_verify } = require("../middlewares/jwt");
const router = require("express").Router();

router.get("/", getRole);
router.post("/", jwt_verify, addRole);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);

module.exports = router;
