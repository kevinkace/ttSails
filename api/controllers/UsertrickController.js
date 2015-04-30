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
    all : function(req, res) {
        return res.view("usertrick/all");
    },
    addForm : function(req, res) {
        return res.view("usertrick/add", { stance : stance });
    },
    addPost : function(req, res) {
        return res.badRequest("You shouldn't reach this point.");
    }
};
