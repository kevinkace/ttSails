// jshint node:true
"use strict";
/**
* Trick.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    types : {
        charsValid : function(name) {
            return new RegExp("^[a-zA-Z0-9]+[a-zA-Z0-9 -]*[a-z0-9]+$").test(name);
        }
    },

    migrate : "alter",

    attributes : {
        name : {
            type       : "string",
            required   : true,
            unique     : true,
            charsValid : true
        },
        // components : {
        //     collection : "trick"
        // },
        alias : {
            type : "array"
        }
   }

};
