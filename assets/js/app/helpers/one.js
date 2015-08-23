// jshint node:true
/* global m */
"use strict";

module.exports = function(data, headers) {
    return m("table.pure-table",
        m("thead",
            m("tr",
                m("th", "key"),
                m("th", "value")
            )
        ),
        m("tbody",
            headers.map(function(key) {
                return m("tr",
                    m("td", key),
                    m("td", data[key])
                );
            })
        )
    );
};
