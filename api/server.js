const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

// DB
const { Pool } = require("pg");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });

module.exports = { Postgres };

// MIDDLEWARE
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
	})
);
app.use(express.urlencoded({ extended: true }));

app.use((_, res, next) => {
	res.header("Content-Type", "application/json;charset=UTF-8");
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// ROAD
app.use("/api", require("./routes/api.js"));

app.listen(process.env.PORT, async function () {
	console.log(`App listening on port ${process.env.PORT}`);
});
