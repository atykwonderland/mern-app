const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/api/Festivals");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/api/AuthRoutes");

// use the cors middleware with the
// origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the /api/festivals path
app.use("/api/festivals", routes);

// AUTH
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));