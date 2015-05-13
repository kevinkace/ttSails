//jshint browser:true
/*global m, _ */
"use strict";

var sData = {
    thead : [
        "name",
        "alias",
        "aggregates"
    ],
    rows : [
        {
            name : "ollie"
        },
        {
            name : "kickflip bigspin",
            alias : [ "bigspin kickflip", "bigflip" ],
            aggregates : [
                [ 1, 4, 5 ],
                [ 1, 3, 6 ],
                [ 1, 2 ]
            ]
        }
    ]
};


var Tricks = {
    list : function() {
        return m.request({ method : "GET", url : "/trick" });
    }
};

var ShowTrick = {
    controller : function() {
        var tricks = Tricks.list();
        return {
            tricks : tricks
        };
    },
    view : function(ctrl) {
        return m("div",
            ctrl.tricks().map(function(trick) {
                return m("a", { href : "/trick/" + trick.id }, trick.name);
            })
        );
    }
};

m.mount(document.body, ShowTrick);
