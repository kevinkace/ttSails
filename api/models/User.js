// jshint node:true
/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        email : {
            type : "email",
            required : true
        },
        username : {
            type : "string",
            required : true,
            unique : true,
            size : 24
        }
    }
};
