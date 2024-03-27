const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const routes = require("./routes/api/festivals");
const authRoute = require("./routes/api/auth");

const app = express();

// use cors middleware with origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use routes module as a middleware for /api/festivals path
app.use("/api/festivals", routes);

// AUTH routes
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));