// jshint node:true
/* global*/
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
        },
        rotationValid : function(rotation) {
            return rotation % 90 === 0;
        },
        aliasesValid : function(aliases) {
            return Array.isArray(aliases) && !aliases.some(function(alias) {
                    return !typeof alias === "string";
                });
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
        bodyRotation : {
            type          : "int",
            rotationValid : true
        },
        boardRotation : {
            type          : "int",
            rotationValid : true
        },
        aggregates : {
            collection : "aggregate"
        },
        aliases : {
            type         : "array",
            aliasesValid : true
        }
   }

};
