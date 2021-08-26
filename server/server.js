const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const xss = require("xss-clean");
const mongoSanitizie = require("express-mongo-sanitize");
const routes = require("./routes");
const passport = require("passport");
const { jwtStrategy } = require("./middleware/passport");
const { handleError, convertToApiError } = require("./middleware/apiError");

const app = express();

// mongodb+srv://admin:<password>@cluster0.dmquj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// body parse
app.use(express.json());

// sanitize middleware
app.use(xss());
app.use(mongoSanitizie());

// passport
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

// routes
app.use("/api", routes);

// Error API
app.use(convertToApiError);

app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = process.env.PORT || 3001; // environment variable
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

process.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  // some other closing procedures go here
  process.exit(1);
});
