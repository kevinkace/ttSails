// jshint node:true
"use strict";
/**
 * TrickController
 *
 * @description :: Server-side logic for managing tricks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    all : function(req, res) {
        return res.view("trick/all");
    },
    addForm : function(req, res) {
        return res.view("trick/add");
    },
    addPost : function(req, res) {
        return res.badrequest("You shouldnt' reach this point.");
    }
};
