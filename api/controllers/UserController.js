// jshint node:true
/* global User, sails */
"use strict";
/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */


module.exports = {

    all : function(req, res) {
        User.find().exec(function(err, users) {
            if(err) {
                sails.log.error("err getting users");
                return res.send(400);
            }

            res.users = users;
            return res.view("user/all");
        });
    }

};
