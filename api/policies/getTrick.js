// jshint node:true
/* global sails, Trick, _ */
"use strict";

module.exports = function getTrick(req, res, next) {

    sails.log("getTrick");

    var criteria = {};

    if(res.params.id) {
        criteria = res.params.id;
    } else if(res.params.ids) {
        criteria = _.map(res.params.ids, function(id) {
            return { id : id };
        });
    }


    res.data = res.data || {};

    Trick
    .find(criteria)
    .exec(function(err, tricks) {
        if(err) {
            return res.negotiate(err);
        }

        if(tricks.length < 1) {
            return res.noContent("Trick not found");
        }
        if(res.params.id) {
            res.data.trick = tricks[0];
            next();
        } else {
            res.data.tricks = tricks;
            next();
        }
    });

};
