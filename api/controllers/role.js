const { Postgres } = require("../server");

const getRole = async (req, res) => {
	try {
		const allRole = await Postgres.query('SELECT * FROM "roles"');
		if (allRole.rows.length === 0) {
			res.status(404).json({
				success: false,
				message: "Nous n'avons pas trouvé l'information demandée",
			});
		}
		res.status(200).json({});
	} catch (err) {
		console.log("Error : ", err);
		res.status(500).json({
			success: false,
			message: err,
		});
	}
};

const addRole = async (req, res) => {
	const { role } = req.body;
	try {
		const newRole = await Postgres.query('INSERT INTO "roles" ("role") VALUES ($1) RETURNING *', [role]);
		console.log("newRole :", newRole);

		res.status(200).json({
			success: true,
			message: `Role créé`,
			data: newRole.rows[0],
		});
	} catch (err) {
		console.log("Error : ", err);
		res.status(500).json({
			success: false,
			message: err,
		});
	}
};

const updateRole = async (req, res) => {
	const { id } = req.params;
	try {
		const updateRole = await Postgres.query("UPDATE ");
	} catch (err) {
		console.log("Error : ", err);
		res.status(500).json({
			success: false,
			message: err,
		});
	}
};

const deleteRole = async (req, res) => {};

module.exports = {
	getRole,
	addRole,
	updateRole,
	deleteRole,
};
