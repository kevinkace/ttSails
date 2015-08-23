// jshint node:true
/* global m */
"use strict";

module.exports = function(data, headers) {
    return m("table.pure-table",
        m("thead",
            m("tr",
                headers.map(function(header) {
                    return m("th", header);
                })
            )
        ),
        m("tbody",
            data.map(function(row) {
                return m("tr",
                    headers.map(function(header) {
                        return m("td", row[header]);
                    })
                );
            })
        )
    );
};
