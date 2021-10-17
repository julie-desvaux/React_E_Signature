const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Postgres } = require("../server");

const signup = async (req, res) => {
	const { lastname, firstname, email, password } = req.body;
	try {
		const user = await Postgres.query('SELECT * FROM "users" WHERE "email" = $1', [email]);
		if (user.rows.length === 0) {
			const salt = await bcrypt.genSalt(12);
			const bcryptPassword = await bcrypt.hash(password, salt);

			try {
				await Postgres.query(
					'INSERT INTO "users" ("lastname", "firstname", "email", "password") VALUES ($1, $2, $3, $4)',
					[lastname, firstname, email, bcryptPassword]
				);

				res.status(200).json({
					success: true,
					message: `Utilisateur créé`,
				});
			} catch (err) {
				console.log("Error : ", err);
				res.status(500).json({
					success: false,
					message: err,
				});
			}
		} else {
			return res.status(400).json({
				success: false,
				message: "Cet email est déjà associé à un compte utilisateur",
			});
		}
	} catch (err) {
		console.log("catch error: ", err);
		res.status(500).json({
			success: false,
			message: err,
		});
	}
};

const signin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await Postgres.query('SELECT * FROM "users" WHERE email= $1', [email]);

		if (user.rows.length === 0) {
			res.status(401).json({
				message: "Invalid Credential",
			});
		}

		const isValidPassword = await bcrypt.compare(password, user.rows[0].password);

		if (isValidPassword) {
			const now = new Date();
			const infoUser = await Postgres.query('UPDATE "users" SET last_login=$1 WHERE email=$2 RETURNING *', [
				now,
				email,
			]);
			const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET);
			res.cookie("jwt", token, { httpOnly: true, secure: false });
			res.status(200).json({
				success: true,
				message: "Utilisateur connecté",
				data: infoUser.rows[0],
			});
		}
	} catch (err) {
		console.log("signin catch err :", err);
		res.status(500).json({
			success: false,
			message: err,
		});
	}
};

const signout = async (_, res) => {
	res.clearCookie("jwt").status(200).json({
		success: true,
		message: "Utilisateur déconnecté",
	});
};

module.exports = { signin, signup, signout };
