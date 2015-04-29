// jshint node:true
/**
* Usertrick.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    migrate : "alter",

    attributes: {
        trick : {
            type     : "int",
            required : true
        },
        stance : {
            type     : "string",
            required : true,
            enum : [
                "regular",
                "switch",
                "fakie",
                "nollie"
            ]
        },
        users : {
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
