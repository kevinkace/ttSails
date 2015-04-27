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
    showUsers : function(req, res) {
        User.find().exec(function(err, users) {
            sails.log.error("ADHFASDKFAKLSDFJASKLDFJALSKDJFAKLSDJFAKLSDJFALSKDJFALKSJDFASJDKLFASD");
            if(err) {
                sails.log.error("WTF");
                return res.send(400);
            } else {
                return res.view("users", { users : users });
            }
        });
    }
};
