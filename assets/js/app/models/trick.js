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
    one : function(id) {
        return m.request({
            method : "GET",
            url    : "/tricks/" + id
        }).then(function(value) {
            return value;
        });
    },
    headers : [
        "id",
        "name",
        "createdAt",
        "updatedAt"
    ]
};
