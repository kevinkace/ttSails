//jshint node:true
/* global sails */
"use strict";

module.exports = function log(req, res, next) {
    sails.log("log policy!");
    sails.log(req.param.all("name"));
    next();
};
