const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const middlewares = require("./utils/middlewares");
const api = require("./api");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`App running on port ${port}`);
});

app.get("/", (req, res) => {
	res.json({
		message: "Express API Template",
	});
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
