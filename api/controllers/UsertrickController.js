//jshint node:true
"use strict";
/**
 * UsertrickController
 *
 * @description :: Server-side logic for managing usertricks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var stance = require("./../models/Stance");

module.exports = {
    addTrick : function(req, res) {
        return res.view("user/tricks");
    },
    addTrickForm : function(req, res) {
        return res.view("usertrick/addTrickForm", { stance : stance });
    }

};
