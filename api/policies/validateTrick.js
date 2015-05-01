//jshint node:true
/* global sails */
"use strict";

module.exports = function validateTrick(req, res, next) {

    // Todo: everything

    // trim
    //

    sails.log("trick be valid");
    sails.log(JSON.stringify(req.params.all("name")));

    next();
};
