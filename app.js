var createError = require("http-errors");
var express = require("express");
var path = require("path");
const session = require("express-session");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./db");
var indexRouter = require("./routes/index");
var adminRouter = require("./routes/admin");
var trackRouter = require("./routes/track");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "shutterbros19",
    resave: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, //24 hour session cookie
    saveUninitialized: false,
  })
);

app.use("/", indexRouter);
app.use("/admin", adminRouter);
app.use("/track", trackRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
