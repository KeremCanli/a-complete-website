"use strict";
const express = require("express");
const Reference = require("../model/Reference.js");
const router = express.Router();

router.get("/", (request, response, next) => {
  response.render("reference.jade", {
    title: "Referanslar"
  });
});

router.post("/api", (request, response, next) => {
  const reference = new Reference(request.body);
  const promise = reference.save();
  promise.then(data => {
    response.json(data);
  }).catch(error => {
    response.json(error);
  });
});

router.get("/api", (request, response, next) => {
  const promise = Reference.find({});
  promise.then(data => {
    response.json(data);
  }).catch(error => {
    response.json(error);
  });
});

router.put("/api/:id", (request, response, next) => {
  const promise = Reference.findByIdAndUpdate(request.params.id, request.body, {
    new: true
  });
  promise.then(data => {
    response.json(data);
  }).catch(error => {
    response.json(error);
  });
});

router.delete("/api/:id", (request, response, next) => {
  const promise = Reference.findByIdAndRemove(request.params.id);
  promise.then(data => {
    response.json(data);
  }).catch(error => {
    response.json(error);
  });
});

module.exports = router;