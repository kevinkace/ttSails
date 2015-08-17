// jshint node:true
/* global sails */

"use strict";

module.exports = function(req, res, next) {

    sails.log("addTrickParams");

    res.params = {};
    res.data = res.data || {};

    if(!req.body.name || req.body.name === "") {
        res.badRequest("Name is required");
    } else {
        res.params.name = req.body.name;
    }

    if(req.body.bodyRotation) {
        res.params.bodyRotation = req.body.bodyRotation;
    }
    if(req.body.boardRotation) {
        res.params.boardRotation = req.body.boardRotation;
    }
    if(req.body.aliases) {
        res.params.aliases = req.body.aliases;
    }

    next();

};
