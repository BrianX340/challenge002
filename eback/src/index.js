require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors")
require('./database/db')

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())
app.use('/public', express.static(__dirname.replace('src','public')));

// ENRUTADORES
const authRouter = require("./routes/authRouter");
const devRouter = require("./routes/devRouter");
const apiRouter = require("./routes/apiRouter");
const adminRouter = require("./routes/adminRouter");

// RUTAS
app.use("/", authRouter);
app.use("/dev", devRouter);
app.use("/api", apiRouter);
app.use("/admin", adminRouter);

app.use("/*", (req, res) => {
    res.status(404).json({
        status: 404,
        error: "Not found"
    });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});