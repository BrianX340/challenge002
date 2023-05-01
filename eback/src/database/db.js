const mongoose = require("mongoose");
var URI;
URI = process.env.MONGO_URI
URI = URI.replace('DB_NAME', process.env.DB_NAME)
mongoose
	.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
		.then((db) => {
			console.log(`Connected to DB: ${process.env.DB_NAME}`)
		})
			.catch((err) => console.error(err));
