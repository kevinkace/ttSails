//jshint node:true
/* global sails */
"use strict";
module.exports = function isUsertrickValid(req, res, next) {

    // Todo: validation
    // check name and aliases against existing tricks/aliases minus spaces & special chars ("-" whateve)
    // check that all components exist

    var err = {};
    if(false) {
        err.name = false;
    }

    sails.log("trick be valid");


    if(false) {
        return res.view("trick/add", err);
    }

    next();
};
