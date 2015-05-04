// jshint node:true
/* global Trick, sails, _ */
"use strict";
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

        // if(res.data.length) {
        //     res.data = _.first(res.data);
        // }
        return res.view("trick/one");
    },

    editForm : function(req, res) {
        // Trick.find().exec(function findCB(err, one) {
        //     if(err) {
        //         return res.negotiate(err);
        //     }

        // });
        return res.view("trick/edit");
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
        return res.view("trick/one");

    }

};
