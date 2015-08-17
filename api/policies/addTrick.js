// jshint node:true
/* global sails, Trick */
"use strict";

module.exports = function addTrick(req, res, next) {

    var criteria = res.params;//{
    //         name : res.params.name
    //     };

    // if(res.params.bodyRotation) {
    //     criteria.bodyRotation = res.params.bodyRotation;
    // }
    // if(res.params.boardRotation) {
    //     criteria.boardRotation = res.params.boardRotation;
    // }

    Trick
    .create(criteria)
    .exec(function(err, created) {
        if(err) {
            return res.negotiate(err);
        }

        sails.log("trick added");
        res.data = created;
        next();
    });

};
