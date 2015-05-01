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
                sails.log.error("err getting tricks");

                return res.send(400);
            }

            res.tricks = tricks;
            return res.view("trick/all");
        });
    },

    addForm : function(req, res) {
        return res.view("trick/add");
    },

    addPost : function(req, res) {
        var trick = {
                name : req.params.all("name")
            };

        if(req.params.all("components")) {
            trick.components : req.params.all("components")
        }

        if(req.params.all("alias")) {
            trick.alias : req.params.all("alias")
        }

        Trick.create(trick).exec(function createCB(err, created) {
            if(err) {
                return res.view("trick/add", { err : err });
            }

            Trick.find().exec(function(err, tricks) {
                if(err) {
                    sails.log.error("err getting tricks");

                    return res.send(400);
                }

                res.tricks = tricks;
                res.added  = true;
                return res.view("trick/all");
            });

        });

    }

};
