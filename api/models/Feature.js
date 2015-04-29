//jshint node:true
"use strict";
/**
* Feature.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    migrate : "alter",

    attributes : {
        name : {
            type : "string",
            enum : [
                "flat",
                "rail",
                "quarter-pipe",
                "bank",
                "bump-to-bump",
                "euro",
                "ledge",
                "hand-rail",
                "down-bar",
                "hubba",
                "manny-pad",
                "hip"
            ]
        },
        spotfeatures : {
            collection : "spotfeature",
            via        : "feature"
        }
    }
};
