//jshint node:true
/* global sails */
"use strict";

module.exports = function isTrickValid(req, res, next) {

    // Todo: everything
    sails.log("trick be valid");
    sails.log(JSON.stringify(req.params.all("name")));

    next();
};
