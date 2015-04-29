//jshint node:true
"use strict";
/**
* Line.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    migrate : "alter",

    attributes : {
        tricks : {
            collection : "usertrick",
            via        : "line"
        },
        users : {
            model : "user"
        }
    }
};
