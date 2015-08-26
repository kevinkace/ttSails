//jshint node:true
"use strict";

/* app.js
 * Are you looking at the right file?!
 *
 * /assets/js/app.js <- the real deal
 *
 */

var m = window.m = require("./dependencies/mithril/mithril.js"),
    home         = require("./app/pages/home.js"),
    trick        = require("./app/pages/trick.js"),
    addTrick     = require("./app/pages/add-trick.js");

m.route.mode = "pathname";

m.route(document.getElementById("mount"),


    "/",
    {
        "/trick/:id" : trick,
        "/add-trick" : addTrick,
        "/"          : home
    }
);
