// jshint node:true
"use strict";
/**
* Spot.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    types : {
        isPoint : function(geoLocation) {
            return geoLocation.x && geoLocation.y;
        }
    },

    migrate : "alter",

    attributes : {
        name : {
            type     : "string",
            required : true
        },
        features : {
            collection : "spotfeature",
            via        : "spot"
        },
        location : {
            type : "json",
            isPoint : true
        }
    }
};
