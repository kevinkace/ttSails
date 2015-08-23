// jshint node:true
/* global m */
"use strict";

var Trick = require("../models/trick.js"),
    one   = require("../helpers/one.js");

module.exports = {
    controller : function() {
        var ctrl = {
            tricks : {
                one : function(id) {
                    return Trick.one(id);
                }
            }
        };

        return ctrl;
    },
    view : function(ctrl) {
        var headers = Trick.headers,
            trick   = ctrl.tricks.one(m.route.param("id"));

        return trick ? one(trick, headers) : "No tricks!";
    }
};
