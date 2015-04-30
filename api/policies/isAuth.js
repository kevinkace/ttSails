//jshint node:true
/* global sails */
"use strict";

module.exports = function isAuth(req, res, next) {

    if(false) {
        return res.forbidden("No isAuth()");
    }
    sails.log("authed");
    next();
};
