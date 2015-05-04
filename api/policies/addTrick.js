// jshint node:true
/* global sails, Trick */
"use strict";

module.exports = function addTrick(req, res, next) {
    var trick = req.params.all("name");

    // if(req.params.all("components")) {
    //     trick.components = req.params.all("components");
    // }

    // if(req.params.all("alias")) {
    //     trick.alias = req.params.all("alias");
    // }

    // sails.log(JSON.stringify(trick));

    Trick.create(trick).exec(function createCB(err, created) {
        if(err) {
            return res.negotiate(err);
        }

        sails.log("trick added");
        res.data = created;
        // return res.view("trick/one");
    });

    next();
};
