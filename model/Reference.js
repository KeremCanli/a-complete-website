"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReferenceSchema = new Schema({
        title: {
                type: String,
                required: true
        },
        url: {
                type: String,
                required: true
        }
});

module.exports = mongoose.model("reference", ReferenceSchema);