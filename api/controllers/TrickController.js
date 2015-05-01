// jshint node:true
"use strict";
/* global Trick, sails */
/**
 * TrickController
 *
 * @description :: Server-side logic for managing tricks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    all : function(req, res) {
        Trick.find().exec(function(err, tricks) {
            if(err) {
                return res.negotiate(err);
            }

            res.tricks = tricks;
            return res.view("trick/all");
        });
    },

    one : function(req, res) {
        Trick.find().exec(function(err, one) {
            if(err) {
                return res.negotiate(err);
            }

            return res.view("trick/one", one);
        });
    },

    editForm : function(req, res) {
        Trick.find().exec(function findCB(err, one) {
            if(err) {
                return res.negotiate(err);
            }

            return res.view("trick/edit", one);
        });
    },

    editPost : function(req, res) {
        Trick.update().exec(function updateCB(err, updated) {
            if(err) {
                return res.negotiate(err);
            }

            return res.view("trick/one", updated);
        });
    },

    addForm : function(req, res) {
        return res.view("trick/add");
    },

    addPost : function(req, res) {
        var trick = req.params.all("name");

        // if(req.params.all("components")) {
        //     trick.components = req.params.all("components");
        // }

        // if(req.params.all("alias")) {
        //     trick.alias = req.params.all("alias");
        // }

        sails.log(JSON.stringify(trick));

        Trick.create(trick).exec(function createCB(err, created) {
            if(err) {
                return res.negotiate(err);
            }

            sails.log("trick added?");

            Trick.find().exec(function(err, tricks) {
                if(err) {
                    sails.log.error("err getting tricks");

                    return res.negotiate(err);
                }

                res.tricks = tricks;
                res.trick  = created;
                return res.view("trick/one");
            });

        });

    }

};
