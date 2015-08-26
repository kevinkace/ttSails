// jshint node:true
/* global m*/
"use strict";

module.exports = {
    all : function() {
        return m.request({
            method : "GET",
            url    : "/tricks"
        });
    },
    one : function() {
        return m.request({
            method : "GET",
            url    : "/tricks/" + this
        });
    },
    headers : [
        "id",
        "name",
        "createdAt",
        "updatedAt"
    ]
};
