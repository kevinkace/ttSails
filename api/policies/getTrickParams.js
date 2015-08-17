// jshint node:true
/* global sails */

"use strict";

module.exports = function(req, res, next) {

    sails.log("getTrickParams");

    res.params = {};
    res.data = res.data || {};

    if(req.allParams().id === "") {
        res.badRequest("Id was expected but not provided");
    }
    if(req.allParams().ids === "") {
        res.badRequest("Ids were expected but not provided");
    }

    if(req.allParams().ids) {
        // _.set(res, "data.params.ids", ids);
        res.params = {
            ids : req.allParams().ids.split(",")
        };
        return next();
    }

    if(req.allParams().id) {
        // _.set(res, "data.params.id", id);
        res.params = {
            id : req.allParams().id
        };
        return next();
    }

    next();

};
