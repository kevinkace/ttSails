// jshint node:true
/* global m */
"use strict";

var Tricks = require("../models/trick.js");

module.exports = {
    controller : function() {
        var ctrl = {
            tricks : {
                all : Tricks.all()
            }
        };

        return ctrl;
    },
    view : function(ctrl) {
        var headers = [],
            tricks  = ctrl.tricks.all();

        return m("",
            tricks && tricks.length > 0 ? m("table.pure-table",
                m("thead",
                    m("tr",
                        m("th", ""),
                        Object.keys(tricks[0]).map(function(header) {
                            headers.push(header);
                            return m("th", header);
                        })
                    )
                ),
                m("tbody",
                    tricks.map(function(trick, idx) {
                        return m("tr",
                            m("td", idx),
                            headers.map(function(header) {
                                return m("th", trick[header]);
                            })
                        );
                    })
                )

            ) : ""
        );
    }
};
