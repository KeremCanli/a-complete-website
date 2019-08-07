"use strict";
const express = require("express");
const News = require("../model/News.js");
const router = express.Router();

router.get("/", (request, response, next) => {
  response.render("news.pug", {
    title: "Haberler"
  });
});

router.get("/detail/:id", (request, response, next) => {
  response.render("newsDetail.pug", {
    title: request.params.id + " ID'li Haber"
  });
});

router.post("/api", (request, response, next) => {
  const news = new News(request.body);
  const promise = news.save();
  promise.then(data => {
    response.json(data);
  }).catch(error => {
    response.json(error);
  });
});

router.get("/api", (request, response, next) => {
  const promise = News.find({});
  promise.then(data => {
    response.json(data);
  }).catch(error => {
    response.json(error);
  });
});

router.get("/api/:id", (request, response, next) => {
  const promise = News.findById(request.params.id);
  promise.then(data => {
    response.json(data);
  }).catch(error => {
    response.json(error);
  });
});

router.put("/api/:id", (request, response, next) => {
  const promise = News.findByIdAndUpdate(request.params.id, request.body, {
    new: true
  });
  promise.then(data => {
    response.json(data);
  }).catch(error => {
    response.json(error);
  });
});

router.delete("/api/:id", (request, response, next) => {
  const promise = News.findByIdAndRemove(request.params.id);
  promise.then(data => {
    response.json(data);
  }).catch(error => {
    response.json(error);
  });
});

module.exports = router;