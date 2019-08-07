"use strict";
const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
  response.render("index.jade", {
    title: "Anasayfa"
  });
});

module.exports = router;