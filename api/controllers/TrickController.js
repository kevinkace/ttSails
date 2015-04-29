// jshint node:true
"use strict";
/**
 * TrickController
 *
 * @description :: Server-side logic for managing tricks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    tricks : function(req, res) {
        return res.view("tricks");
    },
    addTrick : function(req, res) {
        var trick = {};

        return res.view("trick/add", { trick : trick });
    }
};
