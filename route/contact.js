"use strict";
const express = require("express");
const Contact = require("../model/Contact.js");
const router = express.Router();

router.get("/", (request, response, next) => {
  response.render("contact.jade", {
    title: "İletişim"
  });
});

router.post("/api", (request, response, next) => {
  const contact = new Contact(request.body);
  const promise = contact.save();
  promise.then(data => {
    response.json(data);
  }).catch(error => {
    response.json(error);
  });
});

router.get("/api", (request, response, next) => {
  const promise = Contact.find({});
  promise.then(data => {
    response.json(data);
  }).catch(error => {
    response.json(error);
  });
});

module.exports = router;