const { Postgres } = require("../server");

const addSignature = async (req, res) => {
	const { signature } = req.body;

	try {
		const newSignature = await Postgres.query(
			'INSERT INTO "signatures" ("user_id", "signature") VALUES ($1, $2) RETURNING *',
			[req.cookies.jwtData.id, signature]
		);

		res.status(200).json({
			success: true,
			message: `Signature enregistrée`,
			data: newSignature.rows[0],
		});
	} catch (err) {
		console.log("Error : ", err);
		res.status(500).json({
			success: false,
			message: err,
		});
	}
};

const getSignature = async (req, res) => {
	try {
		const allSignature = await Postgres.query('SELECT * FROM "signatures"');

		res.status(200).json({
			success: true,
			data: allSignature,
		});
	} catch (err) {
		console.log("Error : ", err);
		res.status(500).json({
			success: false,
			message: err,
		});
	}
};

module.exports = {
	addSignature,
	getSignature,
};
