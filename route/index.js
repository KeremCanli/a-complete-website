"use strict";
const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
  response.render("index.pug", {
    title: "Anasayfa"
  });
});

module.exports = router;