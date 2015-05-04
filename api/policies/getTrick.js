// jshint node:true
/* global sails, Trick */
"use strict";

module.exports = function getTrick(req, res, next) {
    sails.log("getTrick");

    Trick
    .find(req.params.all("id"))
    .exec(function(err, one) {
        if(err) {
            return res.negotiate(err);
        }

        res.data = _.first(one);

        // sails.log(JSON.stringify(one));

        return next();
    });
};
