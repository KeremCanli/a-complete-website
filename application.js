"use strict";
const htppErrors = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
require("./helper/database.js")();
const indexRouter = require("./route/index.js");
const newsRouter = require("./route/news.js");
const referenceRouter = require("./route/reference.js");
const contactRouter = require("./route/contact.js");
const application = express();

// View engine setup.
application.set("views", path.join(__dirname, "view"));
application.set("view engine", "pug");

application.use(morgan("dev"));
application.use(express.json());
application.use(express.urlencoded({
  extended: false
}));
application.use(cookieParser());
application.use(express.static(path.join(__dirname, "public")));
application.use("/", indexRouter);
application.use("/news", newsRouter);
application.use("/reference", referenceRouter);
application.use("/contact", contactRouter);

// Catch 404 and forward to error handler.
application.use((request, response, next) => {
  next(htppErrors(404));
});

// Error handler.
application.use((error, request, response, next) => {
  // Set locals, only providing error in development.
  response.locals.message = error.message;
  response.locals.error = request.application.get("env") === "development" ? error : {};
  // Render the error page.
  response.status(error.status || 500);
  response.render("error.pug");
});

module.exports = application;