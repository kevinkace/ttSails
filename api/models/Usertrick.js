// jshint node:true
"use strict";
/**
* Usertrick.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var stance = require("./Stance");

module.exports = {

    migrate : "alter",

    attributes: {
        trick : {
            required : true,
            model    : "trick"
        },
        stance : {
            required : true,
            type     : "string",
            enum     : stance
        },
        users : {
            required   : true,
            collection : "user",
            via        : "usertricks"
        },
        line : {
            model : "line"
        },
        quality : {
            type : "integer"
        }
    }
};
