// jshint node:true
/* global sails */

"use strict";

module.exports = function(req, res, next) {

    sails.log("params");

    res.params = {};
    res.data = res.data || {};

    if(req.allParams().id === "" || req.allParams().ids === "") {
        res.badRequest("Id not supplied");
    }

    if(req.allParams().ids) {
        // _.set(res, "data.params.ids", ids);
        res.params = {
            ids : req.allParams().ids.split(",")
        };
        next();
    }

    if(req.allParams().id) {
        // _.set(res, "data.params.id", id);
        res.params = {
            id : req.allParams().id
        };
        next();
    }

};
