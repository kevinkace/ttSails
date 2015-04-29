//jshint node:true
/* global sails */
"use strict";

module.exports = function isAuth(req, res, next) {
    if(true) {
        sails.log("authed");
        return next();
    }
    return res.forbidden("No isAuth()");
};
