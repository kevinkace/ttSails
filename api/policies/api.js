//jshint node:true
/* global sails */
"use strict";

module.exports = function api(req, res, next) {
    sails.log("api");
    res.wantsJSON = true;
    next();
};
