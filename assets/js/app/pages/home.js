// jshint node:true
/* global m */
"use strict";

var Trick = require("../models/trick.js"),
    table = require("../helpers/table.js");

module.exports = {
    controller : function() {
        var ctrl = {
            tricks : {
                all : Trick.all()
            }
        };

        return ctrl;
    },
    view : function(ctrl) {
        var headers = Trick.headers,
            tricks  = ctrl.tricks.all();

        return tricks && tricks.length > 0 ? table(tricks, headers) : "No tricks!";
    }
};
